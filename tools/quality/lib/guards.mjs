import ts from 'typescript';
import picomatch from 'picomatch';
import { existsSync } from 'node:fs';
import { baseFile, changedFiles, currentFile, trackedFiles } from './git.mjs';
import { digest } from './baseline.mjs';
import { verifyTemplate } from './template.mjs';

const sourcePattern = /\.(?:[cm]?[jt]sx?|svelte)$/;

/** Match repo-relative paths consistently; generated and exception paths stay explicit. */
export function matches(path, patterns = []) {
  return patterns.some((pattern) => picomatch(pattern, { dot: true })(path));
}

/** Validate manifest entries before they can remove any source from a mandatory check. */
export function validateConfig(
  config,
  today = new Date().toISOString().slice(0, 10),
) {
  if (
    config.schemaVersion !== 1 ||
    !['A', 'B', 'C', 'D'].includes(config.profile)
  ) {
    throw new Error(
      'quality.config.mjs requires schemaVersion=1 and a concrete profile',
    );
  }
  if (!Array.isArray(config.sourceRoots) || config.sourceRoots.length === 0) {
    throw new Error(
      'sourceRoots must inventory the authored source and tooling',
    );
  }
  if (
    config.duplicateCanonicalFormat !== undefined &&
    typeof config.duplicateCanonicalFormat !== 'boolean'
  )
    throw new Error('duplicateCanonicalFormat must be an explicit boolean');
  for (const root of config.sourceRoots) {
    if (!existsSync(root)) throw new Error(`Missing source root: ${root}`);
  }
  for (const entry of config.generated ?? []) {
    if (
      !entry.producer ||
      !entry.pattern ||
      ['**', '**/*', '**/*.ts', '**/*.js'].includes(entry.pattern)
    ) {
      throw new Error(
        'Generated exclusions require a narrow path and actual producer',
      );
    }
  }
  for (const entry of [
    ...(config.excluded ?? []),
    ...(config.comments?.exclude ?? []),
  ]) {
    if (
      !entry.pattern ||
      !entry.owner ||
      !entry.reason ||
      !entry.expires ||
      entry.expires < today
    ) {
      throw new Error(`Unowned or expired source exception: ${entry.pattern}`);
    }
  }
}

/** Parse script content with its actual syntax kind; Svelte markup is handled by framework checks. */
export function parseUnits(path, text) {
  if (path.endsWith('.svelte')) {
    return [...text.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/g)].map(
      (match, index) => ({
        suffix: `script${index}`,
        ast: ts.createSourceFile(
          path,
          match[2],
          ts.ScriptTarget.Latest,
          true,
          /lang\s*=\s*["']ts["']/.test(match[1])
            ? ts.ScriptKind.TS
            : ts.ScriptKind.JS,
        ),
      }),
    );
  }
  const kind = path.endsWith('.tsx')
    ? ts.ScriptKind.TSX
    : path.endsWith('.jsx')
      ? ts.ScriptKind.JSX
      : /\.[cm]?ts$/.test(path)
        ? ts.ScriptKind.TS
        : ts.ScriptKind.JS;
  return [
    {
      suffix: '',
      ast: ts.createSourceFile(path, text, ts.ScriptTarget.Latest, true, kind),
    },
  ];
}

/** Compare parsed semantic tokens, including template segments, without treating comments or optional trailing commas as method edits. */
function functionFingerprint(node, ast) {
  const tokens = [];
  /** Traverse lexical tokens rather than rescanning text, so template-expression context remains accurate. */
  function visit(current) {
    if (
      current.kind >= ts.SyntaxKind.FirstJSDocNode &&
      current.kind <= ts.SyntaxKind.LastJSDocNode
    )
      return;
    const children = current.getChildren(ast);
    if (children.length) {
      for (const child of children) visit(child);
      return;
    }
    if (current.kind === ts.SyntaxKind.SyntaxList) return;
    const value =
      ts.isStringLiteralLike(current) ||
      ts.isTemplateHead(current) ||
      ts.isTemplateMiddle(current) ||
      ts.isTemplateTail(current)
        ? current.text
        : current.getText(ast);
    tokens.push([current.kind, value]);
  }
  visit(node);
  const meaningful = tokens.filter(([kind], index) => {
    if (kind !== ts.SyntaxKind.CommaToken) return true;
    const next = tokens[index + 1]?.[0];
    if (next === ts.SyntaxKind.CloseBracketToken) {
      // Array elisions change length and must never be treated as formatting.
      const previous = tokens[index - 1]?.[0];
      return [
        ts.SyntaxKind.CommaToken,
        ts.SyntaxKind.OpenBracketToken,
      ].includes(previous);
    }
    return ![
      ts.SyntaxKind.CloseParenToken,
      ts.SyntaxKind.CloseBraceToken,
    ].includes(next);
  });
  return digest(JSON.stringify(meaningful));
}

/** Identify a call chain without embedding mutable arguments or comments into callback ownership. */
function lexicalCall(node, ast) {
  if (
    ts.isParenthesizedExpression(node) ||
    ts.isAsExpression(node) ||
    ts.isNonNullExpression(node)
  )
    return lexicalCall(node.expression, ast);
  if (ts.isCallExpression(node) || ts.isNewExpression(node))
    return `${lexicalCall(node.expression, ast)}()`;
  if (ts.isPropertyAccessExpression(node))
    return `${lexicalCall(node.expression, ast)}.${node.name.text}`;
  if (ts.isElementAccessExpression(node)) {
    const key = ts.isStringLiteralLike(node.argumentExpression)
      ? node.argumentExpression.text
      : '<computed>';
    return `${lexicalCall(node.expression, ast)}[${key}]`;
  }
  return ts.isIdentifier(node) ? node.text : '<callable>';
}

/** Identify callbacks by their lexical owner, not their position among unrelated functions. */
function lexicalScope(node, ast) {
  const owners = [];
  for (let current = node.parent; current; current = current.parent) {
    if (ts.isFunctionLike(current) || ts.isClassLike(current)) {
      const name = current.name ?? current.parent?.name;
      if (name) owners.push(name.getText(ast));
    } else if (ts.isCallExpression(current)) {
      owners.push(lexicalCall(current.expression, ast));
    }
  }
  return owners.reverse().join('/');
}

/** Resolve a function's meaningful enclosing declaration for stable identity and adjacent documentation. */
function declaration(node) {
  let owner = node;
  if (ts.isArrowFunction(node) || ts.isFunctionExpression(node)) {
    if (ts.isVariableDeclaration(node.parent)) {
      owner = node.parent.parent.parent;
    } else if (
      ts.isPropertyAssignment(node.parent) ||
      ts.isPropertyDeclaration(node.parent)
    ) {
      owner = node.parent;
    }
  }
  return owner;
}

/** Read adjacent callback docs through casts/assignments, stopping at its own statement or enclosing function. */
function callbackComments(node, ast) {
  const comments = [];
  let current = node;
  while (current) {
    if (current !== node && ts.isFunctionLike(current)) break;
    const trivia = ast.text.slice(
      current.getFullStart(),
      current.getStart(ast),
    );
    comments.push(...(trivia.match(/\/\*[\s\S]*?\*\/|\/\/[^\r\n]*/g) ?? []));
    if (ts.isStatement(current)) break;
    current = current.parent;
  }
  return comments;
}

/** Extract all implemented functions, including private methods, factories and substantive callbacks. */
export function functionsIn(path, text) {
  const functions = [];
  for (const { suffix, ast } of parseUnits(path, text)) {
    if (ast.parseDiagnostics.length)
      throw new Error(
        `Cannot parse ${path}: ${ast.parseDiagnostics[0].messageText}`,
      );
    const visit = (node) => {
      if (ts.isFunctionLike(node) && node.body) {
        const owner = declaration(node);
        const name =
          node.name?.getText(ast) ??
          node.parent.name?.getText(ast) ??
          '<callback>';
        const ranges =
          ts.getLeadingCommentRanges(ast.text, owner.getFullStart()) ?? [];
        const comments = ranges.map((range) =>
          ast.text.slice(range.pos, range.end),
        );
        const parentComments =
          node.parent && ts.isCallExpression(node.parent)
            ? (
                ts.getLeadingCommentRanges(
                  ast.text,
                  node.parent.parent.getFullStart(),
                ) ?? []
              ).map((range) => ast.text.slice(range.pos, range.end))
            : [];
        functions.push({
          key: `${suffix}:${lexicalScope(node, ast)}:${name}`,
          signature: functionFingerprint(node, ast),
          name,
          comments: [
            ...comments,
            ...parentComments,
            ...(name === '<callback>' ? callbackComments(node, ast) : []),
          ],
          line: ast.getLineAndCharacterOfPosition(node.getStart(ast)).line + 1,
          callback: name === '<callback>',
          // An expression-only projection has no independent scenario; its enclosing function is documented.
          trivialCallback:
            name === '<callback>' &&
            !ts.isBlock(node.body) &&
            node.body.getText(ast).length < 80 &&
            !/await|throw|fetch|\bnew\b/.test(node.body.getText(ast)),
        });
      }
      ts.forEachChild(node, visit);
    };
    visit(ast);
  }
  return functions;
}

/** Identify suppression directives in comments only, never in strings or generated documentation examples. */
export function suppressionErrors(path, text, config) {
  const errors = [];
  for (const { ast } of parseUnits(path, text)) {
    const scanner = ts.createScanner(
      ts.ScriptTarget.Latest,
      false,
      ts.LanguageVariant.Standard,
      ast.text,
    );
    for (
      let token = scanner.scan();
      token !== ts.SyntaxKind.EndOfFileToken;
      token = scanner.scan()
    ) {
      if (
        ![
          ts.SyntaxKind.SingleLineCommentTrivia,
          ts.SyntaxKind.MultiLineCommentTrivia,
        ].includes(token)
      )
        continue;
      const comment = scanner.getTokenText();
      if (
        /@ts-(?:ignore|nocheck)\b/.test(comment) ||
        /eslint-disable(?!-next-line|-line)\b/.test(comment)
      ) {
        errors.push(`${path}: broad lint/type suppression is forbidden`);
      }
      if (
        /eslint-disable(?:-next-line|-line)\b/.test(comment) &&
        !/eslint-disable(?:-next-line|-line)\s+[\w@/-]+(?:\s*,\s*[\w@/-]+)*\s+--\s+.{12,}/.test(
          comment,
        )
      ) {
        errors.push(
          `${path}: suppression must name rules and explain the scoped exception`,
        );
      }
      if (
        /@ts-expect-error\b/.test(comment) &&
        (!/@ts-expect-error\s*:?\s+.{12,}/.test(comment) ||
          !matches(path, config.negativeTypeTests ?? []))
      ) {
        errors.push(
          `${path}: @ts-expect-error requires an explained negative type-test scope`,
        );
      }
    }
  }
  return errors;
}

/** Enforce complete authored-file coverage plus documentation on changed functions and pilot trees. */
export function runGuards(config, base) {
  validateConfig(config);
  verifyTemplate(base);
  const changed = new Set(changedFiles(base));
  const allFiles = [...new Set([...trackedFiles(), ...changed])];
  const generated = (config.generated ?? []).map((entry) => entry.pattern);
  const excluded = (config.excluded ?? []).map((entry) => entry.pattern);
  const errors = [];
  let checked = 0;
  for (const path of allFiles.filter((path) => sourcePattern.test(path))) {
    if (path.startsWith('tools/quality/')) continue; // Versioned template has its own tests and documented API.
    if (matches(path, [...generated, ...excluded])) continue;
    if (
      !config.sourceRoots.some(
        (root) =>
          root === '.' ||
          path === root ||
          path.startsWith(`${root.replace(/\/$/, '')}/`),
      )
    ) {
      errors.push(`${path}: authored file has no declared source root`);
      continue;
    }
    const text = currentFile(path);
    if (text === null) continue;
    checked++;
    const full = matches(path, config.comments?.full);
    if (!changed.has(path) && !full) continue;
    errors.push(...suppressionErrors(path, text, config));
    if (
      matches(
        path,
        (config.comments?.exclude ?? []).map((entry) => entry.pattern),
      )
    )
      continue;
    const before = baseFile(base, path);
    const previous = new Map();
    for (const fn of before === null ? [] : functionsIn(path, before)) {
      const identity = `${fn.key}:${fn.signature}`;
      previous.set(identity, (previous.get(identity) ?? 0) + 1);
    }
    for (const fn of functionsIn(path, text)) {
      const identity = `${fn.key}:${fn.signature}`;
      const remaining = previous.get(identity) ?? 0;
      if (remaining > 0) previous.set(identity, remaining - 1);
      if ((!full && remaining > 0) || fn.trivialCallback) continue;
      const docs = fn.comments
        .filter((comment) => fn.callback || comment.startsWith('/**'))
        .join('\n');
      const words = docs
        .replace(/\{@[^}]+\}|\{[^}]+\}|\*|\//g, ' ')
        .trim()
        .split(/\s+/);
      if (words.length < 3 || docs.length < 18)
        errors.push(
          `${path}:${fn.line}: document ${fn.name}'s purpose and contract`,
        );
    }
  }
  if (checked === 0 && config.profile !== 'D')
    errors.push('No authored JS/TS/Svelte files were checked');
  return { checked, errors };
}
