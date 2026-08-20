# UpdateCallingSettings200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**result** | **str** |  | [optional] 
**response** | [**UpdateCallingSettings200ResponseResponse**](UpdateCallingSettings200ResponseResponse.md) |  | [optional] 

## Example

```python
from one_msg_sdk.models.update_calling_settings200_response import UpdateCallingSettings200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCallingSettings200Response from a JSON string
update_calling_settings200_response_instance = UpdateCallingSettings200Response.from_json(json)
# print the JSON string representation of the object
print(UpdateCallingSettings200Response.to_json())

# convert the object into a dict
update_calling_settings200_response_dict = update_calling_settings200_response_instance.to_dict()
# create an instance of UpdateCallingSettings200Response from a dict
update_calling_settings200_response_from_dict = UpdateCallingSettings200Response.from_dict(update_calling_settings200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


