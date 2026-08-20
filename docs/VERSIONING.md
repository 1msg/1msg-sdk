# SDK versioning

## What “API version” means

`1msg-api` has three numbers that look like versions:

| Number | Where | What it is |
|--------|-------|------------|
| `v3.3.0` | git tags + `CHANGELOG.md` | Service / deploy version of 1msg-api |
| `1.0.0` | `public/openapi.bundled.yaml` `info.version` | Public API **contract** customers integrate against |
| `1.0.1` | root / Nest `package.json` | Stale npm workspace field; not the release number |

SDK packages track the **public contract** (`1.0.x`), not the service tag
(`v3.3.0`). Jumping every SDK to `3.3.0` would be a fake major and would not
match the OpenAPI document customers generate from.

## Registry rule

Most registries refuse to replace an already-published version. If a publish
must be repeated (docs, rename, metadata):

- stay on the same major.minor as the public contract
- bump only the **patch** (last of the three digits)

Example: `1.0.0` → `1.0.1` → `1.0.2`. Not `2.0.0`.

## Already-published exceptions

C#, Rust, and Ruby were republished under new names after dropping “Chat API”
from the package id. Those registries already have `2.0.x`. Those lines stay
on `2.0.x`; further republishes are patch-only (`2.0.1`, `2.0.2`, …).

Go and Swift tags are already at `1.1.1`. Do not open a new minor for
docs-only republishes; next bump there is `1.1.2` unless the public contract
changes.

PHP and C++ are not on a public registry yet. Git tags are `1.1.1` (PHP) and
`1.0.1` (C++). First Packagist / Conan release can still start at `1.0.0`.

## Kotlin / Scala Java package

Maven coordinates stay `io.1msg:sdk-kotlin` / `io.1msg:sdk-scala_*`.
The Java package inside the jar cannot be `io.1msg` (a segment cannot start
with a digit), so it is `io.onemsg.sdk` — the same namespace as the Java SDK.

Published `1.0.3` artifacts use `io.onemsg.sdk`. Older `1.0.2` jars still
use `io.onemsg.chat` — a breaking import change for anyone upgrading 1.0.2 → 1.0.3.

## Umbrella GitHub Releases

This repository’s `vX.Y.Z` tags document the SDK umbrella (README, changelog,
synced clients). They are created with **Create release tag** and turned into
GitHub Releases + `CHANGELOG.md` by the Changelog workflow — the same pattern
as `1msg-api`.
