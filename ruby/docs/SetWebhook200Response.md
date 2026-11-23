# OneMsgSdk::SetWebhook200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **set** | **Boolean** | True when the stored webhook URL(s) match the request | [optional] |
| **webhook_url** | [**SetWebhook200ResponseWebhookUrl**](SetWebhook200ResponseWebhookUrl.md) |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SetWebhook200Response.new(
  set: null,
  webhook_url: null
)
```

