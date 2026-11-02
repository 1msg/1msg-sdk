import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { baseFile } from './git.mjs';
import { digest } from './baseline.mjs';

/** Inventory all vendored files except installed dependencies; unexpected symlinks cannot hide source. */
export function templateFiles(root, relative = '') {
  return readdirSync(join(root, relative), { withFileTypes: true })
    .flatMap((entry) => {
      const path = join(relative, entry.name).replaceAll('\\', '/');
      if (path === 'node_modules' || path === 'template-manifest.json')
        return [];
      if (entry.isSymbolicLink())
        throw new Error(`Untracked template symlink: ${path}`);
      return entry.isDirectory() ? templateFiles(root, path) : [path];
    })
    .sort();
}

/** Keep the vendored exemption exact and require a new template version for changed preset contents. */
export function verifyTemplate(base) {
  const root = 'tools/quality';
  if (!existsSync(root)) return; // Standalone CLI fixtures exercise the runner outside a vendored checkout.
  const manifestPath = `${root}/template-manifest.json`;
  if (!existsSync(manifestPath))
    throw new Error(
      'Vendored quality template is missing its versioned inventory',
    );
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  const packageInfo = JSON.parse(readFileSync(`${root}/package.json`, 'utf8'));
  if (manifest.schemaVersion !== 1 || manifest.version !== packageInfo.version)
    throw new Error('Template version mismatch');
  const files = templateFiles(root);
  if (
    JSON.stringify(files) !== JSON.stringify(Object.keys(manifest.files).sort())
  )
    throw new Error('Quality template has undeclared/missing files');
  for (const path of files) {
    if (
      digest(readFileSync(`${root}/${path}`, 'utf8')) !== manifest.files[path]
    )
      throw new Error(`Quality template integrity mismatch: ${path}`);
  }
  const previousText = baseFile(base, manifestPath);
  if (previousText) {
    const previous = JSON.parse(previousText);
    if (
      previous.version === manifest.version &&
      JSON.stringify(previous.files) !== JSON.stringify(manifest.files)
    ) {
      throw new Error(
        'Quality template changed without an explicit version update',
      );
    }
  }
}
