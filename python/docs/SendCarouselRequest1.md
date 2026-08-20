# SendCarouselRequest1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** |  | [optional] 
**params** | **List[object]** |  | 
**quoted_msg_id** | **str** |  | [optional] 
**chat_id** | **str** |  | [optional] 
**phone** | **int** |  | [optional] 

## Example

```python
from one_msg_sdk.models.send_carousel_request1 import SendCarouselRequest1

# TODO update the JSON string below
json = "{}"
# create an instance of SendCarouselRequest1 from a JSON string
send_carousel_request1_instance = SendCarouselRequest1.from_json(json)
# print the JSON string representation of the object
print(SendCarouselRequest1.to_json())

# convert the object into a dict
send_carousel_request1_dict = send_carousel_request1_instance.to_dict()
# create an instance of SendCarouselRequest1 from a dict
send_carousel_request1_from_dict = SendCarouselRequest1.from_dict(send_carousel_request1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


