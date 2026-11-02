import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import {
  mkdtempSync,
  writeFileSync,
  readFileSync,
  rmSync,
  symlinkSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';

import ts from 'typescript';

/** Run the shipped CLI against a disposable source file with real maintainability rules. */
function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'canonical-complexity-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const preset = new URL('../eslint.mjs', import.meta.url).href;
  writeFileSync(
    join(root, 'eslint.config.mjs'),
    `import { maintainabilityConfig, tseslint } from '${preset}'; export default [{languageOptions:{parser:tseslint.parser}}, ...maintainabilityConfig()];`,
  );
  const cli = join(root, 'quality-complexity.mjs');
  symlinkSync(
    fileURLToPath(new URL('../complexity.mjs', import.meta.url)),
    cli,
  );
  /** Preserve analyzer exit status and JSON rather than treating a missing report as an empty finding list. */
  return (source, fileName = 'source.js') => {
    writeFileSync(join(root, fileName), source);
    const result = spawnSync(
      process.execPath,
      [cli, '--config', 'eslint.config.mjs', fileName],
      { cwd: root, encoding: 'utf8', timeout: 15000 },
    );
    assert.equal(readFileSync(join(root, fileName), 'utf8'), source);
    return result;
  };
}

/** Whitespace-only growth is neutral, while an actual extra statement still increases the measured function. */
test('canonical CLI uses identical units for historical and current line debt', (t) => {
  const run = fixture(t);
  const statements = Array.from({ length: 80 }, () => 'value += 1;');
  const compact = `export function count() { let value = 0; ${statements.join('')} return value; }`;
  const expanded = `export function count() {\n\nlet value = 0;\n${statements.join('\n\n')}\nreturn value;\n}`;
  const original = run(compact),
    whitespace = run(expanded);
  assert.equal(original.status, 1, original.stderr);
  assert.equal(whitespace.status, 1, whitespace.stderr);
  const [before] = JSON.parse(original.stdout),
    [after] = JSON.parse(whitespace.stdout);
  assert.equal(
    before.source
      .split('\n')
      .filter((line) => line.trim())
      .join('\n'),
    after.source
      .split('\n')
      .filter((line) => line.trim())
      .join('\n'),
  );
  assert.deepEqual(
    before.messages.map(({ ruleId, message }) => ({ ruleId, message })),
    after.messages.map(({ ruleId, message }) => ({ ruleId, message })),
  );
  const growth = run(
    compact.replace('return value;', 'value += 2; return value;'),
  );
  assert.equal(growth.status, 1, growth.stderr);
  const [increased] = JSON.parse(growth.stdout);
  assert.notDeepEqual(increased.messages, before.messages);
  assert.ok(
    increased.source.split('\n').length > before.source.split('\n').length,
  );
});

/** A formatter/parser error is a failed analyzer, never a zero-debt report or a baselinable diagnostic. */
test('canonical CLI fails closed for invalid syntax', (t) => {
  const result = fixture(t)('export function broken( {');
  assert.equal(result.status, 2);
  assert.equal(result.stdout, '');
  assert.ok(result.stderr.length > 0);
});

/** Source directives cannot hide measured debt, and unrelated historical framework directives cannot become parser diagnostics. */
test('canonical CLI ignores inline configuration on both metric inputs', (t) => {
  const run = fixture(t);
  const body = `export function count() { let value = 0; ${Array.from({ length: 80 }, () => 'value += 1;').join('')} return value; }`;
  const plain = run(body);
  const annotated = run(
    '/* eslint-disable unknown-framework/legacy-rule, max-lines-per-function */\n' +
      body,
  );
  assert.equal(plain.status, 1, plain.stderr);
  assert.equal(annotated.status, 1, annotated.stderr);
  const select = (result) =>
    JSON.parse(result.stdout).flatMap((file) =>
      file.messages.map(({ ruleId, message }) => ({ ruleId, message })),
    );
  assert.deepEqual(select(annotated), select(plain));
  assert.ok(
    select(annotated).some((item) => item.ruleId === 'max-lines-per-function'),
  );
});

/** Execute canonical TS/JSX through the same compiler settings to compare literals, child text and evaluation order. */
function evaluate(source, fileName) {
  const compiled = ts.transpileModule(source, {
    fileName,
    compilerOptions: {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.None,
      jsx: ts.JsxEmit.React,
      jsxFactory: 'element',
    },
  });
  const context = {};
  runInNewContext(compiled.outputText, context, { timeout: 1000 });
  return JSON.parse(context.result);
}

/** Callback documentation and JSX comments cannot change file/function line debt; actual instructions must still grow it. */
test('canonical CLI strips JSX documentation before measuring wrapped line debt', (t) => {
  const run = fixture(t);
  const statements = Array.from({ length: 160 }, () => 'value += 1;').join(
    '\n',
  );
  const declarations = Array.from(
    { length: 350 },
    (_, index) => `export const field${index} = ${index};`,
  ).join('\n');
  const plain = `export function Card() {
    let value = 0;
    ${statements}
    return <Panel render={({ field }) => <section data-description={field.extendedDescriptionForAccessibleContent} data-count={value}><span>{field.label}</span></section>} />;
  }
  ${declarations}`;
  const documented = plain
    .replace(
      'export function',
      '/** Render the editable panel and preserve its accumulated count. */\nexport function',
    )
    .replace(
      'render={',
      'render={/** Provide the field label and accessible description to the panel. */ ',
    )
    .replace(
      '<span>',
      '{/* Keep the visible label inside the field container. */}<span>',
    )
    .replace(
      'value += 1;',
      'value += /* Increment the visible count once. */ 1;',
    );
  const original = run(plain, 'source.tsx');
  const annotated = run(documented, 'source.tsx');
  assert.equal(original.status, 1, original.stderr);
  assert.equal(annotated.status, 1, annotated.stderr);
  const [before] = JSON.parse(original.stdout);
  const [after] = JSON.parse(annotated.stdout);
  assert.equal(after.source, before.source);
  assert.deepEqual(after.messages, before.messages);
  assert.ok(before.messages.some(({ ruleId }) => ruleId === 'max-lines'));
  assert.ok(
    before.messages.some(({ ruleId }) => ruleId === 'max-lines-per-function'),
  );
  const growth = run(
    documented.replace('let value = 0;', 'let value = 0; value += 2;'),
    'source.tsx',
  );
  assert.equal(growth.status, 1, growth.stderr);
  const [increased] = JSON.parse(growth.stdout);
  assert.notDeepEqual(
    increased.messages.map(({ ruleId, message }) => ({ ruleId, message })),
    before.messages.map(({ ruleId, message }) => ({ ruleId, message })),
  );
});

/** Comment-like literals and rendered JSX text/element order survive printing; adjacent text nodes are normalized like DOM content. */
test('canonical CLI preserves string, tagged-template and JSX semantics', (t) => {
  const source = [
    `function element(type, props, ...children) {
      const rendered = [];
      for (const child of children) {
        const previous = rendered.length - 1;
        if (typeof child === 'string' && typeof rendered[previous] === 'string') rendered[previous] += child;
        else rendered.push(child);
      }
      return {type, props, children: rendered};
    }`,
    'const value = "https://example.invalid/a/*literal*/";',
    'const raw = String.raw`line\\n/* literal */ ${value} // end`;',
    'const cooked = `first\nsecond ${value}`;',
    String.raw`const expression = /\/\*literal\*\//u;`,
    'const node = <section title="/* attribute */"> leading {/* actual comment */}<b>{value}</b> trailing </section>;',
    'globalThis.result = JSON.stringify({value, raw, cooked, matches: expression.test(value), node});',
  ].join('\n');
  const result = fixture(t)(source, 'source.tsx');
  assert.equal(result.status, 0, result.stderr);
  const [report] = JSON.parse(result.stdout);
  assert.deepEqual(
    evaluate(report.source, 'source.tsx'),
    evaluate(source, 'source.tsx'),
  );
  assert.equal(
    evaluate(report.source, 'source.tsx').node.props.title,
    '/* attribute */',
  );
  assert.match(evaluate(report.source, 'source.tsx').raw, /line\\n/);
});

/** Comments near automatic semicolon insertion and adjacent unary operators cannot change executable statements. */
test('canonical CLI preserves automatic-semicolon and operator semantics', (t) => {
  const source = `function returned() {
    return /* Preserve the original newline after return. */
    42;
  }
  const sum = 1 + /* Keep the unary plus separate. */ +2;
  globalThis.result = JSON.stringify({isUndefined: returned() === undefined, sum});`;
  const result = fixture(t)(source);
  assert.equal(result.status, 0, result.stderr);
  const [report] = JSON.parse(result.stdout);
  assert.deepEqual(evaluate(report.source, 'source.js'), {
    isUndefined: true,
    sum: 3,
  });
  assert.deepEqual(
    evaluate(report.source, 'source.js'),
    evaluate(source, 'source.js'),
  );
});

/** Invalid TSX remains an analyzer failure even though the TypeScript printer can emit a recovered syntax tree. */
test('canonical CLI fails closed before printing a recovered TSX tree', (t) => {
  const result = fixture(t)(
    'export const view = <section>{/* valid comment */}<span></section>;',
    'source.tsx',
  );
  assert.equal(result.status, 2);
  assert.equal(result.stdout, '');
  assert.match(result.stderr, /Complexity parse failed/);
});
