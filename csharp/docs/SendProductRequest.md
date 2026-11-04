# OneMsg.Sdk.Model.SendProductRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Phone** | **string** | Recipient phone with country code. Use phone or chatId. | [optional] 
**ChatId** | **string** | Recipient chat ID (&#x60;phone@c.us&#x60;, group &#x60;@g.us&#x60;, or BSUID &#x60;@lid&#x60;). Use phone or chatId. | [optional] 
**QuotedMsgId** | **string** |  | [optional] 
**Body** | **string** | Optional message text shown with the product | [optional] 
**Footer** | **string** |  | [optional] 
**Header** | **string** | Text header (product list only) | [optional] 
**Action** | **Dictionary&lt;string, Object&gt;** | Catalog action (&#x60;catalog_id&#x60; + &#x60;product_retailer_id&#x60;, or &#x60;sections&#x60; for a list) | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

