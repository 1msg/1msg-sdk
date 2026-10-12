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

/** Fingerprint parsed syntax without comments, retaining literal and template text that can change callback behavior. */
function syntaxFingerprint(node, source) {
  const tokens = [];
  /** Preserve parser token boundaries, including template substitutions, instead of rescanning a context-free fragment. */
  function visit(current) {
    if (
      current.kind >= ts.SyntaxKind.FirstJSDocNode &&
      current.kind <= ts.SyntaxKind.LastJSDocNode
    )
      return;
    const children = current.getChildren(source);
    if (children.length) {
      for (const child of children) visit(child);
    } else if (current.kind !== ts.SyntaxKind.SyntaxList) {
      tokens.push([current.kind, current.getText(source)]);
    }
  }
  visit(node);
  return digest(JSON.stringify(tokens));
}

/** Identify a callable expression without incorporating the bodies or mutable arguments of other callbacks in its chain. */
function callTarget(node, source) {
  if (
    ts.isParenthesizedExpression(node) ||
    ts.isAsExpression(node) ||
    ts.isTypeAssertionExpression(node) ||
    ts.isNonNullExpression(node) ||
    ts.isSatisfiesExpression(node)
  )
    return callTarget(node.expression, source);
  if (ts.isIdentifier(node)) return ['identifier', node.text];
  if (node.kind === ts.SyntaxKind.ThisKeyword) return ['this'];
  if (node.kind === ts.SyntaxKind.SuperKeyword) return ['super'];
  if (ts.isPropertyAccessExpression(node))
    return ['member', callTarget(node.expression, source), node.name.text];
  if (ts.isElementAccessExpression(node))
    return [
      'element',
      callTarget(node.expression, source),
      syntaxFingerprint(node.argumentExpression, source),
    ];
  if (ts.isCallExpression(node) || ts.isNewExpression(node))
    return [ts.SyntaxKind[node.kind], callTarget(node.expression, source)];
  if (ts.isFunctionLike(node))
    return [
      ts.SyntaxKind[node.kind],
      node.name?.getText(source) ?? '<anonymous>',
    ];
  return ['expression', syntaxFingerprint(node, source)];
}

/** Keep ordinary binding names readable while preserving computed and destructured names without formatting-sensitive text. */
function ownerName(node, source) {
  if (ts.isIdentifier(node) || ts.isPrivateIdentifier(node)) return node.text;
  if (ts.isStringLiteralLike(node) || ts.isNumericLiteral(node))
    return ['literal', node.text];
  return ['computed', syntaxFingerprint(node, source)];
}

/** Include named owners, lexical loop bindings and call argument positions without source lines or diagnostic order. */
function lexicalOwners(node, source) {
  const owners = [];
  let child;
  for (
    let current = node;
    current && !ts.isSourceFile(current);
    current = current.parent
  ) {
    if (ts.isForOfStatement(current) || ts.isForInStatement(current)) {
      owners.push([
        ts.SyntaxKind[current.kind],
        syntaxFingerprint(current.initializer, source),
        syntaxFingerprint(current.expression, source),
        ts.isForOfStatement(current) && current.awaitModifier
          ? 'await'
          : 'sync',
        child === current.statement ? 'body' : 'header',
      ]);
    } else if (ts.isForStatement(current)) {
      owners.push([
        ts.SyntaxKind[current.kind],
        current.initializer
          ? syntaxFingerprint(current.initializer, source)
          : null,
        current.condition ? syntaxFingerprint(current.condition, source) : null,
        current.incrementor
          ? syntaxFingerprint(current.incrementor, source)
          : null,
        child === current.statement ? 'body' : 'header',
      ]);
    } else if (ts.isCallExpression(current) || ts.isNewExpression(current)) {
      const argument = current.arguments?.indexOf(child) ?? -1;
      owners.push([
        ts.SyntaxKind[current.kind],
        callTarget(current.expression, source),
        argument < 0 ? 'callee' : argument,
      ]);
    } else if (
      ts.isBinaryExpression(current) &&
      current.operatorToken.kind >= ts.SyntaxKind.FirstAssignment &&
      current.operatorToken.kind <= ts.SyntaxKind.LastAssignment
    ) {
      owners.push(['assignment', callTarget(current.left, source)]);
    } else if (ts.isFunctionLike(current) || ts.isClassLike(current)) {
      owners.push([
        ts.SyntaxKind[current.kind],
        current.name ? ownerName(current.name, source) : '<anonymous>',
        current.modifiers?.some(
          (modifier) => modifier.kind === ts.SyntaxKind.StaticKeyword,
        )
          ? 'static'
          : 'instance',
      ]);
    } else if (current.name) {
      owners.push([
        ts.SyntaxKind[current.kind],
        ownerName(current.name, source),
      ]);
    } else if (
      ts.isJsxOpeningElement(current) ||
      ts.isJsxSelfClosingElement(current)
    ) {
      owners.push(['jsx', current.tagName.getText(source)]);
    }
    child = current;
  }
  return owners.reverse();
}

/** Recognize independently reported nesting nodes; sibling blocks must not share a function's depth allowance. */
function isDepthScope(node) {
  return [
    ts.SyntaxKind.IfStatement,
    ts.SyntaxKind.ForStatement,
    ts.SyntaxKind.ForInStatement,
    ts.SyntaxKind.ForOfStatement,
    ts.SyntaxKind.WhileStatement,
    ts.SyntaxKind.DoStatement,
    ts.SyntaxKind.SwitchStatement,
    ts.SyntaxKind.TryStatement,
    ts.SyntaxKind.WithStatement,
  ].includes(node.kind);
}

/** Index all lexical scopes, including functions below lint thresholds, so disappearing diagnostics cannot renumber another allowance. */
function scopeIdentities(source, depth = false) {
  const groups = new Map();
  /** Inventory complete syntax before resolving any diagnostic, keeping below-threshold siblings in ambiguity decisions. */
  function visit(node) {
    const included = depth
      ? isDepthScope(node)
      : (ts.isFunctionLike(node) && node.body) ||
        ts.isClassStaticBlockDeclaration(node) ||
        (ts.isPropertyDeclaration(node) && node.initializer);
    if (included) {
      const owners = lexicalOwners(node, source);
      if (depth) owners.push(['nesting', ts.SyntaxKind[node.kind]]);
      if (ts.isClassStaticBlockDeclaration(node)) owners.push(['static-block']);
      const owner = JSON.stringify(owners);
      const group = groups.get(owner) ?? [];
      group.push(node);
      groups.set(owner, group);
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
  const identities = new Map();
  for (const [owner, nodes] of groups) {
    if (nodes.length === 1) {
      identities.set(nodes[0], owner);
      continue;
    }
    const fingerprints = nodes.map((node) => syntaxFingerprint(node, source));
    // Preserve source order in ambiguous groups: swapping a large and small body must not transfer the large allowance.
    const group = digest(JSON.stringify(fingerprints));
    for (const [index, node] of nodes.entries()) {
      const fingerprint = fingerprints[index];
      // A changed ambiguous group loses every old allowance; even matching another old body cannot borrow its budget.
      identities.set(
        node,
        fingerprints.indexOf(fingerprint) ===
          fingerprints.lastIndexOf(fingerprint)
          ? `${owner}|group:${group}|member:${fingerprint}`
          : null,
      );
    }
  }
  return identities;
}

/** Resolve a diagnostic to its innermost inventoried owner; indistinguishable siblings and missing locations fail closed. */
function scopeAt(source, identities, line, column) {
  const offset = source.getPositionOfLineAndCharacter(
    Math.max(0, line - 1),
    Math.max(0, column - 1),
  );
  let matched;
  /** Select the innermost scope containing the reported token, never an unrelated neighboring declaration. */
  function visit(node) {
    if (node.getStart(source) <= offset && node.end > offset) {
      if (identities.has(node)) matched = node;
      ts.forEachChild(node, visit);
    }
  }
  visit(source);
  if (!matched)
    throw new Error(
      `No lexical scope for ESLint diagnostic: ${source.fileName}:${line}:${column}`,
    );
  const identity = identities.get(matched);
  if (identity === null)
    throw new Error(
      `Ambiguous lexical scope for ESLint diagnostic: ${source.fileName}:${line}:${column}`,
    );
  return identity;
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
    if (file.messages.length === 0) continue;
    const source = ts.createSourceFile(
      path,
      file.source ?? currentFile(path) ?? '',
      ts.ScriptTarget.Latest,
      true,
    );
    if (source.parseDiagnostics.length)
      throw new Error(`Invalid syntax in ESLint scope evidence: ${path}`);
    const functions = scopeIdentities(source);
    const depths = scopeIdentities(source, true);
    const identities = new Set();
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
          : scopeAt(
              source,
              message.ruleId === 'max-depth' ? depths : functions,
              message.line ?? 1,
              message.column ?? 1,
            );
      const identity = `${path}|${message.ruleId}|${scope}`;
      if (identities.has(identity))
        throw new Error(`Duplicate ESLint diagnostic identity: ${identity}`);
      identities.add(identity);
      results.push(
        record(identity, Number(values[1]), {
          path,
          rule: message.ruleId,
          scope,
        }),
      );
    }
  }
  return results.sort((a, b) => a.key.localeCompare(b.key));
}
