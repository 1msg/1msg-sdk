# OneMsgSdk::CreateReadMessageRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **message_id** | **String** |  | [optional] |
| **msg_id** | **String** |  | [optional] |
| **typing_indicator** | **Boolean** | Show WhatsApp typing indicator (max 25s or until reply) | [optional][default to false] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::CreateReadMessageRequest.new(
  message_id: null,
  msg_id: null,
  typing_indicator: null
)
```

