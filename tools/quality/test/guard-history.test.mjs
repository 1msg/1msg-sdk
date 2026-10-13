import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const runner = fileURLToPath(new URL('../run.mjs', import.meta.url));

/** Build independent Git history so the actual CLI must distinguish trusted historical syntax from current source failures. */
function fixture() {
  const cwd = mkdtempSync(join(tmpdir(), 'quality-guard-history-'));
  const env = { ...process.env, CI: '', QUALITY_BASE: undefined };
  for (const name of Object.keys(env)) {
    if (name.startsWith('GIT_')) delete env[name];
  }
  env.GIT_CONFIG_GLOBAL = process.platform === 'win32' ? 'NUL' : '/dev/null';
  env.GIT_CONFIG_NOSYSTEM = '1';
  mkdirSync(join(cwd, 'src'));
  writeFileSync(
    join(cwd, 'quality.config.mjs'),
    "export default {schemaVersion:1,profile:'B',defaultBranch:'main',sourceRoots:['src','quality.config.mjs']};\n",
  );
  const git = (...args) => {
    const result = spawnSync('git', args, { cwd, env, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    return result.stdout.trim();
  };
  git('init');
  git('symbolic-ref', 'HEAD', 'refs/heads/main');
  git('config', 'user.name', 'Quality fixture');
  git('config', 'user.email', 'quality@example.invalid');
  return {
    cwd,
    write: (text) => writeFileSync(join(cwd, 'src/Widget.svelte'), text),
    commit: () => {
      git('add', '.');
      git('commit', '-m', 'test: historical syntax');
      return git('rev-parse', 'HEAD');
    },
    run: (base) =>
      spawnSync(process.execPath, [runner, 'guards', '--base', base], {
        cwd,
        env,
        encoding: 'utf8',
        timeout: 30_000,
      }),
    close: () => rmSync(cwd, { recursive: true, force: true }),
  };
}

test('actual guards require all current docs after unparseable trusted Svelte history', () => {
  const f = fixture();
  try {
    // Historical markup embeds script text in a JavaScript template; the old script extractor cannot parse that extra unit.
    f.write(
      '<script>function stable() { return 1; } function changed() { return 2; }</script>\n<button on:click={() => copy(`<script>let value = ${JSON.stringify({ x: 1 })};</script>`)}>Copy</button>',
    );
    const base = f.commit();
    f.write(
      '<script>function stable() { return 1; } function changed() { return 3; }</script>\n<p>Readable widget</p>',
    );
    const undocumented = f.run(base);
    assert.notEqual(undocumented.status, 0);
    assert.match(undocumented.stderr, /document stable/);
    assert.match(undocumented.stderr, /document changed/);
    assert.doesNotMatch(undocumented.stderr, /Cannot parse/);

    f.write(
      '<script>\n/** Return the unchanged widget identifier. */\nfunction stable() { return 1; }\n/** Return the newly selected widget version. */\nfunction changed() { return 3; }\n</script>\n<p>Readable widget</p>',
    );
    const documented = f.run(base);
    assert.equal(documented.status, 0, documented.stderr);
    assert.match(documented.stdout, /guards: PASS/);

    f.write('<script>function stable( { return 1; }</script>');
    const invalidCurrent = f.run(base);
    assert.notEqual(invalidCurrent.status, 0);
    assert.match(invalidCurrent.stderr, /Cannot parse src\/Widget\.svelte/);

    const invalidBase = f.run('nonexistent-trusted-reference');
    assert.notEqual(invalidBase.status, 0);
    assert.match(invalidBase.stderr, /git rev-parse failed/);
  } finally {
    f.close();
  }
});

test('historical fallback does not consume source I/O or configuration failures', () => {
  const f = fixture();
  try {
    f.write('<script>function stable( { return 1; }</script>');
    const base = f.commit();
    rmSync(join(f.cwd, 'src/Widget.svelte'));
    mkdirSync(join(f.cwd, 'src/Widget.svelte'));
    const invalidInput = f.run(base);
    assert.notEqual(invalidInput.status, 0);
    assert.match(
      invalidInput.stderr,
      /EISDIR|illegal operation on a directory/,
    );

    writeFileSync(
      join(f.cwd, 'quality.config.mjs'),
      'export default {schemaVersion:1,profile:"unknown",sourceRoots:["src"]};',
    );
    const invalidConfig = f.run(base);
    assert.notEqual(invalidConfig.status, 0);
    assert.match(invalidConfig.stderr, /concrete profile/);
  } finally {
    f.close();
  }
});
