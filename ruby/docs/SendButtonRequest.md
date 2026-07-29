# OneMsgSdk::SendButtonRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **phone** | **String** |  | [optional] |
| **body** | **String** |  | [optional] |
| **footer** | **String** |  | [optional] |
| **sections** | [**Array&lt;SendButtonRequestSectionsInner&gt;**](SendButtonRequestSectionsInner.md) |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendButtonRequest.new(
  phone: null,
  body: null,
  footer: null,
  sections: null
)
```

