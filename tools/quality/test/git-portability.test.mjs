import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { fileURLToPath, pathToFileURL } from 'node:url';

/** Re-run both real Git fixture families under an old-Git command boundary; no successful Git operation is substituted. */
test('Git fixtures retain real history when git init does not support branch flags', () => {
  const cwd = mkdtempSync(join(tmpdir(), 'quality-old-git-'));
  const log = join(cwd, 'git-calls.jsonl');
  const shim = join(cwd, 'reject-new-git-flags.mjs');
  // A Node preload avoids Unix executable/shebang assumptions and affects only this test's child processes.
  writeFileSync(
    shim,
    `
import childProcess from 'node:child_process';
import { appendFileSync } from 'node:fs';
import { syncBuiltinESMExports } from 'node:module';
const actualSpawnSync = childProcess.spawnSync;
childProcess.spawnSync = function(command, args = [], options) {
  if (command === 'git') {
    appendFileSync(process.env.QUALITY_PORTABILITY_LOG, JSON.stringify(args) + '\\n');
    if (args[0] === 'init' && args.some((arg) => arg.startsWith('-b') || arg === '--initial-branch' || arg.startsWith('--initial-branch='))) {
      return actualSpawnSync(process.execPath, ['-e', 'process.stderr.write("fixture: git init branch flags are unavailable\\\\n"); process.exit(97)'], options);
    }
  }
  return actualSpawnSync(command, args, options);
};
syncBuiltinESMExports();
`,
  );
  const env = {
    ...process.env,
    NODE_OPTIONS: `${process.env.NODE_OPTIONS ?? ''} --import=${pathToFileURL(shim).href}`,
    QUALITY_PORTABILITY_LOG: log,
  };
  // This is an independent runner, not a child shard controlled by the outer Node test harness.
  delete env.NODE_TEST_CONTEXT;
  try {
    // Prove the child-process boundary actually rejects the formerly required invocation.
    const unsupported = spawnSync(
      process.execPath,
      [
        '--input-type=module',
        '-e',
        `
      import { spawnSync } from 'node:child_process';
      const result = spawnSync('git', ['init', '-b', 'main'], {encoding:'utf8'});
      process.stderr.write(result.stderr ?? '');
      process.exit(result.status ?? 1);
    `,
      ],
      { cwd, env, encoding: 'utf8' },
    );
    assert.equal(unsupported.status, 97, unsupported.stderr);
    assert.match(unsupported.stderr, /branch flags are unavailable/);
    const template = fileURLToPath(new URL('..', import.meta.url));
    const result = spawnSync(
      process.execPath,
      [
        '--test',
        '--test-reporter=tap',
        '--test-name-pattern=real CLI blocks undocumented|actual guards require all current docs',
        join(template, 'test/cli.test.mjs'),
        join(template, 'test/guard-history.test.mjs'),
      ],
      {
        cwd: template,
        env,
        encoding: 'utf8',
        timeout: 60_000,
        maxBuffer: 8 * 1024 * 1024,
      },
    );
    assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`);
    assert.match(result.stdout, /# pass 2\b/);
    assert.match(result.stdout, /# fail 0\b/);
    const calls = readFileSync(log, 'utf8')
      .trim()
      .split('\n')
      .map((line) => JSON.parse(line));
    assert.equal(
      calls.filter((args) => JSON.stringify(args) === '["init"]').length,
      2,
    );
    assert.equal(
      calls.filter(
        (args) =>
          JSON.stringify(args) === '["symbolic-ref","HEAD","refs/heads/main"]',
      ).length,
      2,
    );
    assert.ok(calls.some((args) => args[0] === 'commit'));
    assert.ok(calls.some((args) => args[0] === 'show'));
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
});
