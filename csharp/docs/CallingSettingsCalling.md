# OneMsg.Sdk.Model.CallingSettingsCalling
Calling feature configuration for the business phone number

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **string** | Enable or disable Calling API on this number | [optional] 
**CallIconVisibility** | **string** | Controls call icon visibility in the WhatsApp client | [optional] 
**CallbackPermissionStatus** | **string** | When ENABLED, a user who calls your business automatically grants call permission for business-initiated callbacks (subject to Meta rules).  | [optional] 
**SrtpKeyExchangeProtocol** | **string** | SRTP key exchange. DTLS is default/recommended. SDES is only valid when SIP signaling is enabled.  | [optional] 
**CallHours** | [**CallingSettingsCallingCallHours**](CallingSettingsCallingCallHours.md) |  | [optional] 
**Sip** | [**CallingSettingsCallingSip**](CallingSettingsCallingSip.md) |  | [optional] 
**Video** | [**CallingSettingsCallingVideo**](CallingSettingsCallingVideo.md) |  | [optional] 
**Audio** | [**CallingSettingsCallingAudio**](CallingSettingsCallingAudio.md) |  | [optional] 
**Restrictions** | **Dictionary&lt;string, Object&gt;** | Calling restrictions (response-only) | [optional] 
**IpAddresses** | **Dictionary&lt;string, Object&gt;** | Meta media IP ranges (response-only) | [optional] 
**CallIcons** | **Dictionary&lt;string, Object&gt;** | Call icon country restrictions (response-only) | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

