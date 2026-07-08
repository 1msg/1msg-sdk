import { createClient } from '../chat-api-client';
import type { MessageSentResponse } from '../generated/src/models/MessageSentResponse';

describe('ChatApiClient', () => {
  const options = {
    baseUrl: 'https://api.stage.1msg.io',
    instanceId: 'ODI371267300',
    token: 'test-api-token',
  };

  it('delegates sendMessage to MessagingApi with token and body fields', async () => {
    const client = createClient(options);
    const response: MessageSentResponse = {
      sent: true,
      message: 'msg-id',
      id: 'msg-id',
    };

    const spy = jest
      .spyOn(client.messaging, 'sendMessage')
      .mockResolvedValue(response);

    const result = await client.sendMessage({
      body: 'Hello from SDK',
      chatId: '12020721369@c.us',
    });

    expect(spy).toHaveBeenCalledWith(
      'test-api-token',
      'Hello from SDK',
      undefined,
      '12020721369@c.us',
      undefined,
    );
    expect(result).toEqual(response);
  });

  it('passes optional quotedMsgId and phone to sendMessage', async () => {
    const client = createClient(options);
    const spy = jest.spyOn(client.messaging, 'sendMessage').mockResolvedValue({
      sent: true,
      message: 'msg-id',
      id: 'msg-id',
    });

    await client.sendMessage({
      body: 'Reply',
      quotedMsgId: 'wamid.HBgNMTIwMjA3MjEzNjkVAgARGBI5RTBCNUY0QUE2RjZBQzhGNDkA',
      phone: 12020721369,
    });

    expect(spy).toHaveBeenCalledWith(
      'test-api-token',
      'Reply',
      'wamid.HBgNMTIwMjA3MjEzNjkVAgARGBI5RTBCNUY0QUE2RjZBQzhGNDkA',
      undefined,
      12020721369,
    );
  });

  it('uses instance-scoped basePath from config', () => {
    const client = createClient(options);
    expect(client.config.basePath).toBe(
      'https://api.stage.1msg.io/ODI371267300',
    );
  });
});
