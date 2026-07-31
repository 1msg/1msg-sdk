import { z } from 'zod';
import { createClient } from '@1msg/sdk';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

function textResult(value) {
  return {
    content: [
      {
        type: 'text',
        text: typeof value === 'string' ? value : JSON.stringify(value, null, 2),
      },
    ],
  };
}

function errorResult(error) {
  return {
    isError: true,
    content: [
      {
        type: 'text',
        text: error instanceof Error ? error.message : String(error),
      },
    ],
  };
}

/**
 * Minimal MCP server: three representative tools backed by @1msg/sdk.
 * Full hosted surface (60 tools) lives at mcp.1msg.io / mcp.stage.1msg.io.
 */
export function createExampleServer(config) {
  const client = createClient(config);
  const server = new McpServer({
    name: '1msg-chat-api-mcp-example',
    version: '1.0.0',
  });

  server.registerTool(
    'get_status',
    {
      description: 'Get WhatsApp channel / connection status (SDK: channel.getStatus).',
      inputSchema: {},
    },
    async () => {
      try {
        return textResult(await client.channel.getStatus(client.config.token));
      } catch (error) {
        return errorResult(error);
      }
    },
  );

  server.registerTool(
    'list_messages',
    {
      description: 'List recent messages for the channel (SDK: messaging.listMessages).',
      inputSchema: {},
    },
    async () => {
      try {
        return textResult(await client.messaging.listMessages(client.config.token));
      } catch (error) {
        return errorResult(error);
      }
    },
  );

  server.registerTool(
    'send_message',
    {
      description: 'Send a text message (SDK: client.sendMessage).',
      inputSchema: {
        body: z.string().describe('Message text'),
        chatId: z.string().optional().describe('Chat id, e.g. 12025550123@c.us'),
        phone: z.number().optional().describe('Phone as number, alternative to chatId'),
        quotedMsgId: z.string().optional().describe('Optional quoted message id'),
      },
    },
    async ({ body, chatId, phone, quotedMsgId }) => {
      try {
        return textResult(
          await client.sendMessage({ body, chatId, phone, quotedMsgId }),
        );
      } catch (error) {
        return errorResult(error);
      }
    },
  );

  return server;
}
