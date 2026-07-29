# SendContactRequestContactsInnerOrg


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company** | **str** |  | [optional] 
**department** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from one_msg_sdk.models.send_contact_request_contacts_inner_org import SendContactRequestContactsInnerOrg

# TODO update the JSON string below
json = "{}"
# create an instance of SendContactRequestContactsInnerOrg from a JSON string
send_contact_request_contacts_inner_org_instance = SendContactRequestContactsInnerOrg.from_json(json)
# print the JSON string representation of the object
print(SendContactRequestContactsInnerOrg.to_json())

# convert the object into a dict
send_contact_request_contacts_inner_org_dict = send_contact_request_contacts_inner_org_instance.to_dict()
# create an instance of SendContactRequestContactsInnerOrg from a dict
send_contact_request_contacts_inner_org_from_dict = SendContactRequestContactsInnerOrg.from_dict(send_contact_request_contacts_inner_org_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


