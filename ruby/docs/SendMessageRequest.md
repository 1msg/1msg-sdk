# OneMsgSdk::SendMessageRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **body** | **String** | Message text, UTF-8 or UTF-16 string with emoji |  |
| **quoted_msg_id** | **String** | Message ID to quote/reply to (Cloud API wamid) | [optional] |
| **chat_id** | **String** | Recipient chat ID: phone@c.us, group@g.us, or BSUID@lid | [optional] |
| **phone** | **Integer** | Phone number starting with country code (alternative to chatId) | [optional] |
| **category** | **String** | Optional Direct Send category. Direct Send is in beta: Meta has not enabled it on every business portfolio. &#x60;utility&#x60; or &#x60;authentication&#x60; enables it. &#x60;authentication&#x60; is part of that beta and is not recommended. Omit or &#x60;service&#x60; keeps a normal service message (and the marketing auto-template outside the 24-hour window). &#x60;marketing&#x60; is rejected.  | [optional] |
| **direct_send** | [**SendMessageRequestDirectSend**](SendMessageRequestDirectSend.md) |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendMessageRequest.new(
  body: Hello World 🌍,
  quoted_msg_id: wamid.HBgNMTIwMjA3MjEzNjkVAgARGBI5RTBCNUY0QUE2RjZBQzhGNDkA,
  chat_id: 12020721369@c.us,
  phone: 12020721369,
  category: utility,
  direct_send: null
)
```

