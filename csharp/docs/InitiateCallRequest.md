# OneMsg.Sdk.Model.InitiateCallRequest
Call action payload for `POST /initiateCall` (proxies upstream `POST /calling/calls`).  Despite the path name, this endpoint handles **all** call actions — not only outbound connect.  ## Required fields by `action`  | action | Required | `session` | |- -- -- -- -|- -- -- -- -- -|- -- -- -- -- --| | `connect` (outbound) | `messaging_product`, `to`, `action` | `sdp_type: offer` + business WebRTC SDP | | `pre_accept` | `messaging_product`, `call_id`, `action` | `sdp_type: answer` (WebRTC-generated) | | `accept` | `messaging_product`, `call_id`, `action` | `sdp_type: answer` (WebRTC-generated) | | `reject` | `messaging_product`, `call_id`, `action` | none | | `terminate` | `messaging_product`, `call_id`, `action` | none |  **Critical:** For `pre_accept` / `accept`, `session.sdp` must be a **WebRTC-generated SDP answer**. Do not echo Meta's offer SDP back. Postman alone cannot establish real media — you need a WebRTC (or SIP) stack. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MessagingProduct** | **string** | Must be &#x60;whatsapp&#x60; | 
**Action** | **string** | Call control action | 
**CallId** | **string** | WhatsApp call id from the inbound/outbound calls webhook (&#x60;calls[].id&#x60;). Required for &#x60;pre_accept&#x60;, &#x60;accept&#x60;, &#x60;reject&#x60;, &#x60;terminate&#x60;.  | [optional] 
**To** | **string** | Recipient WhatsApp user phone (digits, country code, no +). Required for outbound &#x60;connect&#x60;.  | [optional] 
**BizOpaqueCallbackData** | **string** | Optional opaque string echoed on later call webhooks for correlation | [optional] 
**Session** | [**InitiateCallRequestSession**](InitiateCallRequestSession.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

