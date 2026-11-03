# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.1] - 2026-11-03

### Build & CI

- **sdk:** Publish reviewed TypeScript artifacts with npm OIDC


### Miscellaneous

- Migrate repository tooling to Node 24 and pnpm (#7) * chore: migrate repository tooling to Node 24 and pnpm * fix: declare SDK test Node types for strict pnpm installs


### Other

- Merge pull request #6 from 1msg/codex/sdk-trusted-publishing ci(sdk): publish reviewed TypeScript artifacts with npm OIDC

## [1.1.0] - 2026-11-02

### Added

- Enforce SDK TypeScript quality and freeze deferred native profiles


### Build & CI

- **quality:** Replay historical complexity with sealed analyzer 1.0.8

- **quality:** Replay sealed lexical scope analysis

- **quality:** Merge 1MSG-156 improvements (#4) 1MSG-156: enforce SDK TypeScript quality and native adoption inventory


### Documentation

- Pin C# 2.0.1 and Ruby 2.0.2 after registry publishes Co-authored-by: Cursor <cursoragent@cursor.com>


### Fixed

- Restore umbrella README, changelog, and language trees TypeScript/Java/Kotlin/Scala syncs wiped 1msg-sdk down to four languages. Restore docs and C#/Python/Rust/Ruby sources so the public repo matches the 1MSG SDK announce again. Co-authored-by: Cursor <cursoragent@cursor.com>

- **quality:** Support older Git in shared fixtures

- **quality:** Parse suppression comments with template context


### Miscellaneous

- **csharp:** Sync OneMsg.Sdk v2.0.1

- Sync Python 1.0.2, Rust 2.0.2, and Ruby 2.0.2 sources Registry publishes already landed; the public trees were still on the previous patch after language-sync jobs failed on the CI runner. Co-authored-by: Cursor <cursoragent@cursor.com>

- **typescript:** Sync @1msg/sdk v1.0.4

- **quality:** Adopt sealed analyzer 1.0.10

- **quality:** Enforce authored extension coverage in hooks and CI

- **sdk:** Replay current API contract and record verified producer provenance

- **sdk:** Prepare 1.0.5 release metadata

- **sdk:** Merge verified 1.0.5 release preparation chore(sdk): prepare TypeScript 1.0.5 release artifact

## [1.0.3] - 2026-08-20

### Changed

- Drop ChatApi aliases and move Kotlin/Scala to io.onemsg.sdk Co-authored-by: Cursor <cursoragent@cursor.com>


### Documentation

- Add full README + AGENTS.md for Java, Kotlin, Scala, C# Mirror TypeScript-style OpenAPI docs with registry links for Maven Central and NuGet. Co-authored-by: Cursor <cursoragent@cursor.com>

- Bump C# and Python install versions in root README Align NuGet OneMsg.Sdk to 2.0.0 and Python one-msg-sdk to 1.0.1. Co-authored-by: Cursor <cursoragent@cursor.com>

- Point service tag at 1msg-api v3.2.6 Co-authored-by: Cursor <cursoragent@cursor.com>

- 1MSG POM names and note published Kotlin/Scala still use io.onemsg.chat Co-authored-by: Cursor <cursoragent@cursor.com>


### Fixed

- Fix test

- **csharp:** Restore OneMsg.Sdk sources after bad sync


### Miscellaneous

- **typescript:** Sync @1msg/sdk v1.0.0 Co-authored-by: Cursor <cursoragent@cursor.com>

- **typescript:** Sync @1msg/sdk v1.0.1

- **java:** Sync io.1msg:sdk v1.0.0

- **kotlin:** Sync io.1msg:sdk-kotlin v1.0.0

- **scala:** Sync io.1msg:sdk-scala v1.0.0

- **csharp:** Sync OneMsg.ChatApi v1.0.0

- **typescript:** Sync @1msg/sdk v1.0.2

- **java:** Sync io.1msg:sdk v1.0.1

- **kotlin:** Sync io.1msg:sdk-kotlin v1.0.2

- **scala:** Sync io.1msg:sdk-scala v1.0.2

- **csharp:** Sync OneMsg.ChatApi v1.0.2

- **python:** Sync one-msg-sdk v1.0.0 Co-authored-by: Cursor <cursoragent@cursor.com>

- **sdk:** Sync exhaustive README/AGENTS for python, rust, ruby Co-authored-by: Cursor <cursoragent@cursor.com>

- **csharp:** Rename NuGet package to OneMsg.Sdk v2.0.0

- **csharp:** Sync OneMsg.Sdk v2.0.0

- **typescript:** Sync @1msg/sdk v1.0.3

- **java:** Sync io.1msg:sdk v1.0.2

- **kotlin:** Sync io.1msg:sdk-kotlin v1.0.3

- **scala:** Sync io.1msg:sdk-scala v1.0.3


### Other

- Initial commit

- Add a new Swagger file for the 1msg.io WhatsApp management tool API + basic js sdk

- Add detailed documentation for new PHP

- Removed .openapi-generator-ignore from .openapi-generator/FILES. Removed numerous Test files. Added an empty constant 'VERTICAL_EMPTY' in MeComponents.php, GetMe.php, and SetMeRequest.php. Added "name": "1msg/one_msg_waba_sdk" in composer.json.

- Remove outdated API documentation files

- Added c, cpp, csharp, java, python raw generated clients

-  csharp update

-  csharp update

- Added README and updated dependencies for C# SDK

- Added README and updated dependencies for C# SDK

- Added README and updated dependencies for C# SDK

- Added README and updated dependencies for C# SDK

- Added README and updated dependencies for C# SDK

- Update C# SDK version and improved README documentation.

- Minor change

- Change name

- Merge remote-tracking branch 'origin/main'

- Add typescript sdk

- Add typescript sdk

- Add python and java sdk

- Change name

- Change name

- Add package

- Update TypeScriptSdk + switch default sending method to json, changed phone type to string

- Change constructor for typescript

- Change constructor for typescript

- Add minimal Chat API MCP example under examples/mcp. (#2) Provide a forkable stdio MCP server on @1msg/sdk with three representative tools, README quick start, and CI lint/smoke. Co-authored-by: Cursor <cursoragent@cursor.com>

- Prepare public SDK docs for announcement and drop MCP from this repo. Customer-facing README was stale: mixed versions, generator names, Chat API wording, and an MCP example that belongs in a separate product. Add changelog and GitHub Release workflows, and keep deprecated TypeScript aliases. Co-authored-by: Cursor <cursoragent@cursor.com>

- Merge pull request #3 from 1msg/docs/1msg-63-sdk-announce Prepare public SDK docs and changelog for announcement


