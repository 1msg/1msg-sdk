import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import test from 'node:test';

const sourceRoot = 'typescript/src';
const runtimeFile = 'typescript/src/__quality_extension_runtime.ts';
const testFile = 'typescript/src/__tests__/__quality_extension_runtime.test.ts';

/** Read actual Knip file diagnostics; a malformed report or tool failure cannot masquerade as coverage. */
function unusedFiles(production) {
  const result = spawnSync(
    process.execPath,
    [
      'tools/quality/node_modules/knip/bin/knip.js',
      '--config',
      'knip.config.mjs',
      '--reporter',
      'json',
      '--no-config-hints',
      '--no-progress',
      '--include',
      'files',
      ...(production ? ['--production'] : []),
    ],
    { encoding: 'utf8', timeout: 60_000, maxBuffer: 16 * 1024 * 1024 },
  );
  assert.equal(result.signal, null, String(result.error ?? result.stderr));
  assert.equal(
    result.status,
    1,
    `Unused probes must fail Knip: ${result.stdout}\n${result.stderr}`,
  );
  const report = JSON.parse(result.stdout);
  assert.ok(Array.isArray(report.issues), result.stdout);
  const files = new Set();
  for (const issue of report.issues) for (const entry of issue.files ?? []) files.add(entry.name);
  return files;
}

/** Create an isolated test dependency without changing existing entry files or executing the candidate modules. */
function createTestDependency() {
  for (const file of [runtimeFile, testFile]) {
    assert.equal(existsSync(file), false, `Refusing to overwrite ${file}`);
    mkdirSync(dirname(file), { recursive: true });
  }
  const target = './' + relative(dirname(testFile), runtimeFile).replaceAll('\\', '/');
  if (runtimeFile.endsWith('.cjs')) {
    writeFileSync(runtimeFile, 'module.exports = { onlyInTests: 1 };\n');
    writeFileSync(
      testFile,
      `const { onlyInTests } = require('${target}');\nconsole.log(onlyInTests);\n`,
    );
  } else {
    writeFileSync(runtimeFile, 'export const onlyInTests = 1;\n');
    writeFileSync(
      testFile,
      `import { onlyInTests } from '${target}';\nconsole.log(onlyInTests);\n`,
    );
  }
}

/** New extensions enter both inventories, while a runtime module reachable only from a test remains unused in production. */
test('Knip inventories authored extensions without treating tests as production entries', () => {
  const directory = join(sourceRoot, '__quality_extension_inventory__');
  assert.equal(existsSync(directory), false, `Refusing to overwrite ${directory}`);
  assert.equal(existsSync(runtimeFile), false, `Refusing to overwrite ${runtimeFile}`);
  assert.equal(existsSync(testFile), false, `Refusing to overwrite ${testFile}`);
  mkdirSync(directory);
  const files = ['js', 'jsx', 'mjs', 'cjs', 'ts', 'tsx', 'mts', 'cts'].map((extension) =>
    join(directory, `unused-${extension}.${extension}`),
  );
  try {
    for (const file of files)
      writeFileSync(
        file,
        file.endsWith('.cjs')
          ? 'module.exports = { unusedExtensionProbe: 1 };\n'
          : 'export const unusedExtensionProbe = 1;\n',
      );
    createTestDependency();
    for (const production of [false, true]) {
      const reported = unusedFiles(production);
      for (const file of files)
        assert.ok(
          reported.has(file.replaceAll('\\', '/')),
          `${production ? 'production' : 'full'} omitted ${file}`,
        );
      assert.equal(
        reported.has(runtimeFile),
        production,
        `Test-only runtime dependency ${runtimeFile} must be reachable only in the full graph`,
      );
    }
  } finally {
    rmSync(directory, { recursive: true, force: true });
    rmSync(runtimeFile, { force: true });
    rmSync(testFile, { force: true });
  }
});
