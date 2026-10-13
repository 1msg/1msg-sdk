import { existsSync } from 'node:fs';

const inventory = {
  workspaces: {
    '.': {
      entry: [
        'scripts/pack-smoke.mjs',
        'scripts/quality-negative.mjs',
        'scripts/quality-hook.test.mjs',
        'scripts/quality-extensions.test.mjs',
        'quality/generator/generate.mjs!',
        'quality/generator/verify-negative.mjs',
        'quality/generator/exact-optional.test.mjs',
        'quality/exceptions/verify.mjs',
        'quality/exceptions/verify.test.mjs',
        'eslint*.mjs',
        'quality.config.mjs',
        'knip.config.mjs',
      ],
      project: [
        'scripts/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}!',
        'quality/generator/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}!',
        'quality/exceptions/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}!',
      ],
    },
    typescript: {
      entry: ['src/index.ts!', 'src/__tests__/**/*.{spec,test}.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
      project: [
        'src/**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}!',
        'src/generated/**/*.ts!',
        'src/__tests__/**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}',
      ],
    },
  },
  ignore: ['tools/quality/**', 'typescript/src/generated/**'],
};

// Java belongs to the pinned generator. Trusted-base replays before that generator
// existed must not inherit an exclusion for a binary absent from their graph.
const hasGenerator = existsSync(new URL('./quality/generator/generate.mjs', import.meta.url));
const config = { ...inventory, ignoreBinaries: hasGenerator ? ['java'] : [] };
export default config;
