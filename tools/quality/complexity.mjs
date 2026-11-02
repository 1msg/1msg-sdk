#!/usr/bin/env node
import { realpathSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';
import { pathToFileURL } from 'node:url';

import { ESLint } from 'eslint';
import { format } from 'prettier';
import ts from 'typescript';

import policy from './prettier.config.mjs';

/** Remove only parsed comments before formatting so documentation cannot inflate wrapped code lines; reject unsupported or invalid syntax. */
function metricSource(source, filePath) {
  if (!/^[.](?:[cm]?[jt]s|[jt]sx)$/.test(extname(filePath)))
    throw new Error(`Unsupported complexity source: ${filePath}`);
  const syntax = ts.createSourceFile(
    filePath,
    source,
    ts.ScriptTarget.Latest,
    true,
  );
  if (syntax.parseDiagnostics.length) {
    const diagnostic = syntax.parseDiagnostics[0];
    throw new Error(
      `Complexity parse failed: ${filePath}: ${ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')}`,
    );
  }
  return ts
    .createPrinter({ removeComments: true, newLine: ts.NewLineKind.LineFeed })
    .printFile(syntax);
}

/** Measure comment-free source with the same pinned formatting policy, retaining canonical text for diagnostic scope identities. */
export async function measureComplexity(config, targets) {
  const eslint = new ESLint({
    overrideConfigFile: config,
    allowInlineConfig: false,
  });
  const inventory = await eslint.lintFiles(targets);
  if (!inventory.length)
    throw new Error('Complexity source inventory is empty');
  const reports = [];
  for (const file of inventory) {
    if (file.fatalErrorCount)
      throw new Error(`Complexity parse failed: ${file.filePath}`);
    const source = await readFile(file.filePath, 'utf8');
    const canonical = await format(metricSource(source, file.filePath), {
      ...policy,
      filepath: file.filePath,
    });
    const [report] = await eslint.lintText(canonical, {
      filePath: file.filePath,
    });
    if (!report || report.fatalErrorCount)
      throw new Error(`Complexity parse failed: ${file.filePath}`);
    reports.push({ ...report, source: canonical });
  }
  return reports;
}

/** Keep formatter, parser and inventory failures distinct from ordinary maintainability diagnostics. */
async function main() {
  const args = process.argv.slice(2);
  const position = args.indexOf('--config');
  if (position < 0 || !args[position + 1])
    throw new Error('Complexity measurement requires --config');
  const [config] = args.splice(position, 2).slice(1);
  const reports = await measureComplexity(config, args.length ? args : ['.']);
  process.stdout.write(JSON.stringify(reports));
  if (reports.some((report) => report.errorCount || report.warningCount))
    process.exitCode = 1;
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(realpathSync(process.argv[1])).href
) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 2;
  });
}
