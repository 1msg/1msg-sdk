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
| **Operations** | 60 |
| **Exported models** | 57 |
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
17. [calling](#calling)
18. [catalog](#catalog)
19. [channel](#channel)
20. [users](#users)
21. [webhooks](#webhooks)
22. [Exported types — full reference](#exported-types--full-reference)
23. [Cookbook](#cookbook--common-integration-recipes)
24. [FAQ](#faq)
25. [Troubleshooting](#troubleshooting)
26. [Error handling](#error-handling)
27. [Low-level access](#low-level-access)
28. [Regeneration and versioning](#regeneration-and-versioning)
29. [License](#license)

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

**60 operations** documented below with HTTP mapping, schemas, SDK and cURL examples.

## messaging

Namespace: `client.messaging` → `MessagingApi` (23 operations)

### `createReadMessage`

#### Mark message as read

| | |
|---|---|
| HTTP | `POST /readMessage` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `createReadMessage` |
| Signature | `createReadMessage(token: string, messageId?: string, msgId?: string, typingIndicator?: boolean, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateReadMessage200Response>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `messageId` | string | optional |  |
| `msgId` | string | optional |  |
| `typingIndicator` | boolean | optional | Show WhatsApp typing indicator (max 25s or until reply) |


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

### `deleteMedia`

#### Delete media from WABA storage

Delete previously uploaded media by numeric `mediaId` (from `/uploadMedia`). This is the canonical deletion endpoint and uses the REST `DELETE` verb on the media resource path. The older `POST /deleteMedia` is a deprecated alias.

| | |
|---|---|
| HTTP | `DELETE /media/{mediaId}` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `deleteMedia` |
| Signature | `deleteMedia(token: string, mediaId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponse>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Path / query parameters

- `mediaId` (path, string, required) — Numeric WABA media id

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Operation successful | `SuccessResponse` |
| `400` | Invalid request parameters | `ErrorResponse` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.messaging.deleteMedia(client.config.token, undefined);
```

#### cURL equivalent

```bash
curl -X DELETE 'https://api.1msg.io/{instanceId}/media/{mediaId}?token={token}'
```

### `deleteMediaLegacy`

#### Delete media from WABA storage (deprecated alias)

**Deprecated.** Use `DELETE /media/{mediaId}` instead. This POST alias is kept for backward compatibility with earlier integrations. New integrations should call `DELETE /media/{mediaId}`: 1msg follows REST conventions for resource deletion going forward (delete a resource with the `DELETE` verb on its resource path).

| | |
|---|---|
| HTTP | `POST /deleteMedia` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `deleteMediaLegacy` |
| Signature | `deleteMediaLegacy(token: string, deleteMediaLegacyRequest: DeleteMediaLegacyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponse>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `mediaId` | string | **required** | Numeric WABA media id |


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Operation successful | `SuccessResponse` |
| `400` | Invalid request parameters | `ErrorResponse` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.messaging.deleteMediaLegacy(client.config.token, {});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/deleteMedia?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

### `getMmLiteStatus`

#### Get MM Lite availability and status

| | |
|---|---|
| HTTP | `GET /mmLiteStatus` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `getMmLiteStatus` |
| Signature | `getMmLiteStatus(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetMmLiteStatus200Response>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | MM Lite status for the channel | `—` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.messaging.getMmLiteStatus(client.config.token);
```

#### cURL equivalent

```bash
curl -X GET 'https://api.1msg.io/{instanceId}/mmLiteStatus?token={token}'
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

### `retrieveMedia`

#### Retrieve uploaded media metadata

Get WABA media URL and metadata by mediaId (from uploadMedia). The returned `url` is temporary and typically expires within ~5 minutes.

| | |
|---|---|
| HTTP | `GET /retrieveMedia` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `retrieveMedia` |
| Signature | `retrieveMedia(token: string, mediaId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RetrieveMedia200Response>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Path / query parameters

- `mediaId` (query, string, required) — mediaId

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Media metadata | `—` |
| `400` | Invalid request parameters | `ErrorResponse` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.messaging.retrieveMedia(client.config.token, undefined);
```

#### cURL equivalent

```bash
curl -X GET 'https://api.1msg.io/{instanceId}/retrieveMedia?token={token}'
```

### `sendAddressMessage`

#### Send address request message

Request shipping address from the user. **India only** (WhatsApp Cloud API address messages). Requires an India WhatsApp Business number and an India (+91) recipient. Meta validates eligibility; mismatches return WABA errors such as `Unsupported Interactive Message type` (HTTP 200 with `sent: false`). The outbound payload always sends `action.parameters.country = "IN"`. A `country` field in the request body (if present) is ignored.

| | |
|---|---|
| HTTP | `POST /sendAddressMessage` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `sendAddressMessage` |
| Signature | `sendAddressMessage(token: string, sendAddressMessageRequest: SendAddressMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | integer | optional |  |
| `chatId` | string | optional |  |
| `body` | string | **required** | Body text shown with the address request |
| `quotedMsgId` | string | optional |  |


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
await client.messaging.sendAddressMessage(client.config.token, {});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/sendAddressMessage?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{}'
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

### `sendCtaUrl`

#### Send CTA URL interactive message

Send an interactive message with a single call-to-action URL button.

| | |
|---|---|
| HTTP | `POST /sendCtaUrl` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `sendCtaUrl` |
| Signature | `sendCtaUrl(token: string, sendCtaUrlRequest: SendCtaUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | integer | optional |  |
| `chatId` | string | optional |  |
| `body` | string | **required** |  |
| `displayText` | string | **required** | Button label |
| `url` | string | **required** |  |
| `header` | object | optional |  |
| `footer` | string | optional |  |
| `quotedMsgId` | string | optional |  |


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
await client.messaging.sendCtaUrl(client.config.token, {});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/sendCtaUrl?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{}'
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
| Signature | `sendFile(token: string, body?: string, filename?: string, mediaId?: string, mediaType?: SendFileMediaTypeEnum, voice?: boolean, caption?: string, quotedMsgId?: string, chatId?: string, phone?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `body` | string | optional | File source (required unless mediaId is set): - HTTP/HTTPS URL - Base64 data URI |
| `filename` | string | optional | File name with extension (required with body, not with mediaId) |
| `mediaId` | string | optional | WABA media id from uploadMedia (alternative to body) |
| `mediaType` | enum("image" | "video" | "audio" | "document") | optional | Required when using mediaId |
| `voice` | boolean | optional | Native WhatsApp voice note (audio/ogg only) |
| `caption` | string | optional |  (maxLength=1024) |
| `quotedMsgId` | string | optional |  |
| `chatId` | string | optional |  |
| `phone` | integer | optional |  |

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

### `sendOrderDetails`

#### Send order details (India payments template)

Send a WhatsApp **order details** payment message via a pre-approved **Utility** template with an `ORDER_DETAILS` button. **India only** (WhatsApp Payments India). Requires: - India WhatsApp Business Account / phone number - Commerce-enabled channel - Approved template with an `ORDER_DETAILS` button Prefer this helper when you want a dedicated payload (`order`, `referenceId`, `currency`, `paymentSettings`). Under the hood it builds a Cloud API template `button` component with `sub_type: order_details` and calls the same path as `POST /sendTemplate`. To send the same message **outside the 24-hour window**, you can also call `POST /sendTemplate` directly with a `params` button: ```json { "type": "button", "sub_type": "order_details", "index": 0, "parameters": [{ "type": "action", "action": { "order_details": { "reference_id": "order-123", "type": "digital-goods", "payment_type": "upi", "payment_configuration": "payment_config_name", "currency": "INR", "total_amount": { "offset": 100, "value": 65000 }, "order": { "status": "pending", "items": [], "subtotal": { "offset": 100, "value": 65000 } } } } }] } ``` See Meta/360dialog: Payments India — order details template message.

| | |
|---|---|
| HTTP | `POST /sendOrderDetails` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `sendOrderDetails` |
| Signature | `sendOrderDetails(token: string, sendOrderDetailsRequest: SendOrderDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | integer | optional | Recipient phone (India E.164 digits, no +) |
| `chatId` | string | optional | Recipient chatId (phone@c.us / bsuid@lid / …) |
| `template` | string | **required** | Approved template name with ORDER_DETAILS button |
| `namespace` | string | **required** | Template namespace |
| `language` | object | **required** | Template language object, e.g. code "en" or policy "deterministic" with code "en". |
| `params` | array<object> | optional | Extra template components (header/body). An order_details button is appended automatically if missing. |
| `order` | object | **required** | Order object (items, subtotal, tax, shipping, discount, status) per Meta Payments India docs. |
| `referenceId` | string | optional | Unique order/payment reference id |
| `paymentSettings` | object | optional | Optional payment_settings (UPI / payment gateway / payment link). |
| `currency` | string | optional | Currency code (INR for India) (example="INR") |

**OpenAPI example body**

```json
{
  "phone": 919876543210,
  "template": "order_details_utility",
  "namespace": "your_namespace",
  "language": {
    "code": "en"
  },
  "referenceId": "order-123",
  "currency": "INR",
  "order": {
    "status": "pending",
    "items": [
      {
        "retailer_id": "SKU-1",
        "name": "Item",
        "amount": {
          "offset": 100,
          "value": 50000
        },
        "quantity": 1
      }
    ],
    "subtotal": {
      "offset": 100,
      "value": 50000
    }
  }
}
```


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Message sent successfully | `MessageSentResponse` |
| `400` | Invalid request parameters | `ErrorResponse` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.messaging.sendOrderDetails(client.config.token, {});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/sendOrderDetails?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{
    "phone": 919876543210,
    "template": "order_details_utility",
    "namespace": "your_namespace",
    "language": {
      "code": "en"
    },
    "referenceId": "order-123",
    "currency": "INR",
    "order": {
      "status": "pending",
      "items": [
        {
          "retailer_id": "SKU-1",
          "name": "Item",
          "amount": {
            "offset": 100,
            "value": 50000
          },
          "quantity": 1
        }
      ],
      "subtotal": {
        "offset": 100,
        "value": 50000
      }
    }
  }'
```

### `sendPaymentRequest`

#### Send payment request (regional)

Send a regional payment request interactive message (beta scaffold). `region` must be IN, SG, or BR. Payload shape follows Meta regional payments docs; verify on stage before production use. Full regional builders are not implemented yet.

| | |
|---|---|
| HTTP | `POST /sendPaymentRequest` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `sendPaymentRequest` |
| Signature | `sendPaymentRequest(token: string, sendPaymentRequestRequest: SendPaymentRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | integer | **required** |  |
| `region` | enum("IN" | "SG" | "BR") | **required** |  |
| `body` | string | optional |  |
| `interactive` | object | optional |  |
| `action` | object | optional |  |


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Message sent successfully | `MessageSentResponse` |
| `400` | Invalid request parameters | `ErrorResponse` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.messaging.sendPaymentRequest(client.config.token, {});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/sendPaymentRequest?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{}'
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

### `sendSticker`

#### Send sticker message

Send a WhatsApp sticker by mediaId or link URL.

| | |
|---|---|
| HTTP | `POST /sendSticker` |
| SDK group | `client.messaging` |
| API class | `MessagingApi` |
| operationId | `sendSticker` |
| Signature | `sendSticker(token: string, sendStickerRequest: SendStickerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | integer | optional |  |
| `chatId` | string | optional |  |
| `mediaId` | string | optional | WABA media id from uploadMedia |
| `link` | string | optional | Public URL to webp sticker |
| `quotedMsgId` | string | optional |  |


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
await client.messaging.sendSticker(client.config.token, {});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/sendSticker?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

## profile

Namespace: `client.profile` → `ProfileApi` (2 operations)

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

### `updateMe`

#### Update profile info

Update WhatsApp Business Account profile fields. At least one of about, description, email, photo, address, vertical, websites is required. Blocked when the channel subscription limit is exceeded.

| | |
|---|---|
| HTTP | `POST /me` |
| SDK group | `client.profile` |
| API class | `ProfileApi` |
| operationId | `updateMe` |
| Signature | `updateMe(token: string, updateMeRequest?: UpdateMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `about` | string | optional | Profile About section |
| `address` | string | optional |  |
| `description` | string | optional | Business description (max 256 characters) |
| `email` | string | optional |  |
| `vertical` | string | optional | Industry of the business |
| `photo` | string | optional | HTTPS URL or data:image/...;base64,... payload |
| `websites` | array<string> | optional |  |


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Profile updated | `—` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `422` | Wrong request (no updatable fields) | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.profile.updateMe(client.config.token, {});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/me?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{}'
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

Namespace: `client.flows` → `FlowsApi` (11 operations)

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

### `getWhatsappBusinessEncryption`

#### Get business encryption public key

Retrieve the WhatsApp business public key and signature status for this channel's phone number. Required before publishing or sending Flows that use data encryption.

| | |
|---|---|
| HTTP | `GET /whatsapp_business_encryption` |
| SDK group | `client.flows` |
| API class | `FlowsApi` |
| operationId | `getWhatsappBusinessEncryption` |
| Signature | `getWhatsappBusinessEncryption(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetWhatsappBusinessEncryption200Response>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Business encryption key status | `—` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.flows.getWhatsappBusinessEncryption(client.config.token);
```

#### cURL equivalent

```bash
curl -X GET 'https://api.1msg.io/{instanceId}/whatsapp_business_encryption?token={token}'
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

### `setWhatsappBusinessEncryption`

#### Set business encryption public key

Upload and sign a 2048-bit RSA business public key (PEM) for this channel's phone number. Meta requires a signed key before Flow publish/send. Only one active key per number; a new upload replaces the previous key.

| | |
|---|---|
| HTTP | `POST /whatsapp_business_encryption` |
| SDK group | `client.flows` |
| API class | `FlowsApi` |
| operationId | `setWhatsappBusinessEncryption` |
| Signature | `setWhatsappBusinessEncryption(token: string, setWhatsappBusinessEncryptionRequest: SetWhatsappBusinessEncryptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateCommerce200Response>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `business_public_key` | string | **required** | 2048-bit RSA public key in PEM format (example="-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...\n-----END PUBLIC KEY-----\n") |


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Public key uploaded and signed | `—` |
| `400` | Missing or invalid PEM key | `—` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.flows.setWhatsappBusinessEncryption(client.config.token, {});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/whatsapp_business_encryption?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

## templates

Namespace: `client.templates` → `TemplatesApi` (4 operations)

### `addTemplate`

#### Create message template

| | |
|---|---|
| HTTP | `POST /addTemplate` |
| SDK group | `client.templates` |
| API class | `TemplatesApi` |
| operationId | `addTemplate` |
| Signature | `addTemplate(token: string, addTemplateRequest?: AddTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | optional |  |
| `category` | string | optional |  |
| `language` | string | optional |  |
| `components` | array<object> | optional |  |


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Template created | `—` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.templates.addTemplate(client.config.token, {});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/addTemplate?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

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

### `removeTemplate`

#### Remove message template

| | |
|---|---|
| HTTP | `POST /removeTemplate` |
| SDK group | `client.templates` |
| API class | `TemplatesApi` |
| operationId | `removeTemplate` |
| Signature | `removeTemplate(token: string, requestBody?: { [key: string]: any; }, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Template removed | `—` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.templates.removeTemplate(client.config.token, {});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/removeTemplate?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

### `sendTemplate`

#### Send Template Message

Send a WhatsApp template message (works outside the 24-hour session window). Supported `params` button `sub_type` values include: `url`, `quick_reply`, `copy_code` / `coupon_code`, `catalog`, `flow`, `limited_time_offer`, and **`order_details`** (WhatsApp Payments **India only** — requires an approved Utility template with an ORDER_DETAILS button). For India order/invoice payments outside 24h, include a button component: ```json { "type": "button", "sub_type": "order_details", "index": 0, "parameters": [{ "type": "action", "action": { "order_details": { "reference_id": "...", "currency": "INR", "order": {} } } }] } ``` Convenience wrapper with structured fields: `POST /sendOrderDetails`.

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
| `useMMlite` | boolean | optional | Force Marketing Messages API (POST marketing_messages). If omitted: auto for MARKETING category when channel has mm_lite_enabled and mm_lite_available service settings. |
| `messageActivitySharing` | boolean | optional | Sets message_activity_sharing on WABA payload. Enables click tracking webhooks. Requires MM Lite path. Ignored on Cloud API fallback. |
| `messageSendTtlSeconds` | integer | optional | Template message TTL in seconds (message_send_ttl_seconds). MARKETING via MM Lite: 43200–2592000. AUTHENTICATION: 30–900. UTILITY: 30–43200. AUTH/UTILITY also accept -1 (30-day custom TTL). |

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

## calling

Namespace: `client.calling` → `CallingApi` (3 operations)

### `getCallingSettings`

#### Get calling settings

WhatsApp Calling API settings (beta). Requires Meta Calling enablement on the WABA. Not production-complete — paths and webhook field names may change. Trial/subscription-limited channels are blocked.

| | |
|---|---|
| HTTP | `GET /callingSettings` |
| SDK group | `client.calling` |
| API class | `CallingApi` |
| operationId | `getCallingSettings` |
| Signature | `getCallingSettings(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Calling settings | `—` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.calling.getCallingSettings(client.config.token);
```

#### cURL equivalent

```bash
curl -X GET 'https://api.1msg.io/{instanceId}/callingSettings?token={token}'
```

### `initiateCall`

#### Initiate WhatsApp call

Outbound Calling API (beta). Requires Meta Calling enablement and product consent. Not production-complete — verify on stage before relying on this in production. Trial/subscription-limited channels are blocked.

| | |
|---|---|
| HTTP | `POST /initiateCall` |
| SDK group | `client.calling` |
| API class | `CallingApi` |
| operationId | `initiateCall` |
| Signature | `initiateCall(token: string, requestBody?: { [key: string]: any; }, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Call initiated | `—` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.calling.initiateCall(client.config.token, {});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/initiateCall?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

### `updateCallingSettings`

#### Update calling settings

Update WhatsApp Calling API settings (beta). Requires Meta Calling enablement. Trial/subscription-limited channels are blocked.

| | |
|---|---|
| HTTP | `POST /callingSettings` |
| SDK group | `client.calling` |
| API class | `CallingApi` |
| operationId | `updateCallingSettings` |
| Signature | `updateCallingSettings(token: string, requestBody?: { [key: string]: any; }, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Updated | `—` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.calling.updateCallingSettings(client.config.token, {});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/callingSettings?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

## catalog

Namespace: `client.catalog` → `CatalogApi` (2 operations)

### `createCommerce`

#### Set Commerce Settings

Update catalog/cart commerce settings via the `params` object. - `params.is_catalog_visible` — show catalog storefront icon (`true`) or hide it (`false`). - `params.is_cart_enabled` — enable cart (`true`) or disable it (`false`). Blocked when the channel subscription limit is exceeded. Requires a commerce-capable channel (Cloud Functions `/commerceWAV2`).

| | |
|---|---|
| HTTP | `POST /commerce` |
| SDK group | `client.catalog` |
| API class | `CatalogApi` |
| operationId | `createCommerce` |
| Signature | `createCommerce(token: string, createCommerceRequest: CreateCommerceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateCommerce200Response>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `params` | object | **required** |  |
  | `is_cart_enabled` | boolean | **required** | Enable cart |
  | `is_catalog_visible` | boolean | **required** | Show catalog storefront icon |

**OpenAPI example body**

```json
{
  "params": {
    "is_cart_enabled": true,
    "is_catalog_visible": true
  }
}
```


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Commerce updated | `—` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.catalog.createCommerce(client.config.token, {});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/commerce?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{
    "params": {
      "is_cart_enabled": true,
      "is_catalog_visible": true
    }
  }'
```

### `getCommerce`

#### Get Commerce Settings

Returns catalog/cart commerce settings for the channel. - `is_catalog_visible` — show catalog storefront icon (`true`) or hide it (`false`). - `is_cart_enabled` — enable cart (`true`) or disable it (`false`).

| | |
|---|---|
| HTTP | `GET /commerce` |
| SDK group | `client.catalog` |
| API class | `CatalogApi` |
| operationId | `getCommerce` |
| Signature | `getCommerce(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetCommerce200ResponseInner>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Commerce settings | `—` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.catalog.getCommerce(client.config.token);
```

#### cURL equivalent

```bash
curl -X GET 'https://api.1msg.io/{instanceId}/commerce?token={token}'
```

## channel

Namespace: `client.channel` → `ChannelApi` (3 operations)

### `getConversationalAutomation`

#### Get conversational automation settings

Get WhatsApp conversational components for the channel (welcome message, ice-breaker prompts, and slash commands). Proxies Meta/360dialog `GET /conversational_automation`. When `enable_welcome_message` is true and a user opens chat for the first time, Meta delivers a webhook message with `type: request_welcome`. The inbound formatter exposes that as `type: "request_welcome"` and `meta.request_welcome: true` so your webhook can send a custom welcome reply.

| | |
|---|---|
| HTTP | `GET /conversationalAutomation` |
| SDK group | `client.channel` |
| API class | `ChannelApi` |
| operationId | `getConversationalAutomation` |
| Signature | `getConversationalAutomation(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConversationalAutomation>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Conversational automation settings | `ConversationalAutomation` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.channel.getConversationalAutomation(client.config.token);
```

#### cURL equivalent

```bash
curl -X GET 'https://api.1msg.io/{instanceId}/conversationalAutomation?token={token}'
```

### `getStatus`

#### Get channel status

Returns WhatsApp Business API client connection status.

| | |
|---|---|
| HTTP | `GET /status` |
| SDK group | `client.channel` |
| API class | `ChannelApi` |
| operationId | `getStatus` |
| Signature | `getStatus(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Channel status | `—` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.channel.getStatus(client.config.token);
```

#### cURL equivalent

```bash
curl -X GET 'https://api.1msg.io/{instanceId}/status?token={token}'
```

### `setConversationalAutomation`

#### Set conversational automation settings

Update WhatsApp conversational components. Allowed body fields (others are ignored): - `enable_welcome_message` (boolean) - `prompts` (string[], max 4, each ≤ 80 chars) - `commands` (`{ command_name, command_description }[]`) Proxies Meta/360dialog `POST /conversational_automation`.

| | |
|---|---|
| HTTP | `POST /conversationalAutomation` |
| SDK group | `client.channel` |
| API class | `ChannelApi` |
| operationId | `setConversationalAutomation` |
| Signature | `setConversationalAutomation(token: string, conversationalAutomation: ConversationalAutomation, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `enable_welcome_message` | boolean | optional | Enable the automatic welcome message for new conversations |
| `prompts` | array<string> | optional | Ice-breaker prompt strings (max 4, each ≤ 80 characters) |
| `commands` | array<object> | optional | Slash commands shown in WhatsApp |

**OpenAPI example body**

```json
{
  "enable_welcome_message": true,
  "prompts": [
    "How can I help?"
  ],
  "commands": [
    {
      "command_name": "help",
      "command_description": "Get support options"
    }
  ]
}
```


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Updated settings from WABA, or legacy response.error wrapper on upstream failure. | `—` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.channel.setConversationalAutomation(client.config.token, undefined);
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/conversationalAutomation?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{
    "enable_welcome_message": true,
    "prompts": [
      "How can I help?"
    ],
    "commands": [
      {
        "command_name": "help",
        "command_description": "Get support options"
      }
    ]
  }'
```

## users

Namespace: `client.users` → `UsersApi` (3 operations)

### `blockUser`

#### Block WhatsApp user

| | |
|---|---|
| HTTP | `POST /blockUser` |
| SDK group | `client.users` |
| API class | `UsersApi` |
| operationId | `blockUser` |
| Signature | `blockUser(token: string, blockUserRequest: BlockUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponse>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | integer | **required** |  |


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Operation successful | `SuccessResponse` |
| `400` | Invalid request parameters | `ErrorResponse` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.users.blockUser(client.config.token, {});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/blockUser?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

### `listBlockedUsers`

#### List blocked WhatsApp users

Returns users currently blocked on this WhatsApp channel (WABA `GET /block_users`). Same channel token auth as `blockUser` / `unblockUser`.

| | |
|---|---|
| HTTP | `GET /blockedUsers` |
| SDK group | `client.users` |
| API class | `UsersApi` |
| operationId | `listBlockedUsers` |
| Signature | `listBlockedUsers(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListBlockedUsers200Response>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Blocked users list | `—` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.users.listBlockedUsers(client.config.token);
```

#### cURL equivalent

```bash
curl -X GET 'https://api.1msg.io/{instanceId}/blockedUsers?token={token}'
```

### `unblockUser`

#### Unblock WhatsApp user

| | |
|---|---|
| HTTP | `POST /unblockUser` |
| SDK group | `client.users` |
| API class | `UsersApi` |
| operationId | `unblockUser` |
| Signature | `unblockUser(token: string, blockUserRequest: BlockUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponse>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | integer | **required** |  |


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Operation successful | `SuccessResponse` |
| `400` | Invalid request parameters | `ErrorResponse` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.users.unblockUser(client.config.token, {});
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/unblockUser?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

## webhooks

Namespace: `client.webhooks` → `WebhooksApi` (2 operations)

### `getWebhook`

#### Get webhook URL

Returns the configured client webhook URL for this channel.

| | |
|---|---|
| HTTP | `GET /webhook` |
| SDK group | `client.webhooks` |
| API class | `WebhooksApi` |
| operationId | `getWebhook` |
| Signature | `getWebhook(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetWebhook200Response>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Current webhook URL | `—` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.webhooks.getWebhook(client.config.token);
```

#### cURL equivalent

```bash
curl -X GET 'https://api.1msg.io/{instanceId}/webhook?token={token}'
```

### `setWebhook`

#### Set webhook URL

Configure the client webhook URL for inbound events.

| | |
|---|---|
| HTTP | `POST /webhook` |
| SDK group | `client.webhooks` |
| API class | `WebhooksApi` |
| operationId | `setWebhook` |
| Signature | `setWebhook(token: string, getWebhook200Response?: GetWebhook200Response, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>` |

#### Authentication

- Query parameter `token` (required on every call)
- SDK: pass `client.config.token` as the first method argument

#### Request

- `token` (string, required) — channel API token

**Request body schema**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `webhookUrl` | string | optional |  |


**Responses**

| Status | Description | Schema |
|--------|-------------|--------|
| `200` | Webhook configured | `—` |
| `401` | Invalid or missing authentication token | `ErrorResponse` |
| `500` | Internal server error | `ErrorResponse` |

#### SDK example

```typescript
await client.webhooks.setWebhook(client.config.token, undefined);
```

#### cURL equivalent

```bash
curl -X POST 'https://api.1msg.io/{instanceId}/webhook?token={token}' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

## Exported types — full reference

All models below are exported from `@1msg/sdk`. Import by name:

```typescript
import type { SendMessageRequest, MessageSentResponse } from '@1msg/sdk';
```

### `AddTemplateRequest`

Check if a given object implements the AddTemplateRequest interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | `string` | optional | — |
| `category` | `string` | optional | — |
| `language` | `string` | optional | — |
| `components` | `Array<{ [key: string]: any` | optional | — |

### `BlockUserRequest`

Check if a given object implements the BlockUserRequest interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | `number` | **required** | — |

### `ConversationalAutomation`

Check if a given object implements the ConversationalAutomation interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `enable_welcome_message` | boolean | optional | Enable the automatic welcome message for new conversations |
| `prompts` | array<string> | optional | Ice-breaker prompt strings (max 4, each ≤ 80 characters) |
| `commands` | array<object> | optional | Slash commands shown in WhatsApp |

### `ConversationalAutomationCommandsInner`

Check if a given object implements the ConversationalAutomationCommandsInner interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `commandName` | `string` | **required** | — |
| `commandDescription` | `string` | **required** | — |

### `CreateCommerce200Response`

Check if a given object implements the CreateCommerce200Response interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `success` | `boolean` | optional | — |

### `CreateCommerceRequest`

Check if a given object implements the CreateCommerceRequest interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `params` | `CreateCommerceRequestParams` | **required** | — |

### `CreateCommerceRequestParams`

Check if a given object implements the CreateCommerceRequestParams interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `isCartEnabled` | `boolean` | **required** | — |
| `isCatalogVisible` | `boolean` | **required** | — |

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
| `msgId` | `string` | optional | — |
| `typingIndicator` | `boolean` | optional | — |

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

### `DeleteMediaLegacyRequest`

Check if a given object implements the DeleteMediaLegacyRequest interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `mediaId` | `string` | **required** | — |

### `ErrorResponse`

Check if a given object implements the ErrorResponse interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error` | string | optional | Error message |

### `GetCommerce200ResponseInner`

Check if a given object implements the GetCommerce200ResponseInner interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | optional | — |
| `isCartEnabled` | `boolean` | optional | — |
| `isCatalogVisible` | `boolean` | optional | — |

### `GetMmLiteStatus200Response`

Check if a given object implements the GetMmLiteStatus200Response interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `available` | `boolean` | optional | — |
| `status` | `string` | optional | — |
| `message` | `string` | optional | — |

### `GetWebhook200Response`

Check if a given object implements the GetWebhook200Response interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `webhookUrl` | `string` | optional | — |

### `GetWhatsappBusinessEncryption200Response`

@export

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `businessPublicKey` | `string` | optional | — |
| `businessPublicKeySignatureStatus` | `GetWhatsappBusinessEncryption200ResponseBusinessPublicKeySignatureStatusEnum` | optional | — |
| `data` | `Array<{ [key: string]: any` | optional | — |

### `ListBlockedUsers200Response`

Check if a given object implements the ListBlockedUsers200Response interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `blockedUsers` | `Array<{ [key: string]: any` | optional | — |

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

### `RetrieveMedia200Response`

Check if a given object implements the RetrieveMedia200Response interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | `string` | optional | — |
| `mimeType` | `string` | optional | — |
| `sha256` | `string` | optional | — |
| `fileSize` | `number` | optional | — |
| `id` | `string` | optional | — |

### `SendAddressMessageRequest`

Check if a given object implements the SendAddressMessageRequest interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | `number` | optional | — |
| `chatId` | `string` | optional | — |
| `body` | `string` | **required** | — |
| `quotedMsgId` | `string` | optional | — |

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

### `SendCtaUrlRequest`

Check if a given object implements the SendCtaUrlRequest interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | `number` | optional | — |
| `chatId` | `string` | optional | — |
| `body` | `string` | **required** | — |
| `displayText` | `string` | **required** | — |
| `url` | `string` | **required** | — |
| `header` | `{ [key: string]: any` | optional | — |
| `footer` | `string` | optional | — |
| `quotedMsgId` | `string` | optional | — |

### `SendFileRequest`

@export

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `body` | string | optional | File source (required unless mediaId is set): - HTTP/HTTPS URL - Base64 data URI |
| `filename` | string | optional | File name with extension (required with body, not with mediaId) |
| `mediaId` | string | optional | WABA media id from uploadMedia (alternative to body) |
| `mediaType` | enum("image" | "video" | "audio" | "document") | optional | Required when using mediaId |
| `voice` | boolean | optional | Native WhatsApp voice note (audio/ogg only) |
| `caption` | string | optional |  (maxLength=1024) |
| `quotedMsgId` | string | optional |  |
| `chatId` | string | optional |  |
| `phone` | integer | optional |  |

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

### `SendOrderDetailsRequest`

Check if a given object implements the SendOrderDetailsRequest interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | `number` | optional | — |
| `chatId` | `string` | optional | — |
| `template` | `string` | **required** | — |
| `namespace` | `string` | **required** | — |
| `language` | `{ [key: string]: any` | **required** | — |
| `params` | `Array<{ [key: string]: any` | optional | — |
| `order` | `{ [key: string]: any` | **required** | — |
| `referenceId` | `string` | optional | — |
| `paymentSettings` | `{ [key: string]: any` | optional | — |
| `currency` | `string` | optional | — |

### `SendPaymentRequestRequest`

@export

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | `number` | **required** | — |
| `region` | `SendPaymentRequestRequestRegionEnum` | **required** | — |
| `body` | `string` | optional | — |
| `interactive` | `{ [key: string]: any` | optional | — |
| `action` | `{ [key: string]: any` | optional | — |

### `SendReactionRequest`

Check if a given object implements the SendReactionRequest interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | `string` | optional | — |
| `body` | `string` | optional | — |
| `quotedMsgId` | `string` | optional | — |

### `SendStickerRequest`

Check if a given object implements the SendStickerRequest interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | `number` | optional | — |
| `chatId` | `string` | optional | — |
| `mediaId` | `string` | optional | — |
| `link` | `string` | optional | — |
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
| `useMMlite` | `boolean` | optional | — |
| `messageActivitySharing` | `boolean` | optional | — |
| `messageSendTtlSeconds` | `number` | optional | — |

### `SendTemplateRequestLanguage`

Check if a given object implements the SendTemplateRequestLanguage interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `policy` | `string` | optional | — |
| `code` | `string` | optional | — |

### `SetWhatsappBusinessEncryptionRequest`

Check if a given object implements the SetWhatsappBusinessEncryptionRequest interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `businessPublicKey` | `string` | **required** | — |

### `SuccessResponse`

Check if a given object implements the SuccessResponse interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `result` | string | optional | Operation result |

### `UpdateMeRequest`

Check if a given object implements the UpdateMeRequest interface.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `about` | `string` | optional | — |
| `address` | `string` | optional | — |
| `description` | `string` | optional | — |
| `email` | `string` | optional | — |
| `vertical` | `string` | optional | — |
| `photo` | `string` | optional | — |
| `websites` | `Array<string>` | optional | — |

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

