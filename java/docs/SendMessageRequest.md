

# SendMessageRequest

Request body for sending a text message

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**body** | **String** | Message text, UTF-8 or UTF-16 string with emoji |  |
|**quotedMsgId** | **String** | Message ID to quote/reply to (Cloud API wamid) |  [optional] |
|**chatId** | **String** | Chat ID in format: phone@c.us (individual) or phone@g.us (group) |  [optional] |
|**phone** | **Integer** | Phone number starting with country code (alternative to chatId) |  [optional] |



