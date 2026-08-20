# OneMsgSdk::ListFlows200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **items** | **Array&lt;Hash&lt;String, Object&gt;&gt;** |  | [optional] |
| **paging** | **Hash&lt;String, Object&gt;** |  | [optional] |
| **count** | **Integer** |  | [optional] |
| **total** | **Integer** |  | [optional] |
| **error** | **Object** | Error details returned by the provider. May be a string or a JSON object. | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::ListFlows200Response.new(
  items: null,
  paging: null,
  count: null,
  total: null,
  error: null
)
```

