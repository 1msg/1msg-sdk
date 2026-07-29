# SendMessageRequest

Request body for sending a text message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Message text, UTF-8 or UTF-16 string with emoji | 
**quoted_msg_id** | **str** | Message ID to quote/reply to (Cloud API wamid) | [optional] 
**chat_id** | **str** | Chat ID in format: phone@c.us (individual) or phone@g.us (group) | [optional] 
**phone** | **int** | Phone number starting with country code (alternative to chatId) | [optional] 

## Example

```python
from one_msg_sdk.models.send_message_request import SendMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendMessageRequest from a JSON string
send_message_request_instance = SendMessageRequest.from_json(json)
# print the JSON string representation of the object
print(SendMessageRequest.to_json())

# convert the object into a dict
send_message_request_dict = send_message_request_instance.to_dict()
# create an instance of SendMessageRequest from a dict
send_message_request_from_dict = SendMessageRequest.from_dict(send_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


