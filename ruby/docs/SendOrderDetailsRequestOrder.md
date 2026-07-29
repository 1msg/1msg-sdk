# OneMsgSdk::SendOrderDetailsRequestOrder

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **status** | **String** | Order status | [optional] |
| **items** | [**Array&lt;SendOrderDetailsRequestOrderItemsInner&gt;**](SendOrderDetailsRequestOrderItemsInner.md) | Line items |  |
| **subtotal** | [**SendOrderDetailsRequestOrderItemsInnerAmount**](SendOrderDetailsRequestOrderItemsInnerAmount.md) |  | [optional] |
| **tax** | **Hash&lt;String, Object&gt;** |  | [optional] |
| **shipping** | **Hash&lt;String, Object&gt;** |  | [optional] |
| **discount** | **Hash&lt;String, Object&gt;** |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendOrderDetailsRequestOrder.new(
  status: pending,
  items: null,
  subtotal: null,
  tax: null,
  shipping: null,
  discount: null
)
```

