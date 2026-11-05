# AGENTS.md — io.1msg:sdk-scala

> **Purpose:** exhaustive machine-readable integration guide for AI coding agents.
> **Human docs:** [README.md](./README.md)

## Identity

```yaml
package: "io.1msg:sdk-scala"
registry: https://central.sonatype.com/artifact/io.1msg/sdk-scala_2.13
repository: https://github.com/1msg/1msg-sdk/tree/main/scala
language: Scala
version: 2.0.2
public_only: true
never_mention: chat-api
```

## Decision tree

```text
Need WhatsApp messaging from Scala?
  └─ yes → libraryDependencies += "io.1msg" %% "sdk-scala" % "…"
       └─ new MessagingApi(basePath) + sttp backend
            ├─ text reply → sendMessage(token, body, chatId|phone)
            ├─ file/media → sendFile / uploadMedia
            ├─ template (24h closed) → sendTemplate
            ├─ interactive list/buttons → sendList / sendButton
            ├─ read inbox → listMessages
            ├─ profile → getMe
            ├─ groups → GroupsApi.*
            ├─ flows → FlowsApi.*
            └─ templates list → listTemplates
```

## Auth invariants

1. Base path is `{baseUrl}/{instanceId}` (no trailing slash issues).
2. URL: `https://{baseUrl}/{instanceId}/{path}?token={token}`.
3. Pass channel token as the first arg to generated methods.
4. Never log, commit, or expose tokens.
5. Server-side only — no browser usage.

## Client map

```scala
MessagingApi  // sttp request builders — call .send(backend)
ProfileApi
GroupsApi
FlowsApi
TemplatesApi
```

## Recipient rules

- `chatId`: `12020721369@c.us` (1:1) or `...@g.us` (group)
- `phone`: country code + number, no `+`
- Exactly one of `chatId` | `phone` per request

## Anti-patterns

- ❌ Raw HTTP without token query param
- ❌ Hardcoding token in source
- ❌ Using sendMessage when 24h window is closed (use sendTemplate)
- ❌ Referencing internal `chat-api` repo name in user-facing code

## Operation catalog

### getCallingSettings

```yaml
operationId: getCallingSettings
http: GET /callingSettings
clientGroup: calling
summary: Get calling settings
description: Return WhatsApp Calling API settings for this channel (beta). Proxies upstream `GET /calling/settings`. **Prerequisites** - Number must be eligible for Meta Calling (Cloud API; not COEX) - Trial / `subscriptionBlocked` channels receive **403** plain text - You need your own WebRTC or SIP stack; 1msg is a **signaling proxy** only and does **not** store call history or recordings See the **Calling** tag overview for inbound/outbound flows and webhooks.
responses: 200, 401, 500
```

### initiateCall

```yaml
operationId: initiateCall
http: POST /initiateCall
clientGroup: calling
summary: Call action (connect / pre_accept / accept / reject / terminate)
description: Perform a WhatsApp Calling action (beta). Proxies upstream `POST /calling/calls`. Despite the historical path name `/initiateCall`, this endpoint handles **all** call actions: | action | Use | Required | |--------|-----|----------| | `connect` | Outbound business → user | `to` + `session` (`sdp_type: offer`) | | `pre_accept` | Inbound (optional, reduces audio clipping) | `call_id` + `session` (`sdp_type: answer`) | | `accept` | Inbound answer | `call_id` + `session` (`sdp_type: answer`) | | `reject` | Decline inbound | `call_id` | | `terminate` | Hang up | `call_id` | **SDP / media (critical)** - `accept` / `pre_accept` require a **WebRTC-generated SDP answer**. - Do **not** send Meta's offer SDP back as the answer. - Postman (or curl) alone **cannot** establish real media — you need a WebRTC or SIP stack. 1msg only proxies signaling. Answer within ~**30–60 seconds** of an inbound `connect` webhook or Meta terminates as unanswered. Common Meta errors include Calling not enabled (`138000`), no permission (`138006`), SDP validation failures. **Outbound** requires a prior Call Permission Request (CPR) acceptance. See the **Calling** tag overview for the full outbound flow and CPR limits. Trial / `subscriptionBlocked` → **403** plain text. Upstream failures often return HTTP 200 with `{ "response": { "error": "<upstream message>" } }`. `Invalid API KEY` is used only when Meta/360 body actually indicates an invalid API key or token. Other upstream 401s (notably call permission `138006`) pass through `error.message` / `error_user_msg`.
responses: 200, 401, 500
```

### updateCallingSettings

```yaml
operationId: updateCallingSettings
http: POST /callingSettings
clientGroup: calling
summary: Update calling settings
description: Enable, disable, or update WhatsApp Calling settings (beta). Proxies upstream `POST /calling/settings`. Body is forwarded as-is (1msg does not validate fields). **Common fields under `calling`** - `status` (`ENABLED` | `DISABLED`) — required to turn calling on/off - `call_icon_visibility` (`DEFAULT` | `DISABLE_ALL`) — optional - `callback_permission_status` (`ENABLED` | `DISABLED`) — optional; when enabled, inbound user calls grant callback permission - `call_hours` — optional hours / timezone object - `sip` — optional SIP trunk; when SIP is ENABLED, Graph call actions and calling webhooks are not used - `srtp_key_exchange_protocol` (`DTLS` | `SDES`) — SDES only with SIP - `video.status` — optional Meta may accept only one feature group per request — prefer focused updates (e.g. enable status first, then SIP). Trial / `subscriptionBlocked` → **403** plain text.
responses: 200, 401, 500
```

### createCommerce

```yaml
operationId: createCommerce
http: POST /commerce
clientGroup: catalog
summary: Set Commerce Settings
description: Update catalog/cart commerce settings via the `params` object. - `params.is_catalog_visible` — show catalog storefront icon (`true`) or hide it (`false`). - `params.is_cart_enabled` — enable cart (`true`) or disable it (`false`). Blocked when the channel subscription limit is exceeded. Requires a commerce-capable channel (Cloud Functions `/commerceWAV2`).
responses: 200, 401, 500
```

### getCommerce

```yaml
operationId: getCommerce
http: GET /commerce
clientGroup: catalog
summary: Get Commerce Settings
description: Returns catalog/cart commerce settings for the channel. Fails with a provider error when the WABA has no catalog linked — that is an API/account limitation, not an MCP schema bug. - `is_catalog_visible` — show catalog storefront icon (`true`) or hide it (`false`). - `is_cart_enabled` — enable cart (`true`) or disable it (`false`).
responses: 200, 401, 500
```

### createSettings

```yaml
operationId: createSettings
http: POST /settings
clientGroup: channel
summary: Update channel settings
description: Update channel settings. Only send fields you want to change. `webhookUrl` **replaces** the stored list (one URL string, or up to 5 URLs as an array). Passing an empty value clears webhooks. Repeating the same URL(s) also clears a sticky auto-disable. With several URLs, send the complete array to re-enable one of them — omitting a URL removes it from the channel.
responses: 200, 401, 500
```

### getConversationalAutomation

```yaml
operationId: getConversationalAutomation
http: GET /conversationalAutomation
clientGroup: channel
summary: Get conversational automation settings
description: Get WhatsApp conversational components for the channel (welcome message, ice-breaker prompts, and slash commands). Proxies Meta/360dialog `GET /conversational_automation`. When `enable_welcome_message` is true and a user opens chat for the first time, Meta delivers a webhook message with `type: request_welcome`. The inbound formatter exposes that as `type: "request_welcome"` and `meta.request_welcome: true` so your webhook can send a custom welcome reply.
responses: 200, 401, 500
```

### getStatus

```yaml
operationId: getStatus
http: GET /status
clientGroup: channel
summary: Get channel status
description: Return WhatsApp Cloud API connection status for this channel (`connected` when the number can send). May include `accountStatus`, messaging limit, and MM Lite availability. Optional `health_status_warning` appears only when Meta Graph health could not be loaded and a soft `connected` response is returned. Omitted on the normal path and when health details are not applicable for the channel — never an internal provider/transport name.
responses: 200, 401, 500
```

### listSettings

```yaml
operationId: listSettings
http: GET /settings
clientGroup: channel
summary: Get channel settings
description: Return channel settings: webhook URL(s), delivery flags, and analytics toggles. Auto-disable / circuit state matches `GET /webhook`. **Prefer `webhookStatuses`** (one row per configured URL). The breaker is per URL, not per channel. Channel-level `haveDisabledWebhooks` is `true` when **at least one** URL in `webhookUrl` is sticky auto-disabled — not "the channel is dead". Live URLs still receive events. Top-level `circuitState` / `reason` / `fails` / `trips` are a compatibility summary of one URL (first sticky-disabled, else first configured). This is the same `GET /settings` endpoint as the REST API (previously missing from MCP).
responses: 200, 401, 500
```

### setConversationalAutomation

```yaml
operationId: setConversationalAutomation
http: POST /conversationalAutomation
clientGroup: channel
summary: Set conversational automation settings
description: Update WhatsApp conversational components. Allowed body fields (others are ignored): - `enable_welcome_message` (boolean) - `prompts` (string[], max 4, each ≤ 80 chars) - `commands` (`{ command_name, command_description }[]`) Proxies Meta/360dialog `POST /conversational_automation`.
responses: 200, 401, 500
```

### createFlows

```yaml
operationId: createFlows
http: POST /flows
clientGroup: flows
summary: Create Flow
description: Create a WhatsApp Flow (`name` + `categories` required). Currently returns HTTP 501 until the Meta Graph Flows rewrite is available.
responses: 200, 501
```

### createFlowsFlowIdDeprecate

```yaml
operationId: createFlowsFlowIdDeprecate
http: POST /flows/{flowId}/deprecate
clientGroup: flows
summary: Deprecate Flow
responses: 200
```

### createFlowsFlowIdPublish

```yaml
operationId: createFlowsFlowIdPublish
http: POST /flows/{flowId}/publish
clientGroup: flows
summary: Publish Flow
responses: 200
```

### deleteFlowsFlowId

```yaml
operationId: deleteFlowsFlowId
http: DELETE /flows/{flowId}
clientGroup: flows
summary: Delete Flow
responses: 200
```

### getFlowsFlowId

```yaml
operationId: getFlowsFlowId
http: GET /flows/{flowId}
clientGroup: flows
summary: Get Flow Details
responses: 200
```

### getFlowsFlowIdPreview

```yaml
operationId: getFlowsFlowIdPreview
http: GET /flows/{flowId}/preview
clientGroup: flows
summary: Preview Flow
responses: 200
```

### getWhatsappBusinessEncryption

```yaml
operationId: getWhatsappBusinessEncryption
http: GET /whatsapp_business_encryption
clientGroup: flows
summary: Get business encryption public key
description: Retrieve the WhatsApp business public key and signature status for this channel's phone number. Required before publishing or sending Flows that use data encryption.
responses: 200, 401, 500
```

### listFlows

```yaml
operationId: listFlows
http: GET /flows
clientGroup: flows
summary: List Flows
description: List WhatsApp Flows for the WABA. Currently returns HTTP 501 until the Meta Graph Flows rewrite is available.
responses: 200, 501
```

### patchFlowsFlowIdAssets

```yaml
operationId: patchFlowsFlowIdAssets
http: PATCH /flows/{flowId}/assets
clientGroup: flows
summary: Update Flow Structure
description: Replace the Flow JSON document (`flowJson`). Currently returns HTTP 501 until the Meta Graph Flows rewrite is available.
responses: 200, 501
```

### patchFlowsFlowIdMetadata

```yaml
operationId: patchFlowsFlowIdMetadata
http: PATCH /flows/{flowId}/metadata
clientGroup: flows
summary: Update Flow Metadata
description: Update Flow `name`, `categories`, and/or `endpointUri`. Currently returns HTTP 501 until the Meta Graph Flows rewrite is available.
responses: 200, 501
```

### setWhatsappBusinessEncryption

```yaml
operationId: setWhatsappBusinessEncryption
http: POST /whatsapp_business_encryption
clientGroup: flows
summary: Set business encryption public key
description: Upload and sign a 2048-bit RSA business public key (PEM) for this channel's phone number. Meta requires a signed key before Flow publish/send. Only one active key per number; a new upload replaces the previous key.
responses: 200, 400, 401, 500
```

### createGroups

```yaml
operationId: createGroups
http: POST /groups
clientGroup: groups
summary: Create Group
responses: 200
```

### createGroupsGroupId

```yaml
operationId: createGroupsGroupId
http: POST /groups/{groupId}
clientGroup: groups
summary: Update Group Info
description: Update group subject, description, and/or profile picture. Path `groupId` is the WABA group id (without `@g.us`).
responses: 200
```

### createGroupsGroupIdInvitelink

```yaml
operationId: createGroupsGroupIdInvitelink
http: POST /groups/{groupId}/inviteLink
clientGroup: groups
summary: Reset Invite Link
responses: 200
```

### deleteGroupsGroupId

```yaml
operationId: deleteGroupsGroupId
http: DELETE /groups/{groupId}
clientGroup: groups
summary: Delete Group
responses: 200
```

### getGroupsGroupId

```yaml
operationId: getGroupsGroupId
http: GET /groups/{groupId}
clientGroup: groups
summary: Get Group Info
responses: 200
```

### getGroupsGroupIdInvitelink

```yaml
operationId: getGroupsGroupIdInvitelink
http: GET /groups/{groupId}/inviteLink
clientGroup: groups
summary: Get Invite Link
responses: 200
```

### listGroups

```yaml
operationId: listGroups
http: GET /groups
clientGroup: groups
summary: Get Groups List
description: List WhatsApp groups for this channel. Paginate with `limit`, `before`, and `after`.
responses: 200
```

### createReadMessage

```yaml
operationId: createReadMessage
http: POST /readMessage
clientGroup: messaging
summary: Mark message as read
responses: 200, 401
```

### createUploadMedia

```yaml
operationId: createUploadMedia
http: POST /uploadMedia
clientGroup: messaging
summary: Upload media
description: Upload a file to WhatsApp media storage and get a numeric `mediaId` for later use with `send_file` / `send_sticker` (`mediaId` field, not `body`). Pass the file as `body` **or** `url` — an HTTP(S) URL or a base64 data URI. The `mediaId` in the response is a numeric string (keep it as a string).
responses: 200
```

### deleteMedia

```yaml
operationId: deleteMedia
http: DELETE /media/{mediaId}
clientGroup: messaging
summary: Delete media from WABA storage
description: Delete previously uploaded media by numeric `mediaId` (from `/uploadMedia`). This is the canonical deletion endpoint and uses the REST `DELETE` verb on the media resource path. The older `POST /deleteMedia` is a deprecated alias.
responses: 200, 400, 401, 500
```

### deleteMediaLegacy

```yaml
operationId: deleteMediaLegacy
http: POST /deleteMedia
clientGroup: messaging
summary: Delete media from WABA storage (deprecated alias)
description: **Deprecated.** Use `DELETE /media/{mediaId}` instead. This POST alias is kept for backward compatibility with earlier integrations. New integrations should call `DELETE /media/{mediaId}`: 1msg follows REST conventions for resource deletion going forward (delete a resource with the `DELETE` verb on its resource path).
responses: 200, 400, 401, 500
```

### getMmLiteStatus

```yaml
operationId: getMmLiteStatus
http: GET /mmLiteStatus
clientGroup: messaging
summary: Get MM Lite availability and status
responses: 200, 401, 500
```

### listMessages

```yaml
operationId: listMessages
http: GET /messages
clientGroup: messaging
summary: Get messages list
description: List stored chat history for this channel (requires history storage). Filter with `chatId`, `limit`, `last`, message numbers, or time bounds.
responses: 200
```

### retrieveMedia

```yaml
operationId: retrieveMedia
http: GET /retrieveMedia
clientGroup: messaging
summary: Retrieve uploaded media metadata
description: Get WABA media URL and metadata by mediaId (from uploadMedia). The returned `url` is temporary and typically expires within ~5 minutes.
responses: 200, 400, 401, 500
```

### sendAddressMessage

```yaml
operationId: sendAddressMessage
http: POST /sendAddressMessage
clientGroup: messaging
summary: Send address request message
description: Request shipping address from the user (WhatsApp interactive `address_message`). **India and Singapore only.** Requires: - Business WhatsApp number registered in that country - Recipient phone matching the country (`+91` ↔ `IN`, `+65` ↔ `SG`) Pass `country: "IN"` or `country: "SG"`. Eligibility is validated upstream; mismatches (e.g. Singapore phone with `country: "IN"`) return errors such as `Unsupported Interactive Message type` (HTTP 200 with `sent: false`). Optional action parameters: `values`, `saved_addresses`, `validation_errors`.
responses: 200, 400, 401, 429, 500
```

### sendButton

```yaml
operationId: sendButton
http: POST /sendButton
clientGroup: messaging
summary: Send Reply Buttons Message
responses: 200, 400, 401, 429, 500
```

### sendCarousel

```yaml
operationId: sendCarousel
http: POST /sendCarousel
clientGroup: messaging
summary: Send Carousel
description: You can send product cards via Carousel in two ways: Template messages: do not require a 24-hour customer service window between you and the recipient. Use sendTemplate. Free-form messages: can be sent only when a customer service window is open between you and the recipient. Use sendCarousel. The message structure in /sendCarousel is largely similar to sending a template. However, in this case you must explicitly specify all elements that are created in advance when working with templates. This is because the message is sent without using a template. In /sendCarousel, for a Catalog Carousel there can be either 1 URL button or one or more quick reply buttons. Prefer the simple `cards` array (2–10 cards). Each card needs a header media/product plus a CTA URL or quick-reply buttons. Example: ```json { "phone": "79001234567", "body": "Pick a product", "cards": [ { "header": { "type": "image", "image": { "link": "https://example.com/1.jpg" } }, "body": { "text": "Card one" }, "type": "cta_url", "action": { "name": "cta_url", "parameters": { "url": "https://example.com/p1", "display_text": "Open" } } }, { "header": { "type": "image", "image": { "link": "https://example.com/2.jpg" } }, "body": { "text": "Card two" }, "type": "cta_url", "action": { "name": "cta_url", "parameters": { "url": "https://example.com/p2", "display_text": "Open" } } } ] } ``` `params` with a `CAROUSEL` component is the template-like alternative.
responses: 200, 400, 401, 429, 500
```

### sendContact

```yaml
operationId: sendContact
http: POST /sendContact
clientGroup: messaging
summary: Send a Contact
description: Send a WhatsApp contact card. Preferred simple body (legacy-compatible): ```json { "phone": "79001234567", "contact": { "name": "Lida", "phone": "+79181976551" } } ``` Cloud API shape also works: `contacts` is an array of objects with `name.formatted_name` and `phones[].phone` (E.164 string, **not** a timestamp).
responses: 200, 400, 401, 429, 500
```

### sendContactInfo

```yaml
operationId: sendContactInfo
http: POST /sendContactInfo
clientGroup: messaging
summary: Request the user's phone number
description: Send a service-window interactive message that asks the WhatsApp user to share their phone number (`request_contact_info`). Use this when you only know the user by BSUID (WhatsApp username) and the 24-hour customer service window is open. Outside that window, create a UTILITY or MARKETING template with a `REQUEST_CONTACT_INFO` button (`POST /addTemplate`) and send it with `POST /sendTemplate`. `body` is the text shown above the button (1–1024 characters). WhatsApp chooses the button label. This method has no button-text field — do not send one. ```json { "bsuid": "US.13491208655302741918", "body": "Please share your phone number so we can reach you." } ``` `phone`, `chatId` (`…@c.us`, `…@lid`, `…@username`), or `bsuid` identifies the recipient. One of them is enough. After Meta accepts the send, the outgoing webhook and stored history message use this same text as `messages[].body` (`type: interactive`). When the user taps the button, Meta sends an inbound `contacts` message. The sender stays the BSUID. The shared number is on the card with `origin: contact_request`. We write that phone onto the existing BSUID contact automatically — there is no separate “link phone” call. ```json { "contacts": [ { "profile": { "name": "Ada", "username": "ada" }, "user_id": "US.13491208655302741918" } ], "messages": [ { "from_user_id": "US.13491208655302741918", "type": "contacts", "contacts": [ { "origin": "contact_request", "phones": [{ "phone": "+1 202-555-0123", "wa_id": "12025550123" }] } ] } ] } ``` The stored inbound message body is the digits (`12025550123`). If Meta later includes a phone on an ordinary message or status for that same BSUID (`wa_id`, `from`, or `recipient_id`, together with `user_id` / `recipient_user_id`), that phone is merged onto the same contact. A contact card the user forwards (`origin` other than `contact_request`) is someone else's number and is not stored as this sender's phone.
responses: 200, 400, 401, 429, 500
```

### sendCtaUrl

```yaml
operationId: sendCtaUrl
http: POST /sendCtaUrl
clientGroup: messaging
summary: Send CTA URL interactive message
description: Send an interactive message with a single call-to-action URL button.
responses: 200, 400, 401, 429, 500
```

### sendFile

```yaml
operationId: sendFile
http: POST /sendFile
clientGroup: messaging
summary: Send a File
description: Send a file to an existing chat. (Only if the dialogue has an Open Session). Only one of two parameters is needed to determine the destination - chatId or phone.
responses: 200, 400, 401, 429, 500
```

### sendFlow

```yaml
operationId: sendFlow
http: POST /sendFlow
clientGroup: messaging
summary: Send WhatsApp Flow Message
description: Send Interactive WhatsApp Flow message to an existing chat. (Only if the dialogue has an Open Session). Only one of two parameters is needed to determine the destination - chatId or phone. Use this method to send a published WhatsApp Flow as a service (interactive) message. If the 24-hour window is closed, send a template with a FLOW button via /sendTemplate.
responses: 200, 400, 401, 429, 500
```

### sendList

```yaml
operationId: sendList
http: POST /sendList
clientGroup: messaging
summary: Send List Message
responses: 200, 400, 401, 429, 500
```

### sendLocation

```yaml
operationId: sendLocation
http: POST /sendLocation
clientGroup: messaging
summary: Send a Location
description: Send a location to an existing chat. (Only if the dialogue has an Open Session). Only one of two parameters is needed to determine the destination - chatId or phone.
responses: 200, 400, 401, 429, 500
```

### sendLocationRequest

```yaml
operationId: sendLocationRequest
http: POST /sendLocationRequest
clientGroup: messaging
summary: Send Location Request Message
responses: 200, 400, 401, 429, 500
```

### sendMessage

```yaml
operationId: sendMessage
http: POST /sendMessage
clientGroup: messaging
summary: Send a Message
description: Send a message to an existing chat. (Only if the dialogue has an Open Session). The message will be added to the queue for sending and delivered even if the phone is disconnected from the Internet or authorization is not passed. Only one of two parameters is needed to determine the destination - chatId or phone. Direct Send is in beta. Meta has not enabled it on every business portfolio, so `category` and `directSend` are a beta option: watch delivery errors before relying on them. Set `category` to `utility` or `authentication` to send outside the 24-hour window as a Meta Direct Send template instead of the 1MSG marketing auto-template. `authentication` is part of that beta and is not recommended. `directSend.serviceFirst: true` tries a free service message first and uses Direct Send only when Meta rejects it because the window is closed (131047). `directSend.templateName` is only valid with `utility` (`^[a-z0-9_]+$`, max 512). Direct Send text is limited to 1024 characters. Without `templateName`, the first unseen phrase may be delivered as Meta's onboarding template. A named template does not guarantee delivery — wait for webhook errors 131000 or 132021. An open 24-hour window is still billed as utility when `category` is set and `serviceFirst` is not true.
responses: 200, 400, 401, 429, 500
```

### sendOrderDetails

```yaml
operationId: sendOrderDetails
http: POST /sendOrderDetails
clientGroup: messaging
summary: Send order details (India payments template)
description: Send a WhatsApp **order details** payment / invoice message using a pre-approved **Utility** template that has an `ORDER_DETAILS` button. **India only** (WhatsApp Payments India). Requires: - India WhatsApp Business number - Commerce enabled on the channel (`GET`/`POST /commerce`) - Approved template with an `ORDER_DETAILS` button Use this method when you need structured fields (`order`, `referenceId`, `currency`, `paymentSettings`). The API appends a template button `sub_type: order_details` and sends via the same path as `POST /sendTemplate`. Works **outside the 24-hour session window** (template message). You can also send the same payload yourself with `POST /sendTemplate` by including a button component in `params`: ```json { "type": "button", "sub_type": "order_details", "index": 0, "parameters": [{ "type": "action", "action": { "order_details": { "reference_id": "order-123", "currency": "INR", "order": { "status": "pending", "items": [], "subtotal": { "offset": 100, "value": 50000 } } } } }] } ```
responses: 200, 400, 401, 500
```

### sendPaymentRequest

```yaml
operationId: sendPaymentRequest
http: POST /sendPaymentRequest
clientGroup: messaging
summary: Send payment request (regional)
description: Send a regional payment request interactive message (beta scaffold). `region` must be IN, SG, or BR. Payload shape follows Meta regional payments docs; verify on stage before production use. Full regional builders are not implemented yet.
responses: 200, 400, 401, 500
```

### sendProduct

```yaml
operationId: sendProduct
http: POST /sendProduct
clientGroup: messaging
summary: Send a Product
description: Send a single catalog product or a product list. Destination is `chatId` or `phone`. `action` is required: - single product: `{ "catalog_id": "...", "product_retailer_id": "..." }` - product list: `{ "catalog_id": "...", "sections": [{ "title": "...", "product_items": [{ "product_retailer_id": "..." }] }] }`
responses: 200, 400, 401, 429, 500
```

### sendReaction

```yaml
operationId: sendReaction
http: POST /sendReaction
clientGroup: messaging
summary: Send Reaction
responses: 200, 400, 401, 429, 500
```

### sendSticker

```yaml
operationId: sendSticker
http: POST /sendSticker
clientGroup: messaging
summary: Send sticker message
description: Send a WhatsApp sticker by mediaId or link URL.
responses: 200, 400, 401, 429, 500
```

### getMe

```yaml
operationId: getMe
http: GET /me
clientGroup: profile
summary: Get Profile Info
description: Return the WhatsApp Business profile for this channel: About, address, description, email, phone, websites, industry (`vertical`), and profile photo URL.
responses: 200, 401, 500
```

### updateMe

```yaml
operationId: updateMe
http: POST /me
clientGroup: profile
summary: Update profile info
description: Update WhatsApp Business Account profile fields. At least one of about, description, email, photo, address, vertical, websites is required. Blocked when the channel subscription limit is exceeded.
responses: 200, 401, 422, 500
```

### addTemplate

```yaml
operationId: addTemplate
http: POST /addTemplate
clientGroup: templates
summary: Create message template
description: Create a WABA message template (`name`, `category`, `language`, `components`). After create, Meta reviews the template; list it with `GET /templates`. Authentication OTP templates (`category: AUTHENTICATION`, copy-code / OTP button) can later be sent only to a phone number. Meta does not accept a BSUID recipient for them (error 131062). If the recipient is known only by BSUID — for example they use a username and their phone number is not in your Business Portfolio — that template cannot be sent. To ask a BSUID user for their phone number, add a `REQUEST_CONTACT_INFO` button on a `UTILITY` or `MARKETING` template. Do not send `text` on that button — WhatsApp sets the label (and rejects a custom one). The button also has no send-time parameters: `POST /sendTemplate` does not take a button component for it. Inside an open 24-hour window, call `POST /sendContactInfo` instead of a template. When the user shares the number, the inbound webhook is a `contacts` message with `origin: contact_request`. The phone is stored on that BSUID automatically. See `POST /sendContactInfo`. ```json { "name": "request_phone", "category": "UTILITY", "language": "en_US", "components": [ { "type": "BODY", "text": "Please share your phone number so we can continue." }, { "type": "BUTTONS", "buttons": [{ "type": "REQUEST_CONTACT_INFO" }] } ] } ```
responses: 200, 401, 500
```

### listTemplates

```yaml
operationId: listTemplates
http: GET /templates
clientGroup: templates
summary: Get templates list
description: List message templates. Paginate with `limit` / `offset`; sort by `id`, `name`, or `status`.
responses: 200
```

### removeTemplate

```yaml
operationId: removeTemplate
http: POST /removeTemplate
clientGroup: templates
summary: Remove message template
description: Delete a message template by `name` (all language versions of that name).
responses: 200, 401, 500
```

### sendTemplate

```yaml
operationId: sendTemplate
http: POST /sendTemplate
clientGroup: templates
summary: Send Template Message
description: Send a WhatsApp **template** message (works outside the 24-hour session window). Use this tool — not `send_message` — when the 24h session is closed. `params` MUST be Cloud API **component objects**, never a flat list of strings and never the old On-Prem `hsm` / `localizable_params` format. Example body variable `{{1}}`: ```json { "type": "body", "parameters": [{ "type": "text", "text": "Ivan" }] } ``` Do not send `"type": "hsm"` and do not send `params: ["Ivan", "123"]`. Supported `params` button `sub_type` values include: `url`, `quick_reply`, `copy_code` / `coupon_code`, `catalog`, `flow`, `limited_time_offer`, and **`order_details`** (WhatsApp Payments **India only** — requires an approved Utility template with an ORDER_DETAILS button). Convenience wrapper with structured fields: `POST /sendOrderDetails`. Authentication OTP templates (category `AUTHENTICATION`, or a template with an OTP / copy-code button) can only be sent to a phone number (`phone` or a phone `chatId`). Meta rejects a BSUID `recipient` for these templates with error 131062. If the recipient is known only by BSUID — for example they use a username and their phone number is not in your Business Portfolio — the template cannot be sent. A `REQUEST_CONTACT_INFO` button (UTILITY or MARKETING only) has no send-time parameters. Do not add a button component for it in `params`, and do not send button text — WhatsApp sets that label on the template. Create the button with `POST /addTemplate` as `{ "type": "REQUEST_CONTACT_INFO" }` with no `text`. Inside an open 24-hour window, `POST /sendContactInfo` asks for the number without a template.
responses: 200
```

### blockUser

```yaml
operationId: blockUser
http: POST /blockUser
clientGroup: users
summary: Block WhatsApp user
responses: 200, 400, 401, 500
```

### listBlockedUsers

```yaml
operationId: listBlockedUsers
http: GET /blockedUsers
clientGroup: users
summary: List blocked WhatsApp users
description: Returns users currently blocked on this WhatsApp channel (WABA `GET /block_users`). Same channel token auth as `blockUser` / `unblockUser`.
responses: 200, 401, 500
```

### unblockUser

```yaml
operationId: unblockUser
http: POST /unblockUser
clientGroup: users
summary: Unblock WhatsApp user
responses: 200, 400, 401, 500
```

### getWebhook

```yaml
operationId: getWebhook
http: GET /webhook
clientGroup: webhooks
summary: Get webhook URL
description: Return the webhook URL(s) currently configured for this channel, plus delivery status for each URL. `webhookUrl` is a string when a single URL is set, an array of strings when multiple URLs are configured, or `null` if none is set. **Prefer `webhookStatuses`.** The circuit breaker is per URL, not per channel. If 1 of 4 URLs is sticky-disabled, that URL is skipped; the other three still receive events. Send/receive are not affected. Channel-level `haveDisabledWebhooks`, `circuitState`, `reason`, `fails`, `trips`, and timestamps are a compatibility summary of **one** URL (the first sticky-disabled URL, else the first configured URL). They are not "the channel is dead". - `haveDisabledWebhooks` — `true` when **at least one** URL in `webhookUrl` is sticky auto-disabled. Live URLs still get events. - `circuitState` — compressed scalar for that same primary URL: `ok` | `degraded` | `open` | `half_open` | `disabled`. - `disabledWebhooks` — currently configured URLs that are sticky-disabled (subset of `webhookUrl`). - `webhookStatuses` — one row per currently configured URL. Use this array to see which endpoints are live vs skipped. - `fails` / `trips` / `firstFailAt` — **diagnostics for support**, not product UI. `fails` = failures in a rolling ~10 minute window (not lifetime). `trips` = failed recovery probes on the 15 min → 1 h → 6 h schedule (sticky disable after 3). Clients can ignore these and use `webhookStatuses` + `disabledWebhooks` only. Sticky disable skips delivery; it does not unconfigure the URL (it stays in `webhookUrl`). Re-enable with `POST /webhook` or `POST /settings`. Those endpoints **replace** the whole list — with multiple URLs, send the full array.
responses: 200, 401, 500
```

### setWebhook

```yaml
operationId: setWebhook
http: POST /webhook
clientGroup: webhooks
summary: Set webhook URL
description: Set the client webhook URL that receives inbound events for this channel. **Replaces** the stored webhook list (it does not append). To deliver the same events to several endpoints, pass an array in `webhookUrl` (max 5) or use `POST /settings`. With several URLs already configured, posting only the disabled URL **drops the others** — send the complete array to re-enable one of many. Incoming payloads include messages, delivery ACKs, group updates, coexistence echoes, and calling events. WhatsApp Calling payloads (`type: "calls"`) are documented under the **Calling** tag. Call permission replies arrive on the normal messages path (`call_permission_reply`). Repeating `POST /webhook` with the same URL(s) clears an auto-disable (self-serve re-enable). Send/receive are not affected by webhook auto-disable.
responses: 200, 401, 500
```

## Metadata

openapi_title: 1MSG WhatsApp Business API (Public)
openapi_version: 2.0.0
operations: 63
package: io.1msg:sdk-scala
registry: Maven Central

