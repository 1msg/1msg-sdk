

# SendOrderDetailsRequestOrder

Order payload for the ORDER_DETAILS button. Typical fields: status, items[], subtotal, tax, shipping, discount. Amount objects use `{ \"offset\": 100, \"value\": <minor_units> }` (e.g. value 50000 with offset 100 = ₹500.00). 

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**status** | **String** | Order status |  [optional] |
|**items** | **List&lt;SendOrderDetailsRequestOrderItemsInner&gt;** | Line items |  |
|**subtotal** | **SendOrderDetailsRequestOrderItemsInnerAmount** |  |  [optional] |
|**tax** | **Map&lt;String, Object&gt;** |  |  [optional] |
|**shipping** | **Map&lt;String, Object&gt;** |  |  [optional] |
|**discount** | **Map&lt;String, Object&gt;** |  |  [optional] |



