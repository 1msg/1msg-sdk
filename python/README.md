# 1MSG Python SDK

Official Python SDK for the **1MSG WhatsApp Business API**.

This document is generated from the public OpenAPI contract. It covers install,
auth, quick start, and every public operation available in the client.

| | |
|---|---|
| **PyPI** | [`one-msg-sdk`](https://pypi.org/project/one-msg-sdk/) |
| **Source** | [github.com/1msg/1msg-sdk/python](https://github.com/1msg/1msg-sdk/tree/main/python) |
| **API docs** | [docs.1msg.io](https://docs.1msg.io/) |
| **Platform** | [platform.1msg.io](https://platform.1msg.io/) |
| **Support** | support@1msg.io |
| **OpenAPI version** | 1.0.0 |
| **Operations** | 60 |
| **AI agent guide** | [AGENTS.md](./AGENTS.md) |

---

## Install

```bash
pip install one-msg-sdk==1.0.2
```

## Requirements

| Variable | Where to get it | Example |
|----------|-----------------|---------|
| `baseUrl` | Platform → channel → API host | `https://api.1msg.io` |
| `instanceId` | Platform → channel id | `ODI371267300` |
| `token` | Platform → channel → API token | JWT or API key |

Use environment variables (`MSG_API_TOKEN`, `MSG_INSTANCE_ID`). Never commit tokens.

## Quick start

```python
import os

from one_msg_sdk import ApiClient, Configuration
from one_msg_sdk.api.messaging_api import MessagingApi

configuration = Configuration(
    host=f"https://api.1msg.io/{os.environ['MSG_INSTANCE_ID']}"
)

with ApiClient(configuration) as api_client:
    messaging = MessagingApi(api_client)
    response = messaging.send_message(
        token=os.environ["MSG_API_TOKEN"],
        body="Hello from 1MSG SDK",
        chat_id="12020721369@c.us",
    )
    print(response)
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

```python
MessagingApi   # send/list messages, media, interactive
ProfileApi     # getMe
GroupsApi      # create/list/manage groups
FlowsApi       # WhatsApp Flows lifecycle
TemplatesApi   # listTemplates
ChannelApi     # channel helpers
CallingApi     # calling
WebhooksApi    # webhooks
```

## Package notes

PyPI package is `one-msg-sdk`. Import package is `one_msg_sdk`.

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

Perform a WhatsApp Calling action (beta). Proxies upstream `POST /calling/calls`. Despite the historical path name `/initiateCall`, this endpoint handles **all** call actions: | action | Use | Required | |--------|-----|----------| | `connect` | Outbound business → user | `to` + `session` (`sdp_type: offer`) | | `pre_accept` | Inbound (optional, reduces audio clipping) | `call_id` + `session` (`sdp_type: answer`) | | `accept` | Inbound answer | `call_id` + `session` (`sdp_type: answer`) | | `reject` | Decline inbound | `call_id` | | `terminate` | Hang up | `call_id` | **SDP / media (critical)** - `accept` / `pre_accept` require a **WebRTC-generated SDP answer**. - Do **not** send Meta's offer SDP back as the answer. - Postman (or curl) alone **cannot** establish real media — you need a WebRTC or SIP stack. 1msg only proxies signaling. Answer within ~**30–60 seconds** of an inbound `connect` webhook or Meta terminates as unanswered. Common Meta errors include Calling not enabled (`138000`), no permission (`138006`), SDP validation failures. **Outbound** requires a prior Call Permission Request (CPR) acceptance. See the **Calling** tag overview for the full outbound flow and CPR limits. Trial / `subscriptionBlocked` → **403** plain text. Upstream failures often return HTTP 200 with `{ "response": { "error": "..." } }`.

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

Returns catalog/cart commerce settings for the channel. - `is_catalog_visible` — show catalog storefront icon (`true`) or hide it (`false`). - `is_cart_enabled` — enable cart (`true`) or disable it (`false`).

```yaml
http: GET /commerce
operationId: getCommerce
clientGroup: catalog
responses: 200, 401, 500
```

### channel

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

Returns WhatsApp Business API client connection status.

```yaml
http: GET /status
operationId: getStatus
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

```yaml
http: POST /flows
operationId: createFlows
clientGroup: flows
responses: 200
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

```yaml
http: GET /flows
operationId: listFlows
clientGroup: flows
responses: 200
```

#### `patchFlowsFlowIdAssets`

Update Flow Structure

```yaml
http: PATCH /flows/{flowId}/assets
operationId: patchFlowsFlowIdAssets
clientGroup: flows
responses: 200
```

#### `patchFlowsFlowIdMetadata`

Update Flow Metadata

```yaml
http: PATCH /flows/{flowId}/metadata
operationId: patchFlowsFlowIdMetadata
clientGroup: flows
responses: 200
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

You can send product cards via Carousel in two ways: Template messages: do not require a 24-hour customer service window between you and the recipient. Use sendTemplate. Free-form messages: can be sent only when a customer service window is open between you and the recipient. Use sendCarousel. The message structure in /sendCarousel is largely similar to sending a template. However, in this case you must explicitly specify all elements that are created in advance when working with templates. This is because the message is sent without using a template. In /sendCarousel, for sending a Catalog Carousel there can be either 1 URL button or one or more quick reply buttons.

```yaml
http: POST /sendCarousel
operationId: sendCarousel
clientGroup: messaging
responses: 200, 400, 401, 429, 500
```

#### `sendContact`

Send a Contact

```yaml
http: POST /sendContact
operationId: sendContact
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

Send a message to an existing chat. (Only if the dialogue has an Open Session). The message will be added to the queue for sending and delivered even if the phone is disconnected from the Internet or authorization is not passed. Only one of two parameters is needed to determine the destination - chatId or phone.

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

Get WhatsApp Business Account profile information

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

```yaml
http: POST /addTemplate
operationId: addTemplate
clientGroup: templates
responses: 200, 401, 500
```

#### `listTemplates`

Get templates list

```yaml
http: GET /templates
operationId: listTemplates
clientGroup: templates
responses: 200
```

#### `removeTemplate`

Remove message template

```yaml
http: POST /removeTemplate
operationId: removeTemplate
clientGroup: templates
responses: 200, 401, 500
```

#### `sendTemplate`

Send Template Message

Send a WhatsApp template message (works outside the 24-hour session window). Supported `params` button `sub_type` values include: `url`, `quick_reply`, `copy_code` / `coupon_code`, `catalog`, `flow`, `limited_time_offer`, and **`order_details`** (WhatsApp Payments **India only** — requires an approved Utility template with an ORDER_DETAILS button). For India order/invoice payments outside 24h, include a button component: ```json { "type": "button", "sub_type": "order_details", "index": 0, "parameters": [{ "type": "action", "action": { "order_details": { "reference_id": "...", "currency": "INR", "order": {} } } }] } ``` Convenience wrapper with structured fields: `POST /sendOrderDetails`.

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

Returns the configured client webhook URL for this channel.

```yaml
http: GET /webhook
operationId: getWebhook
clientGroup: webhooks
responses: 200, 401, 500
```

#### `setWebhook`

Set webhook URL

Configure the client webhook URL for inbound events. WhatsApp **Calling** events (`field=calls`) are forwarded as passthrough payloads with `type: "calls"` and `instanceId` (connect / status / terminate). Call permission replies arrive on the normal messages path (`call_permission_reply`). Details: **Calling** tag.

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

