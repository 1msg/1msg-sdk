# SendOrderDetailsRequestLanguage

Template language

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Language code | 
**policy** | **str** | Optional language policy | [optional] 

## Example

```python
from one_msg_sdk.models.send_order_details_request_language import SendOrderDetailsRequestLanguage

# TODO update the JSON string below
json = "{}"
# create an instance of SendOrderDetailsRequestLanguage from a JSON string
send_order_details_request_language_instance = SendOrderDetailsRequestLanguage.from_json(json)
# print the JSON string representation of the object
print(SendOrderDetailsRequestLanguage.to_json())

# convert the object into a dict
send_order_details_request_language_dict = send_order_details_request_language_instance.to_dict()
# create an instance of SendOrderDetailsRequestLanguage from a dict
send_order_details_request_language_from_dict = SendOrderDetailsRequestLanguage.from_dict(send_order_details_request_language_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


