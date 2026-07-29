# SendTemplateRequestLanguage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | **str** |  | [optional] 
**code** | **str** |  | [optional] 

## Example

```python
from one_msg_sdk.models.send_template_request_language import SendTemplateRequestLanguage

# TODO update the JSON string below
json = "{}"
# create an instance of SendTemplateRequestLanguage from a JSON string
send_template_request_language_instance = SendTemplateRequestLanguage.from_json(json)
# print the JSON string representation of the object
print(SendTemplateRequestLanguage.to_json())

# convert the object into a dict
send_template_request_language_dict = send_template_request_language_instance.to_dict()
# create an instance of SendTemplateRequestLanguage from a dict
send_template_request_language_from_dict = SendTemplateRequestLanguage.from_dict(send_template_request_language_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


