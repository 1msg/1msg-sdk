# SendProductRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | Option<**String**> | Recipient phone with country code. Use phone or chatId. | [optional]
**chat_id** | Option<**String**> | Recipient chat ID (`phone@c.us`, group `@g.us`, or BSUID `@lid`). Use phone or chatId. | [optional]
**quoted_msg_id** | Option<**String**> |  | [optional]
**body** | Option<**String**> | Optional message text shown with the product | [optional]
**footer** | Option<**String**> |  | [optional]
**header** | Option<**String**> | Text header (product list only) | [optional]
**action** | **std::collections::HashMap<String, serde_json::Value>** | Catalog action (`catalog_id` + `product_retailer_id`, or `sections` for a list) | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


