# DeleteFlowsFlowId200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**error** | **object** | Error details returned by the provider. May be a string or a JSON object. | [optional] 

## Example

```python
from one_msg_sdk.models.delete_flows_flow_id200_response import DeleteFlowsFlowId200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteFlowsFlowId200Response from a JSON string
delete_flows_flow_id200_response_instance = DeleteFlowsFlowId200Response.from_json(json)
# print the JSON string representation of the object
print(DeleteFlowsFlowId200Response.to_json())

# convert the object into a dict
delete_flows_flow_id200_response_dict = delete_flows_flow_id200_response_instance.to_dict()
# create an instance of DeleteFlowsFlowId200Response from a dict
delete_flows_flow_id200_response_from_dict = DeleteFlowsFlowId200Response.from_dict(delete_flows_flow_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


