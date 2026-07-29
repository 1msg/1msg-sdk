# SendTemplateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**template** | **str** |  | [optional] 
**language** | [**SendTemplateRequestLanguage**](SendTemplateRequestLanguage.md) |  | [optional] 
**namespace** | **str** |  | [optional] 
**params** | **List[object]** |  | [optional] 
**phone** | **str** |  | [optional] 
**use_m_mlite** | **bool** | Force Marketing Messages API (POST marketing_messages). If omitted: auto for MARKETING category when channel has mm_lite_enabled and mm_lite_available service settings.  | [optional] 
**message_activity_sharing** | **bool** | Sets message_activity_sharing on WABA payload. Enables click tracking webhooks. Requires MM Lite path. Ignored on Cloud API fallback.  | [optional] 
**message_send_ttl_seconds** | **int** | Template message TTL in seconds (message_send_ttl_seconds). MARKETING via MM Lite: 43200–2592000. AUTHENTICATION: 30–900. UTILITY: 30–43200. AUTH/UTILITY also accept -1 (30-day custom TTL).  | [optional] 

## Example

```python
from one_msg_sdk.models.send_template_request import SendTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendTemplateRequest from a JSON string
send_template_request_instance = SendTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(SendTemplateRequest.to_json())

# convert the object into a dict
send_template_request_dict = send_template_request_instance.to_dict()
# create an instance of SendTemplateRequest from a dict
send_template_request_from_dict = SendTemplateRequest.from_dict(send_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


