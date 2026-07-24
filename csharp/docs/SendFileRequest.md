# OneMsg.ChatApi.Model.SendFileRequest
Send file by URL/base64 or by mediaId

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Body** | **string** | File source (required unless mediaId is set): - HTTP/HTTPS URL - Base64 data URI  | [optional] 
**Filename** | **string** | File name with extension (required with body, not with mediaId) | [optional] 
**MediaId** | **string** | WABA media id from uploadMedia (alternative to body) | [optional] 
**MediaType** | **string** | Required when using mediaId | [optional] 
**Voice** | **bool** | Native WhatsApp voice note (audio/ogg only) | [optional] 
**Caption** | **string** |  | [optional] 
**QuotedMsgId** | **string** |  | [optional] 
**ChatId** | **string** |  | [optional] 
**Phone** | **int** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

