import { spawnSync } from 'node:child_process';
import {
  lstat,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rm,
  writeFile,
  realpath,
} from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { format } from 'prettier';
import picomatch from 'picomatch';
import policy from './prettier.config.mjs';
const config = JSON.parse(process.argv[2]);
const root = process.cwd();
if (!Array.isArray(config.duplicatePaths) || !config.duplicatePaths.length)
  throw new Error('Canonical clone roots are required');
for (const file of config.duplicatePaths)
  if (
    typeof file !== 'string' ||
    file.startsWith('/') ||
    file.split(/[\\/]/).includes('..')
  )
    throw new Error('Clone root must remain inside the repository');
const formats = config.duplicateFormats ?? [
  'javascript',
  'typescript',
  'jsx',
  'tsx',
];
if (
  !formats.length ||
  formats.some(
    (value) => !['javascript', 'typescript', 'jsx', 'tsx'].includes(value),
  )
)
  throw new Error(
    'Canonical clone measurement supports only declared JavaScript and TypeScript formats',
  );
const temporary = await realpath(
  await mkdtemp(join(tmpdir(), 'canonical-clones-')),
);
const ignored = picomatch(config.duplicateIgnore ?? [], { dot: true });
let files = 0;
/** Inventory declared roots without following symlinks and format each authored source with the same sealed policy. */
async function copy(file) {
  if (ignored(file)) return;
  const info = await lstat(join(root, file));
  if (info.isSymbolicLink()) throw Error(`Unreviewed source symlink: ${file}`);
  if (info.isDirectory()) {
    for (const entry of await readdir(join(root, file)))
      await copy(join(file, entry));
    return;
  }
  if (/\.(svelte|vue)$/.test(file))
    throw new Error(
      `Canonical clone measurement needs a framework formatter for ${file}`,
    );
  if (!/\.[cm]?[jt]sx?$/.test(file)) return;
  const canonical = await format(await readFile(join(root, file), 'utf8'), {
    ...policy,
    filepath: file,
  });
  const target = join(temporary, file);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, canonical);
  files++;
}
/** Restore portable source identities after analyzing the temporary canonical copy; fragments retain their measured text. */
function originalPaths(value) {
  if (typeof value === 'string' && value.startsWith(temporary + '/'))
    return join(root, value.slice(temporary.length + 1));
  if (Array.isArray(value)) return value.map(originalPaths);
  if (value && typeof value === 'object')
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        originalPaths(key),
        originalPaths(item),
      ]),
    );
  return value;
}
try {
  for (const file of config.duplicatePaths) await copy(file);
  if (!files) throw Error('Canonical clone inventory is empty');
  const tool = new URL('./node_modules/jscpd/run-jscpd.js', import.meta.url)
    .pathname;
  const result = spawnSync(
    process.execPath,
    [
      tool,
      ...config.duplicatePaths,
      '--reporters',
      'json',
      '--output',
      'reports',
      '--mode',
      'mild',
      '--min-lines',
      '5',
      '--min-tokens',
      '50',
      '--silent',
      '--absolute',
      '--format',
      formats.join(','),
    ],
    {
      cwd: temporary,
      encoding: 'utf8',
      timeout: 180000,
      maxBuffer: 50 * 1024 * 1024,
    },
  );
  if (result.status !== 0 || result.error || result.signal)
    throw Error(result.stderr || result.stdout || String(result.error));
  const report = JSON.parse(
    await readFile(join(temporary, 'reports/jscpd-report.json'), 'utf8'),
  );
  if (report.duplicates.some((clone) => typeof clone.fragment !== 'string'))
    throw Error('Missing canonical clone fragment');
  process.stdout.write(JSON.stringify(originalPaths(report)));
} finally {
  await rm(temporary, { recursive: true, force: true });
}
