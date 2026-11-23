# OneMsgSdk::GetWebhook200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **webhook_url** | [**GetWebhook200ResponseWebhookUrl**](GetWebhook200ResponseWebhookUrl.md) |  | [optional] |
| **have_disabled_webhooks** | **Boolean** | &#x60;true&#x60; when at least one URL in &#x60;webhookUrl&#x60; is sticky auto-disabled. Not \&quot;the channel is dead\&quot;: other configured URLs still receive events. Send/receive are unaffected.  | [optional] |
| **circuit_state** | **String** | Compatibility scalar for **one** URL (first sticky-disabled, else first configured). Not the channel as a whole. Prefer &#x60;webhookStatuses[].circuitState&#x60;.  | [optional] |
| **reason** | **String** | Last qualifying fail reason of the summary URL (same URL as &#x60;circuitState&#x60;) | [optional] |
| **fails** | **Integer** | Diagnostic only (summary URL). Qualifying failures in the rolling ~10 minute breaker window — not lifetime and not customer retries. Prefer &#x60;webhookStatuses&#x60; / &#x60;disabledWebhooks&#x60;.  | [optional] |
| **trips** | **Integer** | Diagnostic only (summary URL). Failed recovery probes (≈15 min → 1 h → 6 h). Sticky disable after 3. Not a blind unblock timer.  | [optional] |
| **disabled_at** | **Integer** | Epoch milliseconds when the summary URL became sticky-disabled | [optional] |
| **first_fail_at** | **Integer** | Diagnostic only (summary URL). Epoch ms of the first fail in the current ~10 minute window (pairs with &#x60;fails&#x60;).  | [optional] |
| **last_status** | **Integer** | Last HTTP status from the summary URL, when known | [optional] |
| **next_probe_at** | **Integer** | Epoch milliseconds of the next half-open probe for the summary URL, if any | [optional] |
| **disabled_webhooks** | **Array&lt;Hash&lt;String, Object&gt;&gt;** | Currently configured URLs that are sticky auto-disabled (subset of &#x60;webhookUrl&#x60;). Does not include leftover URLs that are no longer configured.  | [optional] |
| **webhook_statuses** | [**Array&lt;WebhookUrlStatus&gt;**](WebhookUrlStatus.md) | One entry per currently configured URL. Prefer this over top-level &#x60;haveDisabledWebhooks&#x60; / &#x60;circuitState&#x60; when more than one webhook is set.  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::GetWebhook200Response.new(
  webhook_url: null,
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

