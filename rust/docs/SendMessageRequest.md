# SendMessageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **String** | Message text, UTF-8 or UTF-16 string with emoji | 
**quoted_msg_id** | Option<**String**> | Message ID to quote/reply to (Cloud API wamid) | [optional]
**chat_id** | Option<**String**> | Recipient chat ID: phone@c.us, group@g.us, or BSUID@lid | [optional]
**phone** | Option<**i32**> | Phone number starting with country code (alternative to chatId) | [optional]
**category** | Option<**Category**> | Optional Direct Send category. Direct Send is in beta: Meta has not enabled it on every business portfolio. `utility` or `authentication` enables it. `authentication` is part of that beta and is not recommended. Omit or `service` keeps a normal service message (and the marketing auto-template outside the 24-hour window). `marketing` is rejected.  (enum: utility, authentication, service) | [optional]
**direct_send** | Option<[**models::SendMessageRequestDirectSend**](SendMessageRequestDirectSend.md)> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


