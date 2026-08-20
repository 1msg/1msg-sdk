# CallingSettingsCallingSipServersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hostname** | **str** |  | [optional] 
**port** | **int** |  | [optional] 
**request_uri_user_params** | **Dict[str, str]** |  | [optional] 
**sip_user_password** | **str** | Present on GET when SIP credentials are returned by Meta | [optional] 
**password** | **str** | Alternate password field name from some Meta responses | [optional] 
**app_id** | **str** |  | [optional] 

## Example

```python
from one_msg_sdk.models.calling_settings_calling_sip_servers_inner import CallingSettingsCallingSipServersInner

# TODO update the JSON string below
json = "{}"
# create an instance of CallingSettingsCallingSipServersInner from a JSON string
calling_settings_calling_sip_servers_inner_instance = CallingSettingsCallingSipServersInner.from_json(json)
# print the JSON string representation of the object
print(CallingSettingsCallingSipServersInner.to_json())

# convert the object into a dict
calling_settings_calling_sip_servers_inner_dict = calling_settings_calling_sip_servers_inner_instance.to_dict()
# create an instance of CallingSettingsCallingSipServersInner from a dict
calling_settings_calling_sip_servers_inner_from_dict = CallingSettingsCallingSipServersInner.from_dict(calling_settings_calling_sip_servers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


