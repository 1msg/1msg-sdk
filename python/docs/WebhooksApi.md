# one_msg_sdk.WebhooksApi

All URIs are relative to *https://api.1msg.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_webhook**](WebhooksApi.md#get_webhook) | **GET** /webhook | Get webhook URL
[**set_webhook**](WebhooksApi.md#set_webhook) | **POST** /webhook | Set webhook URL


# **get_webhook**
> GetWebhook200Response get_webhook(token)

Get webhook URL

Returns the configured client webhook URL for this channel.

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.get_webhook200_response import GetWebhook200Response
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
    api_instance = one_msg_sdk.WebhooksApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization

    try:
        # Get webhook URL
        api_response = api_instance.get_webhook(token)
        print("The response of WebhooksApi->get_webhook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->get_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 

### Return type

[**GetWebhook200Response**](GetWebhook200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current webhook URL |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_webhook**
> Dict[str, object] set_webhook(token, get_webhook200_response=get_webhook200_response)

Set webhook URL

Configure the client webhook URL for inbound events.

WhatsApp **Calling** events (`field=calls`) are forwarded as passthrough
payloads with `type: "calls"` and `instanceId` (connect / status / terminate).
Call permission replies arrive on the normal messages path
(`call_permission_reply`). Details: **Calling** tag.


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.get_webhook200_response import GetWebhook200Response
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
    api_instance = one_msg_sdk.WebhooksApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    get_webhook200_response = one_msg_sdk.GetWebhook200Response() # GetWebhook200Response |  (optional)

    try:
        # Set webhook URL
        api_response = api_instance.set_webhook(token, get_webhook200_response=get_webhook200_response)
        print("The response of WebhooksApi->set_webhook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->set_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **get_webhook200_response** | [**GetWebhook200Response**](GetWebhook200Response.md)|  | [optional] 

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
**200** | Webhook configured |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

