# OneMsgSdk::ListSettings200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **webhook_url** | [**ListSettings200ResponseWebhookUrl**](ListSettings200ResponseWebhookUrl.md) |  | [optional] |
| **guaranteed_hooks** | **Boolean** | Retry webhooks until acknowledged | [optional] |
| **ack_notifications_on** | **Boolean** | Include message ACK / status events in webhooks | [optional] |
| **raw_hooks** | **Boolean** | Forward raw provider webhook payloads | [optional] |
| **mm_lite_enabled** | **Boolean** |  | [optional] |
| **template_analytics_enabled** | **Boolean** |  | [optional] |
| **cta_url_link_tracking_opted_out** | **Boolean** |  | [optional] |
| **have_disabled_webhooks** | **Boolean** | &#x60;true&#x60; when at least one URL in &#x60;webhookUrl&#x60; is sticky auto-disabled. Not \&quot;the channel is dead\&quot;: other configured URLs still receive events.  | [optional] |
| **circuit_state** | **String** | Compatibility scalar for **one** URL (first sticky-disabled, else first configured). Prefer &#x60;webhookStatuses[].circuitState&#x60;.  | [optional] |
| **reason** | **String** | Last qualifying fail reason of the summary URL | [optional] |
| **fails** | **Integer** | Diagnostic only (summary URL). Qualifying failures in the rolling ~10 minute breaker window — not lifetime. Prefer &#x60;webhookStatuses&#x60;.  | [optional] |
| **trips** | **Integer** | Diagnostic only (summary URL). Failed recovery probes (≈15 min → 1 h → 6 h). Sticky disable after 3. Not a blind unblock timer.  | [optional] |
| **disabled_at** | **Integer** | Epoch milliseconds when the summary URL became sticky-disabled | [optional] |
| **first_fail_at** | **Integer** | Diagnostic only (summary URL). Epoch ms of the first fail in the current ~10 minute window (pairs with &#x60;fails&#x60;).  | [optional] |
| **last_status** | **Integer** | Last HTTP status from the summary URL, when known | [optional] |
| **next_probe_at** | **Integer** | Epoch milliseconds of the next half-open probe for the summary URL, if any | [optional] |
| **disabled_webhooks** | **Array&lt;Hash&lt;String, Object&gt;&gt;** | Currently configured URLs that are sticky auto-disabled (subset of &#x60;webhookUrl&#x60;) | [optional] |
| **webhook_statuses** | [**Array&lt;WebhookUrlStatus&gt;**](WebhookUrlStatus.md) | One entry per currently configured URL. Prefer this over top-level &#x60;haveDisabledWebhooks&#x60; / &#x60;circuitState&#x60;. | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::ListSettings200Response.new(
  webhook_url: null,
  guaranteed_hooks: null,
  ack_notifications_on: null,
  raw_hooks: null,
  mm_lite_enabled: null,
  template_analytics_enabled: null,
  cta_url_link_tracking_opted_out: null,
  have_disabled_webhooks: null,
  circuit_state: null,
  reason: null,
  fails: null,
  trips: null,
  disabled_at: null,
  first_fail_at: null,
  last_status: null,
  next_probe_at: null,
  disabled_webhooks: null,
  webhook_statuses: null
)
```

