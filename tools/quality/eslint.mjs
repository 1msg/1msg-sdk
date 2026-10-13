import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import imports from 'eslint-plugin-import';
import node from 'eslint-plugin-n';
import unicorn from 'eslint-plugin-unicorn';
import perfectionist from 'eslint-plugin-perfectionist';
import sonarjs from 'eslint-plugin-sonarjs';
import globals from 'globals';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
export {
  tseslint,
  imports as importPlugin,
  node as nodePlugin,
  sonarjs,
  unicorn,
  perfectionist,
  globals,
};

export const sourceFiles = ['**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}'];
export const testFiles = [
  '**/*.{test,spec,stories}.{js,jsx,ts,tsx}',
  '**/{test,tests,__tests__,fixtures,mocks}/**',
];

/** Return the shared correctness/style layer; callers provide explicit browser/Node globals and generated paths. */
export function staticConfig({ files = sourceFiles, globals = {} } = {}) {
  return [
    {
      files,
      languageOptions: { globals },
      linterOptions: { reportUnusedDisableDirectives: 'error' },
      plugins: { import: imports, n: node, unicorn, perfectionist, sonarjs },
      settings: {
        'import/resolver': {
          [require.resolve('eslint-import-resolver-typescript')]: {
            alwaysTryTypes: true,
          },
          node: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs'] },
        },
      },
      rules: {
        ...js.configs.recommended.rules,
        eqeqeq: ['error', 'always'],
        'no-var': 'error',
        'prefer-const': 'error',
        'import/no-unresolved': 'error',
        'import/no-duplicates': 'error',
        'n/no-unsupported-features/node-builtins': [
          'error',
          { version: '>=24.0.0 <25.0.0' },
        ],
        'unicorn/prefer-node-protocol': 'error',
        'unicorn/prefer-type-error': 'error',
        'perfectionist/sort-imports': [
          'error',
          { type: 'natural', order: 'asc', sortSideEffects: false },
        ],
        'perfectionist/sort-exports': [
          'error',
          { type: 'natural', order: 'asc' },
        ],
        'sonarjs/no-identical-functions': 'error',
        'sonarjs/no-all-duplicated-branches': 'error',
      },
    },
    ...tseslint.configs.recommended.map((config) => ({
      ...config,
      files: ['**/*.{ts,tsx,cts,mts}'],
    })),
  ];
}

/** Apply mandatory type-aware Promise and unknown-boundary checks using actual repository tsconfigs. */
export function typedConfig({
  files = ['**/*.{ts,tsx,cts,mts}'],
  project,
  tsconfigRootDir,
} = {}) {
  return [
    {
      files,
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: { project, tsconfigRootDir },
      },
      plugins: { '@typescript-eslint': tseslint.plugin },
      rules: {
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
      },
    },
  ];
}

/** Keep complexity diagnostics separate so only measured maintainability debt can use a ratchet. */
export function maintainabilityConfig({ files = sourceFiles } = {}) {
  return [
    {
      files,
      ignores: testFiles,
      plugins: { sonarjs },
      rules: {
        'max-lines': [
          'error',
          { max: 500, skipBlankLines: true, skipComments: true },
        ],
        'max-lines-per-function': [
          'error',
          { max: 80, skipBlankLines: true, skipComments: true },
        ],
        complexity: ['error', { max: 20, variant: 'classic' }],
        'sonarjs/cognitive-complexity': ['error', 15],
        'max-depth': ['error', 4],
        'max-params': ['error', 5],
      },
    },
    {
      files: ['**/*.{jsx,tsx}'],
      ignores: testFiles,
      rules: {
        'max-lines-per-function': [
          'error',
          { max: 150, skipBlankLines: true, skipComments: true },
        ],
      },
    },
  ];
}
