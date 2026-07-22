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
- [npm package](https://www.npmjs.com/package/@1msg/sdk)


## Java

```gradle
implementation("io.1msg:sdk:1.0.0")
```

Source: [`java/`](./java)

**Documentation:**
- [README.md](./java/README.md) — full developer guide
- [AGENTS.md](./java/AGENTS.md) — machine-readable index for AI coding agents
- [Maven Central](https://central.sonatype.com/artifact/io.1msg/sdk)


## Kotlin

```gradle
implementation("io.1msg:sdk-kotlin:1.0.0")
```

Source: [`kotlin/`](./kotlin)

**Documentation:**
- [README.md](./kotlin/README.md) — full developer guide
- [AGENTS.md](./kotlin/AGENTS.md) — machine-readable index for AI coding agents
- [Maven Central](https://central.sonatype.com/artifact/io.1msg/sdk-kotlin)


## Scala

```scala
libraryDependencies += "io.1msg" %% "sdk-scala" % "1.0.0"
```

Source: [`scala/`](./scala)

**Documentation:**
- [README.md](./scala/README.md) — full developer guide
- [AGENTS.md](./scala/AGENTS.md) — machine-readable index for AI coding agents
- [Maven Central](https://central.sonatype.com/artifact/io.1msg/sdk-scala_2.13)


## C#

```bash
dotnet add package OneMsg.ChatApi --version 1.0.0
```

Source: [`csharp/`](./csharp)

**Documentation:**
- [README.md](./csharp/README.md) — full developer guide
- [AGENTS.md](./csharp/AGENTS.md) — machine-readable index for AI coding agents
- [NuGet](https://www.nuget.org/packages/OneMsg.ChatApi)

