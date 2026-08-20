# InitiateCallRequestSession

WebRTC SDP session (required for connect / pre_accept / accept)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sdp_type** | **str** | offer for outbound connect; answer for pre_accept/accept | 
**sdp** | **str** | Full SDP (RFC 8866). Replace placeholders with SDP from your WebRTC stack. Must negotiate ICE, DTLS-SRTP, and OPUS for WhatsApp media.  | 

## Example

```python
from one_msg_sdk.models.initiate_call_request_session import InitiateCallRequestSession

# TODO update the JSON string below
json = "{}"
# create an instance of InitiateCallRequestSession from a JSON string
initiate_call_request_session_instance = InitiateCallRequestSession.from_json(json)
# print the JSON string representation of the object
print(InitiateCallRequestSession.to_json())

# convert the object into a dict
initiate_call_request_session_dict = initiate_call_request_session_instance.to_dict()
# create an instance of InitiateCallRequestSession from a dict
initiate_call_request_session_from_dict = InitiateCallRequestSession.from_dict(initiate_call_request_session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


