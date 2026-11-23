# OneMsgSdk::SendContactRequestContact

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | [**SendContactRequestContactName**](SendContactRequestContactName.md) |  |  |
| **phone** | **String** | Contact phone in E.164 (&#x60;+79181976551&#x60;), not a timestamp |  |
| **email** | **String** |  | [optional] |
| **org** | **Hash&lt;String, Object&gt;** |  | [optional] |
| **url** | **String** |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendContactRequestContact.new(
  name: null,
  phone: null,
  email: null,
  org: null,
  url: null
)
```

