# OneMsgSdk::SendReactionRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **phone** | **String** | Recipient phone with country code. Use phone or chatId. | [optional] |
| **chat_id** | **String** | Recipient chat ID (&#x60;phone@c.us&#x60;, group &#x60;@g.us&#x60;, or BSUID &#x60;@lid&#x60;). Use phone or chatId. | [optional] |
| **body** | **String** |  | [optional] |
| **quoted_msg_id** | **String** |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendReactionRequest.new(
  phone: null,
  chat_id: null,
  body: null,
  quoted_msg_id: null
)
```

