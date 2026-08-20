# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

GitHub Releases are created from `vX.Y.Z` tags (see `.github/workflows/changelog.yml`).
Package versions per language are listed in [README.md](./README.md) and
[docs/VERSIONING.md](./docs/VERSIONING.md).

## [Unreleased]

### Changed

- Rewrite the umbrella README with current registry names, pinned install
  commands, and 1MSG company branding.
- Remove the MCP example from this repository. MCP is published separately.
- Align local Rust crate name with crates.io (`one-msg-sdk`).
- Drop “Chat API” from C# package metadata.
- Rename TypeScript `ChatApiClient` / `ChatApiConfig` to `Client` / `ClientConfig`
  (old names remain as deprecated aliases).

## Published packages (2026-08-14)

First public SDK snapshot. There was no GitHub Release or changelog in this
repo before this date. Versions below are what is actually on the registries
(or git tags for Go/Swift).

### Added

- TypeScript `@1msg/sdk` 1.0.2 (npm)
- Python `one-msg-sdk` 1.0.1 (PyPI)
- Java `io.1msg:sdk` 1.0.1 (Maven Central)
- Kotlin `io.1msg:sdk-kotlin` 1.0.2 (Maven Central)
- Scala `io.1msg:sdk-scala` 1.0.2 (Maven Central)
- C# `OneMsg.Sdk` 2.0.0 (NuGet) — 2.0.x after the package rename; patch-only from here
- Rust `one-msg-sdk` 2.0.1 (crates.io) — 2.0.x after the crate rename; patch-only from here
- Ruby `one_msg_sdk` 2.0.1 (RubyGems) — 2.0.x after the gem rename; patch-only from here
- Go `github.com/1msg/1msg-sdk-go` v1.1.0
- Swift `1msg/1msg-sdk-swift` 1.1.0
- PHP `1msg/sdk` 1.1.0 on GitHub (Packagist not published yet)
- C++ `one-msg-sdk` 1.0.0 on GitHub (registry not chosen yet)
