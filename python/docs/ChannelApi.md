# one_msg_sdk.ChannelApi

All URIs are relative to *https://api.1msg.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_conversational_automation**](ChannelApi.md#get_conversational_automation) | **GET** /conversationalAutomation | Get conversational automation settings
[**get_status**](ChannelApi.md#get_status) | **GET** /status | Get channel status
[**set_conversational_automation**](ChannelApi.md#set_conversational_automation) | **POST** /conversationalAutomation | Set conversational automation settings


# **get_conversational_automation**
> ConversationalAutomation get_conversational_automation(token)

Get conversational automation settings

Get WhatsApp conversational components for the channel (welcome message,
ice-breaker prompts, and slash commands).

Proxies Meta/360dialog `GET /conversational_automation`.

When `enable_welcome_message` is true and a user opens chat for the first
time, Meta delivers a webhook message with `type: request_welcome`. The
inbound formatter exposes that as `type: "request_welcome"` and
`meta.request_welcome: true` so your webhook can send a custom welcome reply.


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.conversational_automation import ConversationalAutomation
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
    api_instance = one_msg_sdk.ChannelApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization

    try:
        # Get conversational automation settings
        api_response = api_instance.get_conversational_automation(token)
        print("The response of ChannelApi->get_conversational_automation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelApi->get_conversational_automation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 

### Return type

[**ConversationalAutomation**](ConversationalAutomation.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Conversational automation settings |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_status**
> Dict[str, object] get_status(token)

Get channel status

Returns WhatsApp Business API client connection status.

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
    api_instance = one_msg_sdk.ChannelApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization

    try:
        # Get channel status
        api_response = api_instance.get_status(token)
        print("The response of ChannelApi->get_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelApi->get_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 

### Return type

**Dict[str, object]**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Channel status |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_conversational_automation**
> Dict[str, object] set_conversational_automation(token, conversational_automation)

Set conversational automation settings

Update WhatsApp conversational components.

Allowed body fields (others are ignored):
- `enable_welcome_message` (boolean)
- `prompts` (string[], max 4, each ≤ 80 chars)
- `commands` (`{ command_name, command_description }[]`)

Proxies Meta/360dialog `POST /conversational_automation`.


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.conversational_automation import ConversationalAutomation
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
    api_instance = one_msg_sdk.ChannelApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    conversational_automation = {"enable_welcome_message":true,"prompts":["How can I help?"],"commands":[{"command_name":"help","command_description":"Get support options"}]} # ConversationalAutomation | 

    try:
        # Set conversational automation settings
        api_response = api_instance.set_conversational_automation(token, conversational_automation)
        print("The response of ChannelApi->set_conversational_automation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelApi->set_conversational_automation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **conversational_automation** | [**ConversationalAutomation**](ConversationalAutomation.md)|  | 

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
**200** | Updated settings from WABA, or legacy response.error wrapper on upstream failure.  |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

