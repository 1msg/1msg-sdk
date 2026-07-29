# SendOrderDetailsRequestOrderItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retailer_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**quantity** | **int** |  | [optional] 
**amount** | [**SendOrderDetailsRequestOrderItemsInnerAmount**](SendOrderDetailsRequestOrderItemsInnerAmount.md) |  | [optional] 

## Example

```python
from one_msg_sdk.models.send_order_details_request_order_items_inner import SendOrderDetailsRequestOrderItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SendOrderDetailsRequestOrderItemsInner from a JSON string
send_order_details_request_order_items_inner_instance = SendOrderDetailsRequestOrderItemsInner.from_json(json)
# print the JSON string representation of the object
print(SendOrderDetailsRequestOrderItemsInner.to_json())

# convert the object into a dict
send_order_details_request_order_items_inner_dict = send_order_details_request_order_items_inner_instance.to_dict()
# create an instance of SendOrderDetailsRequestOrderItemsInner from a dict
send_order_details_request_order_items_inner_from_dict = SendOrderDetailsRequestOrderItemsInner.from_dict(send_order_details_request_order_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


