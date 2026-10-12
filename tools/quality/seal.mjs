import { readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { digest } from './lib/baseline.mjs';
import { templateFiles } from './lib/template.mjs';

// Maintainers seal a reviewed template version before copying it into consumer repositories.
const root = dirname(fileURLToPath(import.meta.url));
const { version } = JSON.parse(readFileSync(`${root}/package.json`, 'utf8'));
const files = Object.fromEntries(
  templateFiles(root).map((path) => [
    path,
    digest(readFileSync(`${root}/${path}`, 'utf8')),
  ]),
);
writeFileSync(
  `${root}/template-manifest.json`,
  `${JSON.stringify({ schemaVersion: 1, version, files }, null, 2)}\n`,
);
