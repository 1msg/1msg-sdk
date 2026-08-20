# OneMsgSdk::MessageSentResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **sent** | **Boolean** | Whether the message was successfully queued for sending | [optional] |
| **id** | **String** | Message ID | [optional] |
| **message** | **String** | Status message | [optional] |
| **description** | **String** | Detailed description | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::MessageSentResponse.new(
  sent: null,
  id: null,
  message: null,
  description: null
)
```

