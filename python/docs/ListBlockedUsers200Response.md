# ListBlockedUsers200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocked_users** | **List[Dict[str, object]]** |  | [optional] 

## Example

```python
from one_msg_sdk.models.list_blocked_users200_response import ListBlockedUsers200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListBlockedUsers200Response from a JSON string
list_blocked_users200_response_instance = ListBlockedUsers200Response.from_json(json)
# print the JSON string representation of the object
print(ListBlockedUsers200Response.to_json())

# convert the object into a dict
list_blocked_users200_response_dict = list_blocked_users200_response_instance.to_dict()
# create an instance of ListBlockedUsers200Response from a dict
list_blocked_users200_response_from_dict = ListBlockedUsers200Response.from_dict(list_blocked_users200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


