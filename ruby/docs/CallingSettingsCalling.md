# OneMsgSdk::CallingSettingsCalling

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **status** | **String** | Enable or disable Calling API on this number | [optional] |
| **call_icon_visibility** | **String** | Controls call icon visibility in the WhatsApp client | [optional] |
| **callback_permission_status** | **String** | When ENABLED, a user who calls your business automatically grants call permission for business-initiated callbacks (subject to Meta rules).  | [optional] |
| **srtp_key_exchange_protocol** | **String** | SRTP key exchange. DTLS is default/recommended. SDES is only valid when SIP signaling is enabled.  | [optional] |
| **call_hours** | [**CallingSettingsCallingCallHours**](CallingSettingsCallingCallHours.md) |  | [optional] |
| **sip** | [**CallingSettingsCallingSip**](CallingSettingsCallingSip.md) |  | [optional] |
| **video** | [**CallingSettingsCallingVideo**](CallingSettingsCallingVideo.md) |  | [optional] |
| **audio** | [**CallingSettingsCallingAudio**](CallingSettingsCallingAudio.md) |  | [optional] |
| **restrictions** | **Hash&lt;String, Object&gt;** | Calling restrictions (response-only) | [optional] |
| **ip_addresses** | **Hash&lt;String, Object&gt;** | Meta media IP ranges (response-only) | [optional] |
| **call_icons** | **Hash&lt;String, Object&gt;** | Call icon country restrictions (response-only) | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::CallingSettingsCalling.new(
  status: ENABLED,
  call_icon_visibility: DEFAULT,
  callback_permission_status: ENABLED,
  srtp_key_exchange_protocol: DTLS,
  call_hours: null,
  sip: null,
  video: null,
  audio: null,
  restrictions: null,
  ip_addresses: null,
  call_icons: null
)
```

