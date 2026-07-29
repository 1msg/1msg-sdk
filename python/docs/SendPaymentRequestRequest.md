# SendPaymentRequestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | **int** |  | 
**region** | **str** |  | 
**body** | **str** |  | [optional] 
**interactive** | **Dict[str, object]** |  | [optional] 
**action** | **Dict[str, object]** |  | [optional] 

## Example

```python
from one_msg_sdk.models.send_payment_request_request import SendPaymentRequestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendPaymentRequestRequest from a JSON string
send_payment_request_request_instance = SendPaymentRequestRequest.from_json(json)
# print the JSON string representation of the object
print(SendPaymentRequestRequest.to_json())

# convert the object into a dict
send_payment_request_request_dict = send_payment_request_request_instance.to_dict()
# create an instance of SendPaymentRequestRequest from a dict
send_payment_request_request_from_dict = SendPaymentRequestRequest.from_dict(send_payment_request_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


