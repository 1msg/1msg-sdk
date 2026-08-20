# OneMsgSdk::InitiateCallRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **messaging_product** | **String** | Must be &#x60;whatsapp&#x60; |  |
| **action** | **String** | Call control action |  |
| **call_id** | **String** | WhatsApp call id from the inbound/outbound calls webhook (&#x60;calls[].id&#x60;). Required for &#x60;pre_accept&#x60;, &#x60;accept&#x60;, &#x60;reject&#x60;, &#x60;terminate&#x60;.  | [optional] |
| **to** | **String** | Recipient WhatsApp user phone (digits, country code, no +). Required for outbound &#x60;connect&#x60;.  | [optional] |
| **biz_opaque_callback_data** | **String** | Optional opaque string echoed on later call webhooks for correlation | [optional] |
| **session** | [**InitiateCallRequestSession**](InitiateCallRequestSession.md) |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::InitiateCallRequest.new(
  messaging_product: whatsapp,
  action: connect,
  call_id: wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh,
  to: 12185552828,
  biz_opaque_callback_data: order-123-callback,
  session: null
)
```

