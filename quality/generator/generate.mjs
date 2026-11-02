import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtemp, readFile, writeFile, mkdir, readdir, rm, cp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { postProcessExactOptionalSdk } from './exact-optional.mjs';
import { postProcessGeneratedTypeScriptSdk } from './postprocess.cjs';

const directory = dirname(fileURLToPath(import.meta.url));
const root = resolve(directory, '../..');
const provenance = JSON.parse(await readFile(join(directory, 'provenance.json'), 'utf8'));
/** Hash producer inputs and output bytes for reproducible regeneration. */
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');
if (hash(await readFile(join(directory, 'postprocess.cjs'))) !== provenance.postprocessorSha256)
  throw new Error('Postprocessor checksum mismatch');
const spec = await readFile(join(directory, 'openapi.yaml'));
if (hash(spec) !== provenance.contractSha256)
  throw new Error('Contract differs from pinned provenance');
const cache = join(tmpdir(), '1msg-openapi-generator');
await mkdir(cache, { recursive: true });
const jar = join(cache, `${provenance.generatorVersion}.jar`);
try {
  await readFile(jar);
} catch {
  const response = await fetch(
    `https://repo.maven.apache.org/maven2/org/openapitools/openapi-generator-cli/${provenance.generatorVersion}/openapi-generator-cli-${provenance.generatorVersion}.jar`,
  );
  if (!response.ok) throw new Error(`Generator download failed: ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  if (hash(bytes) !== provenance.generatorSha256) throw new Error('Generator checksum mismatch');
  await writeFile(jar, bytes);
}
if (hash(await readFile(jar)) !== provenance.generatorSha256)
  throw new Error('Cached generator checksum mismatch');

/** Enumerate every generated path and hash, catching additions/deletions as well as changed files. */
async function inventory(path, prefix = '') {
  const result = {};
  for (const entry of (await readdir(path, { withFileTypes: true })).sort((a, b) =>
    a.name.localeCompare(b.name),
  )) {
    const relative = prefix + entry.name;
    if (entry.isDirectory())
      Object.assign(result, await inventory(join(path, entry.name), `${relative}/`));
    else result[relative] = hash(await readFile(join(path, entry.name)));
  }
  return result;
}

const temporary = await mkdtemp(join(tmpdir(), '1msg-sdk-generation-'));
try {
  const result = spawnSync(
    'java',
    [
      '-jar',
      jar,
      'generate',
      '-i',
      join(directory, 'openapi.yaml'),
      '-g',
      'typescript-fetch',
      '-o',
      temporary,
      '--additional-properties=npmName=@1msg/sdk-generated,supportsES6=true,typescriptThreePlus=true,withInterfaces=true,useSingleRequestParameter=false,hideGenerationTimestamp=true',
    ],
    { stdio: 'inherit' },
  );
  if (result.status !== 0) throw new Error(`Generation failed: ${result.status}`);
  postProcessGeneratedTypeScriptSdk(temporary);
  postProcessExactOptionalSdk(temporary);
  const expected = await inventory(join(temporary, 'src'));
  const output = join(root, 'typescript/src/generated/src');
  const inventoryFile = join(directory, 'inventory.json');
  if (process.argv.includes('--write')) {
    await rm(output, { recursive: true, force: true });
    await mkdir(dirname(output), { recursive: true });
    await cp(join(temporary, 'src'), output, { recursive: true });
    await writeFile(inventoryFile, JSON.stringify(expected, null, 2) + '\n');
  } else {
    const actual = await inventory(output);
    const recorded = JSON.parse(await readFile(inventoryFile, 'utf8'));
    for (const candidate of [actual, recorded]) {
      if (JSON.stringify(candidate) !== JSON.stringify(expected))
        throw new Error(
          'Generated SDK drift: run node quality/generator/generate.mjs --write and review the contract/producer change',
        );
    }
  }
  console.log(`Verified ${Object.keys(expected).length} generated TypeScript paths`);
} finally {
  await rm(temporary, { recursive: true, force: true });
}
