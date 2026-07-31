# 1msg Chat API — MCP example

Minimal **stdio** MCP server built on the public [`@1msg/sdk`](https://www.npmjs.com/package/@1msg/sdk) package.

Exposes three tools that match the hosted MCP naming:

| Tool | SDK method |
|------|------------|
| `get_status` | `client.channel.getStatus` |
| `list_messages` | `client.messaging.listMessages` |
| `send_message` | `client.sendMessage` |

For the **full 60-tool** surface, use the hosted endpoints:

- Stage: `https://mcp.stage.1msg.io/mcp`
- Prod: `https://mcp.1msg.io/mcp`

(or regenerate tools from the public OpenAPI in the Chat API monorepo).

## Quick start (≤5 minutes)

```bash
cd examples/mcp
cp .env.example .env
# edit .env with your channel instance id + token

npm install
npm start
```

## Cursor

Copy `mcp.json.example` into `.cursor/mcp.json` (adjust `cwd` to an absolute path), or:

```json
{
  "mcpServers": {
    "1msg-example": {
      "command": "npm",
      "args": ["start"],
      "cwd": "/absolute/path/to/1msg-sdk/examples/mcp",
      "env": {
        "CHAT_API_BASE_URL": "https://api.1msg.io",
        "CHAT_API_INSTANCE_ID": "YOUR_INSTANCE_ID",
        "CHAT_API_TOKEN": "YOUR_CHANNEL_TOKEN"
      }
    }
  }
}
```

Prefer loading secrets from the shell environment instead of committing tokens.

## Claude Desktop

Same `mcpServers` block in Claude Desktop MCP config (`claude_desktop_config.json`).

## Hosted MCP (no local process)

```json
{
  "mcpServers": {
    "1msg": {
      "url": "https://mcp.1msg.io/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_CHANNEL_TOKEN",
        "X-Instance-Id": "YOUR_INSTANCE_ID"
      }
    }
  }
}
```

## Environment

| Variable | Description |
|----------|-------------|
| `CHAT_API_BASE_URL` | API root, e.g. `https://api.1msg.io` |
| `CHAT_API_INSTANCE_ID` | Channel instance id |
| `CHAT_API_TOKEN` | Channel API token |

## Security / scope

- Tools use the **same permissions** as your channel API token.
- Never commit `.env` or real tokens.
- Do not log tokens or message bodies in wrappers you add.

## Scripts

```bash
npm run lint
npm test
npm run smoke:tools-list
```

## License

MIT (same as [`1msg-sdk`](../../LICENSE)).
