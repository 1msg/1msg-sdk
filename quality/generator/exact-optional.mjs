import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import ts from '../../tools/quality/node_modules/typescript/lib/typescript.js';

/** Match generated serializers that materialize missing values as undefined without weakening authored TypeScript checks. */
export function normalizeOptionalProperties(text, filename) {
  const source = ts.createSourceFile(filename, text, ts.ScriptTarget.Latest, true);
  const edits = [];
  /** Locate only optional declarations; runtime expressions, required fields and parameter positions stay unchanged. */
  function visit(node) {
    if (
      (ts.isPropertySignature(node) || ts.isPropertyDeclaration(node)) &&
      node.questionToken &&
      node.type
    ) {
      const type = node.type;
      const explicitUndefined =
        type.kind === ts.SyntaxKind.UndefinedKeyword ||
        (ts.isUnionTypeNode(type) &&
          type.types.some((part) => part.kind === ts.SyntaxKind.UndefinedKeyword));
      if (!explicitUndefined) {
        edits.push({ start: type.getStart(source), end: type.getStart(source), text: '(' });
        edits.push({ start: type.end, end: type.end, text: ') | undefined' });
      }
    } else if (ts.isMethodSignature(node) && node.questionToken && node.type) {
      const parameters = node.parameters.map((parameter) => parameter.getText(source)).join(', ');
      edits.push({
        start: node.getStart(source),
        end: node.end,
        text: `${node.name.getText(source)}?: ((${parameters}) => ${node.type.getText(source)}) | undefined;`,
      });
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
  for (const edit of edits.sort((left, right) => right.start - left.start))
    text = text.slice(0, edit.start) + edit.text + text.slice(edit.end);
  return text;
}

/** Repair exact-optional compatibility in the pinned generator output and omit absent native fetch credentials. */
export function postProcessExactOptionalSdk(outputDir) {
  const sourceDir = join(outputDir, 'src');
  const entries = readdirSync(sourceDir, { recursive: true, withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith('.ts')) continue;
    const file = join(entry.parentPath, entry.name);
    const source = readFileSync(file, 'utf8');
    writeFileSync(file, normalizeOptionalProperties(source, file));
  }
  const file = join(sourceDir, 'runtime.ts');
  const source = readFileSync(file, 'utf8');
  const anchor = '            credentials: this.configuration.credentials,';
  const replacement =
    '            ...(this.configuration.credentials === undefined ? {} : { credentials: this.configuration.credentials }),';
  if (!source.includes(anchor) && !source.includes(replacement))
    throw new Error('Generated fetch credentials layout changed');
  writeFileSync(file, source.replace(anchor, replacement));
}
