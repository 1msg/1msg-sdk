# CreateReadMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **str** |  | [optional] 
**msg_id** | **str** |  | [optional] 
**typing_indicator** | **bool** | Show WhatsApp typing indicator (max 25s or until reply) | [optional] [default to False]

## Example

```python
from one_msg_sdk.models.create_read_message_request import CreateReadMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateReadMessageRequest from a JSON string
create_read_message_request_instance = CreateReadMessageRequest.from_json(json)
# print the JSON string representation of the object
print(CreateReadMessageRequest.to_json())

# convert the object into a dict
create_read_message_request_dict = create_read_message_request_instance.to_dict()
# create an instance of CreateReadMessageRequest from a dict
create_read_message_request_from_dict = CreateReadMessageRequest.from_dict(create_read_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


