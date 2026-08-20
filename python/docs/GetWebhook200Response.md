# GetWebhook200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhook_url** | **str** |  | [optional] 

## Example

```python
from one_msg_sdk.models.get_webhook200_response import GetWebhook200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetWebhook200Response from a JSON string
get_webhook200_response_instance = GetWebhook200Response.from_json(json)
# print the JSON string representation of the object
print(GetWebhook200Response.to_json())

# convert the object into a dict
get_webhook200_response_dict = get_webhook200_response_instance.to_dict()
# create an instance of GetWebhook200Response from a dict
get_webhook200_response_from_dict = GetWebhook200Response.from_dict(get_webhook200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


