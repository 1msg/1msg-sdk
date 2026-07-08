# @1msg/sdk

Official TypeScript/JavaScript SDK for the **1msg WhatsApp Business API**.

This document is auto-generated from the public OpenAPI contract plus generated
TypeScript client signatures. It is intended to be exhaustive: every public operation,
parameter, response code, type export, and common integration pattern is documented.

| | |
|---|---|
| **npm** | [`@1msg/sdk`](https://www.npmjs.com/package/@1msg/sdk) |
| **Source** | [github.com/1msg/1msg-sdk](https://github.com/1msg/1msg-sdk/tree/main/typescript) |
| **API docs** | [docs.1msg.io](https://docs.1msg.io/) |
| **Platform** | [platform.1msg.io](https://platform.1msg.io/) |
| **Support** | support@1msg.io |
| **OpenAPI version** | 1.0.0 |
| **Operations** | 33 |
| **Exported models** | 36 |
| **AI agent guide** | [AGENTS.md](./AGENTS.md) |

---

## Table of contents

1. [Install](#install)
2. [Requirements](#requirements)
3. [Quick start](#quick-start)
4. [Configuration](#configuration)
5. [Authentication](#authentication)
6. [Environments](#environments)
7. [Recipient addressing](#recipient-addressing)
8. [24-hour messaging window](#24-hour-messaging-window)
9. [Client architecture](#client-architecture)
10. [Convenience helpers](#convenience-helpers)
11. [API reference](#api-reference)
12. [messaging](#messaging)
13. [profile](#profile)
14. [groups](#groups)
15. [flows](#flows)
16. [templates](#templates)
17. [Exported types — full reference](#exported-types--full-reference)
18. [Cookbook](#cookbook--common-integration-recipes)
19. [FAQ](#faq)
20. [Troubleshooting](#troubleshooting)
21. [Error handling](#error-handling)
22. [Low-level access](#low-level-access)
23. [Regeneration and versioning](#regeneration-and-versioning)
24. [License](#license)

---

## Install

```bash
npm install @1msg/sdk
yarn add @1msg/sdk
pnpm add @1msg/sdk
```

**Runtime:** Node.js >= 18 (uses native `fetch`).

## Requirements

| Variable | Where to get it | Example |
|----------|-----------------|---------|
| `baseUrl` | Platform → channel → API host | `https://api.1msg.io` |
| `instanceId` | Platform → channel id | `ODI371267300` |
| `token` | Platform → channel → API token | JWT or API key |

Use environment variables (`MSG_API_TOKEN`, `MSG_INSTANCE_ID`). Never commit tokens.

## Quick start

```typescript
import { createClient } from '@1msg/sdk';

const client = createClient({
  baseUrl: 'https://api.1msg.io',
  instanceId: process.env.MSG_INSTANCE_ID!,
  token: process.env.MSG_API_TOKEN!,
});

await client.sendMessage({ body: 'Hello', chatId: '12020721369@c.us' });
const profile = await client.profile.getMe(client.config.token);
```

## Configuration

```typescript
createClient({ baseUrl: string; instanceId: string; token: string; });
```

### `ChatApiConfig` fields

| Field | Type | Description |
|-------|------|-------------|
| `baseUrl` | string | API root, no trailing slash |
| `instanceId` | string | Channel instance id |
| `token` | string | Channel API token |
| `basePath` | getter | `{baseUrl}/{instanceId}` |
| `buildRequestUrl(path)` | method | Builds URL with `?token=` |

## Authentication

```text
https://{baseUrl}/{instanceId}/{path}?token={token}
```

Every generated method accepts `token` as the **first argument**.

## Environments

| Environment | baseUrl |
|-------------|---------|
| Production | `https://api.1msg.io` |
| Staging | `https://api.stage.1msg.io` |
| Trial sandbox | See platform SDK page |

## Recipient addressing

| Format | Example | When |
|--------|---------|------|
| Individual chatId | `12020721369@c.us` | Known chat from API/webhook |
| Group chatId | `120363046942338209@g.us` | Group conversations |
| phone | `12020721369` | First message, no chatId yet |

Provide **either** `chatId` **or** `phone`, not both.

## 24-hour messaging window

Session messages (`sendMessage`, `sendFile`, `sendList`, etc.) require an open
customer service window (user messaged you within 24 hours).

Outside the window use **`sendTemplate`** with an approved Meta template.

## Client architecture

```text
createClient() → ChatApiClient
  ├─ config: ChatApiConfig
  ├─ messaging: MessagingApi   (16 operations)
  ├─ profile: ProfileApi       (1 operation)
  ├─ groups: GroupsApi         (7 operations)
  ├─ flows: FlowsApi           (8 operations)
  └─ templates: TemplatesApi   (1 operation)
```

## Convenience helpers

### `client.sendMessage(request: SendMessageRequest)`

Wrapper around `client.messaging.sendMessage`. Prefer this for text messages.

```typescript
await client.sendMessage({ body: "Hi", chatId: "12020721369@c.us" });
```

## API reference

**33 operations** documented below with HTTP mapping, schemas, SDK and cURL examples.

## messaging

Namespace: `client.messaging` → `MessagingApi` (14 operations)

### `createReadMessage`

#### Mark message as read

| | |
|---|---|
| HTTP | `POST /readMessage` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `createReadMessage` |
| Signature | `createReadMessage(token: string, messageId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateReadMessage200Response>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `messageId` | string | optional | Message ID. Example: 0XzkmGNn4prUAQlzsHApGNRXQ0U |


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Server response example | `—` |
| `401` | Invalid token | `—` |

#### SDK example

```typescript
await client.messaging.createReadMessage(client.config.token, {
  chatId: '12020721369@c.us',
  messageId: 'wamid.HBgNMTIwMjA3MjEzNjkVAgARGBI5RTBCNUY0QUE2RjZBQzhGNDkA',
});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/readMessage?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

### `createUploadMedia`

#### Upload media

| | |
|---|---|
| HTTP | `POST /uploadMedia` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `createUploadMedia` |
| Signature | `createUploadMedia(token: string, requestBody?: { [key: string]: any; }, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | OK | `—` |

#### SDK example

```typescript
await client.messaging.createUploadMedia(client.config.token, {
  file: 'https://example.com/image.jpg',
});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/uploadMedia?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

### `listMessages`

#### Get messages list

| | |
|---|---|
| HTTP | `GET /messages` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `listMessages` |
| Signature | `listMessages(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListMessages200Response>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | OK | `—` |

#### SDK example

```typescript
const page = await client.messaging.listMessages(
  client.config.token,
  50,
  undefined,
  '12020721369@c.us',
);
```

#### cURL equivalent

```bash
curl -X GET 'https://api.1msg.io/{instanceId}/messages?token={token}'
```

### `sendButton`

#### Send Reply Buttons Message

| | |
|---|---|
| HTTP | `POST /sendButton` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `sendButton` |
| Signature | `sendButton(token: string, sendButtonRequest?: SendButtonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | string | optional |  |
| `body` | string | optional |  |
| `footer` | string | optional |  |
| `sections` | array<object> | optional |  |

**OpenAPI example body**

```json
{
  "phone": "{{testPhone}}",
  "body": "This is a buttons message",
  "footer": "Footer",
  "sections": [
    {
      "type": "reply",
      "reply": {
        "id": "1",
        "title": "Button 1"
      }
    }
  ]
}
```


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Message sent successfully | `MessageSentResponse` |
| `400` | Invalid request parameters | `ErrorResponse` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `429` | Rate limit exceeded | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.messaging.sendButton(client.config.token, {
  phone: '12020721369',
  body: 'This is a buttons message',
  footer: 'Footer',
  sections: [{ type: 'reply', reply: { id: '1', title: 'Button 1' } }],
});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/sendButton?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{
    "phone": "{{testPhone}}",
    "body": "This is a buttons message",
    "footer": "Footer",
    "sections": [
      {
        "type": "reply",
        "reply": {
          "id": "1",
          "title": "Button 1"
        }
      }
    ]
  }'
```

### `sendCarousel`

#### Send Carousel

You can send product cards via Carousel in two ways: Template messages: do not require a 24-hour customer service window between you and the recipient. Use sendTemplate. Free-form messages: can be sent only when a customer service window is open between you and the recipient. Use sendCarousel. The message structure in /sendCarousel is largely similar to sending a template. However, in this case you must explicitly specify all elements that are created in advance when working with templates. This is because the message is sent without using a template. In /sendCarousel, for sending a Catalog Carousel there can be either 1 URL button or one or more quick reply buttons.

| | |
|---|---|
| HTTP | `POST /sendCarousel` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `sendCarousel` |
| Signature | `sendCarousel(token: string, params: Array<object>, body?: string, quotedMsgId?: string, chatId?: string, phone?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `body` | string | optional |  |
| `params` | array<object> | **required** |  |
| `quotedMsgId` | string | optional |  |
| `chatId` | string | optional |  |
| `phone` | integer | optional |  |


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Message sent successfully | `MessageSentResponse` |
| `400` | Invalid request parameters | `ErrorResponse` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `429` | Rate limit exceeded | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.messaging.sendCarousel(client.config.token, {
  phone: '12020721369',
  body: 'Choose a product',
  cards: [],
});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/sendCarousel?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

### `sendContact`

#### Send a Contact

| | |
|---|---|
| HTTP | `POST /sendContact` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `sendContact` |
| Signature | `sendContact(token: string, sendContactRequest?: SendContactRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | string | optional |  |
| `contacts` | array<object> | optional |  |

**OpenAPI example body**

```json
{
  "phone": "{{testPhone}}",
  "contacts": [
    {
      "name": {
        "formatted_name": "John Doe",
        "first_name": "John",
        "last_name": "Doe",
        "middle_name": "",
        "suffix": "",
        "prefix": ""
      },
      "birthday": "",
      "addresses": [],
      "emails": [],
      "org": {
        "company": "",
        "department": "",
        "title": ""
      },
      "phones": [
        {
          "phone": "+1234567890",
          "type": "HOME",
          "wa_id": ""
        }
      ],
      "urls": []
    }
  ]
}
```


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Message sent successfully | `MessageSentResponse` |
| `400` | Invalid request parameters | `ErrorResponse` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `429` | Rate limit exceeded | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.messaging.sendContact(client.config.token, {
  phone: '12020721369',
  contacts: [{
    name: {
      formatted_name: 'John Doe',
      first_name: 'John',
      last_name: 'Doe',
    },
    phones: [{ phone: '+1234567890', type: 'HOME', wa_id: '' }],
  }],
});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/sendContact?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{
    "phone": "{{testPhone}}",
    "contacts": [
      {
        "name": {
          "formatted_name": "John Doe",
          "first_name": "John",
          "last_name": "Doe",
          "middle_name": "",
          "suffix": "",
          "prefix": ""
        },
        "birthday": "",
        "addresses": [],
        "emails": [],
        "org": {
          "company": "",
          "department": "",
          "title": ""
        },
        "phones": [
          {
            "phone": "+1234567890",
            "type": "HOME",
            "wa_id": ""
          }
        ],
        "urls": []
      }
    ]
  }'
```

### `sendFile`

#### Send a File

Send a file to an existing chat. (Only if the dialogue has an Open Session). Only one of two parameters is needed to determine the destination - chatId or phone.

| | |
|---|---|
| HTTP | `POST /sendFile` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `sendFile` |
| Signature | `sendFile(token: string, body: string, filename: string, caption?: string, quotedMsgId?: string, chatId?: string, phone?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `body` | string | **required** | File source: - HTTP/HTTPS URL (https://example.com/file.pdf) - Base64-encoded file with MIME (data:image/jpeg;base64,/9j/4AAQ...) - Form-data field (minLength=1, example="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf") |
| `filename` | string | **required** | File name with extension (required for mime type detection) (minLength=1, maxLength=255, pattern=`^[^/\\:*?"<>|]+\.[a-zA-Z0-9]+$`, example="document.pdf") |
| `caption` | string | optional | Text caption under the file (maxLength=1024, example="Here is your document") |
| `quotedMsgId` | string | optional | Message ID to quote/reply to (pattern=`^wamid\..+$`, example="wamid.HBgNMTIwMjA3MjEzNjkVAgARGBI5RTBCNUY0QUE2RjZBQzhGNDkA") |
| `chatId` | string | optional | Chat ID in format: phone@c.us or phone@g.us (pattern=`^[0-9]+@[cg]\.us$`, example="12020721369@c.us") |
| `phone` | integer | optional | Phone number starting with country code (example=12020721369) |

**OpenAPI example body**

```json
{
  "phone": 12020721369,
  "body": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  "filename": "dummy.pdf",
  "caption": "Here is the file"
}
```


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Message sent successfully | `MessageSentResponse` |
| `400` | Invalid request parameters | `ErrorResponse` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `429` | Rate limit exceeded | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.messaging.sendFile(
  client.config.token,
  'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  'dummy.pdf',
  'Here is your document',
  undefined,
  '12020721369@c.us',
);
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/sendFile?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{
    "phone": 12020721369,
    "body": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    "filename": "dummy.pdf",
    "caption": "Here is the file"
  }'
```

### `sendFlow`

#### Send WhatsApp Flow Message

Send Interactive WhatsApp Flow message to an existing chat. (Only if the dialogue has an Open Session). Only one of two parameters is needed to determine the destination - chatId or phone. Use this method to send a published WhatsApp Flow as a service (interactive) message. If the 24-hour window is closed, send a template with a FLOW button via /sendTemplate.

| | |
|---|---|
| HTTP | `POST /sendFlow` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `sendFlow` |
| Signature | `sendFlow(token: string, body: string, flowId: string, flowToken: string, flowCta: string, header?: SendFlowRequestHeader, footer?: string, flowAction?: SendFlowFlowActionEnum, flowActionPayload?: object, flowMessageVersion?: string, mode?: SendFlowModeEnum, flowActionData?: object, flowActionScreen?: string, quotedMsgId?: string, chatId?: string, phone?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `body` | string | **required** |  |
| `header` | string | object | optional |  |
| `footer` | string | optional |  |
| `flowId` | string | **required** |  |
| `flowToken` | string | **required** |  |
| `flowCta` | string | **required** |  |
| `flowAction` | enum("navigate" | "data_exchange") | optional |  |
| `flowActionPayload` | object | optional |  |
| `flowMessageVersion` | string | optional |  |
| `mode` | enum("draft" | "published") | optional |  |
| `flowActionData` | object | optional |  |
| `flowActionScreen` | string | optional |  |
| `quotedMsgId` | string | optional |  |
| `chatId` | string | optional |  |
| `phone` | integer | optional |  |


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Message sent successfully | `MessageSentResponse` |
| `400` | Invalid request parameters | `ErrorResponse` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `429` | Rate limit exceeded | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.messaging.sendFlow(
  client.config.token,
  'Tap below to complete the form',
  'FLOW_ID',
  'flow-token-from-your-backend',
  'Open form',
  undefined,
  'Powered by 1MSG',
  'navigate',
  { screen: 'WELCOME' },
  '3',
  undefined,
  undefined,
  undefined,
  undefined,
  '12020721369@c.us',
);
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/sendFlow?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

### `sendList`

#### Send List Message

| | |
|---|---|
| HTTP | `POST /sendList` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `sendList` |
| Signature | `sendList(token: string, sendListRequest?: SendListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | string | optional |  |
| `body` | string | optional |  |
| `buttonText` | string | optional |  |
| `action` | string | optional |  |
| `sections` | array<object> | optional |  |

**OpenAPI example body**

```json
{
  "phone": "{{testPhone}}",
  "body": "This is a list message",
  "buttonText": "Click me",
  "action": "Action",
  "sections": [
    {
      "title": "Section 1",
      "rows": [
        {
          "id": "1",
          "title": "Row 1",
          "description": "Description for Row 1"
        }
      ]
    }
  ]
}
```


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Message sent successfully | `MessageSentResponse` |
| `400` | Invalid request parameters | `ErrorResponse` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `429` | Rate limit exceeded | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.messaging.sendList(client.config.token, {
  phone: '12020721369',
  body: 'This is a list message',
  buttonText: 'Click me',
  action: 'Action',
  sections: [{
    title: 'Section 1',
    rows: [{ id: '1', title: 'Row 1', description: 'Description for Row 1' }],
  }],
});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/sendList?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{
    "phone": "{{testPhone}}",
    "body": "This is a list message",
    "buttonText": "Click me",
    "action": "Action",
    "sections": [
      {
        "title": "Section 1",
        "rows": [
          {
            "id": "1",
            "title": "Row 1",
            "description": "Description for Row 1"
          }
        ]
      }
    ]
  }'
```

### `sendLocation`

#### Send a Location

Send a location to an existing chat. (Only if the dialogue has an Open Session). Only one of two parameters is needed to determine the destination - chatId or phone.

| | |
|---|---|
| HTTP | `POST /sendLocation` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `sendLocation` |
| Signature | `sendLocation(token: string, lat: string, lng: string, address?: string, name?: string, quotedMsgId?: string, chatId?: string, phone?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `lat` | string | **required** |  |
| `lng` | string | **required** |  |
| `address` | string | optional |  |
| `name` | string | optional |  |
| `quotedMsgId` | string | optional |  |
| `chatId` | string | optional |  |
| `phone` | integer | optional |  |

**OpenAPI example body**

```json
{
  "lat": "45.018337",
  "lng": "-73.968285",
  "name": "Facebook HQ",
  "address": "9766 Valley View St., New York, NY 10024",
  "phone": 12020721369
}
```


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Message sent successfully | `MessageSentResponse` |
| `400` | Invalid request parameters | `ErrorResponse` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `429` | Rate limit exceeded | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.messaging.sendLocation(
  client.config.token,
  '45.018337',
  '-73.968285',
  '9766 Valley View St., New York, NY 10024',
  'Facebook HQ',
  undefined,
  '12020721369@c.us',
);
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/sendLocation?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{
    "lat": "45.018337",
    "lng": "-73.968285",
    "name": "Facebook HQ",
    "address": "9766 Valley View St., New York, NY 10024",
    "phone": 12020721369
  }'
```

### `sendLocationRequest`

#### Send Location Request Message

| | |
|---|---|
| HTTP | `POST /sendLocationRequest` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `sendLocationRequest` |
| Signature | `sendLocationRequest(token: string, sendLocationRequestRequest?: SendLocationRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | string | optional |  |
| `body` | string | optional |  |

**OpenAPI example body**

```json
{
  "phone": "{{testPhone}}",
  "body": "Text"
}
```


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Message sent successfully | `MessageSentResponse` |
| `400` | Invalid request parameters | `ErrorResponse` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `429` | Rate limit exceeded | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.messaging.sendLocationRequest(client.config.token, {
  phone: '12020721369',
  body: 'Please share your location',
});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/sendLocationRequest?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{
    "phone": "{{testPhone}}",
    "body": "Text"
  }'
```

### `sendMessage`

#### Send a Message

Send a message to an existing chat. (Only if the dialogue has an Open Session). The message will be added to the queue for sending and delivered even if the phone is disconnected from the Internet or authorization is not passed. Only one of two parameters is needed to determine the destination - chatId or phone.

| | |
|---|---|
| HTTP | `POST /sendMessage` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `sendMessage` |
| Signature | `sendMessage(token: string, body: string, quotedMsgId?: string, chatId?: string, phone?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `body` | string | **required** | Message text, UTF-8 or UTF-16 string with emoji (minLength=1, maxLength=4096, example="Hello World 🌍") |
| `quotedMsgId` | string | optional | Message ID to quote/reply to (Cloud API wamid) (pattern=`^wamid\..+$`, example="wamid.HBgNMTIwMjA3MjEzNjkVAgARGBI5RTBCNUY0QUE2RjZBQzhGNDkA") |
| `chatId` | string | optional | Chat ID in format: phone@c.us (individual) or phone@g.us (group) (pattern=`^[0-9]+@[cg]\.us$`, example="12020721369@c.us") |
| `phone` | integer | optional | Phone number starting with country code (alternative to chatId) (example=12020721369) |

**OpenAPI example body**

```json
{
  "body": "Hello World",
  "phone": 12020721369
}
```


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Message sent successfully | `MessageSentResponse` |
| `400` | Invalid request parameters | `ErrorResponse` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `429` | Rate limit exceeded | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.sendMessage({
  body: 'Hello from 1MSG SDK',
  chatId: '12020721369@c.us',
});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/sendMessage?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{
    "body": "Hello World",
    "phone": 12020721369
  }'
```

### `sendProduct`

#### Send a Product

| | |
|---|---|
| HTTP | `POST /sendProduct` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `sendProduct` |
| Signature | `sendProduct(token: string, requestBody?: { [key: string]: any; }, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Message sent successfully | `MessageSentResponse` |
| `400` | Invalid request parameters | `ErrorResponse` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `429` | Rate limit exceeded | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.messaging.sendProduct(client.config.token, {
  phone: '12020721369',
  catalogId: 'CATALOG_ID',
  productRetailerId: 'SKU-001',
});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/sendProduct?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

### `sendReaction`

#### Send Reaction

| | |
|---|---|
| HTTP | `POST /sendReaction` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `sendReaction` |
| Signature | `sendReaction(token: string, sendReactionRequest?: SendReactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | string | optional |  |
| `body` | string | optional |  |
| `quotedMsgId` | string | optional |  |

**OpenAPI example body**

```json
{
  "phone": "{{testPhone}}",
  "body": "😀",
  "quotedMsgId": "{{lastMessageId}}"
}
```


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Message sent successfully | `MessageSentResponse` |
| `400` | Invalid request parameters | `ErrorResponse` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `429` | Rate limit exceeded | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.messaging.sendReaction(
  client.config.token,
  '👍',
  'wamid.HBgNMTIwMjA3MjEzNjkVAgARGBI5RTBCNUY0QUE2RjZBQzhGNDkA',
  '12020721369@c.us',
);
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/sendReaction?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{
    "phone": "{{testPhone}}",
    "body": "😀",
    "quotedMsgId": "{{lastMessageId}}"
  }'
```

## profile

Namespace: `client.profile` → `ProfileApi` (1 operations)

### `getMe`

#### Get Profile Info

Get WhatsApp Business Account profile information

| | |
|---|---|
| HTTP | `GET /me` |
| SDK group | `client.profile` |
| API class | `ProfileApi` |
| operationId | `getMe` |
| Signature | `getMe(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProfileInfo>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Profile information | `ProfileInfo` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
const profile = await client.profile.getMe(client.config.token);
```

#### cURL equivalent

```bash
curl -X GET 'https://api.1msg.io/{instanceId}/me?token={token}'
```

## groups

Namespace: `client.groups` → `GroupsApi` (7 operations)

### `createGroups`

#### Create Group

| | |
|---|---|
| HTTP | `POST /groups` |
| SDK group | `client.groups` |
| API class | `GroupsApi` |
| operationId | `createGroups` |
| Signature | `createGroups(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateGroups200Response>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | OK | `—` |

#### SDK example

```typescript
await client.groups.createGroups(client.config.token, {
  subject: 'Support Group',
  participants: ['12020721369'],
});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/groups?token={token}'
```

### `createGroupsGroupId`

#### Update Group Info

| | |
|---|---|
| HTTP | `POST /groups/{groupId}` |
| SDK group | `client.groups` |
| API class | `GroupsApi` |
| operationId | `createGroupsGroupId` |
| Signature | `createGroupsGroupId(groupId: string, token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | OK | `—` |

#### SDK example

```typescript
await client.groups.createGroupsGroupId('GROUPID', client.config.token);
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/groups/{groupId}?token={token}'
```

### `createGroupsGroupIdInvitelink`

#### Reset Invite Link

| | |
|---|---|
| HTTP | `POST /groups/{groupId}/inviteLink` |
| SDK group | `client.groups` |
| API class | `GroupsApi` |
| operationId | `createGroupsGroupIdInvitelink` |
| Signature | `createGroupsGroupIdInvitelink(groupId: string, token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | OK | `—` |

#### SDK example

```typescript
await client.groups.createGroupsGroupIdInvitelink('GROUPID', client.config.token);
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/groups/{groupId}/inviteLink?token={token}'
```

### `deleteGroupsGroupId`

#### Delete Group

| | |
|---|---|
| HTTP | `DELETE /groups/{groupId}` |
| SDK group | `client.groups` |
| API class | `GroupsApi` |
| operationId | `deleteGroupsGroupId` |
| Signature | `deleteGroupsGroupId(groupId: string, token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteGroupsGroupId200Response>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | OK | `—` |

#### SDK example

```typescript
await client.groups.deleteGroupsGroupId('GROUPID', client.config.token);
```

#### cURL equivalent

```bash
curl -X DELETE 'https://api.1msg.io/{instanceId}/groups/{groupId}?token={token}'
```

### `getGroupsGroupId`

#### Get Group Info

| | |
|---|---|
| HTTP | `GET /groups/{groupId}` |
| SDK group | `client.groups` |
| API class | `GroupsApi` |
| operationId | `getGroupsGroupId` |
| Signature | `getGroupsGroupId(groupId: string, token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | OK | `—` |

#### SDK example

```typescript
await client.groups.getGroupsGroupId('GROUPID', client.config.token);
```

#### cURL equivalent

```bash
curl -X GET 'https://api.1msg.io/{instanceId}/groups/{groupId}?token={token}'
```

### `getGroupsGroupIdInvitelink`

#### Get Invite Link

| | |
|---|---|
| HTTP | `GET /groups/{groupId}/inviteLink` |
| SDK group | `client.groups` |
| API class | `GroupsApi` |
| operationId | `getGroupsGroupIdInvitelink` |
| Signature | `getGroupsGroupIdInvitelink(groupId: string, token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | OK | `—` |

#### SDK example

```typescript
await client.groups.getGroupsGroupIdInvitelink('GROUPID', client.config.token);
```

#### cURL equivalent

```bash
curl -X GET 'https://api.1msg.io/{instanceId}/groups/{groupId}/inviteLink?token={token}'
```

### `listGroups`

#### Get Groups List

| | |
|---|---|
| HTTP | `GET /groups` |
| SDK group | `client.groups` |
| API class | `GroupsApi` |
| operationId | `listGroups` |
| Signature | `listGroups(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | OK | `—` |

#### SDK example

```typescript
const groups = await client.groups.listGroups(client.config.token);
```

#### cURL equivalent

```bash
curl -X GET 'https://api.1msg.io/{instanceId}/groups?token={token}'
```

## flows

Namespace: `client.flows` → `FlowsApi` (9 operations)

### `createFlows`

#### Create Flow

| | |
|---|---|
| HTTP | `POST /flows` |
| SDK group | `client.flows` |
| API class | `FlowsApi` |
| operationId | `createFlows` |
| Signature | `createFlows(token: string, wabaAccountId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateGroups200Response>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Path / query parameters

- `wabaAccountId` (query, string, optional) — wabaAccountId

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | OK | `—` |

#### SDK example

```typescript
await client.flows.createFlows(client.config.token, undefined);
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/flows?token={token}'
```

### `createFlowsFlowIdDeprecate`

#### Deprecate Flow

| | |
|---|---|
| HTTP | `POST /flows/{flowId}/deprecate` |
| SDK group | `client.flows` |
| API class | `FlowsApi` |
| operationId | `createFlowsFlowIdDeprecate` |
| Signature | `createFlowsFlowIdDeprecate(flowId: string, token: string, wabaAccountId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Path / query parameters

- `wabaAccountId` (query, string, optional) — wabaAccountId

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | OK | `—` |

#### SDK example

```typescript
await client.flows.createFlowsFlowIdDeprecate('FLOWID', client.config.token, undefined);
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/flows/{flowId}/deprecate?token={token}'
```

### `createFlowsFlowIdPublish`

#### Publish Flow

| | |
|---|---|
| HTTP | `POST /flows/{flowId}/publish` |
| SDK group | `client.flows` |
| API class | `FlowsApi` |
| operationId | `createFlowsFlowIdPublish` |
| Signature | `createFlowsFlowIdPublish(flowId: string, token: string, wabaAccountId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Path / query parameters

- `wabaAccountId` (query, string, optional) — wabaAccountId

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | OK | `—` |

#### SDK example

```typescript
await client.flows.createFlowsFlowIdPublish('FLOWID', client.config.token, undefined);
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/flows/{flowId}/publish?token={token}'
```

### `deleteFlowsFlowId`

#### Delete Flow

| | |
|---|---|
| HTTP | `DELETE /flows/{flowId}` |
| SDK group | `client.flows` |
| API class | `FlowsApi` |
| operationId | `deleteFlowsFlowId` |
| Signature | `deleteFlowsFlowId(flowId: string, token: string, wabaAccountId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteFlowsFlowId200Response>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Path / query parameters

- `wabaAccountId` (query, string, optional) — wabaAccountId

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | OK | `—` |

#### SDK example

```typescript
await client.flows.deleteFlowsFlowId('FLOWID', client.config.token, undefined);
```

#### cURL equivalent

```bash
curl -X DELETE 'https://api.1msg.io/{instanceId}/flows/{flowId}?token={token}'
```

### `getFlowsFlowId`

#### Get Flow Details

| | |
|---|---|
| HTTP | `GET /flows/{flowId}` |
| SDK group | `client.flows` |
| API class | `FlowsApi` |
| operationId | `getFlowsFlowId` |
| Signature | `getFlowsFlowId(flowId: string, token: string, wabaAccountId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateGroups200Response>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Path / query parameters

- `wabaAccountId` (query, string, optional) — wabaAccountId

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | OK | `—` |

#### SDK example

```typescript
await client.flows.getFlowsFlowId('FLOWID', client.config.token, undefined);
```

#### cURL equivalent

```bash
curl -X GET 'https://api.1msg.io/{instanceId}/flows/{flowId}?token={token}'
```

### `getFlowsFlowIdPreview`

#### Preview Flow

| | |
|---|---|
| HTTP | `GET /flows/{flowId}/preview` |
| SDK group | `client.flows` |
| API class | `FlowsApi` |
| operationId | `getFlowsFlowIdPreview` |
| Signature | `getFlowsFlowIdPreview(flowId: string, token: string, wabaAccountId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Path / query parameters

- `wabaAccountId` (query, string, optional) — wabaAccountId

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | OK | `—` |

#### SDK example

```typescript
await client.flows.getFlowsFlowIdPreview('FLOWID', client.config.token, undefined);
```

#### cURL equivalent

```bash
curl -X GET 'https://api.1msg.io/{instanceId}/flows/{flowId}/preview?token={token}'
```

### `listFlows`

#### List Flows

| | |
|---|---|
| HTTP | `GET /flows` |
| SDK group | `client.flows` |
| API class | `FlowsApi` |
| operationId | `listFlows` |
| Signature | `listFlows(token: string, wabaAccountId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListFlows200Response>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Path / query parameters

- `wabaAccountId` (query, string, optional) — wabaAccountId

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | OK | `—` |

#### SDK example

```typescript
await client.flows.listFlows(client.config.token, undefined);
```

#### cURL equivalent

```bash
curl -X GET 'https://api.1msg.io/{instanceId}/flows?token={token}'
```

### `patchFlowsFlowIdAssets`

#### Update Flow Structure

| | |
|---|---|
| HTTP | `PATCH /flows/{flowId}/assets` |
| SDK group | `client.flows` |
| API class | `FlowsApi` |
| operationId | `patchFlowsFlowIdAssets` |
| Signature | `patchFlowsFlowIdAssets(flowId: string, token: string, wabaAccountId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PatchFlowsFlowIdAssets200Response>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Path / query parameters

- `wabaAccountId` (query, string, optional) — wabaAccountId

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | OK | `—` |

#### SDK example

```typescript
await client.flows.patchFlowsFlowIdAssets('FLOWID', client.config.token, undefined);
```

#### cURL equivalent

```bash
curl -X PATCH 'https://api.1msg.io/{instanceId}/flows/{flowId}/assets?token={token}'
```

### `patchFlowsFlowIdMetadata`

#### Update Flow Metadata

| | |
|---|---|
| HTTP | `PATCH /flows/{flowId}/metadata` |
| SDK group | `client.flows` |
| API class | `FlowsApi` |
| operationId | `patchFlowsFlowIdMetadata` |
| Signature | `patchFlowsFlowIdMetadata(flowId: string, token: string, wabaAccountId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Path / query parameters

- `wabaAccountId` (query, string, optional) — wabaAccountId

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | OK | `—` |

#### SDK example

```typescript
await client.flows.patchFlowsFlowIdMetadata('FLOWID', client.config.token, undefined);
```

#### cURL equivalent

```bash
curl -X PATCH 'https://api.1msg.io/{instanceId}/flows/{flowId}/metadata?token={token}'
```

## templates

Namespace: `client.templates` → `TemplatesApi` (2 operations)

### `listTemplates`

#### Get templates list

| | |
|---|---|
| HTTP | `GET /templates` |
| SDK group | `client.templates` |
| API class | `TemplatesApi` |
| operationId | `listTemplates` |
| Signature | `listTemplates(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListTemplates200Response>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | OK | `—` |

#### SDK example

```typescript
const templates = await client.templates.listTemplates(client.config.token);
```

#### cURL equivalent

```bash
curl -X GET 'https://api.1msg.io/{instanceId}/templates?token={token}'
```

### `sendTemplate`

#### Send Template Message

| | |
|---|---|
| HTTP | `POST /sendTemplate` |
| SDK group | `client.templates` |
| API class | `TemplatesApi` |
| operationId | `sendTemplate` |
| Signature | `sendTemplate(token: string, sendTemplateRequest?: SendTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `template` | string | optional |  |
| `language` | object | optional |  |
  | `policy` | string | optional |  |
  | `code` | string | optional |  |
| `namespace` | string | optional |  |
| `params` | array<object> | optional |  |
| `phone` | string | optional |  |

**OpenAPI example body**

```json
{
  "template": "test_buttons_2",
  "language": {
    "policy": "deterministic",
    "code": "ru"
  },
  "namespace": "41123797_e45e_4f06_a2fa_443b27c6f5ec",
  "params": [],
  "phone": "{{testPhone}}"
}
```


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | OK | `—` |

#### SDK example

```typescript
await client.messaging.sendTemplate(
  client.config.token,
  'hello_world',
  'en',
  undefined,
  undefined,
  '12020721369@c.us',
);
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/sendTemplate?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{
    "template": "test_buttons_2",
    "language": {
      "policy": "deterministic",
      "code": "ru"
    },
    "namespace": "41123797_e45e_4f06_a2fa_443b27c6f5ec",
    "params": [],
    "phone": "{{testPhone}}"
  }'
```

## Exported types — full reference

All models below are exported from `@1msg/sdk`. Import by name:

```typescript
import type { SendMessageRequest, MessageSentResponse } from '@1msg/sdk';
```

### `CreateGroups200Response`

Check if a given object implements the CreateGroups200Response interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error` | `any | null` | optional | — |

### `CreateReadMessage200Response`

Check if a given object implements the CreateReadMessage200Response interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `result` | `string` | optional | — |

### `CreateReadMessage401Response`

Check if a given object implements the CreateReadMessage401Response interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error` | `string` | optional | — |

### `CreateReadMessageRequest`

Check if a given object implements the CreateReadMessageRequest interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `messageId` | `string` | optional | — |

### `DeleteFlowsFlowId200Response`

Check if a given object implements the DeleteFlowsFlowId200Response interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `success` | `boolean` | optional | — |
| `error` | `any | null` | optional | — |

### `DeleteGroupsGroupId200Response`

Check if a given object implements the DeleteGroupsGroupId200Response interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `success` | `boolean` | optional | — |
| `response` | `{ [key: string]: any` | optional | — |

### `ErrorResponse`

Check if a given object implements the ErrorResponse interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error` | string | optional | Error message |

### `ListFlows200Response`

Check if a given object implements the ListFlows200Response interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `items` | `Array<{ [key: string]: any` | optional | — |
| `paging` | `{ [key: string]: any` | optional | — |
| `count` | `number` | optional | — |
| `total` | `number` | optional | — |
| `error` | `any | null` | optional | — |

### `ListMessages200Response`

Check if a given object implements the ListMessages200Response interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `notice` | `string` | optional | — |
| `messages` | `Array<{ [key: string]: any` | optional | — |

### `ListTemplates200Response`

Check if a given object implements the ListTemplates200Response interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total` | `number` | optional | — |
| `templates` | `Array<{ [key: string]: any` | optional | — |
| `error` | `{ [key: string]: any` | optional | — |

### `MessageSentResponse`

Check if a given object implements the MessageSentResponse interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `sent` | boolean | optional | Whether the message was successfully queued for sending |
| `id` | string | optional | Message ID |
| `message` | string | optional | Status message |
| `description` | string | optional | Detailed description |

### `PatchFlowsFlowIdAssets200Response`

Check if a given object implements the PatchFlowsFlowIdAssets200Response interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `success` | `boolean` | optional | — |
| `validationErrors` | `Array<{ [key: string]: any` | optional | — |
| `error` | `any | null` | optional | — |

### `ProfileInfo`

@export

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `about` | string | optional | Profile's About section |
| `address` | string | optional | Address of the business |
| `description` | string | optional | Description of the business |
| `email` | string | optional | Business email |
| `phone` | string | optional | Linked phone number |
| `vertical` | enum("Automotive" | "Beauty, Spa and Salon" | "Clothing and Apparel" | "Education" | "Entertainment" | "Event Planning and Service" | "Finance and Banking" | "Food and Grocery" | "Public Service" | "Hotel and Lodging" | "Medical and Health" | "Non-profit" | "Professional Services" | "Shopping and Retail" | "Travel and Transportation" | "Restaurant" | "Other") | optional | Industry of the business |
| `photo` | string | optional | Profile photo URL |
| `websites` | array<string> | optional |  |

### `SendButtonRequest`

Check if a given object implements the SendButtonRequest interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | `string` | optional | — |
| `body` | `string` | optional | — |
| `footer` | `string` | optional | — |
| `sections` | `Array<SendButtonRequestSectionsInner>` | optional | — |

### `SendButtonRequestSectionsInner`

Check if a given object implements the SendButtonRequestSectionsInner interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `string` | optional | — |
| `reply` | `SendButtonRequestSectionsInnerReply` | optional | — |

### `SendButtonRequestSectionsInnerReply`

Check if a given object implements the SendButtonRequestSectionsInnerReply interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | optional | — |
| `title` | `string` | optional | — |

### `SendCarouselRequest1`

Check if a given object implements the SendCarouselRequest1 interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `body` | `string` | optional | — |
| `params` | `Array<object>` | **required** | — |
| `quotedMsgId` | `string` | optional | — |
| `chatId` | `string` | optional | — |
| `phone` | `number` | optional | — |

### `SendContactRequest`

Check if a given object implements the SendContactRequest interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | `string` | optional | — |
| `contacts` | `Array<SendContactRequestContactsInner>` | optional | — |

### `SendContactRequestContactsInner`

Check if a given object implements the SendContactRequestContactsInner interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | `SendContactRequestContactsInnerName` | optional | — |
| `birthday` | `string` | optional | — |
| `addresses` | `Array<any>` | optional | — |
| `emails` | `Array<any>` | optional | — |
| `org` | `SendContactRequestContactsInnerOrg` | optional | — |
| `phones` | `Array<SendContactRequestContactsInnerPhonesInner>` | optional | — |
| `urls` | `Array<any>` | optional | — |

### `SendContactRequestContactsInnerName`

Check if a given object implements the SendContactRequestContactsInnerName interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `formattedName` | `string` | optional | — |
| `firstName` | `string` | optional | — |
| `lastName` | `string` | optional | — |
| `middleName` | `string` | optional | — |
| `suffix` | `string` | optional | — |
| `prefix` | `string` | optional | — |

### `SendContactRequestContactsInnerOrg`

Check if a given object implements the SendContactRequestContactsInnerOrg interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `company` | `string` | optional | — |
| `department` | `string` | optional | — |
| `title` | `string` | optional | — |

### `SendContactRequestContactsInnerPhonesInner`

Check if a given object implements the SendContactRequestContactsInnerPhonesInner interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | `string` | optional | — |
| `type` | `string` | optional | — |
| `waId` | `string` | optional | — |

### `SendFileRequest`

Check if a given object implements the SendFileRequest interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `body` | string | **required** | File source: - HTTP/HTTPS URL (https://example.com/file.pdf) - Base64-encoded file with MIME (data:image/jpeg;base64,/9j/4AAQ...) - Form-data field (minLength=1, example="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf") |
| `filename` | string | **required** | File name with extension (required for mime type detection) (minLength=1, maxLength=255, pattern=`^[^/\\:*?"<>|]+\.[a-zA-Z0-9]+$`, example="document.pdf") |
| `caption` | string | optional | Text caption under the file (maxLength=1024, example="Here is your document") |
| `quotedMsgId` | string | optional | Message ID to quote/reply to (pattern=`^wamid\..+$`, example="wamid.HBgNMTIwMjA3MjEzNjkVAgARGBI5RTBCNUY0QUE2RjZBQzhGNDkA") |
| `chatId` | string | optional | Chat ID in format: phone@c.us or phone@g.us (pattern=`^[0-9]+@[cg]\.us$`, example="12020721369@c.us") |
| `phone` | integer | optional | Phone number starting with country code (example=12020721369) |

### `SendFlowRequest1`

@export

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `body` | `string` | **required** | — |
| `header` | `SendFlowRequest1Header` | optional | — |
| `footer` | `string` | optional | — |
| `flowId` | `string` | **required** | — |
| `flowToken` | `string` | **required** | — |
| `flowCta` | `string` | **required** | — |
| `flowAction` | `SendFlowRequest1FlowActionEnum` | optional | — |
| `flowActionPayload` | `object` | optional | — |
| `flowMessageVersion` | `string` | optional | — |
| `mode` | `SendFlowRequest1ModeEnum` | optional | — |
| `flowActionData` | `object` | optional | — |
| `flowActionScreen` | `string` | optional | — |
| `quotedMsgId` | `string` | optional | — |
| `chatId` | `string` | optional | — |
| `phone` | `number` | optional | — |

### `SendFlowRequest1Header`

_No property metadata — see generated TypeScript interface._

### `SendFlowRequestHeader`

_No property metadata — see generated TypeScript interface._

### `SendListRequest`

Check if a given object implements the SendListRequest interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | `string` | optional | — |
| `body` | `string` | optional | — |
| `buttonText` | `string` | optional | — |
| `action` | `string` | optional | — |
| `sections` | `Array<SendListRequestSectionsInner>` | optional | — |

### `SendListRequestSectionsInner`

Check if a given object implements the SendListRequestSectionsInner interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | `string` | optional | — |
| `rows` | `Array<SendListRequestSectionsInnerRowsInner>` | optional | — |

### `SendListRequestSectionsInnerRowsInner`

Check if a given object implements the SendListRequestSectionsInnerRowsInner interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | optional | — |
| `title` | `string` | optional | — |
| `description` | `string` | optional | — |

### `SendLocationRequest1`

Check if a given object implements the SendLocationRequest1 interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `lat` | `string` | **required** | — |
| `lng` | `string` | **required** | — |
| `address` | `string` | optional | — |
| `name` | `string` | optional | — |
| `quotedMsgId` | `string` | optional | — |
| `chatId` | `string` | optional | — |
| `phone` | `number` | optional | — |

### `SendLocationRequestRequest`

Check if a given object implements the SendLocationRequestRequest interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | `string` | optional | — |
| `body` | `string` | optional | — |

### `SendMessageRequest`

Check if a given object implements the SendMessageRequest interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `body` | string | **required** | Message text, UTF-8 or UTF-16 string with emoji (minLength=1, maxLength=4096, example="Hello World 🌍") |
| `quotedMsgId` | string | optional | Message ID to quote/reply to (Cloud API wamid) (pattern=`^wamid\..+$`, example="wamid.HBgNMTIwMjA3MjEzNjkVAgARGBI5RTBCNUY0QUE2RjZBQzhGNDkA") |
| `chatId` | string | optional | Chat ID in format: phone@c.us (individual) or phone@g.us (group) (pattern=`^[0-9]+@[cg]\.us$`, example="12020721369@c.us") |
| `phone` | integer | optional | Phone number starting with country code (alternative to chatId) (example=12020721369) |

### `SendReactionRequest`

Check if a given object implements the SendReactionRequest interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | `string` | optional | — |
| `body` | `string` | optional | — |
| `quotedMsgId` | `string` | optional | — |

### `SendTemplateRequest`

Check if a given object implements the SendTemplateRequest interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `template` | `string` | optional | — |
| `language` | `SendTemplateRequestLanguage` | optional | — |
| `namespace` | `string` | optional | — |
| `params` | `Array<any>` | optional | — |
| `phone` | `string` | optional | — |

### `SendTemplateRequestLanguage`

Check if a given object implements the SendTemplateRequestLanguage interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `policy` | `string` | optional | — |
| `code` | `string` | optional | — |

### `SuccessResponse`

Check if a given object implements the SuccessResponse interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `result` | string | optional | Operation result |

## Cookbook — common integration recipes

### 1. Echo bot (receive webhook → reply)

```typescript
import { createClient } from '@1msg/sdk';

const client = createClient({
  baseUrl: process.env.MSG_BASE_URL!,
  instanceId: process.env.MSG_INSTANCE_ID!,
  token: process.env.MSG_API_TOKEN!,
});

// In your webhook handler after parsing inbound message:
export async function onInboundText(chatId: string, text: string) {
  await client.sendMessage({ body: `You said: ${text}`, chatId });
}
```

### 2. Send PDF invoice

```typescript
await client.messaging.sendFile(
  client.config.token,
  'https://cdn.example.com/invoices/INV-1001.pdf',
  'INV-1001.pdf',
  'Your invoice is attached',
  undefined,
  '12020721369@c.us',
);
```

### 3. Mark messages as read

```typescript
await client.messaging.createReadMessage(client.config.token, {
  chatId: '12020721369@c.us',
  messageId: 'wamid.XXXXXXXX',
});
```

### 4. List recent messages in a chat

```typescript
const { messages } = await client.messaging.listMessages(
  client.config.token,
  100,
  undefined,
  '12020721369@c.us',
);
```

### 5. Send approved template outside 24h window

```typescript
await client.messaging.sendTemplate(
  client.config.token,
  'order_update',
  'en',
  [{ type: 'body', parameters: [{ type: 'text', text: 'ORD-42' }] }],
  undefined,
  '12020721369@c.us',
);
```

### 6. Create a support group

```typescript
const group = await client.groups.createGroups(client.config.token, {
  subject: 'VIP Support',
  participants: ['12020721369', '12025550123'],
});
```

### 7. Publish a WhatsApp Flow

```typescript
const flow = await client.flows.createFlows(client.config.token);
await client.flows.patchFlowsFlowIdMetadata('FLOW_ID', client.config.token, { name: 'Onboarding' });
await client.flows.createFlowsFlowIdPublish('FLOW_ID', client.config.token);
```

## FAQ

### Why do I get 401?

- Token is missing, expired, or belongs to another channel instance.
- `instanceId` in `createClient()` does not match the token's channel.

### Why do I get 400 on sendMessage?

- Missing `body`.
- Neither `chatId` nor `phone` provided.
- Invalid `chatId` format (must match `^[0-9]+@[cg]\.us$`).

### chatId vs phone — which to use?

- Prefer `chatId` when you already have it from `listMessages` or webhooks.
- Use `phone` for first contact when you only know the E.164 number without suffix.

### Can I use this SDK in the browser?

No. Tokens must stay server-side. Use a backend proxy.

### Difference between `createClient` and `createChatApiClient`?

`createChatApiClient` is deprecated. Use `createClient`.

### How are versions published?

SDK semver is independent from OpenAPI `info.version`. Patch releases ship doc fixes; minor/major track API changes.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| `fetch failed` | Wrong `baseUrl` or network | Verify host, use `https://api.1msg.io` |
| Message not delivered | 24h window closed | Use `sendTemplate` |
| `429` errors | Rate limit | Back off exponentially |
| Type errors on request objects | Stale SDK | Upgrade `@1msg/sdk` |
| Empty template list | No approved templates on WABA | Create templates in Meta Business Manager |
## Error handling

Non-2xx responses throw `ResponseError` with `.response: Response`.

```typescript
import { ResponseError } from '@1msg/sdk';
try {
  await client.sendMessage({ body: 'x', chatId: '12020721369@c.us' });
} catch (e) {
  if (e instanceof ResponseError) console.error(e.response.status, await e.response.text());
}
```

## Low-level access

Each operation exposes `*Raw()` and `*RequestOpts()` for custom `fetch` control.

## Regeneration and versioning

Docs regenerate on `npm run generate:sdk`. npm versions are immutable — patch bump for doc-only changes.

## License

MIT © 1MSG

