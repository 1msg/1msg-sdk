import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';

import { verifyExceptions } from './verify.mjs';

/** Exercise the actual validator against trusted Git history and ignored on-disk source additions. */
test('temporary exceptions reject changed, missing, extra and expired sources', async () => {
  const root = await mkdtemp(join(tmpdir(), '1msg-exception-'));
  /** Run isolated fixture Git commands without touching the repository under test. */
  const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
  try {
    git('init', '-b', 'main');
    git('config', 'user.email', 'fixture@example.invalid');
    git('config', 'user.name', 'Quality fixture');
    await mkdir(join(root, 'legacy'));
    await writeFile(join(root, 'legacy/source.ts'), 'export const value = 1;\n');
    await writeFile(join(root, '.gitignore'), 'legacy/ignored.ts\n');
    git('add', '.');
    git('commit', '-m', 'fixture base');
    const baselineCommit = git('rev-parse', 'HEAD');
    git('update-ref', 'refs/remotes/origin/main', baselineCommit);
    const source = await readFile(join(root, 'legacy/source.ts'));
    const config = {
      schemaVersion: 1,
      defaultBranch: 'main',
      exceptions: [
        {
          id: 'legacy',
          owner: 'Fixture owner',
          issue: 'https://example.invalid/task',
          reason: 'Deliberate fixture',
          expires: '2099-01-01',
          baselineCommit,
          roots: ['legacy'],
          files: { 'legacy/source.ts': createHash('sha256').update(source).digest('hex') },
        },
      ],
    };
    await mkdir(join(root, 'quality/exceptions'), { recursive: true });
    const inventory = join(root, 'quality/exceptions/inventory.json');
    await writeFile(inventory, JSON.stringify(config, null, 2));
    assert.equal(await verifyExceptions(root), 1);
    await writeFile(join(root, 'legacy/source.ts'), 'export const value = 2;\n');
    await assert.rejects(verifyExceptions(root), /Deferred source changed/);
    await rm(join(root, 'legacy/source.ts'));
    await assert.rejects(verifyExceptions(root), /inventory changed/);
    await writeFile(join(root, 'legacy/source.ts'), source);
    await writeFile(join(root, 'legacy/ignored.ts'), 'export const hidden = true;');
    await assert.rejects(verifyExceptions(root), /inventory changed/);
    await rm(join(root, 'legacy/ignored.ts'));
    config.exceptions[0].expires = '2000-01-01';
    await writeFile(inventory, JSON.stringify(config, null, 2));
    await assert.rejects(verifyExceptions(root), /Expired exception/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

/** A stale manifest may adopt HEAD bytes already on the default branch, and nothing else. */
test('temporary exceptions can realign onto committed HEAD bytes only', async () => {
  const root = await mkdtemp(join(tmpdir(), '1msg-exception-realign-'));
  /** Run isolated fixture Git commands without touching the repository under test. */
  const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
  try {
    git('init', '-b', 'main');
    git('config', 'user.email', 'fixture@example.invalid');
    git('config', 'user.name', 'Quality fixture');
    await mkdir(join(root, 'legacy'));
    const sourcePath = join(root, 'legacy/source.ts');
    await writeFile(sourcePath, 'export const value = 1;\n');
    git('add', '.');
    git('commit', '-m', 'fixture base');
    const baselineCommit = git('rev-parse', 'HEAD');
    const source = await readFile(sourcePath);
    const config = {
      schemaVersion: 1,
      defaultBranch: 'main',
      exceptions: [
        {
          id: 'legacy',
          owner: 'Fixture owner',
          issue: 'https://example.invalid/task',
          reason: 'Deliberate fixture',
          expires: '2099-01-01',
          baselineCommit,
          roots: ['legacy'],
          files: { 'legacy/source.ts': createHash('sha256').update(source).digest('hex') },
        },
      ],
    };
    await mkdir(join(root, 'quality/exceptions'), { recursive: true });
    const inventory = join(root, 'quality/exceptions/inventory.json');
    await writeFile(inventory, JSON.stringify(config, null, 2));
    git('add', '.');
    git('commit', '-m', 'record freeze');
    await writeFile(sourcePath, 'export const value = 2;\n');
    git('add', '.');
    git('commit', '-m', 'published source');
    const head = git('rev-parse', 'HEAD');
    git('update-ref', 'refs/remotes/origin/main', head);
    const published = await readFile(sourcePath);
    config.exceptions[0].baselineCommit = head;
    config.exceptions[0].files['legacy/source.ts'] = createHash('sha256')
      .update(published)
      .digest('hex');
    await writeFile(inventory, JSON.stringify(config, null, 2));
    assert.equal(await verifyExceptions(root), 1);
    config.exceptions[0].expires = '2099-01-02';
    await writeFile(inventory, JSON.stringify(config, null, 2));
    await assert.rejects(verifyExceptions(root), /cannot be expanded, renewed or rebased/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
