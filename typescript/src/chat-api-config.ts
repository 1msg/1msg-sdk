export const SDK_VERSION = '1.0.0';

export interface ChatApiConfigOptions {
  /** API root without instance segment, e.g. https://api.stage.1msg.io */
  baseUrl: string;
  /** Channel instance id, e.g. ODI371267300 */
  instanceId: string;
  /** Channel API token (appended as ?token= query param) */
  token: string;
}

/**
 * Normalizes URL segments for Chat API requests.
 * Pattern: {baseUrl}/{instanceId}{path}?token={token}
 */
export class ChatApiConfig {
  readonly baseUrl: string;
  readonly instanceId: string;
  readonly token: string;

  constructor(options: ChatApiConfigOptions) {
    if (!options.baseUrl?.trim()) {
      throw new Error('ChatApiConfig.baseUrl is required');
    }
    if (!options.instanceId?.trim()) {
      throw new Error('ChatApiConfig.instanceId is required');
    }
    if (!options.token?.trim()) {
      throw new Error('ChatApiConfig.token is required');
    }

    this.baseUrl = ChatApiConfig.stripTrailingSlash(options.baseUrl.trim());
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
