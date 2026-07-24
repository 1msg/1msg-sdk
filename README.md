# 1msg SDK

Public SDKs for [1msg.io](https://1msg.io) extended WhatsApp API.

## TypeScript / JavaScript

```bash
npm install @1msg/sdk
```

```typescript
import { createClient } from '@1msg/sdk';

const client = createClient({
  baseUrl: 'https://api.1msg.io',
  instanceId: 'YOUR_INSTANCE_ID',
  token: process.env.MSG_API_TOKEN!,
});

await client.sendMessage({ body: 'Hello', chatId: '12020721369@c.us' });
```

Source: [`typescript/`](./typescript)

**Documentation:**
- [README.md](./typescript/README.md) — full developer guide
- [AGENTS.md](./typescript/AGENTS.md) — machine-readable index for AI coding agents

## Other languages

Additional SDKs will be published gradually to their respective package registries.
See the [1msg Developers Platform](https://1msg.io) for install commands.

## Java

```gradle
implementation("io.1msg:sdk:1.0.1")
```

Source: [`java/`](./java)
