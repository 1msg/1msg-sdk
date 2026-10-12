import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

/** Execute the packed SDK consumer and reject hangs or command failures. */
function run(command, args, cwd) {
  const result = spawnSync(command, args, { cwd, encoding: 'utf8', timeout: 30000 });
  if (result.status !== 0)
    throw new Error(`${command}: ${result.stderr || result.stdout || result.error}`);
  return result.stdout;
}
const directory = mkdtempSync(join(tmpdir(), '1msg-sdk-pack-'));
try {
  const [packed] = JSON.parse(
    run(
      'npm',
      ['pack', '--json', '--ignore-scripts', '--pack-destination', directory],
      resolve('typescript'),
    ),
  );
  assert.ok(packed.files.some((file) => file.path === 'dist/generated/src/runtime.js'));
  run('tar', ['-xzf', join(directory, packed.filename), '-C', directory], directory);
  run(
    process.execPath,
    [
      '-e',
      `const assert = require('node:assert/strict'); const sdk = require('./package'); const client = sdk.createClient({baseUrl:'https://fixture.invalid/', instanceId:'instance', token:'fixture'}); assert.equal(client.config.buildRequestUrl('/sendMessage'), 'https://fixture.invalid/instance/sendMessage?token=fixture'); assert.equal(typeof client.messaging.sendMessage,'function'); assert.equal(typeof sdk.SendMessageRequestFromJSON,'function');`,
    ],
    directory,
  );
  console.log(
    'Packed SDK imports without source files or workspace dependencies and exposes its public client/model API',
  );
} finally {
  rmSync(directory, { recursive: true, force: true });
}
