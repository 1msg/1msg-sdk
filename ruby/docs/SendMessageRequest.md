# OneMsgSdk::SendMessageRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **body** | **String** | Message text, UTF-8 or UTF-16 string with emoji |  |
| **quoted_msg_id** | **String** | Message ID to quote/reply to (Cloud API wamid) | [optional] |
| **chat_id** | **String** | Chat ID in format: phone@c.us (individual) or phone@g.us (group) | [optional] |
| **phone** | **Integer** | Phone number starting with country code (alternative to chatId) | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendMessageRequest.new(
  body: Hello World 🌍,
  quoted_msg_id: wamid.HBgNMTIwMjA3MjEzNjkVAgARGBI5RTBCNUY0QUE2RjZBQzhGNDkA,
  chat_id: 12020721369@c.us,
  phone: 12020721369
)
```

