# OneMsg.Sdk.Model.SendButtonRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Phone** | **string** | Recipient phone with country code. Use phone or chatId. | [optional] 
**ChatId** | **string** | Recipient chat ID (&#x60;phone@c.us&#x60;, group &#x60;@g.us&#x60;, or BSUID &#x60;@lid&#x60;). Use phone or chatId. | [optional] 
**QuotedMsgId** | **string** | Optional Cloud API wamid to quote | [optional] 
**Body** | **string** |  | [optional] 
**Footer** | **string** |  | [optional] 
**Header** | **Dictionary&lt;string, Object&gt;** | Optional interactive header (text/image/video/document) | [optional] 
**Buttons** | **List&lt;Object&gt;** | Legacy alias for sections (&#x60;[{id,title}]&#x60;) | [optional] 
**Sections** | [**List&lt;SendButtonRequestSectionsInner&gt;**](SendButtonRequestSectionsInner.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

