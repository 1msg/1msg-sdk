import assert from 'node:assert/strict';
import test from 'node:test';

import { ESLint } from 'eslint';

import { eslintRecords } from '../lib/reports.mjs';

/** Generate real small-fixture diagnostics with low thresholds without changing the shipped policy. */
async function analyze(source, rule = 'complexity', limit = 2) {
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: [
      {
        languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
        rules: { [rule]: ['error', limit] },
      },
    ],
  });
  const reports = await eslint.lintText(source, { filePath: 'fixture.js' });
  assert.equal(reports.length, 1);
  assert.equal(reports[0].fatalErrorCount, 0);
  return reports.map((report) => ({
    ...report,
    filePath: 'fixture.js',
    source,
  }));
}

/** Vary callback bodies while retaining their call site to probe allowance transfer rather than report counts. */
function callback(branches, result = '0') {
  return `(value) => { ${Array.from({ length: branches }, (_, index) => `if (value.p${index}) return ${index + 1};`).join(' ')} return ${result}; }`;
}

/** Resolve the real analyzer report to stable keys, preserving parser and ambiguity failures. */
async function findings(source, rule, limit) {
  return eslintRecords(await analyze(source, rule, limit));
}

/** Variables and object/JSX properties name anonymous callbacks even when their containing call is unchanged. */
test('callback identities retain all named variable and property owners', async () => {
  const before = `const first = wrap(${callback(2)}); const second = wrap(${callback(3)});
    const options = { load: wrap(${callback(2)}), save: wrap(${callback(3)}) };
    const view = <Panel load={wrap(${callback(2)})} save={wrap(${callback(3)})} />;`;
  const original = await findings(before);
  assert.equal(original.length, 6);
  assert.equal(new Set(original.map(({ key }) => key)).size, 6);
  const current = await findings(before.replaceAll(callback(2), callback(0)));
  assert.equal(current.length, 3);
  assert.deepEqual(
    current,
    original.filter(({ value }) => value === 4),
  );
});

/** Method names alone cannot move allowances across class, instance/static, or enclosing function boundaries. */
test('same method and nested function names keep class and function ownership', async () => {
  const before = `class First { handle(value) { if (value.a) return 1; if (value.b) return 2; return 0; }
    static handle(value) { if (value.a) return 1; if (value.b) return 2; if (value.c) return 3; return 0; } }
    class Second { handle(value) { if (value.a) return 1; if (value.b) return 2; if (value.c) return 3; return 0; } }
    function left() { function nested(value) { if (value.a) return 1; if (value.b) return 2; return 0; } return nested; }
    function right() { function nested(value) { if (value.a) return 1; if (value.b) return 2; if (value.c) return 3; return 0; } return nested; }`;
  const original = await findings(before);
  assert.equal(original.length, 5);
  const reduced = before.replaceAll(
    'if (value.a) return 1; if (value.b) return 2; return 0;',
    'return value;',
  );
  assert.deepEqual(
    await findings(reduced),
    original.filter(({ value }) => value === 4),
  );
});

/** The call target and argument index distinguish callbacks without depending on another diagnostic's presence or order. */
test('call targets and argument positions distinguish unnamed callbacks', async () => {
  const source = `left.accept(${callback(2)}, ${callback(3)}); right.accept(${callback(2)});`;
  const report = await analyze(source);
  const original = eslintRecords(report);
  assert.equal(original.length, 3);
  const reordered = report.map((file) => ({
    ...file,
    messages: [...file.messages].reverse(),
  }));
  assert.deepEqual(eslintRecords(reordered), original);
  const reduced = source.replace(
    `left.accept(${callback(2)},`,
    `left.accept(${callback(0)},`,
  );
  assert.deepEqual(
    await findings(reduced),
    original.filter(
      ({ key, value }) => !(key.includes('"left"') && value === 3),
    ),
  );
});

/** Identical caller/name chains require the whole sibling group as evidence, including callbacks currently below the limit. */
test('ambiguous groups cannot borrow another callback body allowance', async () => {
  const before = `run(${callback(5)}); run(${callback(2)});`;
  const oldKeys = new Set((await findings(before)).map(({ key }) => key));
  const after = `run(${callback(0)}); run(${callback(5)});`;
  const current = await findings(after);
  assert.equal(current.length, 1);
  assert.ok(current.every(({ key }) => !oldKeys.has(key)));
  const belowThreshold = `run(${callback(0)}); run(${callback(2)});`;
  const prior = await findings(belowThreshold);
  const changedSibling = await findings(
    `run(${callback(1)}); run(${callback(2)});`,
  );
  assert.notEqual(prior[0].key, changedSibling[0].key);
  const originalOrder = await findings(
    `run(${callback(5)}); run(${callback(0)});`,
  );
  const swappedBodies = await findings(
    `run(${callback(0)}); run(${callback(5)});`,
  );
  assert.notEqual(originalOrder[0].key, swappedBodies[0].key);
});

/** Formatting and comments leave ambiguous syntax fingerprints stable; literal/template/JSX content remains meaningful evidence. */
test('ambiguous fingerprints preserve source semantics and ignore comments', async () => {
  const first = callback(2, '`first ${value.name}`');
  const second = callback(2, '<span>second</span>');
  const source = `run(${first}); run(${second});`;
  const original = await findings(source);
  assert.equal(original.length, 2);
  assert.deepEqual(
    await findings(source.replaceAll('if (', '/* Condition */\nif (')),
    original,
  );
  const changed = await findings(
    source.replace('first ${value.name}', 'changed ${value.name}'),
  );
  assert.ok(
    changed.every(({ key }) => !original.some((entry) => entry.key === key)),
  );
  const jsxChanged = await findings(source.replace('>second<', '>different<'));
  assert.ok(
    jsxChanged.every(({ key }) => !original.some((entry) => entry.key === key)),
  );
});

/** Equal bodies under the same lexical owner have no trustworthy correspondence, and duplicate reports cannot invent an ordinal fallback. */
test('indistinguishable callbacks and duplicate diagnostics fail closed', async () => {
  await assert.rejects(
    () => findings(`run(${callback(2)}); run(${callback(2)});`),
    /Ambiguous lexical scope/,
  );
  const reports = await analyze(`const handler = wrap(${callback(2)});`);
  reports[0].messages.push(reports[0].messages[0]);
  assert.throws(
    () => eslintRecords(reports),
    /Duplicate ESLint diagnostic identity/,
  );
});

/** Separate deep branches have independent syntax owners, so a function cannot lend its deepest block's allowance to another block. */
test('nested depth reports are keyed by syntax instead of diagnostic ordinal', async () => {
  const source =
    'function check(value) { if (value.a) { if (value.b) { if (value.c) return 1; } } if (value.d) { if (value.e) { if (value.f) { if (value.g) return 2; } } } }';
  const records = await findings(source, 'max-depth', 2);
  assert.ok(records.length > 1);
  assert.equal(new Set(records.map(({ key }) => key)).size, records.length);
});

/** Recovered ASTs and missing function locations cannot silently attach findings to file-level debt. */
test('invalid or missing scope evidence fails closed', () => {
  const message = {
    ruleId: 'complexity',
    message: 'Arrow function has a complexity of 3. Maximum allowed is 2.',
    line: 1,
    column: 1,
  };
  assert.throws(
    () =>
      eslintRecords([
        { filePath: 'missing.js', source: '', messages: [message] },
      ]),
    /No lexical scope/,
  );
  assert.throws(
    () =>
      eslintRecords([
        {
          filePath: 'invalid.js',
          source: 'function broken( {',
          messages: [message],
        },
      ]),
    /Invalid syntax/,
  );
});
