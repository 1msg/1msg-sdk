// Owners and constraints for this repository's actual runtime roots.
module.exports = {
  forbidden: [
    {
      name: 'no-runtime-cycles',
      severity: 'error',
      from: {},
      to: {
        circular: true,
        dependencyTypesNot: ['type-only'],
      },
    },
    {
      name: 'no-unresolved-dependencies',
      severity: 'error',
      from: {},
      to: {
        couldNotResolve: true,
      },
    },
    {
      name: 'no-runtime-test-dependencies',
      severity: 'error',
      from: {
        path: '^(?:typescript/src)/',
        pathNot: '(?:__tests__|test|tests)/|\\.(?:test|spec)\\.',
      },
      to: {
        path: '(?:^|/)(?:__tests__|tests|test)/|(?:^|node_modules/)(?:jest|vitest|ts-jest)',
      },
    },
  ],
  options: {
    doNotFollow: {
      path: 'node_modules|typescript/src/generated',
    },
    tsConfig: {
      fileName: require('node:path').resolve(__dirname, 'typescript/tsconfig.quality.json'),
    },
    tsPreCompilationDeps: true,
    enhancedResolveOptions: {
      exportsFields: ['exports'],
      conditionNames: ['types', 'require', 'node', 'default'],
      extensions: ['.js', '.ts', '.json'],
    },
    exclude: '(?:^|/)node_modules/',
  },
};
