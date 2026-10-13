import test from 'node:test';
import assert from 'node:assert/strict';
import { assess, parseJson } from '../lib/baseline.mjs';
import {
  knipRecords,
  duplicateRecords,
  eslintRecords,
  tokenFingerprint,
} from '../lib/reports.mjs';
import { functionsIn, suppressionErrors } from '../lib/guards.mjs';

const owner = {
  owner: 'quality-maintainers',
  reason: 'Existing complexity',
  issue: '1MSG-156',
  expires: '2026-11-12',
};
const baseline = (entries) => ({ schemaVersion: 1, entries });
const allowance = (key, value) => ({ key, value, ...owner });

test('growth cannot be offset by reductions, and reductions retire allowances', () => {
  const old = baseline([allowance('a', 25), allowance('b', 20)]);
  assert.match(
    assess(
      [
        { key: 'a', value: 26 },
        { key: 'b', value: 15 },
      ],
      old,
      old,
      '2026-10-12',
    ).join('\n'),
    /increased/,
  );
  assert.match(
    assess(
      [
        { key: 'a', value: 25 },
        { key: 'b', value: 15 },
      ],
      old,
      old,
      '2026-10-12',
    ).join('\n'),
    /Reduce/,
  );
});

test('new or increased baselines, expiry extensions and stale allowances fail', () => {
  const old = baseline([allowance('a', 25)]);
  const next = baseline([
    { ...allowance('a', 26), expires: '2026-12-12' },
    allowance('new', 1),
  ]);
  const errors = assess(
    [{ key: 'a', value: 26 }],
    next,
    old,
    '2026-10-12',
  ).join('\n');
  assert.match(errors, /expanded/);
  assert.match(errors, /expiry extended/);
  assert.match(errors, /stale/);
  assert.match(assess([], old, old, '2026-12-01').join('\n'), /Expired/);
});

test('empty or malformed analyzer reports are not successful checks', () => {
  assert.throws(() => parseJson('Killed', 'Knip'), /complete JSON/);
  assert.throws(() => knipRecords({}), /schema/);
  assert.throws(
    () =>
      duplicateRecords({
        duplicates: [],
        statistics: { total: { sources: 0 } },
      }),
    /empty/,
  );
  assert.throws(() => eslintRecords([]), /empty/);
});

test('Knip distinguishes unresolved imports, unused dependencies and exported symbols', () => {
  const rows = knipRecords({
    issues: [
      {
        file: 'src/a.ts',
        exports: [{ name: 'thing', line: 3 }],
        unresolved: [{ name: './missing', line: 1 }],
        files: [],
      },
      { file: 'package.json', dependencies: [{ name: 'unused' }] },
    ],
  });
  assert.equal(rows.length, 3);
  assert.ok(rows.some((row) => row.rule === 'unresolved'));
  const moved = knipRecords({
    issues: [{ file: 'src/a.ts', exports: [{ name: 'thing', line: 99 }] }],
  });
  assert.equal(rows.find((row) => row.rule === 'exports').key, moved[0].key);
});

test('duplicate identity ignores line moves but notices additional participants and extended code', () => {
  const clone = {
    format: 'typescript',
    fragment: 'const value = input + 3;',
    tokens: 7,
    firstFile: { name: 'src/a.ts', start: 1, end: 2 },
    secondFile: { name: 'src/b.ts', start: 7, end: 8 },
  };
  const report = (clones) => ({
    duplicates: clones,
    statistics: { total: { sources: 3 } },
  });
  const original = duplicateRecords(report([clone]));
  const moved = duplicateRecords(
    report([
      { ...clone, firstFile: { ...clone.firstFile, start: 9, end: 10 } },
    ]),
  );
  assert.equal(original[0].key, moved[0].key);
  assert.notEqual(
    original[0].key,
    duplicateRecords(
      report([clone, { ...clone, secondFile: { name: 'src/c.ts' } }]),
    )[0].key,
  );
  assert.notEqual(
    original[0].key,
    duplicateRecords(
      report([{ ...clone, fragment: clone.fragment + 'return value;' }]),
    )[0].key,
  );
  assert.equal(
    tokenFingerprint('const a = 1;'),
    tokenFingerprint('/* moved */ const a=1;'),
  );
  assert.notEqual(
    tokenFingerprint('const a="a b";'),
    tokenFingerprint('const a="ab";'),
  );
});

test('documentation covers private methods, arrow helpers and Svelte scripts', () => {
  const source =
    '/** Resolve the current owner. */\nconst owner = () => 1;\nclass Foo {\n/** Release the acquired resource. */\nprivate release() {}\n}';
  const functions = functionsIn('src/a.ts', source);
  assert.equal(functions.length, 2);
  assert.ok(functions.every((fn) => fn.comments.length));
  assert.equal(
    functionsIn(
      'View.svelte',
      '<script lang="ts">function f(): number { return 1; }</script><p>Hi</p>',
    ).length,
    1,
  );
  assert.throws(
    () => functionsIn('broken.ts', 'function f( {'),
    /Cannot parse/,
  );
});

test('documentation fingerprint preserves array holes and changes to callback ownership', () => {
  const signature = (source) => functionsIn('src/a.ts', source)[0].signature;
  assert.equal(
    signature('function f() { return [1]; }'),
    signature('function f() { return [1,]; }'),
  );
  assert.notEqual(
    signature('function f() { return []; }'),
    signature('function f() { return [,]; }'),
  );
  assert.notEqual(
    signature('function f() { return [1]; }'),
    signature('function f() { return [1,,]; }'),
  );
  assert.notEqual(
    functionsIn('src/a.ts', 'first(() => { return 1; });')[0].key,
    functionsIn('src/a.ts', 'second(() => { return 1; });')[0].key,
  );
});

test('whole-file line limits keep their identity when the diagnostic moves between functions', () => {
  const finding = (line) =>
    eslintRecords([
      {
        filePath: 'lib/guards.mjs',
        messages: [
          {
            ruleId: 'max-lines',
            message: 'File has too many lines (600). Maximum allowed is 500.',
            line,
            column: 1,
          },
        ],
      },
    ])[0];
  assert.equal(finding(20).key, 'lib/guards.mjs|max-lines|<file>');
  assert.equal(finding(120).key, finding(20).key);
});

test('suppression gates do not mistake strings for directives', () => {
  assert.equal(
    suppressionErrors('a.ts', 'const example = "// @ts-ignore";', {}).length,
    0,
  );
  assert.equal(
    suppressionErrors('a.ts', '// @ts-nocheck\nexport const a = 1;', {}).length,
    1,
  );
  assert.equal(
    suppressionErrors('a.ts', '/* eslint-disable */\nexport const a = 1;', {})
      .length,
    1,
  );
  assert.equal(
    suppressionErrors(
      'a.ts',
      '// eslint-disable-next-line no-alert -- Temporary browser compatibility\nalert(1);',
      {},
    ).length,
    0,
  );
  assert.equal(
    suppressionErrors(
      'a.ts',
      '// @ts-expect-error: Verify rejected primitive input\nf(1);',
      {},
    ).length,
    1,
  );
  assert.equal(
    suppressionErrors(
      'negative.test.ts',
      '// @ts-expect-error: Verify rejected primitive input\nf(1);',
      { negativeTypeTests: ['*.test.ts'] },
    ).length,
    0,
  );
});

/** Formatting within template expressions and a chained call must not invent a new function or callback. */
test('documentation identities preserve template-expression context and stable call chains', () => {
  const before =
    'describe("groupIntoBlocks",()=>{it("splits a parent",()=>{const value=Array.from({length:3},(_,i)=>({key:`p.k${i}`,text:`Text ${i}`}));return value;});});';
  const after =
    "describe('groupIntoBlocks', () => {\n it('splits a parent', () => {\n const value = Array.from({length:3}, (_, i) => ({\n key: `p.k${i}`,\n text: `Text ${i}`,\n })); return value;\n });\n});";
  const identity = (source) =>
    functionsIn('src/a.ts', source).map(({ key, signature }) => ({
      key,
      signature,
    }));
  assert.deepEqual(identity(before), identity(after));
  assert.notDeepEqual(
    identity(before),
    identity(before.replace('Text ${i}', 'Different ${i}')),
  );
  const chained = 'prefetch({ value: 1 }).catch(() => { recover(); });';
  const documented =
    'prefetch({ /** Explain the input. */ value: 1, }).catch(() => { recover(); });';
  assert.deepEqual(identity(chained), identity(documented));
  assert.notDeepEqual(
    identity(chained),
    identity(chained.replace('prefetch', 'send')),
  );
});
