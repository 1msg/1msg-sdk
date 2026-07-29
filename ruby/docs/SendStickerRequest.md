# OneMsgSdk::SendStickerRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **phone** | **Integer** |  | [optional] |
| **chat_id** | **String** |  | [optional] |
| **media_id** | **String** | WABA media id from uploadMedia | [optional] |
| **link** | **String** | Public URL to webp sticker | [optional] |
| **quoted_msg_id** | **String** |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendStickerRequest.new(
  phone: null,
  chat_id: null,
  media_id: null,
  link: null,
  quoted_msg_id: null
)
```

