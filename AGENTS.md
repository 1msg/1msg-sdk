# Repository quality and ownership

The TypeScript wrapper uses the strict authored TypeScript profile; generated TypeScript uses profile D. Run `npm ci`, `npm --prefix tools/quality ci`, then the scripts in `.github/workflows/quality.yml`. Build and tests are offline and must not contact a live instance. Never publish or deploy as part of quality checks.

`typescript/src/generated/src` is reproduced by `node quality/generator/generate.mjs` from the pinned public contract, OpenAPI Generator 7.22.0 JAR checksum and checksummed TypeScript producer. Edit the contract/producer and intentionally run `--write`; review the entire output inventory. Never hand-edit generated code or broaden ignores.

Authored functions and methods require useful comments explaining purpose, inputs/results and relevant edge cases or I/O. Document ownership, error handling and async lifecycles for AI readers. Keep comments accurate; do not paraphrase the method name. The wrapper owns client configuration; generated API groups own wire serialization. Runtime modules cannot import tests; cycles and unresolved dependencies fail.

Seven other language trees currently have addressed temporary exceptions in `quality/exceptions/inventory.json`, owned by 1MSG SDK maintainers and expiring 2026-12-11 under 1MSG-156. Their generator/build/native tests are **not verified**. CI verifies every byte against the adoption commit and rejects additions (including ignored files), deletions, edits, expiry and exception renewal. Replace an exception with a reviewed native generation/build/contract/package profile before changing that language. A passing exception guard does not mean native tests passed.

Historical Knip, clone and maintainability debt is finding-specific, owned and dated. CI cannot add baselines; new or larger findings fail. Shared preset 1.0.2 is sealed; update it through the common producer, never by local edits.

The `quality-required` aggregate fails on unsuccessful prerequisites. Repository branch protection must separately require this job; workflow naming alone does not enable protection.
