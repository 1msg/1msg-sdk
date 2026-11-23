# OneMsgSdk::SendTemplateRequestLanguage

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **policy** | **String** | Must be &#x60;deterministic&#x60; | [optional][default to &#39;deterministic&#39;] |
| **code** | **String** |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendTemplateRequestLanguage.new(
  policy: deterministic,
  code: en
)
```

