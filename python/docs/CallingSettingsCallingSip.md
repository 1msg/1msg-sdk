# CallingSettingsCallingSip

SIP trunk settings. When SIP is ENABLED, Graph call actions and calling webhooks are not used — Meta dials your SIP server directly. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | [optional] 
**servers** | [**List[CallingSettingsCallingSipServersInner]**](CallingSettingsCallingSipServersInner.md) |  | [optional] 

## Example

```python
from one_msg_sdk.models.calling_settings_calling_sip import CallingSettingsCallingSip

# TODO update the JSON string below
json = "{}"
# create an instance of CallingSettingsCallingSip from a JSON string
calling_settings_calling_sip_instance = CallingSettingsCallingSip.from_json(json)
# print the JSON string representation of the object
print(CallingSettingsCallingSip.to_json())

# convert the object into a dict
calling_settings_calling_sip_dict = calling_settings_calling_sip_instance.to_dict()
# create an instance of CallingSettingsCallingSip from a dict
calling_settings_calling_sip_from_dict = CallingSettingsCallingSip.from_dict(calling_settings_calling_sip_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


