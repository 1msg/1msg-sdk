import assert from 'node:assert/strict';
import test from 'node:test';
import { createExampleServer } from '../src/server.js';

test('registers three representative tools', async () => {
  const server = createExampleServer({
    baseUrl: 'https://api.example.test',
    instanceId: 'TEST',
    token: 'tok',
  });

  // High-level McpServer keeps tools in an internal registry; exercise connect via mock transport.
  const { InMemoryTransport } = await import(
    '@modelcontextprotocol/sdk/inMemory.js'
  );
  const { Client } = await import('@modelcontextprotocol/sdk/client/index.js');

  const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();
  const client = new Client({ name: 'test', version: '0.0.0' });
  await server.connect(serverTransport);
  await client.connect(clientTransport);

  const listed = await client.listTools();
  const names = listed.tools.map((t) => t.name).sort();
  assert.deepEqual(names, ['get_status', 'list_messages', 'send_message']);
});
