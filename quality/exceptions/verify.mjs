import { execFileSync, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

/** Read Git metadata without a shell; failures are fatal rather than weakening the frozen scope. */
function git(root, args) {
  return execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
}

/** Hash raw bytes, preserving whitespace and comments as part of the deferred source inventory. */
function hash(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

/** Enumerate tracked and ignored source paths alike; no generated-source or language exemption is implicit. */
async function diskFiles(root, scope) {
  const target = resolve(root, scope);
  const entries = await readdir(target, { withFileTypes: true });
  const result = [];
  for (const entry of entries) {
    const name = `${scope}/${entry.name}`;
    if (entry.isSymbolicLink()) throw new Error(`Deferred source symlink is unsupported: ${name}`);
    if (entry.isDirectory()) result.push(...(await diskFiles(root, name)));
    else result.push(name);
  }
  return result;
}

/** Require accountable, unexpired metadata before reading a deferred source tree. */
function validateMetadata(exception) {
  for (const key of ['id', 'owner', 'issue', 'reason', 'expires', 'baselineCommit']) {
    if (typeof exception[key] !== 'string' || !exception[key].trim())
      throw new Error(`Missing exception ${key}`);
  }
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(exception.expires) ||
    !Number.isFinite(Date.parse(`${exception.expires}T23:59:59Z`)) ||
    new Date(`${exception.expires}T23:59:59Z`) < new Date()
  ) {
    throw new Error(`Expired exception: ${exception.id}`);
  }
  if (!/^https:\/\//.test(exception.issue)) throw new Error('Exception requires a task URL');
}

/** Compare an exception's exact file manifest to both trusted Git history and current on-disk sources. */
async function verifyScope(root, exception, branch) {
  validateMetadata(exception);
  git(root, ['merge-base', '--is-ancestor', exception.baselineCommit, `origin/${branch}`]);
  const roots = exception.roots;
  if (
    !Array.isArray(roots) ||
    roots.length === 0 ||
    roots.some((item) => !/^[\w./-]+$/.test(item) || item.includes('..'))
  )
    throw new Error('Invalid exception roots');
  const trustedPaths = git(root, [
    'ls-tree',
    '-r',
    '--name-only',
    exception.baselineCommit,
    '--',
    ...roots,
  ])
    .split('\n')
    .filter(Boolean)
    .sort();
  const recordedPaths = Object.keys(exception.files).sort();
  if (JSON.stringify(trustedPaths) !== JSON.stringify(recordedPaths))
    throw new Error(`Incomplete exception inventory: ${exception.id}`);
  const actualPaths = [];
  for (const scope of roots) {
    if (recordedPaths.includes(scope)) actualPaths.push(scope);
    else actualPaths.push(...(await diskFiles(root, scope)));
  }
  if (JSON.stringify(actualPaths.sort()) !== JSON.stringify(recordedPaths))
    throw new Error(`Deferred source inventory changed: ${exception.id}`);
  for (const name of recordedPaths) {
    const trusted = execFileSync('git', ['show', `${exception.baselineCommit}:${name}`], {
      cwd: root,
    });
    if (hash(trusted) !== exception.files[name])
      throw new Error(`Exception fingerprint not from trusted history: ${name}`);
    if (hash(await readFile(resolve(root, name))) !== exception.files[name])
      throw new Error(
        `Deferred source changed: ${name}; complete its quality profile before changing it`,
      );
  }
  return recordedPaths.length;
}

/** Enforce a dated, owner-assigned exception without presenting deferred compilation or tests as passing. */
export async function verifyExceptions(root = process.cwd()) {
  const configPath = 'quality/exceptions/inventory.json';
  const config = JSON.parse(await readFile(resolve(root, configPath), 'utf8'));
  if (
    config.schemaVersion !== 1 ||
    !Array.isArray(config.exceptions) ||
    config.exceptions.length === 0
  )
    throw new Error('Invalid exception inventory');
  const base = git(root, ['merge-base', 'HEAD', `origin/${config.defaultBranch}`]);
  const previous = spawnSync('git', ['show', `${base}:${configPath}`], {
    cwd: root,
    encoding: 'utf8',
  });
  if (previous.status === 0 && previous.stdout.trim() !== JSON.stringify(config, null, 2).trim()) {
    // Once adopted, changing the exception requires replacing this gate with the completed profile.
    if (JSON.stringify(JSON.parse(previous.stdout)) !== JSON.stringify(config))
      throw new Error('Existing exception cannot be expanded, renewed or rebased');
  }
  let count = 0;
  for (const exception of config.exceptions)
    count += await verifyScope(root, exception, config.defaultBranch);
  console.log(
    `Verified ${count} frozen paths under ${config.exceptions.length} temporary exception(s); deferred runtime checks have NOT run.`,
  );
  return count;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  await verifyExceptions();
}
