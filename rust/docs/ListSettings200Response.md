# ListSettings200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhook_url** | Option<[**models::ListSettings200ResponseWebhookUrl**](ListSettings200ResponseWebhookUrl.md)> |  | [optional]
**guaranteed_hooks** | Option<**bool**> | Retry webhooks until acknowledged | [optional]
**ack_notifications_on** | Option<**bool**> | Include message ACK / status events in webhooks | [optional]
**raw_hooks** | Option<**bool**> | Forward raw provider webhook payloads | [optional]
**mm_lite_enabled** | Option<**bool**> |  | [optional]
**template_analytics_enabled** | Option<**bool**> |  | [optional]
**cta_url_link_tracking_opted_out** | Option<**bool**> |  | [optional]
**have_disabled_webhooks** | Option<**bool**> | `true` when at least one URL in `webhookUrl` is sticky auto-disabled. Not \"the channel is dead\": other configured URLs still receive events.  | [optional]
**circuit_state** | Option<**CircuitState**> | Compatibility scalar for **one** URL (first sticky-disabled, else first configured). Prefer `webhookStatuses[].circuitState`.  (enum: ok, degraded, open, half_open, disabled) | [optional]
**reason** | Option<**String**> | Last qualifying fail reason of the summary URL | [optional]
**fails** | Option<**i32**> | Diagnostic only (summary URL). Qualifying failures in the rolling ~10 minute breaker window — not lifetime. Prefer `webhookStatuses`.  | [optional]
**trips** | Option<**i32**> | Diagnostic only (summary URL). Failed recovery probes (≈15 min → 1 h → 6 h). Sticky disable after 3. Not a blind unblock timer.  | [optional]
**disabled_at** | Option<**i32**> | Epoch milliseconds when the summary URL became sticky-disabled | [optional]
**first_fail_at** | Option<**i32**> | Diagnostic only (summary URL). Epoch ms of the first fail in the current ~10 minute window (pairs with `fails`).  | [optional]
**last_status** | Option<**i32**> | Last HTTP status from the summary URL, when known | [optional]
**next_probe_at** | Option<**i32**> | Epoch milliseconds of the next half-open probe for the summary URL, if any | [optional]
**disabled_webhooks** | Option<**Vec<std::collections::HashMap<String, serde_json::Value>>**> | Currently configured URLs that are sticky auto-disabled (subset of `webhookUrl`) | [optional]
**webhook_statuses** | Option<[**Vec<models::WebhookUrlStatus>**](WebhookUrlStatus.md)> | One entry per currently configured URL. Prefer this over top-level `haveDisabledWebhooks` / `circuitState`. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


