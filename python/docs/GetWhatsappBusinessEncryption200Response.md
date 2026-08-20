# GetWhatsappBusinessEncryption200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_public_key** | **str** | Stored 2048-bit RSA public key (PEM) | [optional] 
**business_public_key_signature_status** | **str** |  | [optional] 
**data** | **List[Dict[str, object]]** |  | [optional] 

## Example

```python
from one_msg_sdk.models.get_whatsapp_business_encryption200_response import GetWhatsappBusinessEncryption200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetWhatsappBusinessEncryption200Response from a JSON string
get_whatsapp_business_encryption200_response_instance = GetWhatsappBusinessEncryption200Response.from_json(json)
# print the JSON string representation of the object
print(GetWhatsappBusinessEncryption200Response.to_json())

# convert the object into a dict
get_whatsapp_business_encryption200_response_dict = get_whatsapp_business_encryption200_response_instance.to_dict()
# create an instance of GetWhatsappBusinessEncryption200Response from a dict
get_whatsapp_business_encryption200_response_from_dict = GetWhatsappBusinessEncryption200Response.from_dict(get_whatsapp_business_encryption200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


