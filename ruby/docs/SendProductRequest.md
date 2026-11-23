# OneMsgSdk::SendProductRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **phone** | **String** | Recipient phone with country code. Use phone or chatId. | [optional] |
| **chat_id** | **String** | Recipient chat ID (&#x60;phone@c.us&#x60;, group &#x60;@g.us&#x60;, or BSUID &#x60;@lid&#x60;). Use phone or chatId. | [optional] |
| **quoted_msg_id** | **String** |  | [optional] |
| **body** | **String** | Optional message text shown with the product | [optional] |
| **footer** | **String** |  | [optional] |
| **header** | **String** | Text header (product list only) | [optional] |
| **action** | **Hash&lt;String, Object&gt;** | Catalog action (&#x60;catalog_id&#x60; + &#x60;product_retailer_id&#x60;, or &#x60;sections&#x60; for a list) |  |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendProductRequest.new(
  phone: null,
  chat_id: null,
  quoted_msg_id: null,
  body: null,
  footer: null,
  header: null,
  action: null
)
```

