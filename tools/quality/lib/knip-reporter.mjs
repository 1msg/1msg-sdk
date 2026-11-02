import jsonReporter from '../node_modules/knip/dist/reporters/json.js';

/** Reject incomplete Knip graphs before emitting the pinned version's standard JSON report. */
export default async function qualityReporter(options) {
  if (options.hasConfigLoadErrors || options.counters.processed === 0) {
    throw new Error(
      'Knip failed to load configuration or analyzed an empty graph',
    );
  }
  for (const required of [
    'files',
    'exports',
    'dependencies',
    'unlisted',
    'unresolved',
  ]) {
    if (!options.report[required])
      throw new Error(`Mandatory Knip issue type disabled: ${required}`);
  }
  const incomplete = options.configurationHints.filter((hint) =>
    [
      'entry-empty',
      'project-empty',
      'project-extension-unregistered',
      'project-extension-excluded',
      'workspace-unconfigured',
      'top-level-unconfigured',
      'ignore',
      'ignoreFiles',
      'ignoreBinaries',
      'ignoreDependencies',
      'ignoreUnresolved',
      'ignoreWorkspaces',
    ].includes(hint.type),
  );
  if (incomplete.length) {
    throw new Error(
      `Knip coverage/stale exclusion failure: ${incomplete.map((hint) => `${hint.type}:${hint.identifier}`).join(', ')}`,
    );
  }
  await jsonReporter(options);
}
