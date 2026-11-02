import { ESLint } from 'eslint';
import { readFileSync, existsSync } from 'node:fs';
import { relative, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { matches } from './lib/guards.mjs';
import { verifyTemplate } from './lib/template.mjs';

const [, , flag, configuration, separator, ...files] = process.argv;
if (flag !== '--config' || !configuration || separator !== '--')
  throw new Error('Usage: staged.mjs --config <eslint-config> -- <files...>');

const { default: inventory } = await import(
  pathToFileURL(resolve('quality.config.mjs')).href
);
const approved = [
  ...(inventory.generated ?? []),
  ...(inventory.excluded ?? []),
].map((entry) => entry.pattern);
const manifestPath = 'tools/quality/template-manifest.json';
let vendorFiles = new Set();
if (existsSync(manifestPath)) {
  verifyTemplate('HEAD');
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  vendorFiles = new Set([
    manifestPath,
    ...Object.keys(manifest.files).map((path) => `tools/quality/${path}`),
  ]);
}
const eslint = new ESLint({ overrideConfigFile: configuration });
const uncovered = [];
for (const file of files) {
  const path = relative(process.cwd(), resolve(file)).replaceAll('\\', '/');
  if (
    (await eslint.isPathIgnored(file)) &&
    !vendorFiles.has(path) &&
    !matches(path, approved)
  )
    uncovered.push(path);
}
if (uncovered.length)
  throw new Error(
    `Staged authored files have no ESLint coverage:\n${uncovered.join('\n')}`,
  );
