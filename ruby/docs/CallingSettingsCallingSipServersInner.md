# OneMsgSdk::CallingSettingsCallingSipServersInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **hostname** | **String** |  | [optional] |
| **port** | **Integer** |  | [optional] |
| **request_uri_user_params** | **Hash&lt;String, String&gt;** |  | [optional] |
| **sip_user_password** | **String** | Present on GET when SIP credentials are returned by Meta | [optional] |
| **password** | **String** | Alternate password field name from some Meta responses | [optional] |
| **app_id** | **String** |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::CallingSettingsCallingSipServersInner.new(
  hostname: sip.example.com,
  port: 5061,
  request_uri_user_params: null,
  sip_user_password: null,
  password: null,
  app_id: null
)
```

