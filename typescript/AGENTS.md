# AGENTS.md — @1msg/sdk

> **Purpose:** exhaustive machine-readable integration guide for AI coding agents.
> **Human docs:** [README.md](./README.md)

## Identity

```yaml
package: "@1msg/sdk"
registry: https://www.npmjs.com/package/@1msg/sdk
repository: https://github.com/1msg/1msg-sdk/tree/main/typescript
runtime: node>=18
language: TypeScript
public_only: true
never_mention: chat-api
```

## Decision tree

```text
Need WhatsApp messaging from Node/TS?
  └─ yes → npm install @1msg/sdk
       └─ createClient({ baseUrl, instanceId, token })
            ├─ text reply → client.sendMessage({ body, chatId|phone })
            ├─ file/media → client.messaging.sendFile(token, url, filename, ...)
            ├─ template (24h closed) → client.messaging.sendTemplate(token, name, lang, ...)
            ├─ interactive list → client.messaging.sendList(token, SendListRequest)
            ├─ buttons → client.messaging.sendButton(token, SendButtonRequest)
            ├─ read inbox → client.messaging.listMessages(token, count, ..., chatId)
            ├─ mark read → client.messaging.createReadMessage(token, {...})
            ├─ profile → client.profile.getMe(token)
            ├─ groups → client.groups.*
            ├─ flows → client.flows.*
            └─ templates list → client.templates.listTemplates(token)
```

## Auth invariants

1. `createClient({ baseUrl, instanceId, token })` — all three required.
2. URL: `https://{baseUrl}/{instanceId}/{path}?token={token}`.
3. Pass `client.config.token` as first arg to every generated method.
4. Never log, commit, or expose tokens.
5. Server-side only — no browser usage.

## Client map

```typescript
client.config      // ChatApiConfig
client.messaging   // MessagingApi — send/list messages, media, interactive
client.profile     // ProfileApi — getMe
client.groups      // GroupsApi — create/list/manage groups
client.flows       // FlowsApi — WhatsApp Flows lifecycle
client.templates   // TemplatesApi — listTemplates
client.sendMessage // convenience for sendMessage
```

## Recipient rules

- `chatId`: `12020721369@c.us` (1:1) or `...@g.us` (group)
- `phone`: country code + number, no `+`, type number in SDK where generated
- Exactly one of `chatId` | `phone` per request

## Anti-patterns

- ❌ Raw `fetch` without token query param
- ❌ Hardcoding token in source
- ❌ Using `sendMessage` when 24h window is closed (use `sendTemplate`)
- ❌ Importing from `@1msg/sdk/dist/...` internal paths
- ❌ Referencing internal `chat-api` repo name in user-facing code

## Operation catalog

### getCallingSettings

```yaml
operationId: getCallingSettings
http: GET /callingSettings
client: client.calling.getCallingSettings
summary: Get calling settings
description: WhatsApp Calling API settings (beta). Requires Meta Calling enablement on the WABA. Not production-complete — paths and webhook field names may change. Trial/subscription-limited channels are blocked.
typescript: getCallingSettings(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>
requestBody: none
responses: 200, 401, 500
```

### initiateCall

```yaml
operationId: initiateCall
http: POST /initiateCall
client: client.calling.initiateCall
summary: Initiate WhatsApp call
description: Outbound Calling API (beta). Requires Meta Calling enablement and product consent. Not production-complete — verify on stage before relying on this in production. Trial/subscription-limited channels are blocked.
typescript: initiateCall(token: string, requestBody?: { [key: string]: any; }, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>
requestBody: none
responses: 200, 401, 500
```

### updateCallingSettings

```yaml
operationId: updateCallingSettings
http: POST /callingSettings
client: client.calling.updateCallingSettings
summary: Update calling settings
description: Update WhatsApp Calling API settings (beta). Requires Meta Calling enablement. Trial/subscription-limited channels are blocked.
typescript: updateCallingSettings(token: string, requestBody?: { [key: string]: any; }, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>
requestBody: none
responses: 200, 401, 500
```

### createCommerce

```yaml
operationId: createCommerce
http: POST /commerce
client: client.catalog.createCommerce
summary: Set Commerce Settings
description: Update catalog/cart commerce settings via the `params` object. - `params.is_catalog_visible` — show catalog storefront icon (`true`) or hide it (`false`). - `params.is_cart_enabled` — enable cart (`true`) or disable it (`false`). Blocked when the channel subscription limit is exceeded. Requires a commerce-capable channel (Cloud Functions `/commerceWAV2`).
typescript: createCommerce(token: string, createCommerceRequest: CreateCommerceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateCommerce200Response>
requestBody: inline object
responses: 200, 401, 500
```

### getCommerce

```yaml
operationId: getCommerce
http: GET /commerce
client: client.catalog.getCommerce
summary: Get Commerce Settings
description: Returns catalog/cart commerce settings for the channel. - `is_catalog_visible` — show catalog storefront icon (`true`) or hide it (`false`). - `is_cart_enabled` — enable cart (`true`) or disable it (`false`).
typescript: getCommerce(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetCommerce200ResponseInner>
requestBody: none
responses: 200, 401, 500
```

### getConversationalAutomation

```yaml
operationId: getConversationalAutomation
http: GET /conversationalAutomation
client: client.channel.getConversationalAutomation
summary: Get conversational automation settings
description: Get WhatsApp conversational components for the channel (welcome message, ice-breaker prompts, and slash commands). Proxies Meta/360dialog `GET /conversational_automation`. When `enable_welcome_message` is true and a user opens chat for the first time, Meta delivers a webhook message with `type: request_welcome`. The inbound formatter exposes that as `type: "request_welcome"` and `meta.request_welcome: true` so your webhook can send a custom welcome reply.
typescript: getConversationalAutomation(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConversationalAutomation>
requestBody: none
responses: 200, 401, 500
```

### getStatus

```yaml
operationId: getStatus
http: GET /status
client: client.channel.getStatus
summary: Get channel status
description: Returns WhatsApp Business API client connection status.
typescript: getStatus(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>
requestBody: none
responses: 200, 401, 500
```

### setConversationalAutomation

```yaml
operationId: setConversationalAutomation
http: POST /conversationalAutomation
client: client.channel.setConversationalAutomation
summary: Set conversational automation settings
description: Update WhatsApp conversational components. Allowed body fields (others are ignored): - `enable_welcome_message` (boolean) - `prompts` (string[], max 4, each ≤ 80 chars) - `commands` (`{ command_name, command_description }[]`) Proxies Meta/360dialog `POST /conversational_automation`.
typescript: setConversationalAutomation(token: string, conversationalAutomation: ConversationalAutomation, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>
requestBody: inline object
responses: 200, 401, 500
```

### createFlows

```yaml
operationId: createFlows
http: POST /flows
client: client.flows.createFlows
summary: Create Flow
typescript: createFlows(token: string, wabaAccountId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateGroups200Response>
requestBody: none
responses: 200
```

### createFlowsFlowIdDeprecate

```yaml
operationId: createFlowsFlowIdDeprecate
http: POST /flows/{flowId}/deprecate
client: client.flows.createFlowsFlowIdDeprecate
summary: Deprecate Flow
typescript: createFlowsFlowIdDeprecate(flowId: string, token: string, wabaAccountId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>
requestBody: none
responses: 200
```

### createFlowsFlowIdPublish

```yaml
operationId: createFlowsFlowIdPublish
http: POST /flows/{flowId}/publish
client: client.flows.createFlowsFlowIdPublish
summary: Publish Flow
typescript: createFlowsFlowIdPublish(flowId: string, token: string, wabaAccountId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>
requestBody: none
responses: 200
```

### deleteFlowsFlowId

```yaml
operationId: deleteFlowsFlowId
http: DELETE /flows/{flowId}
client: client.flows.deleteFlowsFlowId
summary: Delete Flow
typescript: deleteFlowsFlowId(flowId: string, token: string, wabaAccountId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteFlowsFlowId200Response>
requestBody: none
responses: 200
```

### getFlowsFlowId

```yaml
operationId: getFlowsFlowId
http: GET /flows/{flowId}
client: client.flows.getFlowsFlowId
summary: Get Flow Details
typescript: getFlowsFlowId(flowId: string, token: string, wabaAccountId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateGroups200Response>
requestBody: none
responses: 200
```

### getFlowsFlowIdPreview

```yaml
operationId: getFlowsFlowIdPreview
http: GET /flows/{flowId}/preview
client: client.flows.getFlowsFlowIdPreview
summary: Preview Flow
typescript: getFlowsFlowIdPreview(flowId: string, token: string, wabaAccountId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>
requestBody: none
responses: 200
```

### getWhatsappBusinessEncryption

```yaml
operationId: getWhatsappBusinessEncryption
http: GET /whatsapp_business_encryption
client: client.flows.getWhatsappBusinessEncryption
summary: Get business encryption public key
description: Retrieve the WhatsApp business public key and signature status for this channel's phone number. Required before publishing or sending Flows that use data encryption.
typescript: getWhatsappBusinessEncryption(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetWhatsappBusinessEncryption200Response>
requestBody: none
responses: 200, 401, 500
```

### listFlows

```yaml
operationId: listFlows
http: GET /flows
client: client.flows.listFlows
summary: List Flows
typescript: listFlows(token: string, wabaAccountId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListFlows200Response>
requestBody: none
responses: 200
```

### patchFlowsFlowIdAssets

```yaml
operationId: patchFlowsFlowIdAssets
http: PATCH /flows/{flowId}/assets
client: client.flows.patchFlowsFlowIdAssets
summary: Update Flow Structure
typescript: patchFlowsFlowIdAssets(flowId: string, token: string, wabaAccountId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PatchFlowsFlowIdAssets200Response>
requestBody: none
responses: 200
```

### patchFlowsFlowIdMetadata

```yaml
operationId: patchFlowsFlowIdMetadata
http: PATCH /flows/{flowId}/metadata
client: client.flows.patchFlowsFlowIdMetadata
summary: Update Flow Metadata
typescript: patchFlowsFlowIdMetadata(flowId: string, token: string, wabaAccountId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>
requestBody: none
responses: 200
```

### setWhatsappBusinessEncryption

```yaml
operationId: setWhatsappBusinessEncryption
http: POST /whatsapp_business_encryption
client: client.flows.setWhatsappBusinessEncryption
summary: Set business encryption public key
description: Upload and sign a 2048-bit RSA business public key (PEM) for this channel's phone number. Meta requires a signed key before Flow publish/send. Only one active key per number; a new upload replaces the previous key.
typescript: setWhatsappBusinessEncryption(token: string, setWhatsappBusinessEncryptionRequest: SetWhatsappBusinessEncryptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateCommerce200Response>
requestBody: inline object
responses: 200, 400, 401, 500
```

### createGroups

```yaml
operationId: createGroups
http: POST /groups
client: client.groups.createGroups
summary: Create Group
typescript: createGroups(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateGroups200Response>
requestBody: none
responses: 200
```

```typescript
await client.groups.createGroups(client.config.token, {
  subject: 'Support Group',
  participants: ['12020721369'],
});
```

### createGroupsGroupId

```yaml
operationId: createGroupsGroupId
http: POST /groups/{groupId}
client: client.groups.createGroupsGroupId
summary: Update Group Info
typescript: createGroupsGroupId(groupId: string, token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>
requestBody: none
responses: 200
```

### createGroupsGroupIdInvitelink

```yaml
operationId: createGroupsGroupIdInvitelink
http: POST /groups/{groupId}/inviteLink
client: client.groups.createGroupsGroupIdInvitelink
summary: Reset Invite Link
typescript: createGroupsGroupIdInvitelink(groupId: string, token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>
requestBody: none
responses: 200
```

### deleteGroupsGroupId

```yaml
operationId: deleteGroupsGroupId
http: DELETE /groups/{groupId}
client: client.groups.deleteGroupsGroupId
summary: Delete Group
typescript: deleteGroupsGroupId(groupId: string, token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteGroupsGroupId200Response>
requestBody: none
responses: 200
```

### getGroupsGroupId

```yaml
operationId: getGroupsGroupId
http: GET /groups/{groupId}
client: client.groups.getGroupsGroupId
summary: Get Group Info
typescript: getGroupsGroupId(groupId: string, token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>
requestBody: none
responses: 200
```

### getGroupsGroupIdInvitelink

```yaml
operationId: getGroupsGroupIdInvitelink
http: GET /groups/{groupId}/inviteLink
client: client.groups.getGroupsGroupIdInvitelink
summary: Get Invite Link
typescript: getGroupsGroupIdInvitelink(groupId: string, token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>
requestBody: none
responses: 200
```

### listGroups

```yaml
operationId: listGroups
http: GET /groups
client: client.groups.listGroups
summary: Get Groups List
typescript: listGroups(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>
requestBody: none
responses: 200
```

```typescript
const groups = await client.groups.listGroups(client.config.token);
```

### createReadMessage

```yaml
operationId: createReadMessage
http: POST /readMessage
client: client.messaging.createReadMessage
summary: Mark message as read
typescript: createReadMessage(token: string, messageId?: string, msgId?: string, typingIndicator?: boolean, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateReadMessage200Response>
requestBody: inline object
responses: 200, 401
```

```typescript
await client.messaging.createReadMessage(client.config.token, {
  chatId: '12020721369@c.us',
  messageId: 'wamid.HBgNMTIwMjA3MjEzNjkVAgARGBI5RTBCNUY0QUE2RjZBQzhGNDkA',
});
```

### createUploadMedia

```yaml
operationId: createUploadMedia
http: POST /uploadMedia
client: client.messaging.createUploadMedia
summary: Upload media
typescript: createUploadMedia(token: string, requestBody?: { [key: string]: any; }, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>
requestBody: none
responses: 200
```

```typescript
await client.messaging.createUploadMedia(client.config.token, {
  file: 'https://example.com/image.jpg',
});
```

### deleteMedia

```yaml
operationId: deleteMedia
http: DELETE /media/{mediaId}
client: client.messaging.deleteMedia
summary: Delete media from WABA storage
description: Delete previously uploaded media by numeric `mediaId` (from `/uploadMedia`). This is the canonical deletion endpoint and uses the REST `DELETE` verb on the media resource path. The older `POST /deleteMedia` is a deprecated alias.
typescript: deleteMedia(token: string, mediaId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponse>
requestBody: none
responses: 200, 400, 401, 500
```

### deleteMediaLegacy

```yaml
operationId: deleteMediaLegacy
http: POST /deleteMedia
client: client.messaging.deleteMediaLegacy
summary: Delete media from WABA storage (deprecated alias)
description: **Deprecated.** Use `DELETE /media/{mediaId}` instead. This POST alias is kept for backward compatibility with earlier integrations. New integrations should call `DELETE /media/{mediaId}`: 1msg follows REST conventions for resource deletion going forward (delete a resource with the `DELETE` verb on its resource path).
typescript: deleteMediaLegacy(token: string, deleteMediaLegacyRequest: DeleteMediaLegacyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponse>
requestBody: inline object
responses: 200, 400, 401, 500
```

### getMmLiteStatus

```yaml
operationId: getMmLiteStatus
http: GET /mmLiteStatus
client: client.messaging.getMmLiteStatus
summary: Get MM Lite availability and status
typescript: getMmLiteStatus(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetMmLiteStatus200Response>
requestBody: none
responses: 200, 401, 500
```

### listMessages

```yaml
operationId: listMessages
http: GET /messages
client: client.messaging.listMessages
summary: Get messages list
typescript: listMessages(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListMessages200Response>
requestBody: none
responses: 200
```

```typescript
const page = await client.messaging.listMessages(
  client.config.token,
  50,
  undefined,
  '12020721369@c.us',
);
```

### retrieveMedia

```yaml
operationId: retrieveMedia
http: GET /retrieveMedia
client: client.messaging.retrieveMedia
summary: Retrieve uploaded media metadata
description: Get WABA media URL and metadata by mediaId (from uploadMedia). The returned `url` is temporary and typically expires within ~5 minutes.
typescript: retrieveMedia(token: string, mediaId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RetrieveMedia200Response>
requestBody: none
responses: 200, 400, 401, 500
```

### sendAddressMessage

```yaml
operationId: sendAddressMessage
http: POST /sendAddressMessage
client: client.messaging.sendAddressMessage
summary: Send address request message
description: Request shipping address from the user. **India only** (WhatsApp Cloud API address messages). Requires an India WhatsApp Business number and an India (+91) recipient. Meta validates eligibility; mismatches return WABA errors such as `Unsupported Interactive Message type` (HTTP 200 with `sent: false`). The outbound payload always sends `action.parameters.country = "IN"`. A `country` field in the request body (if present) is ignored.
typescript: sendAddressMessage(token: string, sendAddressMessageRequest: SendAddressMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>
requestBody: inline object
responses: 200, 400, 401, 429, 500
```

### sendButton

```yaml
operationId: sendButton
http: POST /sendButton
client: client.messaging.sendButton
summary: Send Reply Buttons Message
typescript: sendButton(token: string, sendButtonRequest?: SendButtonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>
requestBody: inline object
responses: 200, 400, 401, 429, 500
```

```typescript
await client.messaging.sendButton(client.config.token, {
  phone: '12020721369',
  body: 'This is a buttons message',
  footer: 'Footer',
  sections: [{ type: 'reply', reply: { id: '1', title: 'Button 1' } }],
});
```

### sendCarousel

```yaml
operationId: sendCarousel
http: POST /sendCarousel
client: client.messaging.sendCarousel
summary: Send Carousel
description: You can send product cards via Carousel in two ways: Template messages: do not require a 24-hour customer service window between you and the recipient. Use sendTemplate. Free-form messages: can be sent only when a customer service window is open between you and the recipient. Use sendCarousel. The message structure in /sendCarousel is largely similar to sending a template. However, in this case you must explicitly specify all elements that are created in advance when working with templates. This is because the message is sent without using a template. In /sendCarousel, for sending a Catalog Carousel there can be either 1 URL button or one or more quick reply buttons.
typescript: sendCarousel(token: string, params: Array<object>, body?: string, quotedMsgId?: string, chatId?: string, phone?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>
requestBody: inline object
responses: 200, 400, 401, 429, 500
```

```typescript
await client.messaging.sendCarousel(client.config.token, {
  phone: '12020721369',
  body: 'Choose a product',
  cards: [],
});
```

### sendContact

```yaml
operationId: sendContact
http: POST /sendContact
client: client.messaging.sendContact
summary: Send a Contact
typescript: sendContact(token: string, sendContactRequest?: SendContactRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>
requestBody: inline object
responses: 200, 400, 401, 429, 500
```

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

### sendCtaUrl

```yaml
operationId: sendCtaUrl
http: POST /sendCtaUrl
client: client.messaging.sendCtaUrl
summary: Send CTA URL interactive message
description: Send an interactive message with a single call-to-action URL button.
typescript: sendCtaUrl(token: string, sendCtaUrlRequest: SendCtaUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>
requestBody: inline object
responses: 200, 400, 401, 429, 500
```

### sendFile

```yaml
operationId: sendFile
http: POST /sendFile
client: client.messaging.sendFile
summary: Send a File
description: Send a file to an existing chat. (Only if the dialogue has an Open Session). Only one of two parameters is needed to determine the destination - chatId or phone.
typescript: sendFile(token: string, body?: string, filename?: string, mediaId?: string, mediaType?: SendFileMediaTypeEnum, voice?: boolean, caption?: string, quotedMsgId?: string, chatId?: string, phone?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>
requestBody: inline object
responses: 200, 400, 401, 429, 500
```

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

### sendFlow

```yaml
operationId: sendFlow
http: POST /sendFlow
client: client.messaging.sendFlow
summary: Send WhatsApp Flow Message
description: Send Interactive WhatsApp Flow message to an existing chat. (Only if the dialogue has an Open Session). Only one of two parameters is needed to determine the destination - chatId or phone. Use this method to send a published WhatsApp Flow as a service (interactive) message. If the 24-hour window is closed, send a template with a FLOW button via /sendTemplate.
typescript: sendFlow(token: string, body: string, flowId: string, flowToken: string, flowCta: string, header?: SendFlowRequestHeader, footer?: string, flowAction?: SendFlowFlowActionEnum, flowActionPayload?: object, flowMessageVersion?: string, mode?: SendFlowModeEnum, flowActionData?: object, flowActionScreen?: string, quotedMsgId?: string, chatId?: string, phone?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>
requestBody: inline object
responses: 200, 400, 401, 429, 500
```

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

### sendList

```yaml
operationId: sendList
http: POST /sendList
client: client.messaging.sendList
summary: Send List Message
typescript: sendList(token: string, sendListRequest?: SendListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>
requestBody: inline object
responses: 200, 400, 401, 429, 500
```

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

### sendLocation

```yaml
operationId: sendLocation
http: POST /sendLocation
client: client.messaging.sendLocation
summary: Send a Location
description: Send a location to an existing chat. (Only if the dialogue has an Open Session). Only one of two parameters is needed to determine the destination - chatId or phone.
typescript: sendLocation(token: string, lat: string, lng: string, address?: string, name?: string, quotedMsgId?: string, chatId?: string, phone?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>
requestBody: inline object
responses: 200, 400, 401, 429, 500
```

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

### sendLocationRequest

```yaml
operationId: sendLocationRequest
http: POST /sendLocationRequest
client: client.messaging.sendLocationRequest
summary: Send Location Request Message
typescript: sendLocationRequest(token: string, sendLocationRequestRequest?: SendLocationRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>
requestBody: inline object
responses: 200, 400, 401, 429, 500
```

```typescript
await client.messaging.sendLocationRequest(client.config.token, {
  phone: '12020721369',
  body: 'Please share your location',
});
```

### sendMessage

```yaml
operationId: sendMessage
http: POST /sendMessage
client: client.messaging.sendMessage
summary: Send a Message
description: Send a message to an existing chat. (Only if the dialogue has an Open Session). The message will be added to the queue for sending and delivered even if the phone is disconnected from the Internet or authorization is not passed. Only one of two parameters is needed to determine the destination - chatId or phone.
typescript: sendMessage(token: string, body: string, quotedMsgId?: string, chatId?: string, phone?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>
requestBody: inline object
responses: 200, 400, 401, 429, 500
```

```typescript
await client.sendMessage({
  body: 'Hello from 1MSG SDK',
  chatId: '12020721369@c.us',
});
```

### sendOrderDetails

```yaml
operationId: sendOrderDetails
http: POST /sendOrderDetails
client: client.messaging.sendOrderDetails
summary: Send order details (India payments template)
description: Send a WhatsApp **order details** payment message via a pre-approved **Utility** template with an `ORDER_DETAILS` button. **India only** (WhatsApp Payments India). Requires: - India WhatsApp Business Account / phone number - Commerce-enabled channel - Approved template with an `ORDER_DETAILS` button Prefer this helper when you want a dedicated payload (`order`, `referenceId`, `currency`, `paymentSettings`). Under the hood it builds a Cloud API template `button` component with `sub_type: order_details` and calls the same path as `POST /sendTemplate`. To send the same message **outside the 24-hour window**, you can also call `POST /sendTemplate` directly with a `params` button: ```json { "type": "button", "sub_type": "order_details", "index": 0, "parameters": [{ "type": "action", "action": { "order_details": { "reference_id": "order-123", "type": "digital-goods", "payment_type": "upi", "payment_configuration": "payment_config_name", "currency": "INR", "total_amount": { "offset": 100, "value": 65000 }, "order": { "status": "pending", "items": [], "subtotal": { "offset": 100, "value": 65000 } } } } }] } ``` See Meta/360dialog: Payments India — order details template message.
typescript: sendOrderDetails(token: string, sendOrderDetailsRequest: SendOrderDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>
requestBody: inline object
responses: 200, 400, 401, 500
```

### sendPaymentRequest

```yaml
operationId: sendPaymentRequest
http: POST /sendPaymentRequest
client: client.messaging.sendPaymentRequest
summary: Send payment request (regional)
description: Send a regional payment request interactive message (beta scaffold). `region` must be IN, SG, or BR. Payload shape follows Meta regional payments docs; verify on stage before production use. Full regional builders are not implemented yet.
typescript: sendPaymentRequest(token: string, sendPaymentRequestRequest: SendPaymentRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>
requestBody: inline object
responses: 200, 400, 401, 500
```

### sendProduct

```yaml
operationId: sendProduct
http: POST /sendProduct
client: client.messaging.sendProduct
summary: Send a Product
typescript: sendProduct(token: string, requestBody?: { [key: string]: any; }, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>
requestBody: none
responses: 200, 400, 401, 429, 500
```

```typescript
await client.messaging.sendProduct(client.config.token, {
  phone: '12020721369',
  catalogId: 'CATALOG_ID',
  productRetailerId: 'SKU-001',
});
```

### sendReaction

```yaml
operationId: sendReaction
http: POST /sendReaction
client: client.messaging.sendReaction
summary: Send Reaction
typescript: sendReaction(token: string, sendReactionRequest?: SendReactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>
requestBody: inline object
responses: 200, 400, 401, 429, 500
```

```typescript
await client.messaging.sendReaction(
  client.config.token,
  '👍',
  'wamid.HBgNMTIwMjA3MjEzNjkVAgARGBI5RTBCNUY0QUE2RjZBQzhGNDkA',
  '12020721369@c.us',
);
```

### sendSticker

```yaml
operationId: sendSticker
http: POST /sendSticker
client: client.messaging.sendSticker
summary: Send sticker message
description: Send a WhatsApp sticker by mediaId or link URL.
typescript: sendSticker(token: string, sendStickerRequest: SendStickerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSentResponse>
requestBody: inline object
responses: 200, 400, 401, 429, 500
```

### getMe

```yaml
operationId: getMe
http: GET /me
client: client.profile.getMe
summary: Get Profile Info
description: Get WhatsApp Business Account profile information
typescript: getMe(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProfileInfo>
requestBody: none
responses: 200, 401, 500
```

```typescript
const profile = await client.profile.getMe(client.config.token);
```

### updateMe

```yaml
operationId: updateMe
http: POST /me
client: client.profile.updateMe
summary: Update profile info
description: Update WhatsApp Business Account profile fields. At least one of about, description, email, photo, address, vertical, websites is required. Blocked when the channel subscription limit is exceeded.
typescript: updateMe(token: string, updateMeRequest?: UpdateMeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>
requestBody: inline object
responses: 200, 401, 422, 500
```

### addTemplate

```yaml
operationId: addTemplate
http: POST /addTemplate
client: client.templates.addTemplate
summary: Create message template
typescript: addTemplate(token: string, addTemplateRequest?: AddTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>
requestBody: inline object
responses: 200, 401, 500
```

### listTemplates

```yaml
operationId: listTemplates
http: GET /templates
client: client.templates.listTemplates
summary: Get templates list
typescript: listTemplates(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListTemplates200Response>
requestBody: none
responses: 200
```

```typescript
const templates = await client.templates.listTemplates(client.config.token);
```

### removeTemplate

```yaml
operationId: removeTemplate
http: POST /removeTemplate
client: client.templates.removeTemplate
summary: Remove message template
typescript: removeTemplate(token: string, requestBody?: { [key: string]: any; }, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>
requestBody: none
responses: 200, 401, 500
```

### sendTemplate

```yaml
operationId: sendTemplate
http: POST /sendTemplate
client: client.templates.sendTemplate
summary: Send Template Message
description: Send a WhatsApp template message (works outside the 24-hour session window). Supported `params` button `sub_type` values include: `url`, `quick_reply`, `copy_code` / `coupon_code`, `catalog`, `flow`, `limited_time_offer`, and **`order_details`** (WhatsApp Payments **India only** — requires an approved Utility template with an ORDER_DETAILS button). For India order/invoice payments outside 24h, include a button component: ```json { "type": "button", "sub_type": "order_details", "index": 0, "parameters": [{ "type": "action", "action": { "order_details": { "reference_id": "...", "currency": "INR", "order": {} } } }] } ``` Convenience wrapper with structured fields: `POST /sendOrderDetails`.
typescript: sendTemplate(token: string, sendTemplateRequest?: SendTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>
requestBody: inline object
responses: 200
```

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

### blockUser

```yaml
operationId: blockUser
http: POST /blockUser
client: client.users.blockUser
summary: Block WhatsApp user
typescript: blockUser(token: string, blockUserRequest: BlockUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponse>
requestBody: inline object
responses: 200, 400, 401, 500
```

### listBlockedUsers

```yaml
operationId: listBlockedUsers
http: GET /blockedUsers
client: client.users.listBlockedUsers
summary: List blocked WhatsApp users
description: Returns users currently blocked on this WhatsApp channel (WABA `GET /block_users`). Same channel token auth as `blockUser` / `unblockUser`.
typescript: listBlockedUsers(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListBlockedUsers200Response>
requestBody: none
responses: 200, 401, 500
```

### unblockUser

```yaml
operationId: unblockUser
http: POST /unblockUser
client: client.users.unblockUser
summary: Unblock WhatsApp user
typescript: unblockUser(token: string, blockUserRequest: BlockUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponse>
requestBody: inline object
responses: 200, 400, 401, 500
```

### getWebhook

```yaml
operationId: getWebhook
http: GET /webhook
client: client.webhooks.getWebhook
summary: Get webhook URL
description: Returns the configured client webhook URL for this channel.
typescript: getWebhook(token: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetWebhook200Response>
requestBody: none
responses: 200, 401, 500
```

### setWebhook

```yaml
operationId: setWebhook
http: POST /webhook
client: client.webhooks.setWebhook
summary: Set webhook URL
description: Configure the client webhook URL for inbound events.
typescript: setWebhook(token: string, getWebhook200Response?: GetWebhook200Response, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>
requestBody: inline object
responses: 200, 401, 500
```

## Type exports

Import any model by name from package root:

```typescript
import type { SendMessageRequest, MessageSentResponse, ProfileInfo } from '@1msg/sdk';
```

### All exported models

- `AddTemplateRequest` (4 fields)
- `BlockUserRequest` (1 fields)
- `ConversationalAutomation` (3 fields)
- `ConversationalAutomationCommandsInner` (2 fields)
- `CreateCommerce200Response` (1 fields)
- `CreateCommerceRequest` (1 fields)
- `CreateCommerceRequestParams` (2 fields)
- `CreateGroups200Response` (1 fields)
- `CreateReadMessage200Response` (1 fields)
- `CreateReadMessage401Response` (1 fields)
- `CreateReadMessageRequest` (3 fields)
- `DeleteFlowsFlowId200Response` (2 fields)
- `DeleteGroupsGroupId200Response` (2 fields)
- `DeleteMediaLegacyRequest` (1 fields)
- `ErrorResponse` (1 fields)
- `GetCommerce200ResponseInner` (3 fields)
- `GetMmLiteStatus200Response` (3 fields)
- `GetWebhook200Response` (1 fields)
- `GetWhatsappBusinessEncryption200Response` (3 fields)
- `ListBlockedUsers200Response` (1 fields)
- `ListFlows200Response` (5 fields)
- `ListMessages200Response` (2 fields)
- `ListTemplates200Response` (3 fields)
- `MessageSentResponse` (4 fields)
- `PatchFlowsFlowIdAssets200Response` (3 fields)
- `ProfileInfo` (8 fields)
- `RetrieveMedia200Response` (5 fields)
- `SendAddressMessageRequest` (4 fields)
- `SendButtonRequest` (4 fields)
- `SendButtonRequestSectionsInner` (2 fields)
- `SendButtonRequestSectionsInnerReply` (2 fields)
- `SendCarouselRequest1` (5 fields)
- `SendContactRequest` (2 fields)
- `SendContactRequestContactsInner` (7 fields)
- `SendContactRequestContactsInnerName` (6 fields)
- `SendContactRequestContactsInnerOrg` (3 fields)
- `SendContactRequestContactsInnerPhonesInner` (3 fields)
- `SendCtaUrlRequest` (8 fields)
- `SendFileRequest` (9 fields)
- `SendFlowRequest1` (15 fields)
- `SendFlowRequest1Header`
- `SendFlowRequestHeader`
- `SendListRequest` (5 fields)
- `SendListRequestSectionsInner` (2 fields)
- `SendListRequestSectionsInnerRowsInner` (3 fields)
- `SendLocationRequest1` (7 fields)
- `SendLocationRequestRequest` (2 fields)
- `SendMessageRequest` (4 fields)
- `SendOrderDetailsRequest` (10 fields)
- `SendPaymentRequestRequest` (5 fields)
- `SendReactionRequest` (3 fields)
- `SendStickerRequest` (5 fields)
- `SendTemplateRequest` (8 fields)
- `SendTemplateRequestLanguage` (2 fields)
- `SetWhatsappBusinessEncryptionRequest` (1 fields)
- `SuccessResponse` (1 fields)
- `UpdateMeRequest` (7 fields)

## Error handling

```typescript
import { ResponseError } from "@1msg/sdk";
// 400 validation, 401 auth, 429 rate limit, 500 server
```

## Metadata

openapi_title: 1MSG WhatsApp Business API (Public)
openapi_version: 1.0.0
operations: 60
models: 57

