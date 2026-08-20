# OneMsgSdk::SetWhatsappBusinessEncryptionRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **business_public_key** | **String** | 2048-bit RSA public key in PEM format |  |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SetWhatsappBusinessEncryptionRequest.new(
  business_public_key: -----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
-----END PUBLIC KEY-----

)
```

