import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

/** Run a bounded, non-shell child process; preserve failures instead of returning an empty analysis. */
export function execute(command, args = [], options = {}) {
  const result = spawnSync(command, args, {
    encoding: 'utf8',
    maxBuffer: 128 * 1024 * 1024,
    timeout: 600_000,
    ...options,
  });
  if (result.error || result.signal || result.status === null) {
    throw new Error(
      `${command} did not complete: ${result.error?.message ?? result.signal}`,
    );
  }
  return result;
}

/** Execute read-only Git operations and reject a missing ref or failed comparison. */
export function git(args) {
  const result = execute('git', args);
  if (result.status !== 0)
    throw new Error(`git ${args[0]} failed: ${result.stderr.trim()}`);
  return result.stdout;
}

/** Resolve one trusted comparison commit; CI explicitly supplies its PR base SHA. */
export function baseRef(
  defaultBranch = 'main',
  explicit = process.env.QUALITY_BASE,
) {
  if (explicit)
    return git(['rev-parse', '--verify', `${explicit}^{commit}`]).trim();
  return git(['merge-base', 'HEAD', `origin/${defaultBranch}`]).trim();
}

/** Return tracked paths, including staged additions, with unambiguous NUL delimiters. */
export function trackedFiles() {
  return git(['ls-files', '-z']).split('\0').filter(Boolean);
}

/** Include committed, staged, unstaged and untracked additions in local changed-file checks. */
export function changedFiles(base) {
  return [
    ...new Set(
      [
        ...git([
          'diff',
          '--name-only',
          '--diff-filter=ACMR',
          '-z',
          base,
          '--',
        ]).split('\0'),
        ...git(['ls-files', '--others', '--exclude-standard', '-z']).split(
          '\0',
        ),
      ].filter(Boolean),
    ),
  ].sort();
}

/** Read an optional file at the verified base; missing files mean additions, not failed Git. */
export function baseFile(base, path) {
  const paths = git([
    'ls-tree',
    '-r',
    '--name-only',
    '-z',
    base,
    '--',
    path,
  ]).split('\0');
  return paths.includes(path) ? git(['show', `${base}:${path}`]) : null;
}

/** Read current bytes only when the path exists; deleted files have no current diagnostics. */
export function currentFile(path) {
  try {
    return readFileSync(path, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}
