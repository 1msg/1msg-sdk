# OneMsg.ChatApi.Model.SendMessageRequest
Request body for sending a text message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Body** | **string** | Message text, UTF-8 or UTF-16 string with emoji | 
**QuotedMsgId** | **string** | Message ID to quote/reply to (Cloud API wamid) | [optional] 
**ChatId** | **string** | Chat ID in format: phone@c.us (individual) or phone@g.us (group) | [optional] 
**Phone** | **long** | Phone number starting with country code (alternative to chatId) | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

