# OneMsg.Sdk.Model.SendOrderDetailsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Phone** | **int** | Recipient phone (India E.164 digits, no +). Use phone or chatId. | [optional] 
**ChatId** | **string** | Recipient chatId (e.g. phone@c.us). Use phone or chatId. | [optional] 
**Template** | **string** | Approved Utility template name that includes an ORDER_DETAILS button | 
**Namespace** | **string** | Template namespace from the channel / template list | 
**Language** | [**SendOrderDetailsRequestLanguage**](SendOrderDetailsRequestLanguage.md) |  | 
**Params** | **List&lt;Dictionary&lt;string, Object&gt;&gt;** | Extra template components (HEADER / BODY / etc.). If an order_details button is missing, the API appends one from order / referenceId / currency / paymentSettings.  | [optional] 
**ReferenceId** | **string** | Unique order / payment reference id (maps to reference_id) | [optional] 
**Currency** | **string** | Currency code for India payments | [optional] 
**PaymentSettings** | **Dictionary&lt;string, Object&gt;** | Optional payment settings (UPI / payment gateway / payment link). Forwarded as payment_settings on the order_details action.  | [optional] 
**Order** | [**SendOrderDetailsRequestOrder**](SendOrderDetailsRequestOrder.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

