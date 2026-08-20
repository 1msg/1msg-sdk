# PatchFlowsFlowIdAssets200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**validation_errors** | **List[Dict[str, object]]** |  | [optional] 
**error** | **object** | Error details returned by the provider. May be a string or a JSON object. | [optional] 

## Example

```python
from one_msg_sdk.models.patch_flows_flow_id_assets200_response import PatchFlowsFlowIdAssets200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PatchFlowsFlowIdAssets200Response from a JSON string
patch_flows_flow_id_assets200_response_instance = PatchFlowsFlowIdAssets200Response.from_json(json)
# print the JSON string representation of the object
print(PatchFlowsFlowIdAssets200Response.to_json())

# convert the object into a dict
patch_flows_flow_id_assets200_response_dict = patch_flows_flow_id_assets200_response_instance.to_dict()
# create an instance of PatchFlowsFlowIdAssets200Response from a dict
patch_flows_flow_id_assets200_response_from_dict = PatchFlowsFlowIdAssets200Response.from_dict(patch_flows_flow_id_assets200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


