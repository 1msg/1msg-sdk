# UpdateMeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**about** | **str** | Profile About section | [optional] 
**address** | **str** |  | [optional] 
**description** | **str** | Business description (max 256 characters) | [optional] 
**email** | **str** |  | [optional] 
**vertical** | **str** | Industry of the business | [optional] 
**photo** | **str** | HTTPS URL or data:image/...;base64,... payload | [optional] 
**websites** | **List[str]** |  | [optional] 

## Example

```python
from one_msg_sdk.models.update_me_request import UpdateMeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMeRequest from a JSON string
update_me_request_instance = UpdateMeRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateMeRequest.to_json())

# convert the object into a dict
update_me_request_dict = update_me_request_instance.to_dict()
# create an instance of UpdateMeRequest from a dict
update_me_request_from_dict = UpdateMeRequest.from_dict(update_me_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


