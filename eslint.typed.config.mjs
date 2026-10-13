import { typedConfig } from './tools/quality/eslint.mjs';
export default [
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
  ...typedConfig({
    project: './tsconfig.quality.json',
    tsconfigRootDir: import.meta.dirname,
  }),
];
