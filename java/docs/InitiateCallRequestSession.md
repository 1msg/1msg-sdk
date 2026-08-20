

# InitiateCallRequestSession

WebRTC SDP session (required for connect / pre_accept / accept)

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**sdpType** | [**SdpTypeEnum**](#SdpTypeEnum) | offer for outbound connect; answer for pre_accept/accept |  |
|**sdp** | **String** | Full SDP (RFC 8866). Replace placeholders with SDP from your WebRTC stack. Must negotiate ICE, DTLS-SRTP, and OPUS for WhatsApp media.  |  |



## Enum: SdpTypeEnum

| Name | Value |
|---- | -----|
| OFFER | &quot;offer&quot; |
| ANSWER | &quot;answer&quot; |



