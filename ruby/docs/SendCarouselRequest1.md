# OneMsgSdk::SendCarouselRequest1

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **body** | **String** | Text shown above the carousel | [optional] |
| **cards** | **Array&lt;Hash&lt;String, Object&gt;&gt;** | Preferred. 2–10 carousel cards. | [optional] |
| **params** | **Array&lt;Object&gt;** | Template-like alternative — include a CAROUSEL component with cards | [optional] |
| **quoted_msg_id** | **String** |  | [optional] |
| **chat_id** | **String** |  | [optional] |
| **phone** | **Integer** |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendCarouselRequest1.new(
  body: null,
  cards: null,
  params: null,
  quoted_msg_id: null,
  chat_id: null,
  phone: null
)
```

