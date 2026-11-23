# OneMsgSdk::AddTemplateRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** | Template name | [optional] |
| **category** | **String** | MARKETING, UTILITY, or AUTHENTICATION | [optional] |
| **language** | **String** | Template language code (e.g. en_US) | [optional] |
| **components** | **Array&lt;Hash&lt;String, Object&gt;&gt;** | Template components (HEADER, BODY, FOOTER, BUTTONS, CAROUSEL) | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::AddTemplateRequest.new(
  name: hello_world,
  category: UTILITY,
  language: en_US,
  components: null
)
```

