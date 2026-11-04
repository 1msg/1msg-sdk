# OneMsg.Sdk.Model.SendMessageRequest
Request body for sending a text message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Body** | **string** | Message text, UTF-8 or UTF-16 string with emoji | 
**QuotedMsgId** | **string** | Message ID to quote/reply to (Cloud API wamid) | [optional] 
**ChatId** | **string** | Recipient chat ID: phone@c.us, group@g.us, or BSUID@lid | [optional] 
**Phone** | **long** | Phone number starting with country code (alternative to chatId) | [optional] 
**Category** | **string** | Optional Direct Send category. Direct Send is in beta: Meta has not enabled it on every business portfolio. &#x60;utility&#x60; or &#x60;authentication&#x60; enables it. &#x60;authentication&#x60; is part of that beta and is not recommended. Omit or &#x60;service&#x60; keeps a normal service message (and the marketing auto-template outside the 24-hour window). &#x60;marketing&#x60; is rejected.  | [optional] 
**DirectSend** | [**SendMessageRequestDirectSend**](SendMessageRequestDirectSend.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

