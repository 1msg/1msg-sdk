import { staticConfig, globals } from './tools/quality/eslint.mjs';

export default [
  { files: ['**/*.jsx'], languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
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
  ...staticConfig({ globals: { ...globals.node, ...globals.jest } }),
  {
    settings: {
      'import/resolver': {
        typescript: { project: './typescript/tsconfig.quality.json' },
        node: { extensions: ['.js', '.json', '.ts', '.mjs', '.cjs'] },
      },
    },
  },
];
