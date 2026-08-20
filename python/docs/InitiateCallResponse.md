# InitiateCallResponse

Successful call action response from upstream, returned as-is. On empty upstream body, 1msg may return `{ \"result\": \"success\" }`. Upstream failures are often wrapped as HTTP 200 `{ \"response\": { \"error\": \"...\" } }`. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messaging_product** | **str** |  | [optional] 
**success** | **bool** |  | [optional] 
**calls** | [**List[InitiateCallResponseCallsInner]**](InitiateCallResponseCallsInner.md) | Present on outbound &#x60;connect&#x60; — contains the new call id | [optional] 
**result** | **str** | Legacy success marker when upstream returns an empty body | [optional] 
**response** | [**InitiateCallResponseResponse**](InitiateCallResponseResponse.md) |  | [optional] 

## Example

```python
from one_msg_sdk.models.initiate_call_response import InitiateCallResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InitiateCallResponse from a JSON string
initiate_call_response_instance = InitiateCallResponse.from_json(json)
# print the JSON string representation of the object
print(InitiateCallResponse.to_json())

# convert the object into a dict
initiate_call_response_dict = initiate_call_response_instance.to_dict()
# create an instance of InitiateCallResponse from a dict
initiate_call_response_from_dict = InitiateCallResponse.from_dict(initiate_call_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


