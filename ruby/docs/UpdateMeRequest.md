# OneMsgSdk::UpdateMeRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **about** | **String** | Profile About section (WhatsApp status text) | [optional] |
| **address** | **String** | Business address shown on the profile | [optional] |
| **description** | **String** | Business description (max 256 characters) | [optional] |
| **email** | **String** | Business email shown on the profile | [optional] |
| **vertical** | **String** | Industry of the business | [optional] |
| **photo** | **String** | HTTPS URL or data:image/...;base64,... payload | [optional] |
| **websites** | **Array&lt;String&gt;** | Business website URLs | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::UpdateMeRequest.new(
  about: Available 9–18,
  address: null,
  description: null,
  email: support@example.com,
  vertical: null,
  photo: null,
  websites: null
)
```

