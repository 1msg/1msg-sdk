# OneMsg.Sdk.Model.WebhookUrlStatus
Circuit / auto-disable status for one configured webhook URL. The breaker is per URL (`instanceId` + URL hash), not per channel. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Url** | **string** | This webhook URL (same string as in &#x60;webhookUrl&#x60;) | 
**CircuitState** | **string** | Delivery state for this URL only. &#x60;ok&#x60; delivering; &#x60;degraded&#x60; recent qualifying fails (still delivering, warning email on the 2nd fail); &#x60;open&#x60; skipping most deliveries pending a probe; &#x60;half_open&#x60; probe in flight (resume only on HTTP 2xx); &#x60;disabled&#x60; sticky auto-disabled until self-serve re-enable (&#x60;POST /webhook&#x60; / &#x60;POST /settings&#x60; with this URL) or a successful probe before sticky disable.  | 
**Reason** | **string** | Last qualifying fail reason, e.g. &#x60;http_404&#x60; or &#x60;timeout_or_network&#x60; | [optional] 
**Fails** | **int** | Diagnostic only — safe for clients to ignore. Number of qualifying delivery failures in the rolling ~10 minute breaker window (not lifetime, not \&quot;how many times the customer retried\&quot;). Prefer &#x60;circuitState&#x60; / &#x60;disabledWebhooks&#x60;.  | [optional] 
**Trips** | **int** | Diagnostic only — safe for clients to ignore. How many recovery probes already failed for this URL. Probes run on a schedule (≈15 min → 1 h → 6 h); sticky disable after 3 failed probes. The 6 h step is the last probe, not a blind \&quot;unblock in 6 hours\&quot; timer.  | [optional] 
**DisabledAt** | **int** | Epoch milliseconds when this URL became sticky-disabled | [optional] 
**FirstFailAt** | **int** | Diagnostic only. Epoch ms of the first fail in the current ~10 minute window (pairs with &#x60;fails&#x60;; not a customer-facing period).  | [optional] 
**LastStatus** | **int** | Last HTTP status from this URL, when known | [optional] 
**NextProbeAt** | **int** | Epoch milliseconds of the next half-open probe, if any | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

