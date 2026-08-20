# SendFileRequest

Send file by URL/base64 or by mediaId

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | File source (required unless mediaId is set): - HTTP/HTTPS URL - Base64 data URI  | [optional] 
**filename** | **str** | File name with extension (required with body, not with mediaId) | [optional] 
**media_id** | **str** | WABA media id from uploadMedia (alternative to body) | [optional] 
**media_type** | **str** | Required when using mediaId | [optional] 
**voice** | **bool** | Native WhatsApp voice note (audio/ogg only) | [optional] 
**caption** | **str** |  | [optional] 
**quoted_msg_id** | **str** |  | [optional] 
**chat_id** | **str** |  | [optional] 
**phone** | **int** |  | [optional] 

## Example

```python
from one_msg_sdk.models.send_file_request import SendFileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendFileRequest from a JSON string
send_file_request_instance = SendFileRequest.from_json(json)
# print the JSON string representation of the object
print(SendFileRequest.to_json())

# convert the object into a dict
send_file_request_dict = send_file_request_instance.to_dict()
# create an instance of SendFileRequest from a dict
send_file_request_from_dict = SendFileRequest.from_dict(send_file_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


