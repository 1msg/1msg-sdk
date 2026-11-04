# OneMsg.Sdk.Model.GetWebhook200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WebhookUrl** | [**GetWebhook200ResponseWebhookUrl**](GetWebhook200ResponseWebhookUrl.md) |  | [optional] 
**HaveDisabledWebhooks** | **bool** | &#x60;true&#x60; when at least one URL in &#x60;webhookUrl&#x60; is sticky auto-disabled. Not \&quot;the channel is dead\&quot;: other configured URLs still receive events. Send/receive are unaffected.  | [optional] 
**CircuitState** | **string** | Compatibility scalar for **one** URL (first sticky-disabled, else first configured). Not the channel as a whole. Prefer &#x60;webhookStatuses[].circuitState&#x60;.  | [optional] 
**Reason** | **string** | Last qualifying fail reason of the summary URL (same URL as &#x60;circuitState&#x60;) | [optional] 
**Fails** | **int** | Diagnostic only (summary URL). Qualifying failures in the rolling ~10 minute breaker window — not lifetime and not customer retries. Prefer &#x60;webhookStatuses&#x60; / &#x60;disabledWebhooks&#x60;.  | [optional] 
**Trips** | **int** | Diagnostic only (summary URL). Failed recovery probes (≈15 min → 1 h → 6 h). Sticky disable after 3. Not a blind unblock timer.  | [optional] 
**DisabledAt** | **int** | Epoch milliseconds when the summary URL became sticky-disabled | [optional] 
**FirstFailAt** | **int** | Diagnostic only (summary URL). Epoch ms of the first fail in the current ~10 minute window (pairs with &#x60;fails&#x60;).  | [optional] 
**LastStatus** | **int** | Last HTTP status from the summary URL, when known | [optional] 
**NextProbeAt** | **int** | Epoch milliseconds of the next half-open probe for the summary URL, if any | [optional] 
**DisabledWebhooks** | **List&lt;Dictionary&lt;string, Object&gt;&gt;** | Currently configured URLs that are sticky auto-disabled (subset of &#x60;webhookUrl&#x60;). Does not include leftover URLs that are no longer configured.  | [optional] 
**WebhookStatuses** | [**List&lt;WebhookUrlStatus&gt;**](WebhookUrlStatus.md) | One entry per currently configured URL. Prefer this over top-level &#x60;haveDisabledWebhooks&#x60; / &#x60;circuitState&#x60; when more than one webhook is set.  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

