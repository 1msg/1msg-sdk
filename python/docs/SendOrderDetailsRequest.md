# SendOrderDetailsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | **int** | Recipient phone (India E.164 digits, no +). Use phone or chatId. | [optional] 
**chat_id** | **str** | Recipient chatId (e.g. phone@c.us). Use phone or chatId. | [optional] 
**template** | **str** | Approved Utility template name that includes an ORDER_DETAILS button | 
**namespace** | **str** | Template namespace from the channel / template list | 
**language** | [**SendOrderDetailsRequestLanguage**](SendOrderDetailsRequestLanguage.md) |  | 
**params** | **List[Dict[str, object]]** | Extra template components (HEADER / BODY / etc.). If an order_details button is missing, the API appends one from order / referenceId / currency / paymentSettings.  | [optional] 
**reference_id** | **str** | Unique order / payment reference id (maps to reference_id) | [optional] 
**currency** | **str** | Currency code for India payments | [optional] 
**payment_settings** | **Dict[str, object]** | Optional payment settings (UPI / payment gateway / payment link). Forwarded as payment_settings on the order_details action.  | [optional] 
**order** | [**SendOrderDetailsRequestOrder**](SendOrderDetailsRequestOrder.md) |  | 

## Example

```python
from one_msg_sdk.models.send_order_details_request import SendOrderDetailsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendOrderDetailsRequest from a JSON string
send_order_details_request_instance = SendOrderDetailsRequest.from_json(json)
# print the JSON string representation of the object
print(SendOrderDetailsRequest.to_json())

# convert the object into a dict
send_order_details_request_dict = send_order_details_request_instance.to_dict()
# create an instance of SendOrderDetailsRequest from a dict
send_order_details_request_from_dict = SendOrderDetailsRequest.from_dict(send_order_details_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


