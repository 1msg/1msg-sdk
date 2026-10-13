# 1MSG quality template 1.0.11

Vendored, private template for 1MSG-156. Install its exact tools with
`npm --prefix tools/quality ci` on Node 24.19.0. The lockfile and
`template-manifest.json` identify the reviewed version. This package is not
published to npm. Each consumer commits a full copy, its manifest, and its own
`quality.config.mjs` inventory. A version update requires policy review and
real negative fixtures; do not edit/reseal one consumer to hide a violation.

## Profiles and commands

A (Node runtime) and B (UI) require full static and typed ESLint, strict production,
test and tooling typechecks, architecture, debt gates, tests, and production build.
D applies these to authored TypeScript/tooling while each generated language uses
reproducible generation and native build/offline contract tests. C runs formatting
and static lint on every changed/new authored file and ratchets existing debt.
Compiler presets are provided for NodeNext, Next bundler and Svelte bundler;
consumers must include real sources/tests/tooling and the framework's generated types.

Exported `staticConfig`, `typedConfig`, `maintainabilityConfig` compose with the
actual framework preset. Next uses its compatible core-web-vitals + TypeScript
presets and React Hooks; Svelte uses its parser/plugin and `svelte-check` on real
components. Browser globals and Node runtime checks have separate scopes.

`node tools/quality/run.mjs guards` checks source inventory, suppressions, vendored
integrity and documentation for changed functions/private methods/substantive
callbacks plus full pilot roots. Comments explain purpose, effects and constraints;
AST coverage is mechanical, usefulness and accuracy require review. Formatting-only
changes do not create a method change. Meaningless boilerplate does not satisfy review.

Mandatory graph/debt commands: `unused-production`, `unused-full`, `duplicates`.
`duplicates-full` saves the extended tests/fixtures report and fails analyzer errors;
it is a report, not the runtime clone gate. Configure `duplicatePaths`,
`duplicateFullPaths`, exact generated ignores, explicit formats, and an inventoried
numeric `duplicateMaxPercentage`. Detection uses minLines=5, minTokens=50, mild mode.
Clone groups cannot grow even if the overall duplicate percentage falls.

Wrap actual JSON analyzer output with:

- `report --kind eslint --name complexity -- node tools/quality/node_modules/eslint/bin/eslint.js . -c eslint.complexity.config.mjs -f json`
- `report --kind depcruiser --name architecture -- node tools/quality/node_modules/dependency-cruiser/bin/dependency-cruiser.mjs src --config dependency-cruiser.config.cjs --output-type json`

Only maintainability metrics and existing runtime cycles are baselinable through
those report commands. Other static/typed/architecture diagnostics remain fatal.
Knip keeps separate production and full graphs; missing resolvers, empty graphs,
stale exclusions and malformed output are failures. Configure public exports and
dynamic entrypoints explicitly, never declare all source as entrypoints.

## Historical debt

Initial bootstrap is local only and requires owner, expiry, reason and issue:
`--bootstrap --owner TEAM --expires YYYY-MM-DD --reason TEXT --issue URL`.
It reruns the actual analyzer against the trusted Git base using the adopted
configuration. New files, disconnected imports and increased findings cannot be
blessed as historical debt. Replay removes only newly added entry/project patterns
that have no historical source; existing source always comes from Git archive.
Dependencies are shared read-only with the current installation for resolution.

CI supplies the trusted PR base SHA through `QUALITY_BASE` and fetches full history.
After adoption, allowances cannot grow or renew their expiry; reductions and removed
findings must retire allowances. Reports include head/base SHAs and gate outcome.
Never describe a nonempty baseline as a clean codebase.

## CI and local hooks

Run `npm --prefix tools/quality test` as a mandatory independent check. Fixtures
execute actual Knip, jscpd and dependency-cruiser CLIs and verify ratchet growth,
coverage, documentation and malformed reports. Consumers add real typed/framework,
public API, native I/O, SQL, compatibility and generated-drift fixtures as applicable.
`Quality` / `quality-required` must aggregate all applicable checks and fail on any
missing, failed or cancelled required job. Configure this actual job context in
branch protection without removing existing requirements. CI never runs `--fix`.

The pinned Husky/lint-staged dependencies support committed `.husky/pre-commit` and
an explicit repository `hooks:install` command. Keep hooks quick; CI is authoritative.
Do not change shared Git hook configuration of another worktree during verification.

## Updating this template

Change the template at its source, update its version, test actual consumers,
run `node seal.mjs`, copy the complete template, and commit lockfiles and inventory.
Integrity verification prevents hiding authored code under the vendor exemption.
No analyzer flag may depend on CI or a skip-type-aware environment variable.

Version 1.0.2 resolves Svelte embedded clone paths to their physical source while retaining fragment identity. Initial Knip replay omits only the exact current-only sealed vendor ignore; authored stale ignores remain errors.

## Canonical maintainability measurement (1.0.3)

For adoption that includes formatting, run `node tools/quality/complexity.mjs --config eslint.complexity.config.mjs` as the analyzer inside the existing `report --kind eslint --name complexity` gate. Both trusted historical source and current source are independently formatted in memory with the pinned Prettier version and sealed policy before the same ESLint rules execute. Files on disk are never rewritten. This gives line metrics the same unit of measurement; AST complexity and the per-finding ratchet remain enforced. The original Git source hash remains adoption evidence. The JSON report includes canonical source so diagnostic locations identify the correct function after formatting. Formatter/parse failures are fatal. This does not replace `Prettier --check` on the actual checkout.

Existing consumers pinned to 1.0.2 do not need a policy change; 1.0.3 adds the explicit canonical measurement command.

For JS/TS formatting migrations, `duplicateCanonicalFormat: true` measures both trusted base and current source after the same pinned formatter in disposable copies. Declare the supported `duplicateFormats` (`javascript`, `typescript`, `jsx`, `tsx`) and exact ignored dependency/generated paths. Source files stay unchanged. New/grown clone groups still fail even if the aggregate percentage falls. Unsupported framework source, unexpected symlinks, empty coverage or failed formatting are analyzer failures. Report line numbers refer to canonical source fragments.

Version 1.0.6 runs canonical complexity with inline ESLint configuration disabled on both sides. Legacy directives for unrelated framework plugins cannot corrupt metric coverage, and a source comment cannot suppress complexity debt. The separate source suppression guard still enforces the current-code policy. Trusted replay also copies exact Jest config filenames as analyzer inputs, allowing Knip to load current test-runner configuration against historical application and test source. Ordinary source files continue to come exclusively from the trusted Git archive.

Version 1.0.7 parses JS/TS/JSX/TSX with the pinned TypeScript compiler and prints an in-memory, comment-free metric input before pinned Prettier formatting. Comments inside JSX callbacks otherwise change indentation and wrap executable lines, inflating line debt despite `skipComments`. Both current and trusted historical sources use the same normalization; recompute both sides when adopting this version. No rule limits or baseline allowances change. The original files are not rewritten, and strings, regular expressions, template literals and rendered JSX content remain data rather than comment matches. Unsupported source extensions and syntax errors fail closed before recovered syntax can become a metric report.

The 31-test suite includes actual CLI fixtures proving that JSX documentation leaves file/function line metrics unchanged, an added statement still increases those metrics, malformed JS/TSX fails, and canonical string/tagged-template/regular-expression, JSX rendering and automatic-semicolon behavior is preserved. JSX assertions compare rendered text and element order because formatting may split adjacent text nodes. Formatting and documentation guards still inspect the actual checkout. Consumers remaining on sealed 1.0.2 are unchanged by this release.

## Version 1.0.8

Complexity findings use complete lexical ownership (class, function, binding,
property and call argument), independent of emitted diagnostic order. Fixing an
older callback therefore cannot renumber a different callback's allowance.
Ambiguous sibling scopes are tied to ordered, comment-free AST evidence; changed
or indistinguishable groups fail closed. The real CLI fixtures verify both
legitimate debt reduction and rejection of transferred/increased allowances.
Existing consumers must replay historical source with this version when adopting
the new key schema; old diagnostic ordinals are never silently migrated.

## 1.0.9 migration

Complexity identities now retain lexical `for`, `for-in` and `for-of` headers
(binding, source/condition/increment and `await` mode). Identical statements in
different loops no longer collide. Loop bodies, source lines and diagnostic
ordinals do not identify allowances; indistinguishable sibling loops still fail
closed. Consumers must replay their original trusted adoption base with the
updated analyzer, preserving debt owners, deadlines and reasons. Do not translate
baseline keys manually or renew historical debt as part of the version update.

## 1.0.10 migration

Otherwise identical sibling scopes use the nearest distinguishing parsed branch or
block context, including then/else, loop, switch and try/catch/finally roles. This
fallback leaves already unambiguous identities unchanged. The complete ordered
peer evidence remains part of an ambiguous group's identity; swaps, new peers,
growth and fully indistinguishable ancestry cannot borrow another allowance.
ESLint object-property diagnostics resolve the exact property name to its direct
callable initializer. Previously misattributed nested callback metrics now belong
to that callback, rather than its enclosing function. Consumers must replay their
original trusted adoption base; preserve owners, expiry and reasons and never
translate baseline keys manually.

For function documentation only, a syntax error in trusted historical source
removes all inherited function signatures: every current function in that file
must have documentation. Current syntax errors and historical/current I/O,
configuration or Git failures remain fatal. This conservative documentation
fallback does not alter metric analysis, source coverage or debt baselines.

## 1.0.11 migration

Test repositories now initialize their default branch with `git init` followed by
`git symbolic-ref HEAD refs/heads/main`. This works on the older Git installation
used by the self-hosted runner, which does not support `git init -b`. A regression
fixture rejects that unsupported option and replays both actual Git-backed test
families through a subprocess-only Node preload shim; all other Git operations
remain real. The fixture uses no Unix executable or shebang assumptions and does
not modify the runtime Git driver or skip checks on Windows.
Only fixture setup changes: analysis rules, historical identities and baseline
records are unchanged. Copy the complete sealed version without changing debt
owners, reasons, issue links, expiry dates or baseline entries.

## 1.0.12 migration

Suppression detection now scans trivia between parsed TypeScript tokens. A plain
scanner loses context after a template interpolation: it can mistake generated
directive text for a source comment and overlook a real directive after the
template. Parsed template segments, regex bodies and JSX text remain data;
comments inside interpolations/JSX expressions and at EOF remain enforceable.
Positive and negative syntax fixtures and the real guard CLI cover both failure
modes, including scoped exception requirements and Svelte script blocks.
Copy the complete sealed version. Metric identities, source coverage and debt
allowances do not change; rerun guards to detect any previously missed comments.

The staged-file coverage preflight (`staged.mjs --config <eslint-config> --
<files...>`) permits ignored files only when the repository inventory explicitly
declares them or they belong to the verified sealed preset. Run it before ESLint
with `--no-warn-ignored`: this supports preset updates and generated files while
still rejecting an accidentally ignored authored file. An added or altered
unsealed vendor file fails integrity validation; an arbitrary ESLint ignore alone
never grants an exemption.
