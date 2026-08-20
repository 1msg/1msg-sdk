# AGENTS.md — one_msg_sdk

> **Purpose:** exhaustive machine-readable integration guide for AI coding agents.
> **Human docs:** [README.md](./README.md)

## Identity

```yaml
package: "one_msg_sdk"
registry: https://rubygems.org/gems/one_msg_sdk
repository: https://github.com/1msg/1msg-sdk/tree/main/ruby
language: Ruby
version: 2.0.2
public_only: true
never_mention: chat-api
```

## Decision tree

```text
Need WhatsApp messaging from Ruby?
  └─ yes → gem install one_msg_sdk
       └─ OneMsgSdk.configure + MessagingApi.new
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

```ruby
MessagingApi   # send/list messages, media, interactive
ProfileApi     # getMe
GroupsApi      # create/list/manage groups
FlowsApi       # WhatsApp Flows lifecycle
TemplatesApi   # listTemplates
ChannelApi     # channel helpers
CallingApi     # calling
WebhooksApi    # webhooks
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
description: Perform a WhatsApp Calling action (beta). Proxies upstream `POST /calling/calls`. Despite the historical path name `/initiateCall`, this endpoint handles **all** call actions: | action | Use | Required | |--------|-----|----------| | `connect` | Outbound business → user | `to` + `session` (`sdp_type: offer`) | | `pre_accept` | Inbound (optional, reduces audio clipping) | `call_id` + `session` (`sdp_type: answer`) | | `accept` | Inbound answer | `call_id` + `session` (`sdp_type: answer`) | | `reject` | Decline inbound | `call_id` | | `terminate` | Hang up | `call_id` | **SDP / media (critical)** - `accept` / `pre_accept` require a **WebRTC-generated SDP answer**. - Do **not** send Meta's offer SDP back as the answer. - Postman (or curl) alone **cannot** establish real media — you need a WebRTC or SIP stack. 1msg only proxies signaling. Answer within ~**30–60 seconds** of an inbound `connect` webhook or Meta terminates as unanswered. Common Meta errors include Calling not enabled (`138000`), no permission (`138006`), SDP validation failures. **Outbound** requires a prior Call Permission Request (CPR) acceptance. See the **Calling** tag overview for the full outbound flow and CPR limits. Trial / `subscriptionBlocked` → **403** plain text. Upstream failures often return HTTP 200 with `{ "response": { "error": "..." } }`.
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
description: Returns catalog/cart commerce settings for the channel. - `is_catalog_visible` — show catalog storefront icon (`true`) or hide it (`false`). - `is_cart_enabled` — enable cart (`true`) or disable it (`false`).
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
description: Returns WhatsApp Business API client connection status.
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
responses: 200
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
responses: 200
```

### patchFlowsFlowIdAssets

```yaml
operationId: patchFlowsFlowIdAssets
http: PATCH /flows/{flowId}/assets
clientGroup: flows
summary: Update Flow Structure
responses: 200
```

### patchFlowsFlowIdMetadata

```yaml
operationId: patchFlowsFlowIdMetadata
http: PATCH /flows/{flowId}/metadata
clientGroup: flows
summary: Update Flow Metadata
responses: 200
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
description: You can send product cards via Carousel in two ways: Template messages: do not require a 24-hour customer service window between you and the recipient. Use sendTemplate. Free-form messages: can be sent only when a customer service window is open between you and the recipient. Use sendCarousel. The message structure in /sendCarousel is largely similar to sending a template. However, in this case you must explicitly specify all elements that are created in advance when working with templates. This is because the message is sent without using a template. In /sendCarousel, for sending a Catalog Carousel there can be either 1 URL button or one or more quick reply buttons.
responses: 200, 400, 401, 429, 500
```

### sendContact

```yaml
operationId: sendContact
http: POST /sendContact
clientGroup: messaging
summary: Send a Contact
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
description: Send a message to an existing chat. (Only if the dialogue has an Open Session). The message will be added to the queue for sending and delivered even if the phone is disconnected from the Internet or authorization is not passed. Only one of two parameters is needed to determine the destination - chatId or phone.
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
description: Get WhatsApp Business Account profile information
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
responses: 200, 401, 500
```

### listTemplates

```yaml
operationId: listTemplates
http: GET /templates
clientGroup: templates
summary: Get templates list
responses: 200
```

### removeTemplate

```yaml
operationId: removeTemplate
http: POST /removeTemplate
clientGroup: templates
summary: Remove message template
responses: 200, 401, 500
```

### sendTemplate

```yaml
operationId: sendTemplate
http: POST /sendTemplate
clientGroup: templates
summary: Send Template Message
description: Send a WhatsApp template message (works outside the 24-hour session window). Supported `params` button `sub_type` values include: `url`, `quick_reply`, `copy_code` / `coupon_code`, `catalog`, `flow`, `limited_time_offer`, and **`order_details`** (WhatsApp Payments **India only** — requires an approved Utility template with an ORDER_DETAILS button). For India order/invoice payments outside 24h, include a button component: ```json { "type": "button", "sub_type": "order_details", "index": 0, "parameters": [{ "type": "action", "action": { "order_details": { "reference_id": "...", "currency": "INR", "order": {} } } }] } ``` Convenience wrapper with structured fields: `POST /sendOrderDetails`.
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
description: Returns the configured client webhook URL for this channel.
responses: 200, 401, 500
```

### setWebhook

```yaml
operationId: setWebhook
http: POST /webhook
clientGroup: webhooks
summary: Set webhook URL
description: Configure the client webhook URL for inbound events. WhatsApp **Calling** events (`field=calls`) are forwarded as passthrough payloads with `type: "calls"` and `instanceId` (connect / status / terminate). Call permission replies arrive on the normal messages path (`call_permission_reply`). Details: **Calling** tag.
responses: 200, 401, 500
```

## Metadata

openapi_title: 1MSG WhatsApp Business API (Public)
openapi_version: 1.0.0
operations: 60
package: one_msg_sdk
registry: RubyGems

