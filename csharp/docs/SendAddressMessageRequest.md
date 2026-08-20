# OneMsg.Sdk.Model.SendAddressMessageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Phone** | **int** | Recipient phone (E.164 digits, no +). Must match country. | [optional] 
**ChatId** | **string** |  | [optional] 
**Body** | **string** | Body text shown with the address request | 
**Country** | **string** | Address form country. Defaults to IN if omitted. | [optional] 
**Values** | **Dictionary&lt;string, Object&gt;** | Optional prefilled address fields | [optional] 
**SavedAddresses** | **List&lt;Dictionary&lt;string, Object&gt;&gt;** | Optional previously saved addresses for the user | [optional] 
**ValidationErrors** | **Dictionary&lt;string, Object&gt;** | Optional field validation errors when re-prompting | [optional] 
**QuotedMsgId** | **string** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

