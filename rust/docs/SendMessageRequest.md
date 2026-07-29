# SendMessageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **String** | Message text, UTF-8 or UTF-16 string with emoji | 
**quoted_msg_id** | Option<**String**> | Message ID to quote/reply to (Cloud API wamid) | [optional]
**chat_id** | Option<**String**> | Chat ID in format: phone@c.us (individual) or phone@g.us (group) | [optional]
**phone** | Option<**i32**> | Phone number starting with country code (alternative to chatId) | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


