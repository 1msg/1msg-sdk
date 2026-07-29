# OneMsgSdk::GetWhatsappBusinessEncryption200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **business_public_key** | **String** | Stored 2048-bit RSA public key (PEM) | [optional] |
| **business_public_key_signature_status** | **String** |  | [optional] |
| **data** | **Array&lt;Hash&lt;String, Object&gt;&gt;** |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::GetWhatsappBusinessEncryption200Response.new(
  business_public_key: null,
  business_public_key_signature_status: null,
  data: null
)
```

