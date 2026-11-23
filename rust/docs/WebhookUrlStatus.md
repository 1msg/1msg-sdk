# WebhookUrlStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **String** | This webhook URL (same string as in `webhookUrl`) | 
**circuit_state** | **CircuitState** | Delivery state for this URL only. `ok` delivering; `degraded` recent qualifying fails (still delivering, warning email on the 2nd fail); `open` skipping most deliveries pending a probe; `half_open` probe in flight (resume only on HTTP 2xx); `disabled` sticky auto-disabled until self-serve re-enable (`POST /webhook` / `POST /settings` with this URL) or a successful probe before sticky disable.  (enum: ok, degraded, open, half_open, disabled) | 
**reason** | Option<**String**> | Last qualifying fail reason, e.g. `http_404` or `timeout_or_network` | [optional]
**fails** | Option<**i32**> | Diagnostic only — safe for clients to ignore. Number of qualifying delivery failures in the rolling ~10 minute breaker window (not lifetime, not \"how many times the customer retried\"). Prefer `circuitState` / `disabledWebhooks`.  | [optional]
**trips** | Option<**i32**> | Diagnostic only — safe for clients to ignore. How many recovery probes already failed for this URL. Probes run on a schedule (≈15 min → 1 h → 6 h); sticky disable after 3 failed probes. The 6 h step is the last probe, not a blind \"unblock in 6 hours\" timer.  | [optional]
**disabled_at** | Option<**i32**> | Epoch milliseconds when this URL became sticky-disabled | [optional]
**first_fail_at** | Option<**i32**> | Diagnostic only. Epoch ms of the first fail in the current ~10 minute window (pairs with `fails`; not a customer-facing period).  | [optional]
**last_status** | Option<**i32**> | Last HTTP status from this URL, when known | [optional]
**next_probe_at** | Option<**i32**> | Epoch milliseconds of the next half-open probe, if any | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


