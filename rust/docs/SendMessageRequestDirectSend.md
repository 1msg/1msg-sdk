# SendMessageRequestDirectSend

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_first** | Option<**bool**> | When true, send a service message first. Success stops there. A closed-window error (131047) retries as Direct Send. Any other error is returned and Direct Send is not attempted. Omit or false to send Direct Send immediately, even inside an open window.  | [optional]
**template_name** | Option<**String**> | Utility only. Meta creates or reuses a Direct Send template with this exact name (`^[a-z0-9_]+$`, max 512). Do not reuse a template created by hand.  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


