# OneMsg.Sdk.Model.InitiateCallResponse
Successful call action response from upstream, returned as-is. On empty upstream body, 1msg may return `{ \"result\": \"success\" }`. Upstream failures are often wrapped as HTTP 200 `{ \"response\": { \"error\": \"...\" } }`. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MessagingProduct** | **string** |  | [optional] 
**Success** | **bool** |  | [optional] 
**Calls** | [**List&lt;InitiateCallResponseCallsInner&gt;**](InitiateCallResponseCallsInner.md) | Present on outbound &#x60;connect&#x60; — contains the new call id | [optional] 
**Result** | **string** | Legacy success marker when upstream returns an empty body | [optional] 
**Response** | [**InitiateCallResponseResponse**](InitiateCallResponseResponse.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

