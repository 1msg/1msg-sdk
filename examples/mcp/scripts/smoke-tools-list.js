#!/usr/bin/env node
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const entry = path.join(root, '..', 'src', 'index.js');

const transport = new StdioClientTransport({
  command: process.execPath,
  args: [entry],
  env: {
    ...process.env,
    CHAT_API_BASE_URL: process.env.CHAT_API_BASE_URL || 'https://api.1msg.io',
    CHAT_API_INSTANCE_ID: process.env.CHAT_API_INSTANCE_ID || 'SMOKE_INSTANCE',
    CHAT_API_TOKEN: process.env.CHAT_API_TOKEN || 'SMOKE_TOKEN',
  },
});

const client = new Client({ name: 'smoke', version: '0.0.0' });
await client.connect(transport);
const listed = await client.listTools();
const names = listed.tools.map((t) => t.name);
if (names.length < 3) {
  throw new Error(`expected ≥3 tools, got ${names.join(',')}`);
}
process.stdout.write(`ok tools/list → ${names.join(', ')}\n`);
await client.close();
