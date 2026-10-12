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

/** Equal statements under distinct lexical loop bindings are independently addressable even when only one is over threshold. */
test('loop headers distinguish nesting and callback owners without body ordinals', async () => {
  const source = `function collect(root) {
    for (const ack of root.ack) { const item = record(ack); if (item) found.push(statusEvent(item)); }
    for (const entry of root.entry) { for (const change of entry.changes) {
      for (const status of change.statuses) { const item = record(status); if (item) found.push(statusEvent(item)); }
    } }
  }`;
  const original = await findings(source, 'max-depth', 3);
  assert.equal(original.length, 1);
  assert.equal(original[0].value, 4);
  assert.deepEqual(
    await findings(
      source.replace('const ack', '/* Header documentation */ const ack'),
      'max-depth',
      3,
    ),
    original,
  );
  const callbacks = `for (const ack of root.ack) { run(${callback(2)}); }
    for (const status of root.statuses) { run(${callback(2)}); }
    for (const key in root.properties) { run(${callback(2)}); }
    for (let index = 0; index < root.length; index++) { run(${callback(2)}); }`;
  const owned = await findings(callbacks);
  assert.equal(owned.length, 4);
  assert.equal(new Set(owned.map(({ key }) => key)).size, 4);
  const asynchronous = await findings(
    `for await (const ack of root.ack) { run(${callback(2)}); }`,
  );
  assert.equal(asynchronous.length, 1);
  assert.ok(!owned.some(({ key }) => key === asynchronous[0].key));
  const shifted = await findings(
    callbacks.replace('const ack of root.ack', 'const other of root.ack'),
  );
  assert.equal(
    shifted.filter(({ key }) => !owned.some((old) => old.key === key)).length,
    1,
  );
});

/** Repeated loops with identical headers remain ambiguous; distinct bindings must never enable ordinal-based allowance borrowing. */
test('identical loop bindings do not disambiguate indistinguishable callbacks', async () => {
  const loop = `for (const item of root.items) { run(${callback(2)}); }`;
  await assert.rejects(() => findings(loop + loop), /Ambiguous lexical scope/);
});

/** Equal try blocks in text/document template branches need their differing surrounding branch bodies as evidence. */
test('identical scopes use the nearest distinguishing structural branch context', async () => {
  const source = `function templates(root) {
    while (root.ready) { if (root.templates) { for (const template of root.templates) {
      if (match) { if (template.rejected) { try { send(template); } catch (error) { record(error); } } else { saveText(template); } }
      if (match) { if (template.rejected) { try { send(template); } catch (error) { record(error); } } else { saveDocument(template); } }
    } } }
  }`;
  const records = await findings(source, 'max-depth', 3);
  assert.ok(records.some(({ key }) => key.includes('context-group:')));
  assert.equal(new Set(records.map(({ key }) => key)).size, records.length);
  const callbacks = `if (ready) { run(${callback(2)}); } else { run(${callback(2)}); }
    try { run(${callback(2)}); } catch (error) { run(${callback(2)}); } finally { run(${callback(2)}); }
    switch (kind) { case 'first': run(${callback(2)}); break; case 'second': run(${callback(2)}); break; default: run(${callback(2)}); }
    while (active) { run(${callback(2)}); }
    do { run(${callback(2)}); } while (active);`;
  const owned = await findings(callbacks);
  assert.equal(owned.length, 10);
  assert.equal(new Set(owned.map(({ key }) => key)).size, 10);
  assert.deepEqual(
    await findings(
      callbacks.replaceAll('run(', '/* Branch documentation */ run('),
    ),
    owned,
  );
});

/** Identical branches and predicates provide no trustworthy address merely because they appear at different source offsets. */
test('identical structural ancestry still fails closed', async () => {
  const branch = `if (ready) { run(${callback(2)}); }`;
  await assert.rejects(
    () => findings(branch + branch),
    /Ambiguous lexical scope/,
  );
});

/** ESLint names object-property callbacks at the property token, which precedes the actual function start. */
test('object property diagnostics resolve only their direct callable initializer', async () => {
  for (const fn of [
    `async ${callback(2)}`,
    'async function(value) { if (value.p0) return 1; if (value.p1) return 2; return 0; }',
  ]) {
    const source = `const endpoints = { handler: ${fn}, unrelated: 1 };`;
    const report = await analyze(source);
    assert.equal(report[0].messages[0].column, source.indexOf('handler') + 1);
    const records = eslintRecords(report);
    assert.equal(records.length, 1);
    assert.match(records[0].key, /handler/);
    assert.deepEqual(
      await findings(source.replace('handler:', 'handler: /* Contract */')),
      records,
    );
    for (const column of [
      source.indexOf('handler:') + 'handler'.length + 1,
      source.indexOf('unrelated') + 1,
    ]) {
      assert.throws(
        () =>
          eslintRecords([
            {
              filePath: 'invalid-location.js',
              source,
              messages: [
                {
                  ruleId: 'complexity',
                  line: 1,
                  column,
                  message: 'Function has a complexity of 4.',
                },
              ],
            },
          ]),
        /No lexical scope/,
      );
    }
  }
  assert.throws(
    () =>
      eslintRecords([
        {
          filePath: 'invalid-location.js',
          source: 'const settings = { threshold: 5 };',
          messages: [
            {
              ruleId: 'complexity',
              line: 1,
              column: 20,
              message: 'Function has a complexity of 4.',
            },
          ],
        },
      ]),
    /No lexical scope/,
  );
});

/** An object callback diagnostic inside another function must not consume that enclosing function's complexity allowance. */
test('object callbacks retain their own budget inside enclosing functions', async () => {
  const source = `function useCheckout() { return useMutation({ onError: ${callback(2)} }); }`;
  const report = await analyze(source);
  assert.equal(report[0].messages.length, 1);
  const record = eslintRecords(report)[0];
  assert.match(record.scope, /PropertyAssignment.*onError.*ArrowFunction/);
  assert.equal(record.value, 3);
});
