

# InitiateCallResponse

Successful call action response from upstream, returned as-is. On empty upstream body, 1msg may return `{ \"result\": \"success\" }`. Upstream failures are often wrapped as HTTP 200 `{ \"response\": { \"error\": \"...\" } }`. 

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**messagingProduct** | **String** |  |  [optional] |
|**success** | **Boolean** |  |  [optional] |
|**calls** | **List&lt;InitiateCallResponseCallsInner&gt;** | Present on outbound &#x60;connect&#x60; — contains the new call id |  [optional] |
|**result** | **String** | Legacy success marker when upstream returns an empty body |  [optional] |
|**response** | **InitiateCallResponseResponse** |  |  [optional] |



