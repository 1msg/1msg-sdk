# OneMsgSdk::SendFileRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **body** | **String** | File source (required unless mediaId is set): - HTTP/HTTPS URL - Base64 data URI  | [optional] |
| **filename** | **String** | File name with extension (required with body, not with mediaId) | [optional] |
| **media_id** | **String** | WABA media id from uploadMedia (alternative to body) | [optional] |
| **media_type** | **String** | Required when using mediaId | [optional] |
| **voice** | **Boolean** | Native WhatsApp voice note (audio/ogg only) | [optional] |
| **caption** | **String** |  | [optional] |
| **quoted_msg_id** | **String** |  | [optional] |
| **chat_id** | **String** |  | [optional] |
| **phone** | **Integer** |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendFileRequest.new(
  body: null,
  filename: null,
  media_id: null,
  media_type: null,
  voice: null,
  caption: null,
  quoted_msg_id: null,
  chat_id: null,
  phone: null
)
```

