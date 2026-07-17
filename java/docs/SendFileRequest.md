

# SendFileRequest

Request body for sending a file (image, video, document, audio)

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**body** | **String** | File source: - HTTP/HTTPS URL (https://example.com/file.pdf) - Base64-encoded file with MIME (data:image/jpeg;base64,/9j/4AAQ...) - Form-data field  |  |
|**filename** | **String** | File name with extension (required for mime type detection) |  |
|**caption** | **String** | Text caption under the file |  [optional] |
|**quotedMsgId** | **String** | Message ID to quote/reply to |  [optional] |
|**chatId** | **String** | Chat ID in format: phone@c.us or phone@g.us |  [optional] |
|**phone** | **Integer** | Phone number starting with country code |  [optional] |



