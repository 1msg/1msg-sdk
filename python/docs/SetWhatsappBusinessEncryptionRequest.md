# SetWhatsappBusinessEncryptionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_public_key** | **str** | 2048-bit RSA public key in PEM format | 

## Example

```python
from one_msg_sdk.models.set_whatsapp_business_encryption_request import SetWhatsappBusinessEncryptionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetWhatsappBusinessEncryptionRequest from a JSON string
set_whatsapp_business_encryption_request_instance = SetWhatsappBusinessEncryptionRequest.from_json(json)
# print the JSON string representation of the object
print(SetWhatsappBusinessEncryptionRequest.to_json())

# convert the object into a dict
set_whatsapp_business_encryption_request_dict = set_whatsapp_business_encryption_request_instance.to_dict()
# create an instance of SetWhatsappBusinessEncryptionRequest from a dict
set_whatsapp_business_encryption_request_from_dict = SetWhatsappBusinessEncryptionRequest.from_dict(set_whatsapp_business_encryption_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


