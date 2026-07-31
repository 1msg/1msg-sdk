# OneMsg.Sdk.Model.SendOrderDetailsRequestOrder
Order payload for the ORDER_DETAILS button. Typical fields: status, items[], subtotal, tax, shipping, discount. Amount objects use `{ \"offset\": 100, \"value\": <minor_units> }` (e.g. value 50000 with offset 100 = ₹500.00). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **string** | Order status | [optional] 
**Items** | [**List&lt;SendOrderDetailsRequestOrderItemsInner&gt;**](SendOrderDetailsRequestOrderItemsInner.md) | Line items | 
**Subtotal** | [**SendOrderDetailsRequestOrderItemsInnerAmount**](SendOrderDetailsRequestOrderItemsInnerAmount.md) |  | [optional] 
**Tax** | **Dictionary&lt;string, Object&gt;** |  | [optional] 
**Shipping** | **Dictionary&lt;string, Object&gt;** |  | [optional] 
**Discount** | **Dictionary&lt;string, Object&gt;** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

