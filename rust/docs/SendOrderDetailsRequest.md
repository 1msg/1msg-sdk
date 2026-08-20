# SendOrderDetailsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | Option<**i32**> | Recipient phone (India E.164 digits, no +). Use phone or chatId. | [optional]
**chat_id** | Option<**String**> | Recipient chatId (e.g. phone@c.us). Use phone or chatId. | [optional]
**template** | **String** | Approved Utility template name that includes an ORDER_DETAILS button | 
**namespace** | **String** | Template namespace from the channel / template list | 
**language** | [**models::SendOrderDetailsRequestLanguage**](SendOrderDetailsRequestLanguage.md) |  | 
**params** | Option<**Vec<std::collections::HashMap<String, serde_json::Value>>**> | Extra template components (HEADER / BODY / etc.). If an order_details button is missing, the API appends one from order / referenceId / currency / paymentSettings.  | [optional]
**reference_id** | Option<**String**> | Unique order / payment reference id (maps to reference_id) | [optional]
**currency** | Option<**String**> | Currency code for India payments | [optional]
**payment_settings** | Option<**std::collections::HashMap<String, serde_json::Value>**> | Optional payment settings (UPI / payment gateway / payment link). Forwarded as payment_settings on the order_details action.  | [optional]
**order** | [**models::SendOrderDetailsRequestOrder**](SendOrderDetailsRequestOrder.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


