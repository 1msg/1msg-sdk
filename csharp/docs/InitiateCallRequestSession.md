# OneMsg.Sdk.Model.InitiateCallRequestSession
WebRTC SDP session (required for connect / pre_accept / accept)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SdpType** | **string** | offer for outbound connect; answer for pre_accept/accept | 
**Sdp** | **string** | Full SDP (RFC 8866). Replace placeholders with SDP from your WebRTC stack. Must negotiate ICE, DTLS-SRTP, and OPUS for WhatsApp media.  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

