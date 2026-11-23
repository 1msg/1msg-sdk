# OneMsgSdk::CreateFlowsRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** | Flow name |  |
| **categories** | **Array&lt;String&gt;** | One or more Flow categories |  |
| **endpoint_uri** | **String** | HTTPS endpoint for the Flow data channel | [optional] |
| **publish** | **Boolean** | Publish immediately after create | [optional] |
| **flow_json** | **Hash&lt;String, Object&gt;** | Optional Flow JSON document | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::CreateFlowsRequest.new(
  name: null,
  categories: null,
  endpoint_uri: null,
  publish: null,
  flow_json: null
)
```

