

# SendButtonRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**phone** | **String** | Recipient phone with country code. Use phone or chatId. |  [optional] |
|**chatId** | **String** | Recipient chat ID (&#x60;phone@c.us&#x60;, group &#x60;@g.us&#x60;, or BSUID &#x60;@lid&#x60;). Use phone or chatId. |  [optional] |
|**quotedMsgId** | **String** | Optional Cloud API wamid to quote |  [optional] |
|**body** | **String** |  |  [optional] |
|**footer** | **String** |  |  [optional] |
|**header** | **Map&lt;String, Object&gt;** | Optional interactive header (text/image/video/document) |  [optional] |
|**buttons** | **List&lt;Object&gt;** | Legacy alias for sections (&#x60;[{id,title}]&#x60;) |  [optional] |
|**sections** | [**List&lt;SendButtonRequestSectionsInner&gt;**](SendButtonRequestSectionsInner.md) |  |  [optional] |



