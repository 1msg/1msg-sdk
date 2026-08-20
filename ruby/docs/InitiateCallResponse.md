# OneMsgSdk::InitiateCallResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **messaging_product** | **String** |  | [optional] |
| **success** | **Boolean** |  | [optional] |
| **calls** | [**Array&lt;InitiateCallResponseCallsInner&gt;**](InitiateCallResponseCallsInner.md) | Present on outbound &#x60;connect&#x60; — contains the new call id | [optional] |
| **result** | **String** | Legacy success marker when upstream returns an empty body | [optional] |
| **response** | [**InitiateCallResponseResponse**](InitiateCallResponseResponse.md) |  | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::InitiateCallResponse.new(
  messaging_product: whatsapp,
  success: true,
  calls: null,
  result: success,
  response: null
)
```

