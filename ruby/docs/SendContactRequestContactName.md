# OneMsgSdk::SendContactRequestContactName

## Class instance methods

### `openapi_one_of`

Returns the list of classes defined in oneOf.

#### Example

```ruby
require 'one_msg_sdk'

OneMsgSdk::SendContactRequestContactName.openapi_one_of
# =>
# [
#   :'Hash<String, Object>',
#   :'String'
# ]
```

### build

Find the appropriate object from the `openapi_one_of` list and casts the data into it.

#### Example

```ruby
require 'one_msg_sdk'

OneMsgSdk::SendContactRequestContactName.build(data)
# => #<Hash<String, Object>:0x00007fdd4aab02a0>

OneMsgSdk::SendContactRequestContactName.build(data_that_doesnt_match)
# => nil
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | **Mixed** | data to be matched against the list of oneOf items |

#### Return type

- `Hash<String, Object>`
- `String`
- `nil` (if no type matches)

