# one_msg_sdk.TemplatesApi

All URIs are relative to *https://api.1msg.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_template**](TemplatesApi.md#add_template) | **POST** /addTemplate | Create message template
[**list_templates**](TemplatesApi.md#list_templates) | **GET** /templates | Get templates list
[**remove_template**](TemplatesApi.md#remove_template) | **POST** /removeTemplate | Remove message template
[**send_template**](TemplatesApi.md#send_template) | **POST** /sendTemplate | Send Template Message


# **add_template**
> Dict[str, object] add_template(token, add_template_request=add_template_request)

Create message template

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.add_template_request import AddTemplateRequest
from one_msg_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.1msg.io
# See configuration.py for a list of all supported configuration parameters.
configuration = one_msg_sdk.Configuration(
    host = "https://api.1msg.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with one_msg_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = one_msg_sdk.TemplatesApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    add_template_request = one_msg_sdk.AddTemplateRequest() # AddTemplateRequest |  (optional)

    try:
        # Create message template
        api_response = api_instance.add_template(token, add_template_request=add_template_request)
        print("The response of TemplatesApi->add_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->add_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **add_template_request** | [**AddTemplateRequest**](AddTemplateRequest.md)|  | [optional] 

### Return type

**Dict[str, object]**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Template created |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_templates**
> ListTemplates200Response list_templates(token)

Get templates list

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.list_templates200_response import ListTemplates200Response
from one_msg_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.1msg.io
# See configuration.py for a list of all supported configuration parameters.
configuration = one_msg_sdk.Configuration(
    host = "https://api.1msg.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with one_msg_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = one_msg_sdk.TemplatesApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization

    try:
        # Get templates list
        api_response = api_instance.list_templates(token)
        print("The response of TemplatesApi->list_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->list_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 

### Return type

[**ListTemplates200Response**](ListTemplates200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_template**
> Dict[str, object] remove_template(token, request_body=request_body)

Remove message template

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.1msg.io
# See configuration.py for a list of all supported configuration parameters.
configuration = one_msg_sdk.Configuration(
    host = "https://api.1msg.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with one_msg_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = one_msg_sdk.TemplatesApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    request_body = None # Dict[str, object] |  (optional)

    try:
        # Remove message template
        api_response = api_instance.remove_template(token, request_body=request_body)
        print("The response of TemplatesApi->remove_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->remove_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **request_body** | [**Dict[str, object]**](object.md)|  | [optional] 

### Return type

**Dict[str, object]**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Template removed |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_template**
> Dict[str, object] send_template(token, send_template_request=send_template_request)

Send Template Message

Send a WhatsApp template message (works outside the 24-hour session window).

Supported `params` button `sub_type` values include: `url`, `quick_reply`,
`copy_code` / `coupon_code`, `catalog`, `flow`, `limited_time_offer`, and
**`order_details`** (WhatsApp Payments **India only** — requires an approved
Utility template with an ORDER_DETAILS button).

For India order/invoice payments outside 24h, include a button component:

```json
{
  "type": "button",
  "sub_type": "order_details",
  "index": 0,
  "parameters": [{
    "type": "action",
    "action": { "order_details": { "reference_id": "...", "currency": "INR", "order": {} } }
  }]
}
```

Convenience wrapper with structured fields: `POST /sendOrderDetails`.


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.send_template_request import SendTemplateRequest
from one_msg_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.1msg.io
# See configuration.py for a list of all supported configuration parameters.
configuration = one_msg_sdk.Configuration(
    host = "https://api.1msg.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with one_msg_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = one_msg_sdk.TemplatesApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    send_template_request = {"template":"test_buttons_2","language":{"policy":"deterministic","code":"ru"},"namespace":"41123797_e45e_4f06_a2fa_443b27c6f5ec","params":[],"phone":"{{testPhone}}"} # SendTemplateRequest |  (optional)

    try:
        # Send Template Message
        api_response = api_instance.send_template(token, send_template_request=send_template_request)
        print("The response of TemplatesApi->send_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->send_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **send_template_request** | [**SendTemplateRequest**](SendTemplateRequest.md)|  | [optional] 

### Return type

**Dict[str, object]**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

