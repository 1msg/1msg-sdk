# SendFileRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | Option<**String**> | File source (required unless mediaId is set): - HTTP/HTTPS URL - Base64 data URI  | [optional]
**filename** | Option<**String**> | File name with extension (required with body, not with mediaId) | [optional]
**media_id** | Option<**String**> | WABA media id from uploadMedia (alternative to body) | [optional]
**media_type** | Option<**MediaType**> | Required when using mediaId (enum: image, video, audio, document) | [optional]
**voice** | Option<**bool**> | Native WhatsApp voice note (audio/ogg only) | [optional]
**caption** | Option<**String**> |  | [optional]
**quoted_msg_id** | Option<**String**> |  | [optional]
**chat_id** | Option<**String**> |  | [optional]
**phone** | Option<**i32**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


