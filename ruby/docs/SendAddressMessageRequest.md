# OneMsgSdk::SendAddressMessageRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **phone** | **Integer** | Recipient phone (E.164 digits, no +). Must match country. | [optional] |
| **chat_id** | **String** |  | [optional] |
| **body** | **String** | Body text shown with the address request |  |
| **country** | **String** | Address form country. Defaults to IN if omitted. | [optional] |
| **values** | **Hash&lt;String, Object&gt;** | Optional prefilled address fields | [optional] |
| **saved_addresses** | **Array&lt;Hash&lt;String, Object&gt;&gt;** | Optional previously saved addresses for the user | [optional] |
| **validation_errors** | **Hash&lt;String, Object&gt;** | Optional field validation errors when re-prompting | [optional] |
| **quoted_msg_id** | **String** |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendAddressMessageRequest.new(
  phone: null,
  chat_id: null,
  body: null,
  country: SG,
  values: null,
  saved_addresses: null,
  validation_errors: null,
  quoted_msg_id: null
)
```

