# OneMsgSdk::GetStatus200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **is_cloud** | **Boolean** |  | [optional] |
| **status** | **String** | typically &#x60;connected&#x60; when the number can send | [optional] |
| **account_status** | **String** |  | [optional] |
| **mm_lite_available** | **Boolean** |  | [optional] |
| **health_status_warning** | **String** | Optional soft-fail warning when Meta Graph health_status could not be loaded. Never includes internal provider names. | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::GetStatus200Response.new(
  is_cloud: true,
  status: connected,
  account_status: authenticated,
  mm_lite_available: null,
  health_status_warning: null
)
```

