# CreateCommerceRequestParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_cart_enabled** | **bool** | Enable cart | 
**is_catalog_visible** | **bool** | Show catalog storefront icon | 

## Example

```python
from one_msg_sdk.models.create_commerce_request_params import CreateCommerceRequestParams

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCommerceRequestParams from a JSON string
create_commerce_request_params_instance = CreateCommerceRequestParams.from_json(json)
# print the JSON string representation of the object
print(CreateCommerceRequestParams.to_json())

# convert the object into a dict
create_commerce_request_params_dict = create_commerce_request_params_instance.to_dict()
# create an instance of CreateCommerceRequestParams from a dict
create_commerce_request_params_from_dict = CreateCommerceRequestParams.from_dict(create_commerce_request_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


