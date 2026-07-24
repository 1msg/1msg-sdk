# OneMsg.ChatApi.Model.SendOrderDetailsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Phone** | **int** | Recipient phone (India E.164 digits, no +) | [optional] 
**ChatId** | **string** | Recipient chatId (phone@c.us / bsuid@lid / …) | [optional] 
**Template** | **string** | Approved template name with ORDER_DETAILS button | 
**Namespace** | **string** | Template namespace | 
**Language** | **Dictionary&lt;string, Object&gt;** | Template language object, e.g. code \&quot;en\&quot; or policy \&quot;deterministic\&quot; with code \&quot;en\&quot;.  | 
**Params** | **List&lt;Dictionary&lt;string, Object&gt;&gt;** | Extra template components (header/body). An order_details button is appended automatically if missing.  | [optional] 
**Order** | **Dictionary&lt;string, Object&gt;** | Order object (items, subtotal, tax, shipping, discount, status) per Meta Payments India docs.  | 
**ReferenceId** | **string** | Unique order/payment reference id | [optional] 
**PaymentSettings** | **Dictionary&lt;string, Object&gt;** | Optional payment_settings (UPI / payment gateway / payment link).  | [optional] 
**Currency** | **string** | Currency code (INR for India) | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

