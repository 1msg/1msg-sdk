import { maintainabilityConfig, tseslint } from './tools/quality/eslint.mjs';
export default [
  { linterOptions: { reportUnusedDisableDirectives: 'off' } },
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/tools/quality/**',
      '**/quality/reports/**',
      'typescript/src/generated/**',
      'quality/generator/postprocess.cjs',
      'java/**',
      'kotlin/**',
      'scala/**',
      'csharp/**',
      'python/**',
      'rust/**',
      'ruby/**',
    ],
  },
  {
    files: ['**/*.{ts,tsx,cts,mts}'],
    languageOptions: { parser: tseslint.parser },
    plugins: { '@typescript-eslint': tseslint.plugin },
  },
  ...maintainabilityConfig(),
];
