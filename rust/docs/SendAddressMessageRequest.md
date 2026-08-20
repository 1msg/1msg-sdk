# SendAddressMessageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | Option<**i32**> | Recipient phone (E.164 digits, no +). Must match country. | [optional]
**chat_id** | Option<**String**> |  | [optional]
**body** | **String** | Body text shown with the address request | 
**country** | Option<**Country**> | Address form country. Defaults to IN if omitted. (enum: IN, SG) | [optional]
**values** | Option<**std::collections::HashMap<String, serde_json::Value>**> | Optional prefilled address fields | [optional]
**saved_addresses** | Option<**Vec<std::collections::HashMap<String, serde_json::Value>>**> | Optional previously saved addresses for the user | [optional]
**validation_errors** | Option<**std::collections::HashMap<String, serde_json::Value>**> | Optional field validation errors when re-prompting | [optional]
**quoted_msg_id** | Option<**String**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


