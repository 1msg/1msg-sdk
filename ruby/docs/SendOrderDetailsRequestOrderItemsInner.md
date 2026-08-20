# OneMsgSdk::SendOrderDetailsRequestOrderItemsInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **retailer_id** | **String** |  | [optional] |
| **name** | **String** |  | [optional] |
| **quantity** | **Integer** |  | [optional] |
| **amount** | [**SendOrderDetailsRequestOrderItemsInnerAmount**](SendOrderDetailsRequestOrderItemsInnerAmount.md) |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendOrderDetailsRequestOrderItemsInner.new(
  retailer_id: SKU-1,
  name: Item,
  quantity: 1,
  amount: null
)
```

