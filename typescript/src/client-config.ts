export interface ClientConfigOptions {
  /** API root without instance segment, e.g. https://api.stage.1msg.io */
  baseUrl: string;
  /** Channel instance id, e.g. ODI371267300 */
  instanceId: string;
  /** Channel API token (appended as ?token= query param) */
  token: string;
}

/** @deprecated Use ClientConfigOptions. */
export type ChatApiConfigOptions = ClientConfigOptions;

/**
 * Normalizes URL segments for 1MSG API requests.
 * Pattern: {baseUrl}/{instanceId}{path}?token={token}
 */
export class ClientConfig {
  readonly baseUrl: string;
  readonly instanceId: string;
  readonly token: string;

  constructor(options: ClientConfigOptions) {
    if (!options.baseUrl?.trim()) {
      throw new Error('ClientConfig.baseUrl is required');
    }
    if (!options.instanceId?.trim()) {
      throw new Error('ClientConfig.instanceId is required');
    }
    if (!options.token?.trim()) {
      throw new Error('ClientConfig.token is required');
    }

    this.baseUrl = ClientConfig.stripTrailingSlash(options.baseUrl.trim());
    this.instanceId = options.instanceId.trim();
    this.token = options.token.trim();
  }

  /** Base path including instance id: https://api.stage.1msg.io/ODI371267300 */
  get basePath(): string {
    return `${this.baseUrl}/${this.instanceId}`;
  }

  /**
   * Builds a fully qualified request URL with token query param.
   * @param path API path starting with /, e.g. /sendMessage
   */
  buildRequestUrl(path: string): string {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const url = new URL(`${this.basePath}${normalizedPath}`);
    url.searchParams.set('token', this.token);
    return url.toString();
  }

  private static stripTrailingSlash(value: string): string {
    return value.replace(/\/+$/, '');
  }
}

/** @deprecated Use ClientConfig. */
export const ChatApiConfig = ClientConfig;
export type ChatApiConfig = ClientConfig;
