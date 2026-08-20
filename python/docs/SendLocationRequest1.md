# SendLocationRequest1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lat** | **str** |  | 
**lng** | **str** |  | 
**address** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**quoted_msg_id** | **str** |  | [optional] 
**chat_id** | **str** |  | [optional] 
**phone** | **int** |  | [optional] 

## Example

```python
from one_msg_sdk.models.send_location_request1 import SendLocationRequest1

# TODO update the JSON string below
json = "{}"
# create an instance of SendLocationRequest1 from a JSON string
send_location_request1_instance = SendLocationRequest1.from_json(json)
# print the JSON string representation of the object
print(SendLocationRequest1.to_json())

# convert the object into a dict
send_location_request1_dict = send_location_request1_instance.to_dict()
# create an instance of SendLocationRequest1 from a dict
send_location_request1_from_dict = SendLocationRequest1.from_dict(send_location_request1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


