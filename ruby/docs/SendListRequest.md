# OneMsgSdk::SendListRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **phone** | **String** |  | [optional] |
| **body** | **String** |  | [optional] |
| **button_text** | **String** |  | [optional] |
| **action** | **String** |  | [optional] |
| **sections** | [**Array&lt;SendListRequestSectionsInner&gt;**](SendListRequestSectionsInner.md) |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendListRequest.new(
  phone: null,
  body: null,
  button_text: null,
  action: null,
  sections: null
)
```

