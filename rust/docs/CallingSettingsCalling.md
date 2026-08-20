# CallingSettingsCalling

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | Option<**Status**> | Enable or disable Calling API on this number (enum: ENABLED, DISABLED) | [optional]
**call_icon_visibility** | Option<**CallIconVisibility**> | Controls call icon visibility in the WhatsApp client (enum: DEFAULT, DISABLE_ALL) | [optional]
**callback_permission_status** | Option<**CallbackPermissionStatus**> | When ENABLED, a user who calls your business automatically grants call permission for business-initiated callbacks (subject to Meta rules).  (enum: ENABLED, DISABLED) | [optional]
**srtp_key_exchange_protocol** | Option<**SrtpKeyExchangeProtocol**> | SRTP key exchange. DTLS is default/recommended. SDES is only valid when SIP signaling is enabled.  (enum: DTLS, SDES) | [optional]
**call_hours** | Option<[**models::CallingSettingsCallingCallHours**](CallingSettingsCallingCallHours.md)> |  | [optional]
**sip** | Option<[**models::CallingSettingsCallingSip**](CallingSettingsCallingSip.md)> |  | [optional]
**video** | Option<[**models::CallingSettingsCallingVideo**](CallingSettingsCallingVideo.md)> |  | [optional]
**audio** | Option<[**models::CallingSettingsCallingAudio**](CallingSettingsCallingAudio.md)> |  | [optional]
**restrictions** | Option<**std::collections::HashMap<String, serde_json::Value>**> | Calling restrictions (response-only) | [optional]
**ip_addresses** | Option<**std::collections::HashMap<String, serde_json::Value>**> | Meta media IP ranges (response-only) | [optional]
**call_icons** | Option<**std::collections::HashMap<String, serde_json::Value>**> | Call icon country restrictions (response-only) | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


