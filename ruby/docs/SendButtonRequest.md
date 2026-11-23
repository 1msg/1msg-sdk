# OneMsgSdk::SendButtonRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **phone** | **String** | Recipient phone with country code. Use phone or chatId. | [optional] |
| **chat_id** | **String** | Recipient chat ID (&#x60;phone@c.us&#x60;, group &#x60;@g.us&#x60;, or BSUID &#x60;@lid&#x60;). Use phone or chatId. | [optional] |
| **quoted_msg_id** | **String** | Optional Cloud API wamid to quote | [optional] |
| **body** | **String** |  | [optional] |
| **footer** | **String** |  | [optional] |
| **header** | **Hash&lt;String, Object&gt;** | Optional interactive header (text/image/video/document) | [optional] |
| **buttons** | **Array&lt;Object&gt;** | Legacy alias for sections (&#x60;[{id,title}]&#x60;) | [optional] |
| **sections** | [**Array&lt;SendButtonRequestSectionsInner&gt;**](SendButtonRequestSectionsInner.md) |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendButtonRequest.new(
  phone: null,
  chat_id: null,
  quoted_msg_id: null,
  body: null,
  footer: null,
  header: null,
  buttons: null,
  sections: null
)
```

