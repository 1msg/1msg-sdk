# DeleteMediaLegacyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**media_id** | **str** | Numeric WABA media id | 

## Example

```python
from one_msg_sdk.models.delete_media_legacy_request import DeleteMediaLegacyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteMediaLegacyRequest from a JSON string
delete_media_legacy_request_instance = DeleteMediaLegacyRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteMediaLegacyRequest.to_json())

# convert the object into a dict
delete_media_legacy_request_dict = delete_media_legacy_request_instance.to_dict()
# create an instance of DeleteMediaLegacyRequest from a dict
delete_media_legacy_request_from_dict = DeleteMediaLegacyRequest.from_dict(delete_media_legacy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


