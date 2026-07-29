# OneMsgSdk::SendCtaUrlRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **phone** | **Integer** |  | [optional] |
| **chat_id** | **String** |  | [optional] |
| **body** | **String** |  |  |
| **display_text** | **String** | Button label |  |
| **url** | **String** |  |  |
| **header** | **Hash&lt;String, Object&gt;** |  | [optional] |
| **footer** | **String** |  | [optional] |
| **quoted_msg_id** | **String** |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendCtaUrlRequest.new(
  phone: null,
  chat_id: null,
  body: null,
  display_text: null,
  url: null,
  header: null,
  footer: null,
  quoted_msg_id: null
)
```

