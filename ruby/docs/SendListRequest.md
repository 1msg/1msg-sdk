# OneMsgSdk::SendListRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **phone** | **String** | Recipient phone with country code. Use phone or chatId. | [optional] |
| **chat_id** | **String** | Recipient chat ID (&#x60;phone@c.us&#x60;, group &#x60;@g.us&#x60;, or BSUID &#x60;@lid&#x60;). Use phone or chatId. | [optional] |
| **quoted_msg_id** | **String** |  | [optional] |
| **body** | **String** |  | [optional] |
| **button_text** | **String** |  | [optional] |
| **action** | **String** |  | [optional] |
| **sections** | [**Array&lt;SendListRequestSectionsInner&gt;**](SendListRequestSectionsInner.md) |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendListRequest.new(
  phone: null,
  chat_id: null,
  quoted_msg_id: null,
  body: null,
  button_text: null,
  action: null,
  sections: null
)
```

