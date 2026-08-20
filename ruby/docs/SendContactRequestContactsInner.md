# OneMsgSdk::SendContactRequestContactsInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | [**SendContactRequestContactsInnerName**](SendContactRequestContactsInnerName.md) |  | [optional] |
| **birthday** | **String** |  | [optional] |
| **addresses** | **Array&lt;Object&gt;** |  | [optional] |
| **emails** | **Array&lt;Object&gt;** |  | [optional] |
| **org** | [**SendContactRequestContactsInnerOrg**](SendContactRequestContactsInnerOrg.md) |  | [optional] |
| **phones** | [**Array&lt;SendContactRequestContactsInnerPhonesInner&gt;**](SendContactRequestContactsInnerPhonesInner.md) |  | [optional] |
| **urls** | **Array&lt;Object&gt;** |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendContactRequestContactsInner.new(
  name: null,
  birthday: null,
  addresses: null,
  emails: null,
  org: null,
  phones: null,
  urls: null
)
```

