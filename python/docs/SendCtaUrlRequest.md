# SendCtaUrlRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | **int** |  | [optional] 
**chat_id** | **str** |  | [optional] 
**body** | **str** |  | 
**display_text** | **str** | Button label | 
**url** | **str** |  | 
**header** | **Dict[str, object]** |  | [optional] 
**footer** | **str** |  | [optional] 
**quoted_msg_id** | **str** |  | [optional] 

## Example

```python
from one_msg_sdk.models.send_cta_url_request import SendCtaUrlRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendCtaUrlRequest from a JSON string
send_cta_url_request_instance = SendCtaUrlRequest.from_json(json)
# print the JSON string representation of the object
print(SendCtaUrlRequest.to_json())

# convert the object into a dict
send_cta_url_request_dict = send_cta_url_request_instance.to_dict()
# create an instance of SendCtaUrlRequest from a dict
send_cta_url_request_from_dict = SendCtaUrlRequest.from_dict(send_cta_url_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


