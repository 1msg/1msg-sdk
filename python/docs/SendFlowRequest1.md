# SendFlowRequest1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** |  | 
**header** | [**SendFlowRequest1Header**](SendFlowRequest1Header.md) |  | [optional] 
**footer** | **str** |  | [optional] 
**flow_id** | **str** |  | 
**flow_token** | **str** |  | 
**flow_cta** | **str** |  | 
**flow_action** | **str** |  | [optional] 
**flow_action_payload** | **object** |  | [optional] 
**flow_message_version** | **str** |  | [optional] 
**mode** | **str** |  | [optional] 
**flow_action_data** | **object** |  | [optional] 
**flow_action_screen** | **str** |  | [optional] 
**quoted_msg_id** | **str** |  | [optional] 
**chat_id** | **str** |  | [optional] 
**phone** | **int** |  | [optional] 

## Example

```python
from one_msg_sdk.models.send_flow_request1 import SendFlowRequest1

# TODO update the JSON string below
json = "{}"
# create an instance of SendFlowRequest1 from a JSON string
send_flow_request1_instance = SendFlowRequest1.from_json(json)
# print the JSON string representation of the object
print(SendFlowRequest1.to_json())

# convert the object into a dict
send_flow_request1_dict = send_flow_request1_instance.to_dict()
# create an instance of SendFlowRequest1 from a dict
send_flow_request1_from_dict = SendFlowRequest1.from_dict(send_flow_request1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


