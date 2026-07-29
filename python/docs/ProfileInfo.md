# ProfileInfo

WhatsApp Business profile information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**about** | **str** | Profile&#39;s About section | [optional] 
**address** | **str** | Address of the business | [optional] 
**description** | **str** | Description of the business | [optional] 
**email** | **str** | Business email | [optional] 
**phone** | **str** | Linked phone number | [optional] 
**vertical** | **str** | Industry of the business | [optional] 
**photo** | **str** | Profile photo URL | [optional] 
**websites** | **List[str]** |  | [optional] 

## Example

```python
from one_msg_sdk.models.profile_info import ProfileInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileInfo from a JSON string
profile_info_instance = ProfileInfo.from_json(json)
# print the JSON string representation of the object
print(ProfileInfo.to_json())

# convert the object into a dict
profile_info_dict = profile_info_instance.to_dict()
# create an instance of ProfileInfo from a dict
profile_info_from_dict = ProfileInfo.from_dict(profile_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


