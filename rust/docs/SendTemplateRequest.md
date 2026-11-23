# SendTemplateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**template** | Option<**String**> | Approved template name (template `name`, not the old HSM `element_name`) | [optional]
**language** | Option<[**models::SendTemplateRequestLanguage**](SendTemplateRequestLanguage.md)> |  | [optional]
**namespace** | Option<**String**> | Template namespace from `list_templates` | [optional]
**params** | Option<**Vec<std::collections::HashMap<String, serde_json::Value>>**> | Template components in WhatsApp Cloud API format. Each item is an object with `type` (`body`, `header`, `button`) and `parameters` (objects with `type` + `text` / media / action). Never a list of strings. Never HSM `localizable_params`.  | [optional]
**phone** | Option<**String**> | Recipient phone with country code (use phone or chatId) | [optional]
**chat_id** | Option<**String**> | Recipient chat ID (`phone@c.us`, group `@g.us`, or BSUID `@lid`). Use phone or chatId. | [optional]
**quoted_msg_id** | Option<**String**> | Optional Cloud API wamid to quote | [optional]
**use_m_mlite** | Option<**bool**> | Force Marketing Messages API (POST marketing_messages). If omitted, and the channel has mm_lite_enabled and mm_lite_available: MARKETING templates and templates with an unknown category use marketing_messages. An unknown category falls back to messages (mmLiteFallback) when Meta rejects it. Known AUTHENTICATION and UTILITY templates stay on messages. useMMlite:false forces messages.  | [optional]
**message_activity_sharing** | Option<**bool**> | Sets message_activity_sharing on WABA payload. Enables click tracking webhooks. Requires MM Lite path. Ignored on Cloud API fallback.  | [optional]
**message_send_ttl_seconds** | Option<**i32**> | Template message TTL in seconds (message_send_ttl_seconds). MARKETING via MM Lite: 43200–2592000. AUTHENTICATION: 30–900. UTILITY: 30–43200. AUTH/UTILITY also accept -1 (30-day custom TTL).  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


