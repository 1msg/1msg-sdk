import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';

import ts from '../../tools/quality/node_modules/typescript/lib/typescript.js';
import { postProcessExactOptionalSdk } from './exact-optional.mjs';

/** Guard AST transform scope and idempotence, including callbacks and nested interface properties. */
test('optional declarations retain runtime expressions and required contracts', (t) => {
  const input =
    'interface Model { required: string; optional?: string; callback?: (value: string) => void; pre?(value: string): Promise<void>; nested?: { value?: number }; existing?: boolean | undefined; }\nconst runtime = { required: "yes" };';
  const directory = mkdtempSync(join(tmpdir(), '1msg-exact-optional-'));
  /** This test owns its temporary generator output; always remove it after assertions or failures. */
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  mkdirSync(join(directory, 'src'));
  const fixture = join(directory, 'src/fixture.ts');
  writeFileSync(fixture, input);
  writeFileSync(
    join(directory, 'src/runtime.ts'),
    '            credentials: this.configuration.credentials,',
  );
  postProcessExactOptionalSdk(directory);
  const output = readFileSync(fixture, 'utf8');
  assert.match(output, /required: string/);
  assert.match(output, /optional\?: \(string\) \| undefined/);
  assert.match(output, /callback\?: \(\(value: string\) => void\) \| undefined/);
  assert.match(output, /pre\?: \(\(value: string\) => Promise<void>\) \| undefined/);
  assert.match(output, /const runtime = \{ required: "yes" \};/);
  postProcessExactOptionalSdk(directory);
  assert.equal(readFileSync(fixture, 'utf8'), output);
  const parsed = ts.createSourceFile('fixture.ts', output, ts.ScriptTarget.Latest, true);
  assert.equal(parsed.parseDiagnostics.length, 0);
});
