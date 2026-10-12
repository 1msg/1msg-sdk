import { MessagingApi } from '../generated/src/apis/MessagingApi';
import { SendMessageRequestToJSON } from '../generated/src/models/SendMessageRequest';
import { Configuration, ResponseError } from '../generated/src/runtime';
import { sendMessageFixture, sendMessagePhoneFixture } from './fixtures/send-message';

/** Inspect token placement, form body and omission of unspecified optional fields at the fetch boundary. */
it('sends the configured instance, query token and only present form fields', async () => {
  const fetchApi = jest.fn<ReturnType<typeof fetch>, Parameters<typeof fetch>>();
  fetchApi.mockResolvedValue(
    new Response(JSON.stringify({ sent: true, id: 'fixture-id', message: 'fixture-id' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }),
  );
  const api = new MessagingApi(
    new Configuration({ basePath: 'https://fixture.invalid/instance', fetchApi }),
  );
  const result = await api.sendMessage('fixture-token', 'hello', undefined, 'chat@c.us');
  expect(result.sent).toBe(true);
  expect(fetchApi).toHaveBeenCalledTimes(1);
  const call = fetchApi.mock.calls[0];
  if (!call) throw new Error('Expected captured fetch boundary');
  const [url, init] = call;
  expect(url).toBe('https://fixture.invalid/instance/sendMessage?token=fixture-token');
  expect(init?.method).toBe('POST');
  expect(init?.body).toBeInstanceOf(URLSearchParams);
  if (!(init?.body instanceof URLSearchParams)) throw new Error('Expected form serialization');
  expect(Object.fromEntries(init.body)).toEqual({ body: 'hello', chatId: 'chat@c.us' });
  expect(init).not.toHaveProperty('credentials');
});

/** Preserve non-success status and response details instead of resolving a fabricated success model. */
it('rejects non-success responses as a typed response error', async () => {
  const fetchApi = jest.fn<ReturnType<typeof fetch>, Parameters<typeof fetch>>();
  fetchApi.mockResolvedValue(
    new Response(JSON.stringify({ error: 'fixture failure' }), { status: 400 }),
  );
  const api = new MessagingApi(
    new Configuration({ basePath: 'https://fixture.invalid/instance', fetchApi }),
  );
  const result = api.sendMessage('fixture-token', 'hello', undefined, 'chat@c.us');
  await expect(result).rejects.toBeInstanceOf(ResponseError);
});

/** JSON encoding must omit unspecified optional fields, including after exact-optional type repair. */
it('serializes absent optional model fields without undefined wire values', () => {
  const result: unknown = SendMessageRequestToJSON(sendMessageFixture);
  expect(JSON.parse(JSON.stringify(result))).toEqual(sendMessageFixture);
  const phone: unknown = SendMessageRequestToJSON(sendMessagePhoneFixture);
  expect(JSON.parse(JSON.stringify(phone))).toEqual(sendMessagePhoneFixture);
});
