import assert from 'node:assert/strict';
import { test } from 'node:test';

import ts from '../../tools/quality/node_modules/typescript/lib/typescript.js';
import { normalizeOptionalProperties } from './exact-optional.mjs';

/** Guard AST transform scope and idempotence, including callbacks and nested interface properties. */
test('optional declarations retain runtime expressions and required contracts', () => {
  const input =
    'interface Model { required: string; optional?: string; callback?: (value: string) => void; pre?(value: string): Promise<void>; nested?: { value?: number }; existing?: boolean | undefined; }\nconst runtime = { required: "yes" };';
  const output = normalizeOptionalProperties(input, 'fixture.ts');
  assert.match(output, /required: string/);
  assert.match(output, /optional\?: \(string\) \| undefined/);
  assert.match(output, /callback\?: \(\(value: string\) => void\) \| undefined/);
  assert.match(output, /pre\?: \(\(value: string\) => Promise<void>\) \| undefined/);
  assert.match(output, /const runtime = \{ required: "yes" \};/);
  assert.equal(normalizeOptionalProperties(output, 'fixture.ts'), output);
  const parsed = ts.createSourceFile('fixture.ts', output, ts.ScriptTarget.Latest, true);
  assert.equal(parsed.parseDiagnostics.length, 0);
});
