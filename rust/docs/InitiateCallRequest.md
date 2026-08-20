# InitiateCallRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messaging_product** | **MessagingProduct** | Must be `whatsapp` (enum: whatsapp) | 
**action** | **Action** | Call control action (enum: connect, pre_accept, accept, reject, terminate) | 
**call_id** | Option<**String**> | WhatsApp call id from the inbound/outbound calls webhook (`calls[].id`). Required for `pre_accept`, `accept`, `reject`, `terminate`.  | [optional]
**to** | Option<**String**> | Recipient WhatsApp user phone (digits, country code, no +). Required for outbound `connect`.  | [optional]
**biz_opaque_callback_data** | Option<**String**> | Optional opaque string echoed on later call webhooks for correlation | [optional]
**session** | Option<[**models::InitiateCallRequestSession**](InitiateCallRequestSession.md)> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


