# ListFlows200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | **List[Dict[str, object]]** |  | [optional] 
**paging** | **Dict[str, object]** |  | [optional] 
**count** | **int** |  | [optional] 
**total** | **int** |  | [optional] 
**error** | **object** | Error details returned by the provider. May be a string or a JSON object. | [optional] 

## Example

```python
from one_msg_sdk.models.list_flows200_response import ListFlows200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListFlows200Response from a JSON string
list_flows200_response_instance = ListFlows200Response.from_json(json)
# print the JSON string representation of the object
print(ListFlows200Response.to_json())

# convert the object into a dict
list_flows200_response_dict = list_flows200_response_instance.to_dict()
# create an instance of ListFlows200Response from a dict
list_flows200_response_from_dict = ListFlows200Response.from_dict(list_flows200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


