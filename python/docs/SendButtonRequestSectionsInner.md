# SendButtonRequestSectionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] 
**reply** | [**SendButtonRequestSectionsInnerReply**](SendButtonRequestSectionsInnerReply.md) |  | [optional] 

## Example

```python
from one_msg_sdk.models.send_button_request_sections_inner import SendButtonRequestSectionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SendButtonRequestSectionsInner from a JSON string
send_button_request_sections_inner_instance = SendButtonRequestSectionsInner.from_json(json)
# print the JSON string representation of the object
print(SendButtonRequestSectionsInner.to_json())

# convert the object into a dict
send_button_request_sections_inner_dict = send_button_request_sections_inner_instance.to_dict()
# create an instance of SendButtonRequestSectionsInner from a dict
send_button_request_sections_inner_from_dict = SendButtonRequestSectionsInner.from_dict(send_button_request_sections_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


