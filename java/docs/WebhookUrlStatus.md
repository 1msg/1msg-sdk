

# WebhookUrlStatus

Circuit / auto-disable status for one configured webhook URL. The breaker is per URL (`instanceId` + URL hash), not per channel. 

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**url** | **URI** | This webhook URL (same string as in &#x60;webhookUrl&#x60;) |  |
|**circuitState** | [**CircuitStateEnum**](#CircuitStateEnum) | Delivery state for this URL only. &#x60;ok&#x60; delivering; &#x60;degraded&#x60; recent qualifying fails (still delivering, warning email on the 2nd fail); &#x60;open&#x60; skipping most deliveries pending a probe; &#x60;half_open&#x60; probe in flight (resume only on HTTP 2xx); &#x60;disabled&#x60; sticky auto-disabled until self-serve re-enable (&#x60;POST /webhook&#x60; / &#x60;POST /settings&#x60; with this URL) or a successful probe before sticky disable.  |  |
|**reason** | **String** | Last qualifying fail reason, e.g. &#x60;http_404&#x60; or &#x60;timeout_or_network&#x60; |  [optional] |
|**fails** | **Integer** | Diagnostic only — safe for clients to ignore. Number of qualifying delivery failures in the rolling ~10 minute breaker window (not lifetime, not \&quot;how many times the customer retried\&quot;). Prefer &#x60;circuitState&#x60; / &#x60;disabledWebhooks&#x60;.  |  [optional] |
|**trips** | **Integer** | Diagnostic only — safe for clients to ignore. How many recovery probes already failed for this URL. Probes run on a schedule (≈15 min → 1 h → 6 h); sticky disable after 3 failed probes. The 6 h step is the last probe, not a blind \&quot;unblock in 6 hours\&quot; timer.  |  [optional] |
|**disabledAt** | **Integer** | Epoch milliseconds when this URL became sticky-disabled |  [optional] |
|**firstFailAt** | **Integer** | Diagnostic only. Epoch ms of the first fail in the current ~10 minute window (pairs with &#x60;fails&#x60;; not a customer-facing period).  |  [optional] |
|**lastStatus** | **Integer** | Last HTTP status from this URL, when known |  [optional] |
|**nextProbeAt** | **Integer** | Epoch milliseconds of the next half-open probe, if any |  [optional] |



## Enum: CircuitStateEnum

| Name | Value |
|---- | -----|
| OK | &quot;ok&quot; |
| DEGRADED | &quot;degraded&quot; |
| OPEN | &quot;open&quot; |
| HALF_OPEN | &quot;half_open&quot; |
| DISABLED | &quot;disabled&quot; |



