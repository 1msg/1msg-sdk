import { relative, isAbsolute } from 'node:path';
import { existsSync } from 'node:fs';
import ts from 'typescript';
import { currentFile } from './git.mjs';
import { digest, record } from './baseline.mjs';

/** Convert report paths to portable repository paths; external paths are not silently accepted. */
export function repoPath(path) {
  if (typeof path !== 'string' || !path)
    throw new Error('Analyzer returned a missing file path');
  const normalized = (isAbsolute(path) ? relative(process.cwd(), path) : path)
    .replaceAll('\\', '/')
    .replace(/^\.\//, '');
  if (normalized === '..' || normalized.startsWith('../'))
    throw new Error(`Analyzer escaped repository: ${path}`);
  return normalized;
}

/** Preserve all enabled Knip issue categories and distinguish separate symbols in the same file. */
export function knipRecords(report) {
  if (!report || !Array.isArray(report.issues))
    throw new Error('Invalid Knip JSON schema');
  const results = [];
  for (const row of report.issues) {
    const path = repoPath(row.file);
    for (const [type, issues] of Object.entries(row)) {
      if (['file', 'owners'].includes(type)) continue;
      if (!Array.isArray(issues))
        throw new Error(`Invalid Knip category: ${type}`);
      const grouped = new Map();
      for (const issue of issues) {
        const symbols = (Array.isArray(issue) ? issue : [issue]).map(
          (item) => item.name ?? item.symbol,
        );
        if (symbols.some((symbol) => typeof symbol !== 'string'))
          throw new Error(`Invalid Knip symbol: ${path}/${type}`);
        const symbol = symbols.sort().join(',');
        grouped.set(symbol, (grouped.get(symbol) ?? 0) + 1);
      }
      for (const [symbol, count] of grouped)
        results.push(
          record(`${path}|${type}|${symbol}`, count, {
            path,
            rule: type,
            symbol,
          }),
        );
    }
  }
  return results.sort((a, b) => a.key.localeCompare(b.key));
}

/** Normalize token evidence without stripping string values or treating comments as meaningful duplicates. */
export function tokenFingerprint(fragment) {
  const scanner = ts.createScanner(
    ts.ScriptTarget.Latest,
    true,
    ts.LanguageVariant.JSX,
    fragment,
  );
  const tokens = [];
  for (
    let token = scanner.scan();
    token !== ts.SyntaxKind.EndOfFileToken;
    token = scanner.scan()
  ) {
    tokens.push([token, scanner.getTokenText()]);
  }
  return digest(JSON.stringify(tokens));
}

/** Parse actual dependency-cruiser output; only pre-existing runtime cycles may be tracked as debt. */
export function architectureRecords(report) {
  if (
    !Array.isArray(report?.modules) ||
    !report.modules.length ||
    !report.summary?.totalCruised ||
    !Array.isArray(report.summary.violations)
  )
    throw new Error('dependency-cruiser returned invalid/empty coverage');
  const cycles = new Map();
  for (const violation of report.summary.violations) {
    if (
      violation.type !== 'cycle' ||
      violation.rule?.name !== 'no-runtime-cycles' ||
      !Array.isArray(violation.cycle) ||
      !violation.cycle.length
    ) {
      throw new Error(
        `Non-baselinable architecture violation: ${violation.rule?.name}: ${violation.from} -> ${violation.to}`,
      );
    }
    const members = violation.cycle.map((member) => repoPath(member.name));
    const rotations = members.map((_, index) =>
      [...members.slice(index), ...members.slice(0, index)].join(' -> '),
    );
    const key = `no-runtime-cycles|${rotations.sort()[0]}`;
    cycles.set(
      key,
      record(key, 1, {
        rule: 'no-runtime-cycles',
        paths: [...new Set(members)].sort(),
      }),
    );
  }
  return [...cycles.values()].sort((a, b) => a.key.localeCompare(b.key));
}

/** Resolve jscpd's embedded Svelte fragments to an existing source while retaining their language identity. */
function duplicateSource(path) {
  const participant = repoPath(path);
  const embedded =
    /^(.*\.svelte):(html|css|scss|sass|less|stylus|javascript|typescript|jsx|tsx)$/.exec(
      participant,
    );
  if (!embedded) {
    if (/\.svelte:/.test(participant))
      throw new Error(`Unknown Svelte clone fragment: ${participant}`);
    return { path: participant, participant, embedded: false };
  }
  const source = embedded[1];
  if (!existsSync(source))
    throw new Error(`Missing Svelte clone source: ${source}`);
  return { path: source, participant, embedded: true };
}

/** Identify clone groups by normalized code and participants, so unrelated unique code cannot dilute violations. */
export function duplicateRecords(report) {
  if (
    !report ||
    !Array.isArray(report.duplicates) ||
    !report.statistics?.total?.sources
  ) {
    throw new Error('jscpd report is missing or has empty source coverage');
  }
  const grouped = new Map();
  for (const clone of report.duplicates) {
    const first = duplicateSource(clone.firstFile?.name);
    const second = duplicateSource(clone.secondFile?.name);
    let fragment = clone.fragment;
    if (typeof fragment !== 'string') {
      if (first.embedded || second.embedded)
        throw new Error('jscpd omitted embedded fragment evidence');
      const source = currentFile(first.path);
      if (
        source === null ||
        !Number.isInteger(clone.firstFile.start) ||
        !Number.isInteger(clone.firstFile.end)
      ) {
        throw new Error('jscpd omitted clone evidence');
      }
      fragment = source
        .split(/\r?\n/)
        .slice(clone.firstFile.start - 1, clone.firstFile.end)
        .join('\n');
    }
    const fingerprint = `${clone.format}|${tokenFingerprint(fragment)}`;
    const group = grouped.get(fingerprint) ?? {
      paths: new Set(),
      participants: new Set(),
      pairs: 0,
      tokens: 0,
    };
    group.paths.add(first.path);
    group.paths.add(second.path);
    group.participants.add(first.participant);
    group.participants.add(second.participant);
    group.pairs++;
    group.tokens = Math.max(group.tokens, clone.tokens ?? 0);
    grouped.set(fingerprint, group);
  }
  return [...grouped]
    .map(([fingerprint, group]) => {
      const paths = [...group.paths].sort();
      const participants = [...group.participants].sort();
      return record(`${fingerprint}|${participants.join('|')}`, group.pairs, {
        paths,
        ...(participants.some((path) => /\.svelte:/.test(path))
          ? { participants }
          : {}),
        tokens: group.tokens,
      });
    })
    .sort((a, b) => a.key.localeCompare(b.key));
}

/** Locate the enclosing declaration for an ESLint diagnostic without using unstable line numbers as identity. */
function scopeAt(source, line, column) {
  const offset = source.getPositionOfLineAndCharacter(
    Math.max(0, line - 1),
    Math.max(0, column - 1),
  );
  let scope = '<file>';
  const visit = (node) => {
    if (node.pos <= offset && node.end >= offset) {
      if (ts.isFunctionLike(node))
        scope =
          node.name?.getText(source) ??
          node.parent.name?.getText(source) ??
          '<callback>';
      ts.forEachChild(node, visit);
    }
  };
  visit(source);
  return scope;
}

/** Only complexity diagnostics may use a debt baseline; parser, typed and correctness errors remain fatal. */
export function eslintRecords(report) {
  if (!Array.isArray(report) || report.length === 0)
    throw new Error('ESLint returned empty source coverage');
  const allowed = new Set([
    'complexity',
    'max-depth',
    'max-params',
    'max-lines',
    'max-lines-per-function',
    'sonarjs/cognitive-complexity',
  ]);
  const results = [];
  for (const file of report) {
    const path = repoPath(file.filePath);
    if (!Array.isArray(file.messages)) throw new Error('Invalid ESLint report');
    const source = ts.createSourceFile(
      path,
      currentFile(path) ?? '',
      ts.ScriptTarget.Latest,
      true,
    );
    const occurrences = new Map();
    for (const message of file.messages) {
      if (message.fatal || !allowed.has(message.ruleId)) {
        throw new Error(
          `${path}: non-baselinable ${message.ruleId ?? 'parser'}: ${message.message}`,
        );
      }
      const metricPatterns = {
        complexity: /complexity of (\d+)/i,
        'max-depth': /(?:nested too deeply|maximum allowed).*?\((\d+)\)/i,
        'max-params': /too many parameters \((\d+)\)/i,
        'max-lines': /too many lines \((\d+)\)/i,
        'max-lines-per-function': /too many lines \((\d+)\)/i,
        'sonarjs/cognitive-complexity': /complexity from (\d+)/i,
      };
      const values = metricPatterns[message.ruleId].exec(message.message);
      if (!values)
        throw new Error(`No metric in ESLint diagnostic: ${message.message}`);
      const scope =
        message.ruleId === 'max-lines'
          ? '<file>'
          : scopeAt(source, message.line ?? 1, message.column ?? 1);
      const identity = `${path}|${message.ruleId}|${scope}`;
      const occurrence = occurrences.get(identity) ?? 0;
      occurrences.set(identity, occurrence + 1);
      results.push(
        record(`${identity}|${occurrence}`, Number(values[1]), {
          path,
          rule: message.ruleId,
          scope,
        }),
      );
    }
  }
  return results.sort((a, b) => a.key.localeCompare(b.key));
}
