# SendContactInfoRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | Option<**String**> | Recipient phone with country code. Use phone, chatId, or bsuid. | [optional]
**chat_id** | Option<**String**> | Recipient chat ID (`phone@c.us`, BSUID `@lid`, or username `@username`). | [optional]
**bsuid** | Option<**String**> | Business-scoped user id, for example `US.13491208655302741918`. | [optional]
**quoted_msg_id** | Option<**String**> |  | [optional]
**body** | **String** | Text shown above the share-contact button. WhatsApp sets the button label; do not send button text.  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


