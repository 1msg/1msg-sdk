# CallingSettings

Calling settings payload for GET/POST `/callingSettings`. Proxies upstream `GET|POST /calling/settings`. Extra Meta fields may appear on GET responses; document core fields below. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calling** | [**CallingSettingsCalling**](CallingSettingsCalling.md) |  | [optional] 

## Example

```python
from one_msg_sdk.models.calling_settings import CallingSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CallingSettings from a JSON string
calling_settings_instance = CallingSettings.from_json(json)
# print the JSON string representation of the object
print(CallingSettings.to_json())

# convert the object into a dict
calling_settings_dict = calling_settings_instance.to_dict()
# create an instance of CallingSettings from a dict
calling_settings_from_dict = CallingSettings.from_dict(calling_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


