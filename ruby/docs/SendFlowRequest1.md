# OneMsgSdk::SendFlowRequest1

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **body** | **String** |  |  |
| **header** | [**SendFlowRequest1Header**](SendFlowRequest1Header.md) |  | [optional] |
| **footer** | **String** |  | [optional] |
| **flow_id** | **String** |  |  |
| **flow_token** | **String** |  |  |
| **flow_cta** | **String** |  |  |
| **flow_action** | **String** |  | [optional] |
| **flow_action_payload** | **Object** |  | [optional] |
| **flow_message_version** | **String** |  | [optional] |
| **mode** | **String** |  | [optional] |
| **flow_action_data** | **Object** |  | [optional] |
| **flow_action_screen** | **String** |  | [optional] |
| **quoted_msg_id** | **String** |  | [optional] |
| **chat_id** | **String** |  | [optional] |
| **phone** | **Integer** |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendFlowRequest1.new(
  body: null,
  header: null,
  footer: null,
  flow_id: null,
  flow_token: null,
  flow_cta: null,
  flow_action: null,
  flow_action_payload: null,
  flow_message_version: null,
  mode: null,
  flow_action_data: null,
  flow_action_screen: null,
  quoted_msg_id: null,
  chat_id: null,
  phone: null
)
```

