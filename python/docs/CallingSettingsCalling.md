# CallingSettingsCalling

Calling feature configuration for the business phone number

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Enable or disable Calling API on this number | [optional] 
**call_icon_visibility** | **str** | Controls call icon visibility in the WhatsApp client | [optional] 
**callback_permission_status** | **str** | When ENABLED, a user who calls your business automatically grants call permission for business-initiated callbacks (subject to Meta rules).  | [optional] 
**srtp_key_exchange_protocol** | **str** | SRTP key exchange. DTLS is default/recommended. SDES is only valid when SIP signaling is enabled.  | [optional] 
**call_hours** | [**CallingSettingsCallingCallHours**](CallingSettingsCallingCallHours.md) |  | [optional] 
**sip** | [**CallingSettingsCallingSip**](CallingSettingsCallingSip.md) |  | [optional] 
**video** | [**CallingSettingsCallingVideo**](CallingSettingsCallingVideo.md) |  | [optional] 
**audio** | [**CallingSettingsCallingAudio**](CallingSettingsCallingAudio.md) |  | [optional] 
**restrictions** | **Dict[str, object]** | Calling restrictions (response-only) | [optional] 
**ip_addresses** | **Dict[str, object]** | Meta media IP ranges (response-only) | [optional] 
**call_icons** | **Dict[str, object]** | Call icon country restrictions (response-only) | [optional] 

## Example

```python
from one_msg_sdk.models.calling_settings_calling import CallingSettingsCalling

# TODO update the JSON string below
json = "{}"
# create an instance of CallingSettingsCalling from a JSON string
calling_settings_calling_instance = CallingSettingsCalling.from_json(json)
# print the JSON string representation of the object
print(CallingSettingsCalling.to_json())

# convert the object into a dict
calling_settings_calling_dict = calling_settings_calling_instance.to_dict()
# create an instance of CallingSettingsCalling from a dict
calling_settings_calling_from_dict = CallingSettingsCalling.from_dict(calling_settings_calling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


