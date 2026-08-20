# OneMsgSdk::InitiateCallRequestSession

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **sdp_type** | **String** | offer for outbound connect; answer for pre_accept/accept |  |
| **sdp** | **String** | Full SDP (RFC 8866). Replace placeholders with SDP from your WebRTC stack. Must negotiate ICE, DTLS-SRTP, and OPUS for WhatsApp media.  |  |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::InitiateCallRequestSession.new(
  sdp_type: offer,
  sdp: [REPLACE_WITH_WEBRTC_SDP]
)
```

