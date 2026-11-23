# SendButtonRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | Option<**String**> | Recipient phone with country code. Use phone or chatId. | [optional]
**chat_id** | Option<**String**> | Recipient chat ID (`phone@c.us`, group `@g.us`, or BSUID `@lid`). Use phone or chatId. | [optional]
**quoted_msg_id** | Option<**String**> | Optional Cloud API wamid to quote | [optional]
**body** | Option<**String**> |  | [optional]
**footer** | Option<**String**> |  | [optional]
**header** | Option<**std::collections::HashMap<String, serde_json::Value>**> | Optional interactive header (text/image/video/document) | [optional]
**buttons** | Option<**Vec<serde_json::Value>**> | Legacy alias for sections (`[{id,title}]`) | [optional]
**sections** | Option<[**Vec<models::SendButtonRequestSectionsInner>**](SendButtonRequestSectionsInner.md)> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


