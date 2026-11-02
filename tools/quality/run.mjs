#!/usr/bin/env node
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  mkdtempSync,
  rmSync,
} from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import {
  execute,
  baseRef,
  baseFile,
  currentFile,
  git,
  changedFiles,
} from './lib/git.mjs';
import { assess, parseJson } from './lib/baseline.mjs';
import { runGuards, validateConfig } from './lib/guards.mjs';
import {
  knipRecords,
  duplicateRecords,
  eslintRecords,
  architectureRecords,
  tokenFingerprint,
} from './lib/reports.mjs';
import { historicalAnalysis } from './lib/historical.mjs';

const directory = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const action = args[0];

/** Read an option without treating subsequent flags as values. */
function option(name, fallback) {
  const position = args.indexOf(name);
  if (position < 0) return fallback;
  const value = args[position + 1];
  if (!value || value.startsWith('--'))
    throw new Error(`Missing value for ${name}`);
  return value;
}

/** Record analyzer exit state together with the report; non-diagnostic exits always fail. */
function analyze(command, argv, name) {
  const result = execute(command, argv);
  if (![0, 1].includes(result.status))
    throw new Error(`${name} failed (${result.status}): ${result.stderr}`);
  if (result.stderr.trim()) process.stderr.write(result.stderr);
  return { status: result.status, report: parseJson(result.stdout, name) };
}

/** Run Knip's actual production or full graph with its independent config and JSON reporter. */
function unused(config, production) {
  const argv = [
    join(directory, 'node_modules/knip/bin/knip.js'),
    '--config',
    config.knipConfig ?? 'knip.json',
    '--reporter',
    join(directory, 'lib/knip-reporter.mjs'),
  ];
  if (production) argv.push('--production');
  const { report } = analyze(process.execPath, argv, 'Knip');
  return { findings: knipRecords(report), report };
}

/** Run duplicate analysis into a fresh temporary directory, rejecting empty or missing output. */
function duplicates(config) {
  if (!config.duplicatePaths?.length)
    throw new Error('duplicatePaths must list authored runtime/tooling roots');
  if (config.duplicateCanonicalFormat) {
    const { report } = analyze(
      process.execPath,
      [join(directory, 'canonical-duplicates.mjs'), JSON.stringify(config)],
      'Canonical jscpd',
    );
    return { findings: duplicateRecords(report), report };
  }
  const output = mkdtempSync(join(tmpdir(), '1msg-jscpd-'));
  try {
    const argv = [
      join(directory, 'node_modules/jscpd/run-jscpd.js'),
      ...config.duplicatePaths,
      '--reporters',
      'json',
      '--output',
      output,
      '--mode',
      'mild',
      '--min-lines',
      '5',
      '--min-tokens',
      '50',
      '--silent',
      '--absolute',
      '--format',
      (
        config.duplicateFormats ?? [
          'javascript',
          'typescript',
          'jsx',
          'tsx',
          'svelte',
        ]
      ).join(','),
    ];
    if (config.duplicateIgnore?.length)
      argv.push('--ignore', config.duplicateIgnore.join(','));
    const result = execute(process.execPath, argv);
    if (result.status !== 0)
      throw new Error(
        `jscpd failed (${result.status}): ${result.stderr || result.stdout}`,
      );
    const report = parseJson(
      readFileSync(join(output, 'jscpd-report.json'), 'utf8'),
      'jscpd',
    );
    return { findings: duplicateRecords(report), report };
  } finally {
    rmSync(output, { recursive: true, force: true });
  }
}

/** Confirm initial allowances describe existing source; freshly introduced problems cannot be bootstrapped. */
function initialEvidence(finding, base, historical) {
  const prior = historical.find((item) => item.key === finding.key);
  if (!prior || finding.value > prior.value)
    throw new Error(`Cannot baseline a new/increased finding: ${finding.key}`);
  const evidence = {};
  for (const path of finding.paths ?? [finding.path]) {
    if (!path) throw new Error(`Finding lacks source evidence: ${finding.key}`);
    const before = baseFile(base, path);
    const current = currentFile(path);
    if (before === null || current === null)
      throw new Error(`Cannot baseline a new/missing file: ${path}`);
    if (path.endsWith('package.json') && finding.symbol) {
      const old = JSON.parse(before);
      const dependencies = {
        ...old.dependencies,
        ...old.devDependencies,
        ...old.optionalDependencies,
      };
      evidence[path] =
        finding.symbol in dependencies
          ? `dependency:${finding.symbol}:${dependencies[finding.symbol]}`
          : tokenFingerprint(before);
    } else {
      evidence[path] = tokenFingerprint(before);
    }
  }
  return evidence;
}

/** Write explicit historical allowances locally, then validate the same artifact as CI. */
function bootstrap(findings, path, base, historical) {
  if (process.env.CI) throw new Error('Baseline bootstrap is forbidden in CI');
  const owner = option('--owner');
  const expires = option('--expires');
  const reason = option('--reason');
  const issue = option('--issue');
  if (!owner || !expires || !reason || !issue)
    throw new Error(
      'Bootstrap requires --owner, --expires, --reason and --issue',
    );
  const entries = findings.map((finding) => ({
    ...finding,
    owner,
    expires,
    reason,
    issue,
    evidence: initialEvidence(finding, base, historical),
  }));
  const baseline = { schemaVersion: 1, adoptionBase: base, entries };
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(baseline, null, 2)}\n`);
  return baseline;
}

/** Ratchet individual debt against trusted Git history, including reductions and expired allowances. */
function gate(config, name, result, base, analyzeBase) {
  if (!/^[a-z][a-z0-9-]*$/.test(name)) throw new Error('Invalid gate name');
  const path = `${config.baselineDir ?? 'quality/baselines'}/${name}.json`;
  const raw = currentFile(path);
  const old = baseFile(base, path);
  const previous = old === null ? null : parseJson(old, 'trusted baseline');
  const historical =
    previous || result.findings.length === 0
      ? []
      : historicalAnalysis(base, config, directory, analyzeBase).findings;
  const baseline = args.includes('--bootstrap')
    ? bootstrap(result.findings, path, base, historical)
    : raw === null
      ? { schemaVersion: 1, entries: [] }
      : parseJson(raw, 'baseline');
  if (!previous && baseline.entries.length) {
    if (baseline.adoptionBase !== base)
      throw new Error('Initial baseline is not tied to the trusted base SHA');
    for (const entry of baseline.entries) {
      if (
        JSON.stringify(entry.evidence) !==
        JSON.stringify(initialEvidence(entry, base, historical))
      ) {
        throw new Error(`Initial baseline evidence changed: ${entry.key}`);
      }
    }
  }
  const errors = assess(result.findings, baseline, previous);
  if (name === 'duplicates') {
    if (
      !Number.isFinite(config.duplicateMaxPercentage) ||
      config.duplicateMaxPercentage < 0 ||
      config.duplicateMaxPercentage > 100
    ) {
      throw new Error(
        'duplicateMaxPercentage must specify the inventoried numeric ceiling (0–100)',
      );
    }
    const percentage = result.report.statistics.total.percentage;
    if (!Number.isFinite(percentage))
      throw new Error('jscpd omitted its numeric duplicate percentage');
    if (percentage > config.duplicateMaxPercentage)
      errors.push(
        `Duplicate percentage ${percentage} exceeds ${config.duplicateMaxPercentage}`,
      );
  }
  mkdirSync('quality/reports', { recursive: true });
  writeFileSync(
    `quality/reports/${name}.json`,
    `${JSON.stringify(
      {
        schemaVersion: 1,
        head: git(['rev-parse', 'HEAD']).trim(),
        base,
        result: errors.length ? 'FAIL' : 'PASS',
        findings: result.findings,
        errors,
        analyzer: result.report,
      },
      null,
      2,
    )}\n`,
  );
  if (errors.length) throw new Error(errors.join('\n'));
  console.log(
    `${name}: PASS (${result.findings.length} existing, individually tracked violations)`,
  );
}

/** Dispatch one mandatory check; unsupported actions or missing configuration never count as success. */
async function main() {
  const config = (
    await import(pathToFileURL(resolve('quality.config.mjs')).href)
  ).default;
  validateConfig(config);
  const base = baseRef(
    config.defaultBranch,
    option('--base', process.env.QUALITY_BASE),
  );
  if (action === 'changed-files') {
    console.log(JSON.stringify(changedFiles(base)));
    return;
  }
  if (action === 'guards') {
    const result = runGuards(config, base);
    if (result.errors.length) throw new Error(result.errors.join('\n'));
    console.log(
      `guards: PASS (${result.checked} authored source files inventoried)`,
    );
    return;
  }
  if (['unused-production', 'unused-full'].includes(action)) {
    const analyzeBase = (sourceConfig) =>
      unused(sourceConfig, action === 'unused-production');
    gate(config, action, analyzeBase(config), base, analyzeBase);
    return;
  }
  if (action === 'duplicates') {
    gate(config, action, duplicates(config), base, duplicates);
    return;
  }
  if (action === 'duplicates-full') {
    if (!config.duplicateFullPaths?.length)
      throw new Error(
        'duplicateFullPaths must inventory runtime, tests and tooling',
      );
    const result = duplicates({
      ...config,
      duplicatePaths: config.duplicateFullPaths,
      duplicateIgnore:
        config.duplicateFullIgnore ??
        (config.generated ?? []).map((entry) => entry.pattern),
    });
    mkdirSync('quality/reports', { recursive: true });
    writeFileSync(
      'quality/reports/duplicates-full.json',
      `${JSON.stringify(
        {
          schemaVersion: 1,
          head: git(['rev-parse', 'HEAD']).trim(),
          base,
          result: 'REPORT',
          ...result,
        },
        null,
        2,
      )}\n`,
    );
    console.log(
      `duplicates-full: analyzed ${result.report.statistics.total.sources} files; report saved`,
    );
    return;
  }
  if (action === 'report' && option('--kind') === 'eslint') {
    const split = args.indexOf('--');
    if (split < 0 || !args[split + 1])
      throw new Error('report requires -- <command> <arguments>');
    const analyzeBase = () => {
      const { report } = analyze(
        args[split + 1],
        args.slice(split + 2),
        'ESLint',
      );
      return { findings: eslintRecords(report), report };
    };
    gate(
      config,
      option('--name', 'complexity'),
      analyzeBase(),
      base,
      analyzeBase,
    );
    return;
  }
  if (action === 'report' && option('--kind') === 'depcruiser') {
    const split = args.indexOf('--');
    if (split < 0 || !args[split + 1])
      throw new Error('report requires -- <command> <arguments>');
    const analyzeBase = () => {
      const result = execute(args[split + 1], args.slice(split + 2));
      const report = parseJson(result.stdout, 'dependency-cruiser');
      if (
        !Number.isInteger(report.summary?.advisedExitCode) ||
        (result.status !== 0 &&
          result.status !== report.summary.advisedExitCode % 256)
      ) {
        throw new Error(
          `dependency-cruiser exit/report mismatch (${result.status}): ${result.stderr}`,
        );
      }
      return { findings: architectureRecords(report), report };
    };
    gate(
      config,
      option('--name', 'architecture'),
      analyzeBase(),
      base,
      analyzeBase,
    );
    return;
  }
  throw new Error(`Unknown quality action: ${action}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
