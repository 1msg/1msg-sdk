

# SendFileRequest

Send file by URL/base64 or by mediaId

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**body** | **String** | File source (required unless mediaId is set): - HTTP/HTTPS URL - Base64 data URI  |  [optional] |
|**filename** | **String** | File name with extension (required with body, not with mediaId) |  [optional] |
|**mediaId** | **String** | WABA media id from uploadMedia (alternative to body) |  [optional] |
|**mediaType** | [**MediaTypeEnum**](#MediaTypeEnum) | Required when using mediaId |  [optional] |
|**voice** | **Boolean** | Native WhatsApp voice note (audio/ogg only) |  [optional] |
|**caption** | **String** |  |  [optional] |
|**quotedMsgId** | **String** |  |  [optional] |
|**chatId** | **String** |  |  [optional] |
|**phone** | **Integer** |  |  [optional] |



## Enum: MediaTypeEnum

| Name | Value |
|---- | -----|
| IMAGE | &quot;image&quot; |
| VIDEO | &quot;video&quot; |
| AUDIO | &quot;audio&quot; |
| DOCUMENT | &quot;document&quot; |



