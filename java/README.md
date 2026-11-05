# 1MSG Java SDK

Official Java SDK for the **1MSG WhatsApp Business API**.

This document is generated from the public OpenAPI contract. It covers install,
auth, quick start, and every public operation available in the client.

| | |
|---|---|
| **Maven Central** | [`io.1msg:sdk`](https://central.sonatype.com/artifact/io.1msg/sdk) |
| **Source** | [github.com/1msg/1msg-sdk/java](https://github.com/1msg/1msg-sdk/tree/main/java) |
| **API docs** | [docs.1msg.io](https://docs.1msg.io/) |
| **Platform** | [platform.1msg.io](https://platform.1msg.io/) |
| **Support** | support@1msg.io |
| **OpenAPI version** | 2.0.0 |
| **Operations** | 63 |
| **AI agent guide** | [AGENTS.md](./AGENTS.md) |

---

## Install

```gradle
implementation("io.1msg:sdk:2.0.2")
```

```xml
<dependency>
  <groupId>io.1msg</groupId>
  <artifactId>sdk</artifactId>
  <version>2.0.2</version>
</dependency>
```

## Requirements

| Variable | Where to get it | Example |
|----------|-----------------|---------|
| `baseUrl` | Platform → channel → API host | `https://api.1msg.io` |
| `instanceId` | Platform → channel id | `ODI371267300` |
| `token` | Platform → channel → API token | JWT or API key |

Use environment variables (`MSG_API_TOKEN`, `MSG_INSTANCE_ID`). Never commit tokens.

## Quick start

```java
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.api.MessagingApi;

ApiClient client = Configuration.getDefaultApiClient();
client.setBasePath("https://api.1msg.io/" + System.getenv("MSG_INSTANCE_ID"));

MessagingApi messaging = new MessagingApi(client);
messaging.sendMessage(
  System.getenv("MSG_API_TOKEN"),
  "Hello from 1MSG SDK",
  null,
  "12020721369@c.us",
  null
);
```

## Authentication

All requests use query-token auth:

```text
https://{baseUrl}/{instanceId}/{path}?token={token}
```

Pass the channel token as the first argument to generated API methods.

## Recipient addressing

- `chatId`: `12020721369@c.us` (1:1) or `...@g.us` (group)
- `phone`: country code + number, no `+`
- Exactly one of `chatId` | `phone` per request

## 24-hour messaging window

Free-form `sendMessage` only works inside the 24h customer-care window.
Outside that window use `sendTemplate`.

## Client map

```java
MessagingApi   // send/list messages, media, interactive
ProfileApi     // getMe
GroupsApi      // create/list/manage groups
FlowsApi       // WhatsApp Flows lifecycle
TemplatesApi   // listTemplates
ChannelApi     // channel helpers
CallingApi     // calling
WebhooksApi    // webhooks
```

## Package notes

Maven coordinates are `io.1msg:sdk`. Java packages live under `io.onemsg.sdk` because `io.1msg` is not a valid Java package segment.

## API reference

API groups: calling, catalog, channel, flows, groups, messaging, profile, templates, users, webhooks.

### calling

#### `getCallingSettings`

Get calling settings

Return WhatsApp Calling API settings for this channel (beta). Proxies upstream `GET /calling/settings`. **Prerequisites** - Number must be eligible for Meta Calling (Cloud API; not COEX) - Trial / `subscriptionBlocked` channels receive **403** plain text - You need your own WebRTC or SIP stack; 1msg is a **signaling proxy** only and does **not** store call history or recordings See the **Calling** tag overview for inbound/outbound flows and webhooks.

```yaml
http: GET /callingSettings
operationId: getCallingSettings
clientGroup: calling
responses: 200, 401, 500
```

#### `initiateCall`

Call action (connect / pre_accept / accept / reject / terminate)

Perform a WhatsApp Calling action (beta). Proxies upstream `POST /calling/calls`. Despite the historical path name `/initiateCall`, this endpoint handles **all** call actions: | action | Use | Required | |--------|-----|----------| | `connect` | Outbound business → user | `to` + `session` (`sdp_type: offer`) | | `pre_accept` | Inbound (optional, reduces audio clipping) | `call_id` + `session` (`sdp_type: answer`) | | `accept` | Inbound answer | `call_id` + `session` (`sdp_type: answer`) | | `reject` | Decline inbound | `call_id` | | `terminate` | Hang up | `call_id` | **SDP / media (critical)** - `accept` / `pre_accept` require a **WebRTC-generated SDP answer**. - Do **not** send Meta's offer SDP back as the answer. - Postman (or curl) alone **cannot** establish real media — you need a WebRTC or SIP stack. 1msg only proxies signaling. Answer within ~**30–60 seconds** of an inbound `connect` webhook or Meta terminates as unanswered. Common Meta errors include Calling not enabled (`138000`), no permission (`138006`), SDP validation failures. **Outbound** requires a prior Call Permission Request (CPR) acceptance. See the **Calling** tag overview for the full outbound flow and CPR limits. Trial / `subscriptionBlocked` → **403** plain text. Upstream failures often return HTTP 200 with `{ "response": { "error": "<upstream message>" } }`. `Invalid API KEY` is used only when Meta/360 body actually indicates an invalid API key or token. Other upstream 401s (notably call permission `138006`) pass through `error.message` / `error_user_msg`.

```yaml
http: POST /initiateCall
operationId: initiateCall
clientGroup: calling
responses: 200, 401, 500
```

#### `updateCallingSettings`

Update calling settings

Enable, disable, or update WhatsApp Calling settings (beta). Proxies upstream `POST /calling/settings`. Body is forwarded as-is (1msg does not validate fields). **Common fields under `calling`** - `status` (`ENABLED` | `DISABLED`) — required to turn calling on/off - `call_icon_visibility` (`DEFAULT` | `DISABLE_ALL`) — optional - `callback_permission_status` (`ENABLED` | `DISABLED`) — optional; when enabled, inbound user calls grant callback permission - `call_hours` — optional hours / timezone object - `sip` — optional SIP trunk; when SIP is ENABLED, Graph call actions and calling webhooks are not used - `srtp_key_exchange_protocol` (`DTLS` | `SDES`) — SDES only with SIP - `video.status` — optional Meta may accept only one feature group per request — prefer focused updates (e.g. enable status first, then SIP). Trial / `subscriptionBlocked` → **403** plain text.

```yaml
http: POST /callingSettings
operationId: updateCallingSettings
clientGroup: calling
responses: 200, 401, 500
```

### catalog

#### `createCommerce`

Set Commerce Settings

Update catalog/cart commerce settings via the `params` object. - `params.is_catalog_visible` — show catalog storefront icon (`true`) or hide it (`false`). - `params.is_cart_enabled` — enable cart (`true`) or disable it (`false`). Blocked when the channel subscription limit is exceeded. Requires a commerce-capable channel (Cloud Functions `/commerceWAV2`).

```yaml
http: POST /commerce
operationId: createCommerce
clientGroup: catalog
responses: 200, 401, 500
```

#### `getCommerce`

Get Commerce Settings

Returns catalog/cart commerce settings for the channel. Fails with a provider error when the WABA has no catalog linked — that is an API/account limitation, not an MCP schema bug. - `is_catalog_visible` — show catalog storefront icon (`true`) or hide it (`false`). - `is_cart_enabled` — enable cart (`true`) or disable it (`false`).

```yaml
http: GET /commerce
operationId: getCommerce
clientGroup: catalog
responses: 200, 401, 500
```

### channel

#### `createSettings`

Update channel settings

Update channel settings. Only send fields you want to change. `webhookUrl` **replaces** the stored list (one URL string, or up to 5 URLs as an array). Passing an empty value clears webhooks. Repeating the same URL(s) also clears a sticky auto-disable. With several URLs, send the complete array to re-enable one of them — omitting a URL removes it from the channel.

```yaml
http: POST /settings
operationId: createSettings
clientGroup: channel
responses: 200, 401, 500
```

#### `getConversationalAutomation`

Get conversational automation settings

Get WhatsApp conversational components for the channel (welcome message, ice-breaker prompts, and slash commands). Proxies Meta/360dialog `GET /conversational_automation`. When `enable_welcome_message` is true and a user opens chat for the first time, Meta delivers a webhook message with `type: request_welcome`. The inbound formatter exposes that as `type: "request_welcome"` and `meta.request_welcome: true` so your webhook can send a custom welcome reply.

```yaml
http: GET /conversationalAutomation
operationId: getConversationalAutomation
clientGroup: channel
responses: 200, 401, 500
```

#### `getStatus`

Get channel status

Return WhatsApp Cloud API connection status for this channel (`connected` when the number can send). May include `accountStatus`, messaging limit, and MM Lite availability. Optional `health_status_warning` appears only when Meta Graph health could not be loaded and a soft `connected` response is returned. Omitted on the normal path and when health details are not applicable for the channel — never an internal provider/transport name.

```yaml
http: GET /status
operationId: getStatus
clientGroup: channel
responses: 200, 401, 500
```

#### `listSettings`

Get channel settings

Return channel settings: webhook URL(s), delivery flags, and analytics toggles. Auto-disable / circuit state matches `GET /webhook`. **Prefer `webhookStatuses`** (one row per configured URL). The breaker is per URL, not per channel. Channel-level `haveDisabledWebhooks` is `true` when **at least one** URL in `webhookUrl` is sticky auto-disabled — not "the channel is dead". Live URLs still receive events. Top-level `circuitState` / `reason` / `fails` / `trips` are a compatibility summary of one URL (first sticky-disabled, else first configured). This is the same `GET /settings` endpoint as the REST API (previously missing from MCP).

```yaml
http: GET /settings
operationId: listSettings
clientGroup: channel
responses: 200, 401, 500
```

#### `setConversationalAutomation`

Set conversational automation settings

Update WhatsApp conversational components. Allowed body fields (others are ignored): - `enable_welcome_message` (boolean) - `prompts` (string[], max 4, each ≤ 80 chars) - `commands` (`{ command_name, command_description }[]`) Proxies Meta/360dialog `POST /conversational_automation`.

```yaml
http: POST /conversationalAutomation
operationId: setConversationalAutomation
clientGroup: channel
responses: 200, 401, 500
```

### flows

#### `createFlows`

Create Flow

Create a WhatsApp Flow (`name` + `categories` required). Currently returns HTTP 501 until the Meta Graph Flows rewrite is available.

```yaml
http: POST /flows
operationId: createFlows
clientGroup: flows
responses: 200, 501
```

#### `createFlowsFlowIdDeprecate`

Deprecate Flow

```yaml
http: POST /flows/{flowId}/deprecate
operationId: createFlowsFlowIdDeprecate
clientGroup: flows
responses: 200
```

#### `createFlowsFlowIdPublish`

Publish Flow

```yaml
http: POST /flows/{flowId}/publish
operationId: createFlowsFlowIdPublish
clientGroup: flows
responses: 200
```

#### `deleteFlowsFlowId`

Delete Flow

```yaml
http: DELETE /flows/{flowId}
operationId: deleteFlowsFlowId
clientGroup: flows
responses: 200
```

#### `getFlowsFlowId`

Get Flow Details

```yaml
http: GET /flows/{flowId}
operationId: getFlowsFlowId
clientGroup: flows
responses: 200
```

#### `getFlowsFlowIdPreview`

Preview Flow

```yaml
http: GET /flows/{flowId}/preview
operationId: getFlowsFlowIdPreview
clientGroup: flows
responses: 200
```

#### `getWhatsappBusinessEncryption`

Get business encryption public key

Retrieve the WhatsApp business public key and signature status for this channel's phone number. Required before publishing or sending Flows that use data encryption.

```yaml
http: GET /whatsapp_business_encryption
operationId: getWhatsappBusinessEncryption
clientGroup: flows
responses: 200, 401, 500
```

#### `listFlows`

List Flows

List WhatsApp Flows for the WABA. Currently returns HTTP 501 until the Meta Graph Flows rewrite is available.

```yaml
http: GET /flows
operationId: listFlows
clientGroup: flows
responses: 200, 501
```

#### `patchFlowsFlowIdAssets`

Update Flow Structure

Replace the Flow JSON document (`flowJson`). Currently returns HTTP 501 until the Meta Graph Flows rewrite is available.

```yaml
http: PATCH /flows/{flowId}/assets
operationId: patchFlowsFlowIdAssets
clientGroup: flows
responses: 200, 501
```

#### `patchFlowsFlowIdMetadata`

Update Flow Metadata

Update Flow `name`, `categories`, and/or `endpointUri`. Currently returns HTTP 501 until the Meta Graph Flows rewrite is available.

```yaml
http: PATCH /flows/{flowId}/metadata
operationId: patchFlowsFlowIdMetadata
clientGroup: flows
responses: 200, 501
```

#### `setWhatsappBusinessEncryption`

Set business encryption public key

Upload and sign a 2048-bit RSA business public key (PEM) for this channel's phone number. Meta requires a signed key before Flow publish/send. Only one active key per number; a new upload replaces the previous key.

```yaml
http: POST /whatsapp_business_encryption
operationId: setWhatsappBusinessEncryption
clientGroup: flows
responses: 200, 400, 401, 500
```

### groups

#### `createGroups`

Create Group

```yaml
http: POST /groups
operationId: createGroups
clientGroup: groups
responses: 200
```

#### `createGroupsGroupId`

Update Group Info

Update group subject, description, and/or profile picture. Path `groupId` is the WABA group id (without `@g.us`).

```yaml
http: POST /groups/{groupId}
operationId: createGroupsGroupId
clientGroup: groups
responses: 200
```

#### `createGroupsGroupIdInvitelink`

Reset Invite Link

```yaml
http: POST /groups/{groupId}/inviteLink
operationId: createGroupsGroupIdInvitelink
clientGroup: groups
responses: 200
```

#### `deleteGroupsGroupId`

Delete Group

```yaml
http: DELETE /groups/{groupId}
operationId: deleteGroupsGroupId
clientGroup: groups
responses: 200
```

#### `getGroupsGroupId`

Get Group Info

```yaml
http: GET /groups/{groupId}
operationId: getGroupsGroupId
clientGroup: groups
responses: 200
```

#### `getGroupsGroupIdInvitelink`

Get Invite Link

```yaml
http: GET /groups/{groupId}/inviteLink
operationId: getGroupsGroupIdInvitelink
clientGroup: groups
responses: 200
```

#### `listGroups`

Get Groups List

List WhatsApp groups for this channel. Paginate with `limit`, `before`, and `after`.

```yaml
http: GET /groups
operationId: listGroups
clientGroup: groups
responses: 200
```

### messaging

#### `createReadMessage`

Mark message as read

```yaml
http: POST /readMessage
operationId: createReadMessage
clientGroup: messaging
responses: 200, 401
```

#### `createUploadMedia`

Upload media

Upload a file to WhatsApp media storage and get a numeric `mediaId` for later use with `send_file` / `send_sticker` (`mediaId` field, not `body`). Pass the file as `body` **or** `url` — an HTTP(S) URL or a base64 data URI. The `mediaId` in the response is a numeric string (keep it as a string).

```yaml
http: POST /uploadMedia
operationId: createUploadMedia
clientGroup: messaging
responses: 200
```

#### `deleteMedia`

Delete media from WABA storage

Delete previously uploaded media by numeric `mediaId` (from `/uploadMedia`). This is the canonical deletion endpoint and uses the REST `DELETE` verb on the media resource path. The older `POST /deleteMedia` is a deprecated alias.

```yaml
http: DELETE /media/{mediaId}
operationId: deleteMedia
clientGroup: messaging
responses: 200, 400, 401, 500
```

#### `deleteMediaLegacy`

Delete media from WABA storage (deprecated alias)

**Deprecated.** Use `DELETE /media/{mediaId}` instead. This POST alias is kept for backward compatibility with earlier integrations. New integrations should call `DELETE /media/{mediaId}`: 1msg follows REST conventions for resource deletion going forward (delete a resource with the `DELETE` verb on its resource path).

```yaml
http: POST /deleteMedia
operationId: deleteMediaLegacy
clientGroup: messaging
responses: 200, 400, 401, 500
```

#### `getMmLiteStatus`

Get MM Lite availability and status

```yaml
http: GET /mmLiteStatus
operationId: getMmLiteStatus
clientGroup: messaging
responses: 200, 401, 500
```

#### `listMessages`

Get messages list

List stored chat history for this channel (requires history storage). Filter with `chatId`, `limit`, `last`, message numbers, or time bounds.

```yaml
http: GET /messages
operationId: listMessages
clientGroup: messaging
responses: 200
```

#### `retrieveMedia`

Retrieve uploaded media metadata

Get WABA media URL and metadata by mediaId (from uploadMedia). The returned `url` is temporary and typically expires within ~5 minutes.

```yaml
http: GET /retrieveMedia
operationId: retrieveMedia
clientGroup: messaging
responses: 200, 400, 401, 500
```

#### `sendAddressMessage`

Send address request message

Request shipping address from the user (WhatsApp interactive `address_message`). **India and Singapore only.** Requires: - Business WhatsApp number registered in that country - Recipient phone matching the country (`+91` ↔ `IN`, `+65` ↔ `SG`) Pass `country: "IN"` or `country: "SG"`. Eligibility is validated upstream; mismatches (e.g. Singapore phone with `country: "IN"`) return errors such as `Unsupported Interactive Message type` (HTTP 200 with `sent: false`). Optional action parameters: `values`, `saved_addresses`, `validation_errors`.

```yaml
http: POST /sendAddressMessage
operationId: sendAddressMessage
clientGroup: messaging
responses: 200, 400, 401, 429, 500
```

#### `sendButton`

Send Reply Buttons Message

```yaml
http: POST /sendButton
operationId: sendButton
clientGroup: messaging
responses: 200, 400, 401, 429, 500
```

#### `sendCarousel`

Send Carousel

You can send product cards via Carousel in two ways: Template messages: do not require a 24-hour customer service window between you and the recipient. Use sendTemplate. Free-form messages: can be sent only when a customer service window is open between you and the recipient. Use sendCarousel. The message structure in /sendCarousel is largely similar to sending a template. However, in this case you must explicitly specify all elements that are created in advance when working with templates. This is because the message is sent without using a template. In /sendCarousel, for a Catalog Carousel there can be either 1 URL button or one or more quick reply buttons. Prefer the simple `cards` array (2–10 cards). Each card needs a header media/product plus a CTA URL or quick-reply buttons. Example: ```json { "phone": "79001234567", "body": "Pick a product", "cards": [ { "header": { "type": "image", "image": { "link": "https://example.com/1.jpg" } }, "body": { "text": "Card one" }, "type": "cta_url", "action": { "name": "cta_url", "parameters": { "url": "https://example.com/p1", "display_text": "Open" } } }, { "header": { "type": "image", "image": { "link": "https://example.com/2.jpg" } }, "body": { "text": "Card two" }, "type": "cta_url", "action": { "name": "cta_url", "parameters": { "url": "https://example.com/p2", "display_text": "Open" } } } ] } ``` `params` with a `CAROUSEL` component is the template-like alternative.

```yaml
http: POST /sendCarousel
operationId: sendCarousel
clientGroup: messaging
responses: 200, 400, 401, 429, 500
```

#### `sendContact`

Send a Contact

Send a WhatsApp contact card. Preferred simple body (legacy-compatible): ```json { "phone": "79001234567", "contact": { "name": "Lida", "phone": "+79181976551" } } ``` Cloud API shape also works: `contacts` is an array of objects with `name.formatted_name` and `phones[].phone` (E.164 string, **not** a timestamp).

```yaml
http: POST /sendContact
operationId: sendContact
clientGroup: messaging
responses: 200, 400, 401, 429, 500
```

#### `sendContactInfo`

Request the user's phone number

Send a service-window interactive message that asks the WhatsApp user to share their phone number (`request_contact_info`). Use this when you only know the user by BSUID (WhatsApp username) and the 24-hour customer service window is open. Outside that window, create a UTILITY or MARKETING template with a `REQUEST_CONTACT_INFO` button (`POST /addTemplate`) and send it with `POST /sendTemplate`. `body` is the text shown above the button (1–1024 characters). WhatsApp chooses the button label. This method has no button-text field — do not send one. ```json { "bsuid": "US.13491208655302741918", "body": "Please share your phone number so we can reach you." } ``` `phone`, `chatId` (`…@c.us`, `…@lid`, `…@username`), or `bsuid` identifies the recipient. One of them is enough. After Meta accepts the send, the outgoing webhook and stored history message use this same text as `messages[].body` (`type: interactive`). When the user taps the button, Meta sends an inbound `contacts` message. The sender stays the BSUID. The shared number is on the card with `origin: contact_request`. We write that phone onto the existing BSUID contact automatically — there is no separate “link phone” call. ```json { "contacts": [ { "profile": { "name": "Ada", "username": "ada" }, "user_id": "US.13491208655302741918" } ], "messages": [ { "from_user_id": "US.13491208655302741918", "type": "contacts", "contacts": [ { "origin": "contact_request", "phones": [{ "phone": "+1 202-555-0123", "wa_id": "12025550123" }] } ] } ] } ``` The stored inbound message body is the digits (`12025550123`). If Meta later includes a phone on an ordinary message or status for that same BSUID (`wa_id`, `from`, or `recipient_id`, together with `user_id` / `recipient_user_id`), that phone is merged onto the same contact. A contact card the user forwards (`origin` other than `contact_request`) is someone else's number and is not stored as this sender's phone.

```yaml
http: POST /sendContactInfo
operationId: sendContactInfo
clientGroup: messaging
responses: 200, 400, 401, 429, 500
```

#### `sendCtaUrl`

Send CTA URL interactive message

Send an interactive message with a single call-to-action URL button.

```yaml
http: POST /sendCtaUrl
operationId: sendCtaUrl
clientGroup: messaging
responses: 200, 400, 401, 429, 500
```

#### `sendFile`

Send a File

Send a file to an existing chat. (Only if the dialogue has an Open Session). Only one of two parameters is needed to determine the destination - chatId or phone.

```yaml
http: POST /sendFile
operationId: sendFile
clientGroup: messaging
responses: 200, 400, 401, 429, 500
```

#### `sendFlow`

Send WhatsApp Flow Message

Send Interactive WhatsApp Flow message to an existing chat. (Only if the dialogue has an Open Session). Only one of two parameters is needed to determine the destination - chatId or phone. Use this method to send a published WhatsApp Flow as a service (interactive) message. If the 24-hour window is closed, send a template with a FLOW button via /sendTemplate.

```yaml
http: POST /sendFlow
operationId: sendFlow
clientGroup: messaging
responses: 200, 400, 401, 429, 500
```

#### `sendList`

Send List Message

```yaml
http: POST /sendList
operationId: sendList
clientGroup: messaging
responses: 200, 400, 401, 429, 500
```

#### `sendLocation`

Send a Location

Send a location to an existing chat. (Only if the dialogue has an Open Session). Only one of two parameters is needed to determine the destination - chatId or phone.

```yaml
http: POST /sendLocation
operationId: sendLocation
clientGroup: messaging
responses: 200, 400, 401, 429, 500
```

#### `sendLocationRequest`

Send Location Request Message

```yaml
http: POST /sendLocationRequest
operationId: sendLocationRequest
clientGroup: messaging
responses: 200, 400, 401, 429, 500
```

#### `sendMessage`

Send a Message

Send a message to an existing chat. (Only if the dialogue has an Open Session). The message will be added to the queue for sending and delivered even if the phone is disconnected from the Internet or authorization is not passed. Only one of two parameters is needed to determine the destination - chatId or phone. Direct Send is in beta. Meta has not enabled it on every business portfolio, so `category` and `directSend` are a beta option: watch delivery errors before relying on them. Set `category` to `utility` or `authentication` to send outside the 24-hour window as a Meta Direct Send template instead of the 1MSG marketing auto-template. `authentication` is part of that beta and is not recommended. `directSend.serviceFirst: true` tries a free service message first and uses Direct Send only when Meta rejects it because the window is closed (131047). `directSend.templateName` is only valid with `utility` (`^[a-z0-9_]+$`, max 512). Direct Send text is limited to 1024 characters. Without `templateName`, the first unseen phrase may be delivered as Meta's onboarding template. A named template does not guarantee delivery — wait for webhook errors 131000 or 132021. An open 24-hour window is still billed as utility when `category` is set and `serviceFirst` is not true.

```yaml
http: POST /sendMessage
operationId: sendMessage
clientGroup: messaging
responses: 200, 400, 401, 429, 500
```

#### `sendOrderDetails`

Send order details (India payments template)

Send a WhatsApp **order details** payment / invoice message using a pre-approved **Utility** template that has an `ORDER_DETAILS` button. **India only** (WhatsApp Payments India). Requires: - India WhatsApp Business number - Commerce enabled on the channel (`GET`/`POST /commerce`) - Approved template with an `ORDER_DETAILS` button Use this method when you need structured fields (`order`, `referenceId`, `currency`, `paymentSettings`). The API appends a template button `sub_type: order_details` and sends via the same path as `POST /sendTemplate`. Works **outside the 24-hour session window** (template message). You can also send the same payload yourself with `POST /sendTemplate` by including a button component in `params`: ```json { "type": "button", "sub_type": "order_details", "index": 0, "parameters": [{ "type": "action", "action": { "order_details": { "reference_id": "order-123", "currency": "INR", "order": { "status": "pending", "items": [], "subtotal": { "offset": 100, "value": 50000 } } } } }] } ```

```yaml
http: POST /sendOrderDetails
operationId: sendOrderDetails
clientGroup: messaging
responses: 200, 400, 401, 500
```

#### `sendPaymentRequest`

Send payment request (regional)

Send a regional payment request interactive message (beta scaffold). `region` must be IN, SG, or BR. Payload shape follows Meta regional payments docs; verify on stage before production use. Full regional builders are not implemented yet.

```yaml
http: POST /sendPaymentRequest
operationId: sendPaymentRequest
clientGroup: messaging
responses: 200, 400, 401, 500
```

#### `sendProduct`

Send a Product

Send a single catalog product or a product list. Destination is `chatId` or `phone`. `action` is required: - single product: `{ "catalog_id": "...", "product_retailer_id": "..." }` - product list: `{ "catalog_id": "...", "sections": [{ "title": "...", "product_items": [{ "product_retailer_id": "..." }] }] }`

```yaml
http: POST /sendProduct
operationId: sendProduct
clientGroup: messaging
responses: 200, 400, 401, 429, 500
```

#### `sendReaction`

Send Reaction

```yaml
http: POST /sendReaction
operationId: sendReaction
clientGroup: messaging
responses: 200, 400, 401, 429, 500
```

#### `sendSticker`

Send sticker message

Send a WhatsApp sticker by mediaId or link URL.

```yaml
http: POST /sendSticker
operationId: sendSticker
clientGroup: messaging
responses: 200, 400, 401, 429, 500
```

### profile

#### `getMe`

Get Profile Info

Return the WhatsApp Business profile for this channel: About, address, description, email, phone, websites, industry (`vertical`), and profile photo URL.

```yaml
http: GET /me
operationId: getMe
clientGroup: profile
responses: 200, 401, 500
```

#### `updateMe`

Update profile info

Update WhatsApp Business Account profile fields. At least one of about, description, email, photo, address, vertical, websites is required. Blocked when the channel subscription limit is exceeded.

```yaml
http: POST /me
operationId: updateMe
clientGroup: profile
responses: 200, 401, 422, 500
```

### templates

#### `addTemplate`

Create message template

Create a WABA message template (`name`, `category`, `language`, `components`). After create, Meta reviews the template; list it with `GET /templates`. Authentication OTP templates (`category: AUTHENTICATION`, copy-code / OTP button) can later be sent only to a phone number. Meta does not accept a BSUID recipient for them (error 131062). If the recipient is known only by BSUID — for example they use a username and their phone number is not in your Business Portfolio — that template cannot be sent. To ask a BSUID user for their phone number, add a `REQUEST_CONTACT_INFO` button on a `UTILITY` or `MARKETING` template. Do not send `text` on that button — WhatsApp sets the label (and rejects a custom one). The button also has no send-time parameters: `POST /sendTemplate` does not take a button component for it. Inside an open 24-hour window, call `POST /sendContactInfo` instead of a template. When the user shares the number, the inbound webhook is a `contacts` message with `origin: contact_request`. The phone is stored on that BSUID automatically. See `POST /sendContactInfo`. ```json { "name": "request_phone", "category": "UTILITY", "language": "en_US", "components": [ { "type": "BODY", "text": "Please share your phone number so we can continue." }, { "type": "BUTTONS", "buttons": [{ "type": "REQUEST_CONTACT_INFO" }] } ] } ```

```yaml
http: POST /addTemplate
operationId: addTemplate
clientGroup: templates
responses: 200, 401, 500
```

#### `listTemplates`

Get templates list

List message templates. Paginate with `limit` / `offset`; sort by `id`, `name`, or `status`.

```yaml
http: GET /templates
operationId: listTemplates
clientGroup: templates
responses: 200
```

#### `removeTemplate`

Remove message template

Delete a message template by `name` (all language versions of that name).

```yaml
http: POST /removeTemplate
operationId: removeTemplate
clientGroup: templates
responses: 200, 401, 500
```

#### `sendTemplate`

Send Template Message

Send a WhatsApp **template** message (works outside the 24-hour session window). Use this tool — not `send_message` — when the 24h session is closed. `params` MUST be Cloud API **component objects**, never a flat list of strings and never the old On-Prem `hsm` / `localizable_params` format. Example body variable `{{1}}`: ```json { "type": "body", "parameters": [{ "type": "text", "text": "Ivan" }] } ``` Do not send `"type": "hsm"` and do not send `params: ["Ivan", "123"]`. Supported `params` button `sub_type` values include: `url`, `quick_reply`, `copy_code` / `coupon_code`, `catalog`, `flow`, `limited_time_offer`, and **`order_details`** (WhatsApp Payments **India only** — requires an approved Utility template with an ORDER_DETAILS button). Convenience wrapper with structured fields: `POST /sendOrderDetails`. Authentication OTP templates (category `AUTHENTICATION`, or a template with an OTP / copy-code button) can only be sent to a phone number (`phone` or a phone `chatId`). Meta rejects a BSUID `recipient` for these templates with error 131062. If the recipient is known only by BSUID — for example they use a username and their phone number is not in your Business Portfolio — the template cannot be sent. A `REQUEST_CONTACT_INFO` button (UTILITY or MARKETING only) has no send-time parameters. Do not add a button component for it in `params`, and do not send button text — WhatsApp sets that label on the template. Create the button with `POST /addTemplate` as `{ "type": "REQUEST_CONTACT_INFO" }` with no `text`. Inside an open 24-hour window, `POST /sendContactInfo` asks for the number without a template.

```yaml
http: POST /sendTemplate
operationId: sendTemplate
clientGroup: templates
responses: 200
```

### users

#### `blockUser`

Block WhatsApp user

```yaml
http: POST /blockUser
operationId: blockUser
clientGroup: users
responses: 200, 400, 401, 500
```

#### `listBlockedUsers`

List blocked WhatsApp users

Returns users currently blocked on this WhatsApp channel (WABA `GET /block_users`). Same channel token auth as `blockUser` / `unblockUser`.

```yaml
http: GET /blockedUsers
operationId: listBlockedUsers
clientGroup: users
responses: 200, 401, 500
```

#### `unblockUser`

Unblock WhatsApp user

```yaml
http: POST /unblockUser
operationId: unblockUser
clientGroup: users
responses: 200, 400, 401, 500
```

### webhooks

#### `getWebhook`

Get webhook URL

Return the webhook URL(s) currently configured for this channel, plus delivery status for each URL. `webhookUrl` is a string when a single URL is set, an array of strings when multiple URLs are configured, or `null` if none is set. **Prefer `webhookStatuses`.** The circuit breaker is per URL, not per channel. If 1 of 4 URLs is sticky-disabled, that URL is skipped; the other three still receive events. Send/receive are not affected. Channel-level `haveDisabledWebhooks`, `circuitState`, `reason`, `fails`, `trips`, and timestamps are a compatibility summary of **one** URL (the first sticky-disabled URL, else the first configured URL). They are not "the channel is dead". - `haveDisabledWebhooks` — `true` when **at least one** URL in `webhookUrl` is sticky auto-disabled. Live URLs still get events. - `circuitState` — compressed scalar for that same primary URL: `ok` | `degraded` | `open` | `half_open` | `disabled`. - `disabledWebhooks` — currently configured URLs that are sticky-disabled (subset of `webhookUrl`). - `webhookStatuses` — one row per currently configured URL. Use this array to see which endpoints are live vs skipped. - `fails` / `trips` / `firstFailAt` — **diagnostics for support**, not product UI. `fails` = failures in a rolling ~10 minute window (not lifetime). `trips` = failed recovery probes on the 15 min → 1 h → 6 h schedule (sticky disable after 3). Clients can ignore these and use `webhookStatuses` + `disabledWebhooks` only. Sticky disable skips delivery; it does not unconfigure the URL (it stays in `webhookUrl`). Re-enable with `POST /webhook` or `POST /settings`. Those endpoints **replace** the whole list — with multiple URLs, send the full array.

```yaml
http: GET /webhook
operationId: getWebhook
clientGroup: webhooks
responses: 200, 401, 500
```

#### `setWebhook`

Set webhook URL

Set the client webhook URL that receives inbound events for this channel. **Replaces** the stored webhook list (it does not append). To deliver the same events to several endpoints, pass an array in `webhookUrl` (max 5) or use `POST /settings`. With several URLs already configured, posting only the disabled URL **drops the others** — send the complete array to re-enable one of many. Incoming payloads include messages, delivery ACKs, group updates, coexistence echoes, and calling events. WhatsApp Calling payloads (`type: "calls"`) are documented under the **Calling** tag. Call permission replies arrive on the normal messages path (`call_permission_reply`). Repeating `POST /webhook` with the same URL(s) clears an auto-disable (self-serve re-enable). Send/receive are not affected by webhook auto-disable.

```yaml
http: POST /webhook
operationId: setWebhook
clientGroup: webhooks
responses: 200, 401, 500
```

## Cookbook

1. Install the package from the registry above.
2. Set `MSG_API_TOKEN` and `MSG_INSTANCE_ID`.
3. Create the messaging client with `{baseUrl}/{instanceId}`.
4. Call `sendMessage` inside the 24h window, or `sendTemplate` outside it.
5. Use group/profile/flows/templates APIs for advanced workflows.

## FAQ

**Where is the package?** See the registry link in the header table.

**TypeScript has createClient — does this SDK?** Generated OpenAPI clients use
per-API classes (`MessagingApi`, `ProfileApi`, …) instead of a facade.

**Can I use this in a browser?** No — server-side only. Never expose tokens.

## Error handling

| Code | Meaning |
|------|---------|
| 400 | Invalid parameters or body |
| 401 | Invalid or missing token |
| 429 | Rate limit exceeded |
| 500 | Internal server error |

## Regeneration and versioning

Docs regenerate with `node gen/generate-sdk-docs-langs.js`. Registry versions are immutable.

## License

MIT © 1MSG

