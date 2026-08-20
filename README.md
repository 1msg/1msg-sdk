# 1MSG SDK

Official client SDKs for the [1MSG](https://1msg.io) WhatsApp Business API.

| | |
|---|---|
| **API docs** | [docs.1msg.io](https://docs.1msg.io/) |
| **Platform** | [platform.1msg.io](https://platform.1msg.io/) |
| **Quick start** | [help.1msg.io](https://help.1msg.io/platform-1msg/getting-start/quick-start) |
| **Changelog** | [CHANGELOG.md](./CHANGELOG.md) |
| **Versioning** | [docs/VERSIONING.md](./docs/VERSIONING.md) |
| **Support** | support@1msg.io |

Public OpenAPI contract: `1.0.0`. 1MSG API service (git tags): `v3.2.6`.
SDK packages track the public contract (`1.0.x`). Where a registry already
required a republish after the package rename, the published line is `2.0.x`
and further bumps are patch-only.

Auth on every request:

```text
https://{baseUrl}/{instanceId}/{path}?token={token}
```

Use `MSG_API_TOKEN` and `MSG_INSTANCE_ID`. Never commit tokens.

---

## TypeScript / JavaScript

Package: [`@1msg/sdk`](https://www.npmjs.com/package/@1msg/sdk)

```bash
npm install @1msg/sdk@1.0.2
```

```typescript
import { createClient } from '@1msg/sdk';

const client = createClient({
  baseUrl: 'https://api.1msg.io',
  instanceId: process.env.MSG_INSTANCE_ID!,
  token: process.env.MSG_API_TOKEN!,
});

await client.sendMessage({ body: 'Hello', chatId: '12020721369@c.us' });
```

Source: [`typescript/`](./typescript) · [README](./typescript/README.md) · [AGENTS.md](./typescript/AGENTS.md)

## Python

Package: [`one-msg-sdk`](https://pypi.org/project/one-msg-sdk/)

```bash
pip install one-msg-sdk==1.0.1
```

Source: [`python/`](./python) · [README](./python/README.md)

## Java

Package: [`io.1msg:sdk`](https://central.sonatype.com/artifact/io.1msg/sdk)

```gradle
implementation("io.1msg:sdk:1.0.1")
```

Source: [`java/`](./java) · [README](./java/README.md)

## Kotlin

Package: [`io.1msg:sdk-kotlin`](https://central.sonatype.com/artifact/io.1msg/sdk-kotlin)

```gradle
implementation("io.1msg:sdk-kotlin:1.0.2")
```

Source: [`kotlin/`](./kotlin) · [README](./kotlin/README.md)

## Scala

Package: [`io.1msg:sdk-scala`](https://central.sonatype.com/artifact/io.1msg/sdk-scala_2.13)

```scala
libraryDependencies += "io.1msg" %% "sdk-scala" % "1.0.2"
```

Source: [`scala/`](./scala) · [README](./scala/README.md)

## C#

Package: [`OneMsg.Sdk`](https://www.nuget.org/packages/OneMsg.Sdk)

```bash
dotnet add package OneMsg.Sdk --version 2.0.0
```

Source: [`csharp/`](./csharp) · [README](./csharp/README.md)

## Rust

Package: [`one-msg-sdk`](https://crates.io/crates/one-msg-sdk)

```bash
cargo add one-msg-sdk@2.0.1
```

Source: [`rust/`](./rust) · [README](./rust/README.md)

## Ruby

Package: [`one_msg_sdk`](https://rubygems.org/gems/one_msg_sdk)

```bash
gem install one_msg_sdk -v 2.0.1
```

Source: [`ruby/`](./ruby) · [README](./ruby/README.md)

## Go

Module: [`github.com/1msg/1msg-sdk-go`](https://pkg.go.dev/github.com/1msg/1msg-sdk-go)

```bash
go get github.com/1msg/1msg-sdk-go@v1.1.0
```

Source: [github.com/1msg/1msg-sdk-go](https://github.com/1msg/1msg-sdk-go)

## Swift

Package: [`OneMsgSdk`](https://github.com/1msg/1msg-sdk-swift)

```swift
.package(url: "https://github.com/1msg/1msg-sdk-swift.git", from: "1.1.0")
```

Source: [github.com/1msg/1msg-sdk-swift](https://github.com/1msg/1msg-sdk-swift)

## PHP

Package: `1msg/sdk` (GitHub; Packagist not published yet)

```bash
composer config repositories.1msg vcs https://github.com/1msg/1msg-sdk-php
composer require 1msg/sdk:^1.1.0
```

Source: [github.com/1msg/1msg-sdk-php](https://github.com/1msg/1msg-sdk-php)

## C++

Package: `one-msg-sdk` (Git / CMake; Conan/vcpkg not chosen yet)

```bash
git clone https://github.com/1msg/1msg-sdk-cpp.git
```

Source: [github.com/1msg/1msg-sdk-cpp](https://github.com/1msg/1msg-sdk-cpp)

---

## Published versions

| Language | Registry name | Version |
|----------|---------------|---------|
| TypeScript | `@1msg/sdk` | 1.0.2 |
| Python | `one-msg-sdk` | 1.0.1 |
| Java | `io.1msg:sdk` | 1.0.1 |
| Kotlin | `io.1msg:sdk-kotlin` | 1.0.2 |
| Scala | `io.1msg:sdk-scala` | 1.0.2 |
| C# | `OneMsg.Sdk` | 2.0.0 |
| Rust | `one-msg-sdk` | 2.0.1 |
| Ruby | `one_msg_sdk` | 2.0.1 |
| Go | `github.com/1msg/1msg-sdk-go` | v1.1.0 |
| Swift | `1msg/1msg-sdk-swift` | 1.1.0 |
| PHP | `1msg/sdk` | 1.1.0 (repo) |
| C++ | `one-msg-sdk` | 1.0.0 (repo) |
