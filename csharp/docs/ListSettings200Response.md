# OneMsg.Sdk.Model.ListSettings200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WebhookUrl** | [**ListSettings200ResponseWebhookUrl**](ListSettings200ResponseWebhookUrl.md) |  | [optional] 
**GuaranteedHooks** | **bool** | Retry webhooks until acknowledged | [optional] 
**AckNotificationsOn** | **bool** | Include message ACK / status events in webhooks | [optional] 
**RawHooks** | **bool** | Forward raw provider webhook payloads | [optional] 
**MmLiteEnabled** | **bool** |  | [optional] 
**TemplateAnalyticsEnabled** | **bool** |  | [optional] 
**CtaUrlLinkTrackingOptedOut** | **bool** |  | [optional] 
**HaveDisabledWebhooks** | **bool** | &#x60;true&#x60; when at least one URL in &#x60;webhookUrl&#x60; is sticky auto-disabled. Not \&quot;the channel is dead\&quot;: other configured URLs still receive events.  | [optional] 
**CircuitState** | **string** | Compatibility scalar for **one** URL (first sticky-disabled, else first configured). Prefer &#x60;webhookStatuses[].circuitState&#x60;.  | [optional] 
**Reason** | **string** | Last qualifying fail reason of the summary URL | [optional] 
**Fails** | **int** | Diagnostic only (summary URL). Qualifying failures in the rolling ~10 minute breaker window — not lifetime. Prefer &#x60;webhookStatuses&#x60;.  | [optional] 
**Trips** | **int** | Diagnostic only (summary URL). Failed recovery probes (≈15 min → 1 h → 6 h). Sticky disable after 3. Not a blind unblock timer.  | [optional] 
**DisabledAt** | **int** | Epoch milliseconds when the summary URL became sticky-disabled | [optional] 
**FirstFailAt** | **int** | Diagnostic only (summary URL). Epoch ms of the first fail in the current ~10 minute window (pairs with &#x60;fails&#x60;).  | [optional] 
**LastStatus** | **int** | Last HTTP status from the summary URL, when known | [optional] 
**NextProbeAt** | **int** | Epoch milliseconds of the next half-open probe for the summary URL, if any | [optional] 
**DisabledWebhooks** | **List&lt;Dictionary&lt;string, Object&gt;&gt;** | Currently configured URLs that are sticky auto-disabled (subset of &#x60;webhookUrl&#x60;) | [optional] 
**WebhookStatuses** | [**List&lt;WebhookUrlStatus&gt;**](WebhookUrlStatus.md) | One entry per currently configured URL. Prefer this over top-level &#x60;haveDisabledWebhooks&#x60; / &#x60;circuitState&#x60;. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

