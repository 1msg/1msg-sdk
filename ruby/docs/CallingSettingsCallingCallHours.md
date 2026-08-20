# OneMsgSdk::CallingSettingsCallingCallHours

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **status** | **String** |  | [optional] |
| **timezone** | **String** |  | [optional] |
| **day_of_week_start** | **String** |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::CallingSettingsCallingCallHours.new(
  status: ENABLED,
  timezone: America/Los_Angeles,
  day_of_week_start: MONDAY
)
```

