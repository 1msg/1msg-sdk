# RetrieveMedia200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** |  | [optional] 
**mime_type** | **str** |  | [optional] 
**sha256** | **str** |  | [optional] 
**file_size** | **int** |  | [optional] 
**id** | **str** |  | [optional] 

## Example

```python
from one_msg_sdk.models.retrieve_media200_response import RetrieveMedia200Response

# TODO update the JSON string below
json = "{}"
# create an instance of RetrieveMedia200Response from a JSON string
retrieve_media200_response_instance = RetrieveMedia200Response.from_json(json)
# print the JSON string representation of the object
print(RetrieveMedia200Response.to_json())

# convert the object into a dict
retrieve_media200_response_dict = retrieve_media200_response_instance.to_dict()
# create an instance of RetrieveMedia200Response from a dict
retrieve_media200_response_from_dict = RetrieveMedia200Response.from_dict(retrieve_media200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


