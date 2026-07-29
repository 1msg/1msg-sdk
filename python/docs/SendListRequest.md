# SendListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | **str** |  | [optional] 
**body** | **str** |  | [optional] 
**button_text** | **str** |  | [optional] 
**action** | **str** |  | [optional] 
**sections** | [**List[SendListRequestSectionsInner]**](SendListRequestSectionsInner.md) |  | [optional] 

## Example

```python
from one_msg_sdk.models.send_list_request import SendListRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendListRequest from a JSON string
send_list_request_instance = SendListRequest.from_json(json)
# print the JSON string representation of the object
print(SendListRequest.to_json())

# convert the object into a dict
send_list_request_dict = send_list_request_instance.to_dict()
# create an instance of SendListRequest from a dict
send_list_request_from_dict = SendListRequest.from_dict(send_list_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


