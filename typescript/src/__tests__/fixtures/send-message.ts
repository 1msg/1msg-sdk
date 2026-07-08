import type { SendMessageRequest } from '../../generated/src/models/SendMessageRequest';

/** Valid SendMessageRequest fixture for client unit tests. */
export const sendMessageFixture: SendMessageRequest = {
  body: 'Hello from SDK test',
  chatId: '79001234567@c.us',
  quotedMsgId: 'wamid.HBgL79001234567',
};

export const sendMessagePhoneFixture: SendMessageRequest = {
  body: 'Hello via phone',
  phone: 79001234567,
};
