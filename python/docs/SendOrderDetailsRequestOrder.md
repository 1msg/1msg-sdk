# SendOrderDetailsRequestOrder

Order payload for the ORDER_DETAILS button. Typical fields: status, items[], subtotal, tax, shipping, discount. Amount objects use `{ \"offset\": 100, \"value\": <minor_units> }` (e.g. value 50000 with offset 100 = ₹500.00). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Order status | [optional] 
**items** | [**List[SendOrderDetailsRequestOrderItemsInner]**](SendOrderDetailsRequestOrderItemsInner.md) | Line items | 
**subtotal** | [**SendOrderDetailsRequestOrderItemsInnerAmount**](SendOrderDetailsRequestOrderItemsInnerAmount.md) |  | [optional] 
**tax** | **Dict[str, object]** |  | [optional] 
**shipping** | **Dict[str, object]** |  | [optional] 
**discount** | **Dict[str, object]** |  | [optional] 

## Example

```python
from one_msg_sdk.models.send_order_details_request_order import SendOrderDetailsRequestOrder

# TODO update the JSON string below
json = "{}"
# create an instance of SendOrderDetailsRequestOrder from a JSON string
send_order_details_request_order_instance = SendOrderDetailsRequestOrder.from_json(json)
# print the JSON string representation of the object
print(SendOrderDetailsRequestOrder.to_json())

# convert the object into a dict
send_order_details_request_order_dict = send_order_details_request_order_instance.to_dict()
# create an instance of SendOrderDetailsRequestOrder from a dict
send_order_details_request_order_from_dict = SendOrderDetailsRequestOrder.from_dict(send_order_details_request_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


