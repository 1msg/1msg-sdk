import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs';

const sample = 'typescript/src/generated/src/runtime.ts';
const original = readFileSync(sample);
const extra = 'typescript/src/generated/src/__untracked_quality_fixture__.ts';
if (existsSync(extra)) throw new Error('Refusing to overwrite existing drift fixture');
/** Require the actual pinned regeneration check to reject an output inventory mutation. */
function rejects() {
  const result = spawnSync(process.execPath, ['quality/generator/generate.mjs'], {
    encoding: 'utf8',
    timeout: 120000,
  });
  assert.notEqual(result.status, 0, 'Generated drift unexpectedly passed');
  assert.match(result.stdout + result.stderr, /Generated SDK drift/);
}
try {
  writeFileSync(sample, Buffer.concat([original, Buffer.from('\n// Unexpected generated edit\n')]));
  rejects();
  rmSync(sample);
  rejects();
  writeFileSync(sample, original);
  writeFileSync(extra, '// Unexpected generated addition\n');
  rejects();
} finally {
  writeFileSync(sample, original);
  rmSync(extra, { force: true });
}
console.log('Actual regeneration rejects modified, deleted and untracked output');
