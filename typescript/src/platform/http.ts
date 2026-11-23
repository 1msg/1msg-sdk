type PlatformQueryValue = string | number | boolean | string[];

export type PlatformQuery = Record<string, PlatformQueryValue | undefined>;

export class PlatformError extends Error {
  readonly status: number;
  readonly body: string;

  constructor(status: number, body: string) {
    super(`Platform API HTTP ${status}`);
    this.name = 'PlatformError';
    this.status = status;
    this.body = body;
  }
}

/** Reject a blank or non-HTTP origin before a request is sent. */
function normalizeBase(baseUrl: string): string {
  const trimmed = baseUrl.trim().replace(/\/+$/, '');
  if (!/^https?:\/\//.test(trimmed)) {
    throw new Error('Platform base URL must start with http:// or https://');
  }
  return trimmed;
}

/** Substitute `{param}` segments. A missing value is a caller error. */
function fillPath(path: string, values: Readonly<Record<string, string>>): string {
  return path.replace(/\{([^}]+)\}/g, (_match, name: string) => {
    const value = values[name];
    if (!value) throw new Error(`Missing path parameter ${name}`);
    return encodeURIComponent(value);
  });
}

/** Append present query values. Repeated values stay repeated. */
function appendQuery(url: URL, query: PlatformQuery): void {
  for (const [key, value] of Object.entries(query)) {
    if (value === undefined) continue;
    const items = Array.isArray(value) ? value : [value];
    for (const item of items) url.searchParams.append(key, String(item));
  }
}

/** Build an absolute platform URL from the contract path and call inputs. */
export function platformUrl(
  baseUrl: string,
  path: string,
  pathValues: Readonly<Record<string, string>>,
  query: PlatformQuery,
): string {
  const url = new URL(fillPath(path, pathValues), `${normalizeBase(baseUrl)}/`);
  appendQuery(url, query);
  return url.toString();
}

/** Read a success body, or raise PlatformError with the response text. */
async function readBody(response: Response): Promise<unknown> {
  const text = await response.text();
  if (!response.ok) throw new PlatformError(response.status, text);
  if (!text) return null;
  return JSON.parse(text) as unknown;
}

/** Send one bearer request. Omit the body when the caller has nothing to send. */
export async function platformRequest(
  fetchImpl: typeof fetch,
  url: string,
  method: string,
  apiKey: string,
  body: unknown,
): Promise<unknown> {
  const headers: Record<string, string> = {
    authorization: `Bearer ${apiKey}`,
    accept: 'application/json',
  };
  const init: RequestInit = { method, headers };
  if (body !== undefined) {
    headers['content-type'] = 'application/json';
    init.body = JSON.stringify(body);
  }
  return readBody(await fetchImpl(url, init));
}
