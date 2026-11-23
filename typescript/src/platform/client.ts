import type { PlatformField, PlatformOperation } from './generated/contract';

import { PLATFORM_OPERATIONS, PLATFORM_TOOLS } from './generated/contract';
import { platformRequest, platformUrl, type PlatformQuery } from './http';

export interface PlatformClientOptions {
  baseUrl: string;
  apiKey: string;
  fetchImpl?: typeof fetch;
}

export interface PlatformCallInput {
  path?: Readonly<Record<string, string>>;
  query?: PlatformQuery;
  body?: unknown;
}

export interface PlatformCaller {
  call(operationId: string, input?: PlatformCallInput): Promise<unknown>;
}

/** Find one operation or fail before any request is made. */
function operationById(operationId: string): PlatformOperation {
  const operation = PLATFORM_OPERATIONS.find(
    (item) => item.operationId === operationId,
  );
  if (!operation) throw new Error(`Unknown platform operation ${operationId}`);
  return operation;
}

/** Keep a present argument. Null stays null only for nullable body fields. */
function bodyValue(field: PlatformField, value: unknown): unknown {
  if (value === null && field.schema.nullable) return null;
  return value;
}

/** Split a flat MCP argument object into path, query, and body. */
function inputFromArgs(
  operation: PlatformOperation,
  args: Readonly<Record<string, unknown>>,
): PlatformCallInput {
  const path: Record<string, string> = {};
  const query: PlatformQuery = {};
  const body: Record<string, unknown> = {};
  for (const name of operation.pathParams) {
    const value = args[name];
    if (typeof value !== 'string' || !value.trim()) {
      throw new Error(`Missing path parameter ${name}`);
    }
    path[name] = value;
  }
  for (const field of operation.query)
    assignQuery(query, field, args[field.name]);
  for (const field of operation.body) {
    const value = args[field.name];
    if (value !== undefined) body[field.name] = bodyValue(field, value);
  }
  return {
    path,
    query,
    ...(Object.keys(body).length ? { body } : {}),
  };
}

/** Copy one query argument when the tool supplied it. */
function assignQuery(
  query: PlatformQuery,
  field: PlatformField,
  value: unknown,
): void {
  if (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  ) {
    query[field.name] = value;
    return;
  }
  if (Array.isArray(value)) {
    const items = value.filter(
      (item): item is string => typeof item === 'string',
    );
    if (items.length) query[field.name] = items;
  }
}

/** Call one platform operation with a bearer key. */
export class PlatformClient implements PlatformCaller {
  constructor(private readonly options: PlatformClientOptions) {}

  call(operationId: string, input: PlatformCallInput = {}): Promise<unknown> {
    const operation = operationById(operationId);
    const url = platformUrl(
      this.options.baseUrl,
      operation.path,
      input.path ?? {},
      input.query ?? {},
    );
    return platformRequest(
      this.options.fetchImpl ?? fetch,
      url,
      operation.method,
      this.options.apiKey,
      input.body,
    );
  }
}

/** Create the platform client used by the CLI and MCP server. */
export function createPlatformClient(
  options: PlatformClientOptions,
): PlatformClient {
  return new PlatformClient(options);
}

/** Invoke one generated MCP tool. A missing client explains which key to set. */
export async function invokePlatformTool(
  client: PlatformCaller | undefined,
  name: string,
  args: Readonly<Record<string, unknown>>,
): Promise<unknown> {
  if (!client) {
    throw new Error(
      'Set ONE_MSG_PLATFORM_KEY to call the Platform API. This is not the WhatsApp channel token.',
    );
  }
  const tool = PLATFORM_TOOLS.find((item) => item.name === name);
  if (!tool) throw new Error(`Unknown platform tool ${name}`);
  return client.call(
    tool.operationId,
    inputFromArgs(operationById(tool.operationId), args),
  );
}
