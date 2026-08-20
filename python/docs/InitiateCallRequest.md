# InitiateCallRequest

Call action payload for `POST /initiateCall` (proxies upstream `POST /calling/calls`).  Despite the path name, this endpoint handles **all** call actions — not only outbound connect.  ## Required fields by `action`  | action | Required | `session` | |--------|----------|-----------| | `connect` (outbound) | `messaging_product`, `to`, `action` | `sdp_type: offer` + business WebRTC SDP | | `pre_accept` | `messaging_product`, `call_id`, `action` | `sdp_type: answer` (WebRTC-generated) | | `accept` | `messaging_product`, `call_id`, `action` | `sdp_type: answer` (WebRTC-generated) | | `reject` | `messaging_product`, `call_id`, `action` | none | | `terminate` | `messaging_product`, `call_id`, `action` | none |  **Critical:** For `pre_accept` / `accept`, `session.sdp` must be a **WebRTC-generated SDP answer**. Do not echo Meta's offer SDP back. Postman alone cannot establish real media — you need a WebRTC (or SIP) stack. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messaging_product** | **str** | Must be &#x60;whatsapp&#x60; | 
**action** | **str** | Call control action | 
**call_id** | **str** | WhatsApp call id from the inbound/outbound calls webhook (&#x60;calls[].id&#x60;). Required for &#x60;pre_accept&#x60;, &#x60;accept&#x60;, &#x60;reject&#x60;, &#x60;terminate&#x60;.  | [optional] 
**to** | **str** | Recipient WhatsApp user phone (digits, country code, no +). Required for outbound &#x60;connect&#x60;.  | [optional] 
**biz_opaque_callback_data** | **str** | Optional opaque string echoed on later call webhooks for correlation | [optional] 
**session** | [**InitiateCallRequestSession**](InitiateCallRequestSession.md) |  | [optional] 

## Example

```python
from one_msg_sdk.models.initiate_call_request import InitiateCallRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InitiateCallRequest from a JSON string
initiate_call_request_instance = InitiateCallRequest.from_json(json)
# print the JSON string representation of the object
print(InitiateCallRequest.to_json())

# convert the object into a dict
initiate_call_request_dict = initiate_call_request_instance.to_dict()
# create an instance of InitiateCallRequest from a dict
initiate_call_request_from_dict = InitiateCallRequest.from_dict(initiate_call_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


