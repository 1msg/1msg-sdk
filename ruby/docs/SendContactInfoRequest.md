# OneMsgSdk::SendContactInfoRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **phone** | **String** | Recipient phone with country code. Use phone, chatId, or bsuid. | [optional] |
| **chat_id** | **String** | Recipient chat ID (&#x60;phone@c.us&#x60;, BSUID &#x60;@lid&#x60;, or username &#x60;@username&#x60;). | [optional] |
| **bsuid** | **String** | Business-scoped user id, for example &#x60;US.13491208655302741918&#x60;. | [optional] |
| **quoted_msg_id** | **String** |  | [optional] |
| **body** | **String** | Text shown above the share-contact button. WhatsApp sets the button label; do not send button text.  |  |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendContactInfoRequest.new(
  phone: null,
  chat_id: null,
  bsuid: null,
  quoted_msg_id: null,
  body: null
)
```

