# SendContactRequestContactsInnerName


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formatted_name** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**middle_name** | **str** |  | [optional] 
**suffix** | **str** |  | [optional] 
**prefix** | **str** |  | [optional] 

## Example

```python
from one_msg_sdk.models.send_contact_request_contacts_inner_name import SendContactRequestContactsInnerName

# TODO update the JSON string below
json = "{}"
# create an instance of SendContactRequestContactsInnerName from a JSON string
send_contact_request_contacts_inner_name_instance = SendContactRequestContactsInnerName.from_json(json)
# print the JSON string representation of the object
print(SendContactRequestContactsInnerName.to_json())

# convert the object into a dict
send_contact_request_contacts_inner_name_dict = send_contact_request_contacts_inner_name_instance.to_dict()
# create an instance of SendContactRequestContactsInnerName from a dict
send_contact_request_contacts_inner_name_from_dict = SendContactRequestContactsInnerName.from_dict(send_contact_request_contacts_inner_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


