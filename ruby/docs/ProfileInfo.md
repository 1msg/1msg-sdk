# OneMsgSdk::ProfileInfo

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **about** | **String** | Profile&#39;s About section | [optional] |
| **address** | **String** | Address of the business | [optional] |
| **description** | **String** | Description of the business | [optional] |
| **email** | **String** | Business email | [optional] |
| **phone** | **String** | Linked phone number | [optional] |
| **vertical** | **String** | Industry of the business | [optional] |
| **photo** | **String** | Profile photo URL | [optional] |
| **websites** | **Array&lt;String&gt;** |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::ProfileInfo.new(
  about: null,
  address: null,
  description: null,
  email: null,
  phone: null,
  vertical: null,
  photo: null,
  websites: null
)
```

