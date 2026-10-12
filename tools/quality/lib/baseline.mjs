import { createHash } from 'node:crypto';

/** Hash normalized evidence so line moves cannot grant new duplicate allowances. */
export function digest(text) {
  return createHash('sha256').update(text).digest('hex');
}

/** Keep a stable identifier for each independent finding, rather than a global failure count. */
export function record(key, value = 1, details = {}) {
  if (!key || !Number.isFinite(value) || value < 0)
    throw new Error('Invalid analyzer finding');
  return { key, value, ...details };
}

/** Reject duplicate diagnostic identities because collapsing them could hide growing debt. */
export function index(records) {
  const result = new Map();
  for (const entry of records) {
    if (result.has(entry.key))
      throw new Error(`Duplicate finding identity: ${entry.key}`);
    result.set(entry.key, entry);
  }
  return result;
}

/** Compare current findings with allowances and the trusted base's allowances, including stale debt. */
export function assess(
  findings,
  baseline,
  previous,
  today = new Date().toISOString().slice(0, 10),
) {
  const errors = [];
  if (baseline.schemaVersion !== 1 || !Array.isArray(baseline.entries)) {
    throw new Error('Unsupported or missing baseline schema');
  }
  const current = index(findings);
  const allowances = index(baseline.entries);
  const older = previous ? index(previous.entries) : null;
  for (const [key, allowance] of allowances) {
    if (
      !allowance.owner ||
      !allowance.reason ||
      !allowance.issue ||
      !allowance.expires
    ) {
      errors.push(`Unowned/unexplained allowance: ${key}`);
    }
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(allowance.expires ?? '') ||
      allowance.expires < today
    ) {
      errors.push(`Expired or invalid allowance: ${key}`);
    }
    const finding = current.get(key);
    if (!finding) errors.push(`Remove stale allowance: ${key}`);
    else if (finding.value < allowance.value)
      errors.push(`Reduce allowance to ${finding.value}: ${key}`);
    if (older) {
      const old = older.get(key);
      if (!old || allowance.value > old.value)
        errors.push(`Baseline expanded relative to trusted base: ${key}`);
      if (old && allowance.expires > old.expires)
        errors.push(`Allowance expiry extended: ${key}`);
    }
  }
  for (const [key, finding] of current) {
    if (!allowances.has(key) || finding.value > allowances.get(key).value) {
      errors.push(`New or increased violation (${finding.value}): ${key}`);
    }
  }
  return errors;
}

/** Parse machine-readable output only; a missing report or unexpected schema is an analysis failure. */
export function parseJson(stdout, analyzer) {
  try {
    return JSON.parse(stdout);
  } catch {
    throw new Error(`${analyzer} did not return a complete JSON report`);
  }
}
