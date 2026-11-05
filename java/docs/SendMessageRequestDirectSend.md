

# SendMessageRequestDirectSend

Optional. Ignored unless `category` is `utility` or `authentication`. `serviceFirst` is not forwarded to Meta. 

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**serviceFirst** | **Boolean** | When true, send a service message first. Success stops there. A closed-window error (131047) retries as Direct Send. Any other error is returned and Direct Send is not attempted. Omit or false to send Direct Send immediately, even inside an open window.  |  [optional] |
|**templateName** | **String** | Utility only. Meta creates or reuses a Direct Send template with this exact name (&#x60;^[a-z0-9_]+$&#x60;, max 512). Do not reuse a template created by hand.  |  [optional] |



