# SendButtonRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | **str** |  | [optional] 
**body** | **str** |  | [optional] 
**footer** | **str** |  | [optional] 
**sections** | [**List[SendButtonRequestSectionsInner]**](SendButtonRequestSectionsInner.md) |  | [optional] 

## Example

```python
from one_msg_sdk.models.send_button_request import SendButtonRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendButtonRequest from a JSON string
send_button_request_instance = SendButtonRequest.from_json(json)
# print the JSON string representation of the object
print(SendButtonRequest.to_json())

# convert the object into a dict
send_button_request_dict = send_button_request_instance.to_dict()
# create an instance of SendButtonRequest from a dict
send_button_request_from_dict = SendButtonRequest.from_dict(send_button_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


