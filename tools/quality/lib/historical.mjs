import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { execute, git } from './git.mjs';
import picomatch from 'picomatch';

/** Omit only new entry/project targets that cannot exist in the historical source being measured. */
function historicalPatterns(value, prefix, currentPaths, basePaths) {
  const patterns = typeof value === 'string' ? [value] : value;
  if (!Array.isArray(patterns)) return value;
  return patterns.filter((pattern) => {
    if (typeof pattern !== 'string' || pattern.startsWith('!')) return true;
    const match = picomatch(
      join(prefix, pattern.replace(/!$/, '')).replaceAll('\\', '/'),
      { dot: true },
    );
    return (
      basePaths.some((path) => match(path)) ||
      !currentPaths.some((path) => match(path))
    );
  });
}

/** Keep current Knip policy but remove newly introduced tooling-only roots from historical coverage. */
function prepareHistoricalKnip(path, currentPaths, basePaths) {
  if (!path.endsWith('.json') || !existsSync(path)) return;
  const config = JSON.parse(readFileSync(path, 'utf8'));
  // The sealed vendor snapshot is new during initial adoption. Its current-only
  // import roots are removed below, so this exact exemption would otherwise be stale.
  if (
    !basePaths.some((path) => path.startsWith('tools/quality/')) &&
    Array.isArray(config.ignore)
  ) {
    config.ignore = config.ignore.filter(
      (pattern) => pattern !== 'tools/quality/**',
    );
  }
  const scopes = [['.', config], ...Object.entries(config.workspaces ?? {})];
  for (const [prefix, scope] of scopes) {
    if (!scope || typeof scope !== 'object') continue;
    for (const key of ['entry', 'project']) {
      if (scope[key])
        scope[key] = historicalPatterns(
          scope[key],
          prefix,
          currentPaths,
          basePaths,
        );
    }
  }
  writeFileSync(path, `${JSON.stringify(config, null, 2)}\n`);
}

/** Re-run the same analyzer against trusted source with the newly adopted analysis configuration. */
export function historicalAnalysis(base, config, templateDirectory, analyze) {
  const current = process.cwd();
  const snapshot = mkdtempSync(join(tmpdir(), '1msg-quality-base-'));
  const archiveDirectory = mkdtempSync(join(tmpdir(), '1msg-quality-archive-'));
  try {
    const archivePath = join(archiveDirectory, 'source.tar');
    const archive = execute('git', [
      'archive',
      '--format=tar',
      '--output',
      archivePath,
      base,
    ]);
    if (archive.status !== 0)
      throw new Error(`Cannot read trusted source: ${archive.stderr}`);
    const extract = execute('tar', ['-xf', archivePath, '-C', snapshot]);
    if (extract.status !== 0)
      throw new Error(`Cannot unpack trusted source: ${extract.stderr}`);
    const paths = git(['ls-files', '-co', '--exclude-standard', '-z'])
      .split('\0')
      .filter(Boolean);
    const basePaths = git(['ls-tree', '-r', '--name-only', '-z', base])
      .split('\0')
      .filter(Boolean);
    // Some legacy multi-package repos adopt their first root manifest with the quality tooling.
    // Findings on this new manifest still cannot become debt: initialEvidence requires a base file.
    if (
      !existsSync(join(snapshot, 'package.json')) &&
      existsSync('package.json')
    ) {
      cpSync('package.json', join(snapshot, 'package.json'));
    }
    const configuration = paths.filter((path) =>
      /(?:^|\/)(?:eslint(?:\.[\w-]+)?\.config\.[cm]?js|dependency-cruiser(?:\.[\w-]+)?\.config\.[cm]?js|tsconfig(?:\.[\w-]+)?\.json|quality\.config\.mjs)$/.test(
        path,
      ),
    );
    configuration.push(config.knipConfig ?? 'knip.json');
    for (const path of new Set(configuration)) {
      if (!existsSync(path)) continue;
      mkdirSync(dirname(join(snapshot, path)), { recursive: true });
      cpSync(path, join(snapshot, path));
    }
    prepareHistoricalKnip(
      join(snapshot, config.knipConfig ?? 'knip.json'),
      paths,
      basePaths,
    );
    // Dependencies are analyzer inputs; historical application source always comes from Git above.
    const packages = new Set([
      '.',
      ...paths.filter((path) => path.endsWith('/package.json')).map(dirname),
    ]);
    for (const path of packages) {
      const modules = resolve(current, path, 'node_modules');
      const destination = join(snapshot, path, 'node_modules');
      if (!existsSync(modules) || existsSync(destination)) continue;
      mkdirSync(dirname(destination), { recursive: true });
      symlinkSync(modules, destination, 'dir');
    }
    const destination = join(snapshot, 'tools/quality');
    rmSync(destination, { recursive: true, force: true });
    mkdirSync(dirname(destination), { recursive: true });
    symlinkSync(templateDirectory, destination, 'dir');
    process.chdir(snapshot);
    const historicalConfig = {
      ...config,
      duplicatePaths: config.duplicatePaths?.filter((path) => existsSync(path)),
    };
    return analyze(historicalConfig);
  } finally {
    process.chdir(current);
    rmSync(snapshot, { recursive: true, force: true });
    rmSync(archiveDirectory, { recursive: true, force: true });
  }
}
