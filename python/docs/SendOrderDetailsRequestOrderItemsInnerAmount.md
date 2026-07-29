# SendOrderDetailsRequestOrderItemsInnerAmount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offset** | **int** |  | [optional] 
**value** | **int** |  | [optional] 

## Example

```python
from one_msg_sdk.models.send_order_details_request_order_items_inner_amount import SendOrderDetailsRequestOrderItemsInnerAmount

# TODO update the JSON string below
json = "{}"
# create an instance of SendOrderDetailsRequestOrderItemsInnerAmount from a JSON string
send_order_details_request_order_items_inner_amount_instance = SendOrderDetailsRequestOrderItemsInnerAmount.from_json(json)
# print the JSON string representation of the object
print(SendOrderDetailsRequestOrderItemsInnerAmount.to_json())

# convert the object into a dict
send_order_details_request_order_items_inner_amount_dict = send_order_details_request_order_items_inner_amount_instance.to_dict()
# create an instance of SendOrderDetailsRequestOrderItemsInnerAmount from a dict
send_order_details_request_order_items_inner_amount_from_dict = SendOrderDetailsRequestOrderItemsInnerAmount.from_dict(send_order_details_request_order_items_inner_amount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


