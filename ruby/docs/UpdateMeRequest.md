# OneMsgSdk::UpdateMeRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **about** | **String** | Profile About section | [optional] |
| **address** | **String** |  | [optional] |
| **description** | **String** | Business description (max 256 characters) | [optional] |
| **email** | **String** |  | [optional] |
| **vertical** | **String** | Industry of the business | [optional] |
| **photo** | **String** | HTTPS URL or data:image/...;base64,... payload | [optional] |
| **websites** | **Array&lt;String&gt;** |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::UpdateMeRequest.new(
  about: null,
  address: null,
  description: null,
  email: null,
  vertical: null,
  photo: null,
  websites: null
)
```

