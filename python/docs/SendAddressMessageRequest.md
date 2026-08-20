# SendAddressMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | **int** | Recipient phone (E.164 digits, no +). Must match country. | [optional] 
**chat_id** | **str** |  | [optional] 
**body** | **str** | Body text shown with the address request | 
**country** | **str** | Address form country. Defaults to IN if omitted. | [optional] 
**values** | **Dict[str, object]** | Optional prefilled address fields | [optional] 
**saved_addresses** | **List[Dict[str, object]]** | Optional previously saved addresses for the user | [optional] 
**validation_errors** | **Dict[str, object]** | Optional field validation errors when re-prompting | [optional] 
**quoted_msg_id** | **str** |  | [optional] 

## Example

```python
from one_msg_sdk.models.send_address_message_request import SendAddressMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendAddressMessageRequest from a JSON string
send_address_message_request_instance = SendAddressMessageRequest.from_json(json)
# print the JSON string representation of the object
print(SendAddressMessageRequest.to_json())

# convert the object into a dict
send_address_message_request_dict = send_address_message_request_instance.to_dict()
# create an instance of SendAddressMessageRequest from a dict
send_address_message_request_from_dict = SendAddressMessageRequest.from_dict(send_address_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


