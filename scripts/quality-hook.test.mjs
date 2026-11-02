import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import {
  chmodSync,
  statSync,
  copyFileSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import test from 'node:test';

const repository = resolve('.');
const configuration = {
  source: 'typescript/src',
  tooling: 'scripts',
  typed: true,
  files: [
    'package.json',
    'quality.config.mjs',
    '.husky/pre-commit',
    'eslint.config.mjs',
    'eslint.static.config.mjs',
    'eslint.typed.config.mjs',
    'eslint.hook.config.mjs',
    'tsconfig.json',
    'tsconfig.quality.json',
    'prettier.config.mjs',
    '.prettierrc',
    '.prettierrc.json',
    '.prettierrc.js',
    '.prettierignore',
    'typescript/tsconfig.json',
    'typescript/tsconfig.quality.json',
  ],
  links: ['node_modules', 'tools/quality'],
};

/** Run the real hook tools with an isolated Git identity and bounded child lifetime. */
function command(root, program, args) {
  const env = {
    ...process.env,
    HUSKY: '1',
    GIT_CONFIG_NOSYSTEM: '1',
    GIT_CONFIG_GLOBAL: process.platform === 'win32' ? 'NUL' : '/dev/null',
  };
  for (const key of Object.keys(env))
    if (key.startsWith('GIT_') && !['GIT_CONFIG_NOSYSTEM', 'GIT_CONFIG_GLOBAL'].includes(key))
      delete env[key];
  const result = spawnSync(program, args, {
    cwd: root,
    env,
    encoding: 'utf8',
    timeout: 60_000,
    maxBuffer: 8 * 1024 * 1024,
  });
  assert.equal(
    result.signal,
    null,
    `Fixture must finish by diagnostics: ${result.error ?? result.stderr}`,
  );
  return result;
}

/** Preserve full diagnostics when setup or a corrected commit unexpectedly fails. */
function successful(root, program, args) {
  const result = command(root, program, args);
  assert.equal(
    result.status,
    0,
    `${program} ${args.join(' ')}\n${result.stdout}\n${result.stderr}`,
  );
  return result.stdout.trim();
}

/** Copy production configuration and install the actual executable hook without borrowing the user's Git settings. */
function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), '1msg-hook-extensions-'));
  /** Remove only this disposable checkout after all real commit attempts finish. */
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const file of configuration.files) {
    if (!existsSync(join(repository, file))) continue;
    mkdirSync(dirname(join(root, file)), { recursive: true });
    copyFileSync(join(repository, file), join(root, file));
  }
  for (const directory of configuration.links) {
    mkdirSync(dirname(join(root, directory)), { recursive: true });
    symlinkSync(join(repository, directory), join(root, directory), 'dir');
  }
  const actualPackage = JSON.parse(readFileSync(join(repository, 'package.json'), 'utf8'));
  writeFileSync(join(root, 'package.json'), JSON.stringify(actualPackage));
  successful(root, 'git', ['init', '--quiet']);
  successful(root, 'git', ['config', 'user.name', 'Quality fixture']);
  successful(root, 'git', ['config', 'user.email', 'quality-fixture@example.invalid']);
  successful(root, 'git', [
    '-c',
    'commit.gpgsign=false',
    'commit',
    '--quiet',
    '--allow-empty',
    '-m',
    'fixture setup',
  ]);
  chmodSync(join(root, '.husky/pre-commit'), 0o755);
  successful(root, process.execPath, ['tools/quality/node_modules/husky/bin.js']);
  assert.equal(successful(root, 'git', ['config', '--local', 'core.hooksPath']), '.husky/_');
  assert.ok(statSync(join(root, '.husky/_/pre-commit')).mode & 0o111);
  return root;
}

/** Stage normalized fixture text so the intended lint rule, rather than unrelated formatting, refuses the commit. */
function stage(root, files, source) {
  for (const file of files) {
    mkdirSync(dirname(join(root, file)), { recursive: true });
    writeFileSync(join(root, file), source);
  }
  successful(root, process.execPath, [
    'tools/quality/node_modules/prettier/bin/prettier.cjs',
    '--write',
    ...files,
  ]);
  successful(root, 'git', ['add', '--', ...files]);
}

/** A rejected commit must retain HEAD and identify every tested extension, preventing one covered file from masking an ignored peer. */
function rejected(root, files, diagnostic) {
  const head = successful(root, 'git', ['rev-parse', 'HEAD']);
  const result = command(root, 'git', [
    '-c',
    'commit.gpgsign=false',
    'commit',
    '--quiet',
    '-m',
    'reject invalid authored extensions',
  ]);
  const output = `${result.stdout}\n${result.stderr}`.replaceAll('\\', '/');
  assert.notEqual(result.status, 0, output);
  assert.match(output, diagnostic);
  for (const file of files) {
    const sections = output.split(/\n\s*\n/).filter((section) => section.includes(file));
    assert.ok(
      sections.some((section) => diagnostic.test(section)),
      `Missing intended diagnostic for ${file}:\n${output}`,
    );
  }
  assert.equal(successful(root, 'git', ['rev-parse', 'HEAD']), head);
  successful(root, 'git', ['reset', '--quiet', 'HEAD', '--', ...files]);
  for (const file of files) rmSync(join(root, file));
}

/** Exercise actual commits for all authored extensions; strict TS boundaries additionally require their configured program. */
test('installed pre-commit covers JavaScript and TypeScript extensions', (t) => {
  const root = fixture(t);
  /** Keep fixture paths inside the actual source program and give each extension its own diagnostic. */
  const paths = (extensions) =>
    extensions.map((extension) => `${configuration.source}/hook-${extension}.${extension}`);
  const javascript = paths(['js', 'jsx', 'mjs', 'cjs']);
  const typescript = paths(['ts', 'tsx', 'mts', 'cts']);
  stage(
    root,
    javascript,
    'const value = process.env.HOOK_FIXTURE_VALUE;\nconsole.log(value == 1);\n',
  );
  rejected(root, javascript, /eqeqeq/);
  stage(
    root,
    typescript,
    '/** Preserve the supplied untrusted value. */\nexport function same(value: any) { return value; }\n',
  );
  rejected(
    root,
    typescript,
    configuration.typed ? /no-explicit-any/ : /TypeScript requires a configured strict program/,
  );
  if (configuration.typed) {
    const boundaries = [...typescript, `${configuration.tooling}/hook-tooling.mts`];
    stage(
      root,
      boundaries,
      '/** Decode external text without trusting its shape. */\nexport function decode(text: string): string { return JSON.parse(text); }\n',
    );
    rejected(root, boundaries, /no-unsafe-return/);
    stage(
      root,
      boundaries,
      '/** Return the supplied typed value unchanged. */\nexport function identity(value: string): string { return value; }\n',
    );
  }
  stage(
    root,
    javascript,
    'const value = process.env.HOOK_FIXTURE_VALUE;\nconsole.log(value === 1);\n',
  );
  successful(root, 'git', [
    '-c',
    'commit.gpgsign=false',
    'commit',
    '--quiet',
    '-m',
    'accept corrected authored extensions',
  ]);
});
