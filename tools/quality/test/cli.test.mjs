import { templateFiles } from '../lib/template.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  mkdtempSync,
  mkdirSync,
  writeFileSync,
  rmSync,
  cpSync,
  readFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const runner = fileURLToPath(new URL('../run.mjs', import.meta.url));

/** Create a real Git fixture so CLI tests exercise trusted base and working-tree changes together. */
function fixture() {
  const cwd = mkdtempSync(join(tmpdir(), '1msg-quality-test-'));
  mkdirSync(join(cwd, 'src'));
  writeFileSync(
    join(cwd, 'package.json'),
    '{"name":"quality-fixture","private":true,"type":"module"}\n',
  );
  writeFileSync(
    join(cwd, 'quality.config.mjs'),
    `export default {
    schemaVersion:1,profile:'A',defaultBranch:'main',sourceRoots:['src','quality.config.mjs'],
    knipConfig:'knip.json',duplicatePaths:['src'],duplicateMaxPercentage:100
  };\n`,
  );
  writeFileSync(
    join(cwd, 'knip.json'),
    JSON.stringify({ entry: ['src/index.js!'], project: ['src/**/*.js!'] }),
  );
  const git = (...args) => {
    const result = spawnSync('git', args, { cwd, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    return result.stdout.trim();
  };
  git('init', '-b', 'main');
  git('config', 'user.email', 'quality@example.invalid');
  git('config', 'user.name', 'Quality fixture');
  const commit = () => {
    git('add', '.');
    git('commit', '-m', 'test: fixture');
    return git('rev-parse', 'HEAD');
  };
  const run = (...args) =>
    spawnSync(process.execPath, [runner, ...args], {
      cwd,
      encoding: 'utf8',
      env: { ...process.env, CI: '', QUALITY_BASE: undefined },
      timeout: 60_000,
      maxBuffer: 16 * 1024 * 1024,
    });
  return {
    cwd,
    git,
    commit,
    run,
    write: (path, text) => writeFileSync(join(cwd, path), text),
    close: () => rmSync(cwd, { recursive: true, force: true }),
  };
}

test('real CLI blocks undocumented new functions, broad suppression and uncovered files', () => {
  const f = fixture();
  try {
    f.write('src/index.js', 'console.log("app");\n');
    const base = f.commit();
    assert.equal(f.run('guards', '--base', base).status, 0);
    f.write(
      'src/index.js',
      'function createWidget() { return 2; }\nconsole.log(createWidget());\n',
    );
    assert.match(
      f.run('guards', '--base', base).stderr,
      /document createWidget/,
    );
    f.write(
      'src/index.js',
      '/** Construct the default widget. */\nfunction createWidget() { return 2; }\nconsole.log(createWidget());\n',
    );
    assert.equal(f.run('guards', '--base', base).status, 0);
    f.write('src/index.js', '// @ts-nocheck\nconsole.log("app");\n');
    assert.match(f.run('guards', '--base', base).stderr, /broad lint/);
    f.write('rogue.js', 'console.log("forgotten");\n');
    assert.match(
      f.run('guards', '--base', base).stderr,
      /no declared source root/,
    );
    assert.notEqual(f.run('guards', '--base', 'missing-ref').status, 0);
  } finally {
    f.close();
  }
});

test('actual Knip CLI blocks an unused file and unresolved import', () => {
  const f = fixture();
  try {
    f.write('src/index.js', 'console.log("app");\n');
    const base = f.commit();
    assert.equal(f.run('unused-full', '--base', base).status, 0);
    f.write('src/forgotten.js', 'export const value = 42;\n');
    const unused = f.run('unused-full', '--base', base);
    assert.equal(unused.status, 1, unused.stderr);
    assert.match(unused.stderr, /forgotten/);
    f.write(
      'src/index.js',
      'import value from "./missing.js"; console.log(value);\n',
    );
    assert.match(
      f.run('unused-production', '--base', base).stderr,
      /unresolved/,
    );
  } finally {
    f.close();
  }
});

test('documentation survives formatting and unrelated callback removal, but new copies still require docs', () => {
  const f = fixture();
  try {
    f.write(
      'src/index.js',
      `
      run(() => { return {name: "removed"}; });
      run(() => { return {name: "retained"}; });
      function load(value) { return request(value, {name: "widget"}); }
    `,
    );
    const base = f.commit();
    f.write(
      'src/index.js',
      `
      run(() => { return {name: 'retained',}; });
      function load(value,) { return request(value, {name: 'widget',},); }
    `,
    );
    const formatted = f.run('guards', '--base', base);
    assert.equal(formatted.status, 0, formatted.stderr);
    f.write(
      'src/index.js',
      `
      run(() => { return {name: 'retained',}; });
      run(() => { return {name: 'retained',}; });
      function load(value,) { return request(value, {name: 'widget',},); }
    `,
    );
    const duplicated = f.run('guards', '--base', base);
    assert.equal(duplicated.status, 1, duplicated.stderr);
    assert.match(duplicated.stderr, /document <callback>/);
  } finally {
    f.close();
  }
});

test('actual jscpd CLI blocks a new clone even with unrelated unique lines', () => {
  const f = fixture();
  try {
    const source = `export function summarize(values) {
      const result = [];
      for (const value of values) {
        const normalized = String(value).trim();
        if (normalized.length > 0) {
          result.push({ value: normalized, length: normalized.length });
        }
      }
      return result.sort((left, right) => left.length - right.length);
    }\n`;
    f.write('src/index.js', source);
    const base = f.commit();
    const clean = f.run('duplicates', '--base', base);
    assert.equal(clean.status, 0, clean.stderr);
    f.write(
      'src/copy.js',
      source + '\nexport const unrelated = "extra unique content";\n',
    );
    const duplicated = f.run('duplicates', '--base', base);
    assert.equal(duplicated.status, 1, duplicated.stderr);
    assert.match(duplicated.stderr, /New or increased/);
  } finally {
    f.close();
  }
});

test('Knip production rejects runtime code referenced only from tests while full accepts it', () => {
  const f = fixture();
  try {
    f.write(
      'knip.json',
      JSON.stringify({
        entry: ['src/index.js!', 'test.js'],
        project: ['src/**/*.js!', 'test.js'],
      }),
    );
    f.write('src/index.js', 'console.log("app");\n');
    f.write('src/helper.js', 'export const value = 42;\n');
    f.write(
      'test.js',
      'import { value } from "./src/helper.js"; console.log(value);\n',
    );
    const base = f.commit();
    const full = f.run('unused-full', '--base', base);
    assert.equal(full.status, 0, full.stderr);
    const production = f.run('unused-production', '--base', base);
    assert.equal(production.status, 1, production.stderr);
    assert.match(production.stderr, /helper/);
  } finally {
    f.close();
  }
});

test('initial debt is replayed against trusted source, including edited files and newly disconnected imports', () => {
  const f = fixture();
  const bootstrap = [
    '--bootstrap',
    '--owner',
    'quality',
    '--expires',
    '2099-01-01',
    '--reason',
    'historical fixture debt',
    '--issue',
    'TEST-1',
  ];
  try {
    f.write(
      'src/index.js',
      'import { value } from "./helper.js"; console.log(value);\n',
    );
    f.write('src/helper.js', 'export const value = 42;\n');
    f.write('src/forgotten.js', 'export const oldDebt = 1;\n');
    const base = f.commit();
    f.write('src/forgotten.js', 'export const oldDebt = 2;\n');
    f.write('new-tool.mjs', 'console.log(123);');
    f.write(
      'knip.json',
      JSON.stringify({
        entry: ['src/index.js!', 'new-tool.mjs'],
        project: ['src/**/*.js!', 'new-tool.mjs'],
      }),
    );
    const historical = f.run('unused-full', '--base', base, ...bootstrap);
    assert.equal(historical.status, 0, historical.stderr);
    f.write('src/index.js', 'console.log("now disconnected");\n');
    const newDebt = f.run('unused-full', '--base', base, ...bootstrap);
    assert.equal(newDebt.status, 1, newDebt.stderr);
    assert.match(
      newDebt.stderr,
      /Cannot baseline a new\/increased finding.*helper/,
    );
  } finally {
    f.close();
  }
});

test('jscpd preserves multiple source roots and enforces its numeric ceiling', () => {
  const f = fixture();
  try {
    mkdirSync(join(f.cwd, 'runtime'));
    const source = `export function summarize(values) {
      const result = [];
      for (const value of values) {
        const normalized = String(value).trim();
        if (normalized.length > 0) result.push({ value: normalized, length: normalized.length });
      }
      return result.sort((left, right) => left.length - right.length);
    }\n`;
    f.write('src/index.js', source);
    f.write('runtime/copy.js', source);
    f.write(
      'quality.config.mjs',
      `export default { schemaVersion:1,profile:'A',sourceRoots:['src','runtime'],
      duplicatePaths:['src','runtime'],duplicateMaxPercentage:100 };`,
    );
    const base = f.commit();
    const bootstrap = [
      '--bootstrap',
      '--owner',
      'quality',
      '--expires',
      '2099-01-01',
      '--reason',
      'historical fixture debt',
      '--issue',
      'TEST-1',
    ];
    const accepted = f.run('duplicates', '--base', base, ...bootstrap);
    assert.equal(accepted.status, 0, accepted.stderr);
    f.write(
      'quality.config.mjs',
      `export default { schemaVersion:1,profile:'A',sourceRoots:['src','runtime'],
      duplicatePaths:['src','runtime'],duplicateMaxPercentage:0 };`,
    );
    const percentage = f.run('duplicates', '--base', base);
    assert.equal(percentage.status, 1, percentage.stderr);
    assert.match(percentage.stderr, /Duplicate percentage/);
  } finally {
    f.close();
  }
});

test('actual dependency-cruiser detects a long runtime cycle and refuses native I/O debt', () => {
  const f = fixture();
  const executable = fileURLToPath(
    new URL(
      '../node_modules/dependency-cruiser/bin/dependency-cruiser.mjs',
      import.meta.url,
    ),
  );
  const command = [
    '--',
    process.execPath,
    executable,
    'src',
    '--config',
    'dependency-cruiser.config.cjs',
    '--output-type',
    'json',
  ];
  try {
    f.write(
      'dependency-cruiser.config.cjs',
      `module.exports = { forbidden: [
      {name:'no-runtime-cycles',severity:'error',from:{},to:{circular:true,dependencyTypesNot:['type-only']}},
      {name:'application-no-native-io',severity:'error',from:{path:'src'},to:{dependencyTypes:['core']}},
    ] };`,
    );
    f.write('src/index.js', 'import "./second.js"; console.log("one");\n');
    f.write('src/second.js', 'import "./third.js"; console.log("two");\n');
    f.write('src/third.js', 'console.log("three");\n');
    const base = f.commit();
    const clean = f.run(
      'report',
      '--kind',
      'depcruiser',
      '--base',
      base,
      ...command,
    );
    assert.equal(clean.status, 0, clean.stderr);
    f.write('src/third.js', 'import "./index.js"; console.log("three");\n');
    const cycle = f.run(
      'report',
      '--kind',
      'depcruiser',
      '--base',
      base,
      ...command,
    );
    assert.equal(cycle.status, 1, cycle.stderr);
    assert.match(cycle.stderr, /no-runtime-cycles/);
    f.write('src/third.js', 'import fs from "node:fs"; console.log(fs);\n');
    const native = f.run(
      'report',
      '--kind',
      'depcruiser',
      '--base',
      base,
      '--bootstrap',
      '--owner',
      'quality',
      '--expires',
      '2099-01-01',
      '--reason',
      'cannot bless native dependency',
      '--issue',
      'TEST-1',
      ...command,
    );
    assert.equal(native.status, 1, native.stderr);
    assert.match(native.stderr, /Non-baselinable architecture/);
  } finally {
    f.close();
  }
});

test('vendored exemption rejects unregistered and modified template files', () => {
  const f = fixture();
  try {
    f.write('src/index.js', 'console.log("app");\n');
    const base = f.commit();
    const template = fileURLToPath(new URL('..', import.meta.url));
    for (const path of [...templateFiles(template), 'template-manifest.json']) {
      const destination = join(f.cwd, 'tools/quality', path);
      mkdirSync(dirname(destination), { recursive: true });
      cpSync(join(template, path), destination);
    }
    const clean = f.run('guards', '--base', base);
    assert.equal(clean.status, 0, clean.stderr);
    f.write('tools/quality/hidden.js', 'export const hidden = 1;');
    assert.match(f.run('guards', '--base', base).stderr, /undeclared/);
    rmSync(join(f.cwd, 'tools/quality/hidden.js'));
    f.write('tools/quality/README.md', 'unreviewed mutation');
    assert.match(f.run('guards', '--base', base).stderr, /integrity mismatch/);
  } finally {
    f.close();
  }
});

/** Real embedded Svelte clones keep language identity but historical evidence belongs to their physical component. */
test('jscpd Svelte fragments bootstrap existing clones and reject another participant', () => {
  const f = fixture();
  try {
    const component = `<script>
      export function summarize(values) {
        const result = [];
        for (const value of values) {
          const normalized = String(value).trim();
          if (normalized.length > 0) {
            result.push({ value: normalized, length: normalized.length });
          }
        }
        return result.sort((left, right) => left.length - right.length);
      }
    </script>
    <p>Summary</p>\n`;
    f.write('src/First.svelte', component);
    f.write('src/Second.svelte', component);
    const base = f.commit();
    const accepted = f.run(
      'duplicates',
      '--base',
      base,
      '--bootstrap',
      '--owner',
      'quality',
      '--expires',
      '2099-01-01',
      '--reason',
      'historical Svelte fixture debt',
      '--issue',
      'TEST-1',
    );
    assert.equal(accepted.status, 0, accepted.stderr);
    const report = JSON.parse(
      readFileSync(join(f.cwd, 'quality/reports/duplicates.json'), 'utf8'),
    );
    assert.ok(
      report.findings.some((finding) =>
        finding.participants?.some((path) =>
          path.endsWith('.svelte:javascript'),
        ),
      ),
    );
    assert.ok(
      report.findings.every((finding) =>
        finding.paths.every((path) => path.endsWith('.svelte')),
      ),
    );
    f.write('src/Third.svelte', component);
    const expanded = f.run('duplicates', '--base', base);
    assert.equal(expanded.status, 1, expanded.stderr);
    assert.match(expanded.stderr, /New or increased/);
  } finally {
    f.close();
  }
});

/** Only the new sealed vendor exemption is omitted from historical graphs; authored stale ignores still fail. */
test('historical Knip removes a current-only exact vendor ignore without relaxing authored coverage', () => {
  const f = fixture();
  try {
    f.write('src/index.js', 'console.log("app");\n');
    f.write('src/forgotten.js', 'export const historicalDebt = 1;\n');
    const base = f.commit();
    const template = fileURLToPath(new URL('..', import.meta.url));
    for (const path of [...templateFiles(template), 'template-manifest.json']) {
      const destination = join(f.cwd, 'tools/quality', path);
      mkdirSync(dirname(destination), { recursive: true });
      cpSync(join(template, path), destination);
    }
    f.write(
      'quality.mjs',
      'import { record } from "./tools/quality/lib/baseline.mjs"; console.log(record("example"));\n',
    );
    const config = {
      entry: ['src/index.js!', 'quality.mjs'],
      project: ['src/**/*.js!', '**/*.mjs'],
      ignore: ['tools/quality/**'],
    };
    f.write('knip.json', JSON.stringify(config));
    const accepted = f.run(
      'unused-full',
      '--base',
      base,
      '--bootstrap',
      '--owner',
      'quality',
      '--expires',
      '2099-01-01',
      '--reason',
      'historical source debt',
      '--issue',
      'TEST-1',
    );
    assert.equal(accepted.status, 0, accepted.stderr);
    config.ignore.push('src/missing/**');
    f.write('knip.json', JSON.stringify(config));
    const invalid = f.run('unused-full', '--base', base);
    assert.equal(invalid.status, 1, invalid.stderr);
    assert.match(invalid.stderr, /stale exclusion failure.*src\/missing/);
  } finally {
    f.close();
  }
});
