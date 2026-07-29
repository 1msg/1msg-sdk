# SendLocationRequestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | **str** |  | [optional] 
**body** | **str** |  | [optional] 

## Example

```python
from one_msg_sdk.models.send_location_request_request import SendLocationRequestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendLocationRequestRequest from a JSON string
send_location_request_request_instance = SendLocationRequestRequest.from_json(json)
# print the JSON string representation of the object
print(SendLocationRequestRequest.to_json())

# convert the object into a dict
send_location_request_request_dict = send_location_request_request_instance.to_dict()
# create an instance of SendLocationRequestRequest from a dict
send_location_request_request_from_dict = SendLocationRequestRequest.from_dict(send_location_request_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


