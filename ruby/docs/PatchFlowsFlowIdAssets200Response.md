# OneMsgSdk::PatchFlowsFlowIdAssets200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **success** | **Boolean** |  | [optional] |
| **validation_errors** | **Array&lt;Hash&lt;String, Object&gt;&gt;** |  | [optional] |
| **error** | **Object** | Error details returned by the provider. May be a string or a JSON object. | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::PatchFlowsFlowIdAssets200Response.new(
  success: null,
  validation_errors: null,
  error: null
)
```

