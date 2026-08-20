# GetCommerce200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Catalog id | [optional] 
**is_cart_enabled** | **bool** | Whether the cart is enabled | [optional] 
**is_catalog_visible** | **bool** | Whether the catalog storefront icon is shown | [optional] 

## Example

```python
from one_msg_sdk.models.get_commerce200_response_inner import GetCommerce200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetCommerce200ResponseInner from a JSON string
get_commerce200_response_inner_instance = GetCommerce200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetCommerce200ResponseInner.to_json())

# convert the object into a dict
get_commerce200_response_inner_dict = get_commerce200_response_inner_instance.to_dict()
# create an instance of GetCommerce200ResponseInner from a dict
get_commerce200_response_inner_from_dict = GetCommerce200ResponseInner.from_dict(get_commerce200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


