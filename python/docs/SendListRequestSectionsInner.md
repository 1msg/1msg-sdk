# SendListRequestSectionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | [optional] 
**rows** | [**List[SendListRequestSectionsInnerRowsInner]**](SendListRequestSectionsInnerRowsInner.md) |  | [optional] 

## Example

```python
from one_msg_sdk.models.send_list_request_sections_inner import SendListRequestSectionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SendListRequestSectionsInner from a JSON string
send_list_request_sections_inner_instance = SendListRequestSectionsInner.from_json(json)
# print the JSON string representation of the object
print(SendListRequestSectionsInner.to_json())

# convert the object into a dict
send_list_request_sections_inner_dict = send_list_request_sections_inner_instance.to_dict()
# create an instance of SendListRequestSectionsInner from a dict
send_list_request_sections_inner_from_dict = SendListRequestSectionsInner.from_dict(send_list_request_sections_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


