# CallingSettingsCallingCallHours

Optional call hours / timezone configuration (Meta shape)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | [optional] 
**timezone** | **str** |  | [optional] 
**day_of_week_start** | **str** |  | [optional] 

## Example

```python
from one_msg_sdk.models.calling_settings_calling_call_hours import CallingSettingsCallingCallHours

# TODO update the JSON string below
json = "{}"
# create an instance of CallingSettingsCallingCallHours from a JSON string
calling_settings_calling_call_hours_instance = CallingSettingsCallingCallHours.from_json(json)
# print the JSON string representation of the object
print(CallingSettingsCallingCallHours.to_json())

# convert the object into a dict
calling_settings_calling_call_hours_dict = calling_settings_calling_call_hours_instance.to_dict()
# create an instance of CallingSettingsCallingCallHours from a dict
calling_settings_calling_call_hours_from_dict = CallingSettingsCallingCallHours.from_dict(calling_settings_calling_call_hours_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


