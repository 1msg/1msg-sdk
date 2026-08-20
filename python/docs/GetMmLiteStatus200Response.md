# GetMmLiteStatus200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **bool** |  | [optional] 
**status** | **str** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from one_msg_sdk.models.get_mm_lite_status200_response import GetMmLiteStatus200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetMmLiteStatus200Response from a JSON string
get_mm_lite_status200_response_instance = GetMmLiteStatus200Response.from_json(json)
# print the JSON string representation of the object
print(GetMmLiteStatus200Response.to_json())

# convert the object into a dict
get_mm_lite_status200_response_dict = get_mm_lite_status200_response_instance.to_dict()
# create an instance of GetMmLiteStatus200Response from a dict
get_mm_lite_status200_response_from_dict = GetMmLiteStatus200Response.from_dict(get_mm_lite_status200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


