# CreateCommerceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**params** | [**CreateCommerceRequestParams**](CreateCommerceRequestParams.md) |  | 

## Example

```python
from one_msg_sdk.models.create_commerce_request import CreateCommerceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCommerceRequest from a JSON string
create_commerce_request_instance = CreateCommerceRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCommerceRequest.to_json())

# convert the object into a dict
create_commerce_request_dict = create_commerce_request_instance.to_dict()
# create an instance of CreateCommerceRequest from a dict
create_commerce_request_from_dict = CreateCommerceRequest.from_dict(create_commerce_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


