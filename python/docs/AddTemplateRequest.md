# AddTemplateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**category** | **str** |  | [optional] 
**language** | **str** |  | [optional] 
**components** | **List[Dict[str, object]]** |  | [optional] 

## Example

```python
from one_msg_sdk.models.add_template_request import AddTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddTemplateRequest from a JSON string
add_template_request_instance = AddTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(AddTemplateRequest.to_json())

# convert the object into a dict
add_template_request_dict = add_template_request_instance.to_dict()
# create an instance of AddTemplateRequest from a dict
add_template_request_from_dict = AddTemplateRequest.from_dict(add_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


