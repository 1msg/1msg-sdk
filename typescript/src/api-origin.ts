type OriginFailure = 'empty' | 'invalid' | 'protocol';

const PUBLIC_HOST_ALIASES: Record<string, string> = {
  'api.1msg.io': 'api.1msg.io',
  'www.api.1msg.io': 'api.1msg.io',
  'sandbox.1msg.io': 'sandbox.1msg.io',
  'www.sandbox.1msg.io': 'sandbox.1msg.io',
  'api.sandbox.1msg.io': 'sandbox.1msg.io',
};

/** Normalize an API origin, retaining caller-owned validation errors and removing credentials, paths and query data. */
export function normalizeApiOrigin(
  raw: string,
  failure: (reason: OriginFailure, protocol?: string) => Error,
): string {
  const trimmed = raw.trim();
  if (!trimmed) throw failure('empty');
  const input = /^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(trimmed) ? trimmed : `https://${trimmed}`;
  let parsed: URL;
  try {
    parsed = new URL(input);
  } catch {
    throw failure('invalid');
  }
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:')
    throw failure('protocol', parsed.protocol);
  const hostname = parsed.hostname.toLowerCase();
  const canonical = PUBLIC_HOST_ALIASES[hostname];
  if (canonical) return `https://${canonical}`;
  const protocol = hostname.endsWith('.1msg.io') ? 'https:' : parsed.protocol;
  return `${protocol}//${parsed.port ? `${hostname}:${parsed.port}` : hostname}`;
}
