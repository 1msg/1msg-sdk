# OneMsgSdk::CreateSettingsRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **webhook_url** | [**CreateSettingsRequestWebhookUrl**](CreateSettingsRequestWebhookUrl.md) |  | [optional] |
| **guaranteed_hooks** | **Boolean** |  | [optional] |
| **ack_notifications_on** | **Boolean** |  | [optional] |
| **raw_hooks** | **Boolean** |  | [optional] |
| **template_analytics_enabled** | **Boolean** |  | [optional] |
| **cta_url_link_tracking_opted_out** | **Boolean** |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::CreateSettingsRequest.new(
  webhook_url: null,
  guaranteed_hooks: null,
  ack_notifications_on: null,
  raw_hooks: null,
  template_analytics_enabled: null,
  cta_url_link_tracking_opted_out: null
)
```

