# InitiateCallResponseResponse

Present when 1msg wraps an upstream error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | [optional] 

## Example

```python
from one_msg_sdk.models.initiate_call_response_response import InitiateCallResponseResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InitiateCallResponseResponse from a JSON string
initiate_call_response_response_instance = InitiateCallResponseResponse.from_json(json)
# print the JSON string representation of the object
print(InitiateCallResponseResponse.to_json())

# convert the object into a dict
initiate_call_response_response_dict = initiate_call_response_response_instance.to_dict()
# create an instance of InitiateCallResponseResponse from a dict
initiate_call_response_response_from_dict = InitiateCallResponseResponse.from_dict(initiate_call_response_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


