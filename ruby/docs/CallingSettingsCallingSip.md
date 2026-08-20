# OneMsgSdk::CallingSettingsCallingSip

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **status** | **String** |  | [optional] |
| **servers** | [**Array&lt;CallingSettingsCallingSipServersInner&gt;**](CallingSettingsCallingSipServersInner.md) |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::CallingSettingsCallingSip.new(
  status: DISABLED,
  servers: null
)
```

