export default {
  schemaVersion: 1,
  profile: 'D',
  defaultBranch: 'main',
  sourceRoots: [
    'typescript/src',
    'typescript/jest.config.js',
    'quality/generator',
    'quality/exceptions',
    'scripts',
    'eslint.config.mjs',
    'eslint.typed.config.mjs',
    'eslint.complexity.config.mjs',
    '.dependency-cruiser.cjs',
    'quality.config.mjs',
  ],
  generated: [
    {
      pattern: 'typescript/src/generated/**',
      producer:
        'node quality/generator/generate.mjs --write (pinned OpenAPI Generator 7.22.0 + checksummed producer)',
    },
    {
      pattern: 'quality/generator/postprocess.cjs',
      producer: 'Vendored API generator; checksum checked by quality/generator/generate.mjs',
    },
  ],
  comments: {
    full: [
      'typescript/src/client.ts',
      'typescript/src/client-config.ts',
      'scripts/**',
      'quality/exceptions/**',
      'quality/generator/*.mjs',
    ],
  },
  knipConfig: 'knip.json',
  duplicatePaths: [
    'typescript/src',
    'typescript/jest.config.js',
    'scripts',
    'quality/generator',
    'quality/exceptions',
  ],
  duplicateIgnore: [
    'typescript/src/generated/**',
    'quality/generator/postprocess.cjs',
    '**/__tests__/**',
    '**/*.test.*',
  ],
  baselineDir: 'quality/baselines',
  duplicateMaxPercentage: 5,
  duplicateFullPaths: [
    'typescript/src',
    'typescript/jest.config.js',
    'scripts',
    'quality/generator',
    'quality/exceptions',
  ],
  duplicateFullIgnore: ['typescript/src/generated/**', 'quality/generator/postprocess.cjs'],
};
