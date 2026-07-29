# OneMsgSdk::SendOrderDetailsRequestLanguage

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **code** | **String** | Language code |  |
| **policy** | **String** | Optional language policy | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendOrderDetailsRequestLanguage.new(
  code: en,
  policy: deterministic
)
```

