

# ListSettings200Response


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**webhookUrl** | [**ListSettings200ResponseWebhookUrl**](ListSettings200ResponseWebhookUrl.md) |  |  [optional] |
|**guaranteedHooks** | **Boolean** | Retry webhooks until acknowledged |  [optional] |
|**ackNotificationsOn** | **Boolean** | Include message ACK / status events in webhooks |  [optional] |
|**rawHooks** | **Boolean** | Forward raw provider webhook payloads |  [optional] |
|**mmLiteEnabled** | **Boolean** |  |  [optional] |
|**templateAnalyticsEnabled** | **Boolean** |  |  [optional] |
|**ctaUrlLinkTrackingOptedOut** | **Boolean** |  |  [optional] |
|**haveDisabledWebhooks** | **Boolean** | &#x60;true&#x60; when at least one URL in &#x60;webhookUrl&#x60; is sticky auto-disabled. Not \&quot;the channel is dead\&quot;: other configured URLs still receive events.  |  [optional] |
|**circuitState** | [**CircuitStateEnum**](#CircuitStateEnum) | Compatibility scalar for **one** URL (first sticky-disabled, else first configured). Prefer &#x60;webhookStatuses[].circuitState&#x60;.  |  [optional] |
|**reason** | **String** | Last qualifying fail reason of the summary URL |  [optional] |
|**fails** | **Integer** | Diagnostic only (summary URL). Qualifying failures in the rolling ~10 minute breaker window — not lifetime. Prefer &#x60;webhookStatuses&#x60;.  |  [optional] |
|**trips** | **Integer** | Diagnostic only (summary URL). Failed recovery probes (≈15 min → 1 h → 6 h). Sticky disable after 3. Not a blind unblock timer.  |  [optional] |
|**disabledAt** | **Integer** | Epoch milliseconds when the summary URL became sticky-disabled |  [optional] |
|**firstFailAt** | **Integer** | Diagnostic only (summary URL). Epoch ms of the first fail in the current ~10 minute window (pairs with &#x60;fails&#x60;).  |  [optional] |
|**lastStatus** | **Integer** | Last HTTP status from the summary URL, when known |  [optional] |
|**nextProbeAt** | **Integer** | Epoch milliseconds of the next half-open probe for the summary URL, if any |  [optional] |
|**disabledWebhooks** | **List&lt;Map&lt;String, Object&gt;&gt;** | Currently configured URLs that are sticky auto-disabled (subset of &#x60;webhookUrl&#x60;) |  [optional] |
|**webhookStatuses** | **List&lt;WebhookUrlStatus&gt;** | One entry per currently configured URL. Prefer this over top-level &#x60;haveDisabledWebhooks&#x60; / &#x60;circuitState&#x60;. |  [optional] |



## Enum: CircuitStateEnum

| Name | Value |
|---- | -----|
| OK | &quot;ok&quot; |
| DEGRADED | &quot;degraded&quot; |
| OPEN | &quot;open&quot; |
| HALF_OPEN | &quot;half_open&quot; |
| DISABLED | &quot;disabled&quot; |



