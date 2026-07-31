#!/usr/bin/env node
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { loadConfig } from './config.js';
import { createExampleServer } from './server.js';

function printHelp() {
  const lines = [
    '1msg Chat API MCP example (stdio)',
    '',
    'Usage: npm start',
    '',
    'Required env:',
    '  CHAT_API_BASE_URL      e.g. https://api.1msg.io',
    '  CHAT_API_INSTANCE_ID   your channel instance id',
    '  CHAT_API_TOKEN         your channel API token',
    '',
    'See README.md and mcp.json.example.',
  ];
  process.stdout.write(`${lines.join('\n')}\n`);
}

async function main(argv) {
  if (argv.includes('--help') || argv.includes('-h')) {
    printHelp();
    return 0;
  }

  const config = loadConfig();
  const server = createExampleServer(config);
  const transport = new StdioServerTransport();
  await server.connect(transport);
  return 0;
}

main(process.argv.slice(2)).catch((error) => {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
});
