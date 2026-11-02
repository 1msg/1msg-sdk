import assert from 'node:assert/strict';
import test from 'node:test';
import { suppressionErrors } from '../lib/guards.mjs';

/** Template segments, regex bodies and JSX text are data even when they contain directive spelling. */
test('suppression scanning preserves parsed literal boundaries', () => {
  const sources = [
    [
      'a.js',
      'const generated = `start ${name}\n/* eslint-disable */\n// @ts-nocheck\n`;',
    ],
    [
      'a.ts',
      'const generated = `a ${`b ${name}\n// @ts-ignore\n`} c ${name} /* eslint-disable */`;',
    ],
    [
      'a.mjs',
      'const generated = tag`head ${name}\n// @ts-nocheck\n${other} /* eslint-disable */`;',
    ],
    [
      'a.ts',
      String.raw`const pattern = /[/*]eslint-disable/; const other = /[//]@ts-ignore/;`,
    ],
    [
      'a.tsx',
      'const view = <div>// @ts-ignore <span>{name}</span>/* eslint-disable */</div>;',
    ],
    [
      'a.jsx',
      'const view = <div title="// @ts-nocheck">{/* ordinary comment */} // @ts-ignore</div>;',
    ],
    [
      'a.svelte',
      '<script lang="ts">const generated = `a ${name}\n// @ts-ignore\n`;</script>',
    ],
  ];
  for (const [path, source] of sources) {
    assert.deepEqual(
      suppressionErrors(path, source, {}),
      [],
      `${path}: ${source}`,
    );
  }
});

/** Actual comments remain enforceable before, within and after expressions, including EOF trivia. */
test('suppression scanning rejects comments inside template and JSX expressions', () => {
  const sources = [
    ['a.js', 'const generated = `a ${ /* eslint-disable */ name } z`;'],
    [
      'a.ts',
      'const generated = `a ${`b ${ /* eslint-disable */ name } c`} d`;',
    ],
    ['a.mjs', 'const generated = `a ${name // @ts-ignore\n} z`;'],
    ['a.cts', 'const generated = `a ${name} z`; // @ts-nocheck'],
    ['a.tsx', 'const view = <div>{/* eslint-disable */ name}</div>;'],
    ['a.jsx', 'const view = <div />;\n// @ts-ignore'],
    ['a.ts', '/* eslint-disable */'],
    [
      'a.ts',
      '/** @ts-ignore This comment is real documentation. */\nconst value = 1;',
    ],
    [
      'a.ts',
      String.raw`const pattern = /[/*]/; /* eslint-disable */ const value = 1;`,
    ],
    [
      'a.svelte',
      '<script>const generated = `a ${ /* eslint-disable */ name }`;</script>',
    ],
  ];
  for (const [path, source] of sources) {
    assert.equal(
      suppressionErrors(path, source, {}).length,
      1,
      `${path}: ${source}`,
    );
  }
});

/** Malformed scoped comments must not gain an exemption merely by appearing in an interpolation. */
test('suppression scanning retains scoped exception requirements', () => {
  const source = 'const generated = `a ${ // eslint-disable-next-line\nname }`';
  assert.match(suppressionErrors('a.ts', source, {})[0], /must name rules/);
  const negative =
    'const generated = `a ${ // @ts-expect-error: Verify an invalid primitive contract\nname }`';
  assert.match(
    suppressionErrors('a.ts', negative, {})[0],
    /negative type-test scope/,
  );
  assert.deepEqual(
    suppressionErrors('negative.test.ts', negative, {
      negativeTypeTests: ['*.test.ts'],
    }),
    [],
  );
});
