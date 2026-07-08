# @1msg/sdk

TypeScript SDK for the **1msg WhatsApp API** (public operations).

> **Source:** [github.com/1msg/1msg-sdk](https://github.com/1msg/1msg-sdk)

## Install

```bash
npm install @1msg/sdk
```

## Quick start

```typescript
import { createClient } from '@1msg/sdk';

const client = createClient({
  baseUrl: 'https://api.1msg.io',
  instanceId: 'YOUR_INSTANCE_ID',
  token: process.env.MSG_API_TOKEN!,
});

await client.sendMessage({ body: 'Hello', chatId: '12020721369@c.us' });
const profile = await client.profile.getMe(client.config.token);
```

## Auth pattern

```text
https://{baseUrl}/{instanceId}/{path}?token={token}
```

## API groups

`messaging` · `profile` · `groups` · `flows` · `templates` — plus `sendMessage()` helper.

## License

MIT
