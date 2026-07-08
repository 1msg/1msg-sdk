import { ChatApiConfig, type ChatApiConfigOptions } from './chat-api-config';
import { Configuration } from './generated/src/runtime';
import {
  FlowsApi,
  GroupsApi,
  MessagingApi,
  ProfileApi,
  TemplatesApi,
} from './generated/src/apis';
import type { SendMessageRequest } from './generated/src/models/SendMessageRequest';
import type { MessageSentResponse } from './generated/src/models/MessageSentResponse';

export type { ChatApiConfigOptions };
export { ChatApiConfig };

/**
 * High-level client for the 1msg Chat API.
 * Configures generated API classes with instance path prefix and injects token auth.
 */
export class ChatApiClient {
  readonly config: ChatApiConfig;
  readonly messaging: MessagingApi;
  readonly flows: FlowsApi;
  readonly groups: GroupsApi;
  readonly profile: ProfileApi;
  readonly templates: TemplatesApi;

  constructor(config: ChatApiConfig) {
    this.config = config;
    const configuration = new Configuration({
      basePath: config.basePath,
    });

    this.messaging = new MessagingApi(configuration);
    this.flows = new FlowsApi(configuration);
    this.groups = new GroupsApi(configuration);
    this.profile = new ProfileApi(configuration);
    this.templates = new TemplatesApi(configuration);
  }

  /**
   * Send a text message (operationId: sendMessage).
   * Token and instance path prefix are applied from ChatApiConfig.
   */
  async sendMessage(request: SendMessageRequest): Promise<MessageSentResponse> {
    return this.messaging.sendMessage(
      this.config.token,
      request.body,
      request.quotedMsgId,
      request.chatId,
      request.phone,
    );
  }
}

/** Factory: create a configured 1msg API client from connection options. */
export function createClient(options: ChatApiConfigOptions): ChatApiClient {
  return new ChatApiClient(new ChatApiConfig(options));
}

/** @deprecated Use `createClient` instead. */
export const createChatApiClient = createClient;
