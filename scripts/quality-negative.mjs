import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const root = process.argv[2] ?? 'src';
const directory = join(root, '__quality_negative_fixtures__');
if (existsSync(directory)) throw new Error(`Refusing to overwrite ${directory}`);
mkdirSync(directory);

/** Run the repository's actual analyzer and require the intended diagnostic, not an unrelated setup failure. */
function rejects(command, args, expected) {
  const result = spawnSync(process.execPath, [command, ...args], {
    encoding: 'utf8',
    env: { ...process.env, CI: 'true', ESLINT_SKIP_TYPE_AWARE: 'true' },
  });
  const output = result.stdout + result.stderr;
  assert.notEqual(result.status, 0, 'negative fixture unexpectedly passed');
  assert.match(output, expected, `wrong failure: ${output}`);
}

try {
  const fixture = join(directory, 'unsafe.ts');
  writeFileSync(
    fixture,
    '/** Negative fixture: checks that typed lint cannot be disabled by environment flags. */\nexport function unsafe(value: any) { Promise.resolve(1); return value.field; }\n',
  );
  rejects(
    'tools/quality/node_modules/eslint/bin/eslint.js',
    ['-c', 'eslint.typed.config.mjs', fixture],
    /no-floating-promises/,
  );
  rejects(
    'tools/quality/node_modules/eslint/bin/eslint.js',
    ['-c', 'eslint.typed.config.mjs', fixture],
    /no-unsafe-member-access/,
  );
  for (const [name, next] of [
    ['a', 'b'],
    ['b', 'c'],
    ['c', 'a'],
  ]) {
    writeFileSync(
      join(directory, `${name}.ts`),
      `import { ${next} } from './${next}.js';\nexport const ${name} = () => ${next}();\n`,
    );
  }
  rejects(
    'tools/quality/node_modules/dependency-cruiser/bin/dependency-cruiser.mjs',
    ['--config', '.dependency-cruiser.cjs', directory],
    /no-runtime-cycles/,
  );
  console.log(
    'Negative fixtures reject floating promises, unsafe access, skip flags and a three-edge runtime cycle',
  );
} finally {
  rmSync(directory, { recursive: true, force: true });
}
