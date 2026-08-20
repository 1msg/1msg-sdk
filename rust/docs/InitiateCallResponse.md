# InitiateCallResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messaging_product** | Option<**String**> |  | [optional]
**success** | Option<**bool**> |  | [optional]
**calls** | Option<[**Vec<models::InitiateCallResponseCallsInner>**](InitiateCallResponseCallsInner.md)> | Present on outbound `connect` — contains the new call id | [optional]
**result** | Option<**String**> | Legacy success marker when upstream returns an empty body | [optional]
**response** | Option<[**models::InitiateCallResponseResponse**](InitiateCallResponseResponse.md)> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


