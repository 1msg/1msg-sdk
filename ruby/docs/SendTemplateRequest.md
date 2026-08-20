# OneMsgSdk::SendTemplateRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **template** | **String** |  | [optional] |
| **language** | [**SendTemplateRequestLanguage**](SendTemplateRequestLanguage.md) |  | [optional] |
| **namespace** | **String** |  | [optional] |
| **params** | **Array&lt;Object&gt;** |  | [optional] |
| **phone** | **String** |  | [optional] |
| **use_m_mlite** | **Boolean** | Force Marketing Messages API (POST marketing_messages). If omitted: auto for MARKETING category when channel has mm_lite_enabled and mm_lite_available service settings.  | [optional] |
| **message_activity_sharing** | **Boolean** | Sets message_activity_sharing on WABA payload. Enables click tracking webhooks. Requires MM Lite path. Ignored on Cloud API fallback.  | [optional] |
| **message_send_ttl_seconds** | **Integer** | Template message TTL in seconds (message_send_ttl_seconds). MARKETING via MM Lite: 43200–2592000. AUTHENTICATION: 30–900. UTILITY: 30–43200. AUTH/UTILITY also accept -1 (30-day custom TTL).  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::SendTemplateRequest.new(
  template: null,
  language: null,
  namespace: null,
  params: null,
  phone: null,
  use_m_mlite: null,
  message_activity_sharing: null,
  message_send_ttl_seconds: null
)
```

