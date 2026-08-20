# CallingSettingsCallingAudio

Audio settings (typically response-only)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | [optional] 

## Example

```python
from one_msg_sdk.models.calling_settings_calling_audio import CallingSettingsCallingAudio

# TODO update the JSON string below
json = "{}"
# create an instance of CallingSettingsCallingAudio from a JSON string
calling_settings_calling_audio_instance = CallingSettingsCallingAudio.from_json(json)
# print the JSON string representation of the object
print(CallingSettingsCallingAudio.to_json())

# convert the object into a dict
calling_settings_calling_audio_dict = calling_settings_calling_audio_instance.to_dict()
# create an instance of CallingSettingsCallingAudio from a dict
calling_settings_calling_audio_from_dict = CallingSettingsCallingAudio.from_dict(calling_settings_calling_audio_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


