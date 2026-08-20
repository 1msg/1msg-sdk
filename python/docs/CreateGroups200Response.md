# CreateGroups200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **object** | Error details returned by the provider. May be a string or a JSON object. | [optional] 

## Example

```python
from one_msg_sdk.models.create_groups200_response import CreateGroups200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGroups200Response from a JSON string
create_groups200_response_instance = CreateGroups200Response.from_json(json)
# print the JSON string representation of the object
print(CreateGroups200Response.to_json())

# convert the object into a dict
create_groups200_response_dict = create_groups200_response_instance.to_dict()
# create an instance of CreateGroups200Response from a dict
create_groups200_response_from_dict = CreateGroups200Response.from_dict(create_groups200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


