# SendContactRequestContactsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**SendContactRequestContactsInnerName**](SendContactRequestContactsInnerName.md) |  | [optional] 
**birthday** | **str** |  | [optional] 
**addresses** | **List[object]** |  | [optional] 
**emails** | **List[object]** |  | [optional] 
**org** | [**SendContactRequestContactsInnerOrg**](SendContactRequestContactsInnerOrg.md) |  | [optional] 
**phones** | [**List[SendContactRequestContactsInnerPhonesInner]**](SendContactRequestContactsInnerPhonesInner.md) |  | [optional] 
**urls** | **List[object]** |  | [optional] 

## Example

```python
from one_msg_sdk.models.send_contact_request_contacts_inner import SendContactRequestContactsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SendContactRequestContactsInner from a JSON string
send_contact_request_contacts_inner_instance = SendContactRequestContactsInner.from_json(json)
# print the JSON string representation of the object
print(SendContactRequestContactsInner.to_json())

# convert the object into a dict
send_contact_request_contacts_inner_dict = send_contact_request_contacts_inner_instance.to_dict()
# create an instance of SendContactRequestContactsInner from a dict
send_contact_request_contacts_inner_from_dict = SendContactRequestContactsInner.from_dict(send_contact_request_contacts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


