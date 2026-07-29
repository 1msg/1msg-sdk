# one_msg_sdk.FlowsApi

All URIs are relative to *https://api.1msg.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_flows**](FlowsApi.md#create_flows) | **POST** /flows | Create Flow
[**create_flows_flow_id_deprecate**](FlowsApi.md#create_flows_flow_id_deprecate) | **POST** /flows/{flowId}/deprecate | Deprecate Flow
[**create_flows_flow_id_publish**](FlowsApi.md#create_flows_flow_id_publish) | **POST** /flows/{flowId}/publish | Publish Flow
[**delete_flows_flow_id**](FlowsApi.md#delete_flows_flow_id) | **DELETE** /flows/{flowId} | Delete Flow
[**get_flows_flow_id**](FlowsApi.md#get_flows_flow_id) | **GET** /flows/{flowId} | Get Flow Details
[**get_flows_flow_id_preview**](FlowsApi.md#get_flows_flow_id_preview) | **GET** /flows/{flowId}/preview | Preview Flow
[**get_whatsapp_business_encryption**](FlowsApi.md#get_whatsapp_business_encryption) | **GET** /whatsapp_business_encryption | Get business encryption public key
[**list_flows**](FlowsApi.md#list_flows) | **GET** /flows | List Flows
[**patch_flows_flow_id_assets**](FlowsApi.md#patch_flows_flow_id_assets) | **PATCH** /flows/{flowId}/assets | Update Flow Structure
[**patch_flows_flow_id_metadata**](FlowsApi.md#patch_flows_flow_id_metadata) | **PATCH** /flows/{flowId}/metadata | Update Flow Metadata
[**set_whatsapp_business_encryption**](FlowsApi.md#set_whatsapp_business_encryption) | **POST** /whatsapp_business_encryption | Set business encryption public key


# **create_flows**
> CreateGroups200Response create_flows(token, waba_account_id=waba_account_id)

Create Flow

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.create_groups200_response import CreateGroups200Response
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
    api_instance = one_msg_sdk.FlowsApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    waba_account_id = '{{wabaAccountId}}' # str |  (optional)

    try:
        # Create Flow
        api_response = api_instance.create_flows(token, waba_account_id=waba_account_id)
        print("The response of FlowsApi->create_flows:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FlowsApi->create_flows: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **waba_account_id** | **str**|  | [optional] 

### Return type

[**CreateGroups200Response**](CreateGroups200Response.md)

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

# **create_flows_flow_id_deprecate**
> Dict[str, object] create_flows_flow_id_deprecate(flow_id, token, waba_account_id=waba_account_id)

Deprecate Flow

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
    api_instance = one_msg_sdk.FlowsApi(api_client)
    flow_id = 'flow_id_example' # str | Flow ID
    token = 'token_example' # str | JWT token or API key for authorization
    waba_account_id = '{{wabaAccountId}}' # str |  (optional)

    try:
        # Deprecate Flow
        api_response = api_instance.create_flows_flow_id_deprecate(flow_id, token, waba_account_id=waba_account_id)
        print("The response of FlowsApi->create_flows_flow_id_deprecate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FlowsApi->create_flows_flow_id_deprecate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flow_id** | **str**| Flow ID | 
 **token** | **str**| JWT token or API key for authorization | 
 **waba_account_id** | **str**|  | [optional] 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_flows_flow_id_publish**
> Dict[str, object] create_flows_flow_id_publish(flow_id, token, waba_account_id=waba_account_id)

Publish Flow

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
    api_instance = one_msg_sdk.FlowsApi(api_client)
    flow_id = 'flow_id_example' # str | Flow ID
    token = 'token_example' # str | JWT token or API key for authorization
    waba_account_id = '{{wabaAccountId}}' # str |  (optional)

    try:
        # Publish Flow
        api_response = api_instance.create_flows_flow_id_publish(flow_id, token, waba_account_id=waba_account_id)
        print("The response of FlowsApi->create_flows_flow_id_publish:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FlowsApi->create_flows_flow_id_publish: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flow_id** | **str**| Flow ID | 
 **token** | **str**| JWT token or API key for authorization | 
 **waba_account_id** | **str**|  | [optional] 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_flows_flow_id**
> DeleteFlowsFlowId200Response delete_flows_flow_id(flow_id, token, waba_account_id=waba_account_id)

Delete Flow

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.delete_flows_flow_id200_response import DeleteFlowsFlowId200Response
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
    api_instance = one_msg_sdk.FlowsApi(api_client)
    flow_id = 'flow_id_example' # str | Flow ID
    token = 'token_example' # str | JWT token or API key for authorization
    waba_account_id = '{{wabaAccountId}}' # str |  (optional)

    try:
        # Delete Flow
        api_response = api_instance.delete_flows_flow_id(flow_id, token, waba_account_id=waba_account_id)
        print("The response of FlowsApi->delete_flows_flow_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FlowsApi->delete_flows_flow_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flow_id** | **str**| Flow ID | 
 **token** | **str**| JWT token or API key for authorization | 
 **waba_account_id** | **str**|  | [optional] 

### Return type

[**DeleteFlowsFlowId200Response**](DeleteFlowsFlowId200Response.md)

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

# **get_flows_flow_id**
> CreateGroups200Response get_flows_flow_id(flow_id, token, waba_account_id=waba_account_id)

Get Flow Details

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.create_groups200_response import CreateGroups200Response
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
    api_instance = one_msg_sdk.FlowsApi(api_client)
    flow_id = 'flow_id_example' # str | Flow ID
    token = 'token_example' # str | JWT token or API key for authorization
    waba_account_id = '{{wabaAccountId}}' # str |  (optional)

    try:
        # Get Flow Details
        api_response = api_instance.get_flows_flow_id(flow_id, token, waba_account_id=waba_account_id)
        print("The response of FlowsApi->get_flows_flow_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FlowsApi->get_flows_flow_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flow_id** | **str**| Flow ID | 
 **token** | **str**| JWT token or API key for authorization | 
 **waba_account_id** | **str**|  | [optional] 

### Return type

[**CreateGroups200Response**](CreateGroups200Response.md)

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

# **get_flows_flow_id_preview**
> Dict[str, object] get_flows_flow_id_preview(flow_id, token, waba_account_id=waba_account_id)

Preview Flow

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
    api_instance = one_msg_sdk.FlowsApi(api_client)
    flow_id = 'flow_id_example' # str | Flow ID
    token = 'token_example' # str | JWT token or API key for authorization
    waba_account_id = '{{wabaAccountId}}' # str |  (optional)

    try:
        # Preview Flow
        api_response = api_instance.get_flows_flow_id_preview(flow_id, token, waba_account_id=waba_account_id)
        print("The response of FlowsApi->get_flows_flow_id_preview:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FlowsApi->get_flows_flow_id_preview: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flow_id** | **str**| Flow ID | 
 **token** | **str**| JWT token or API key for authorization | 
 **waba_account_id** | **str**|  | [optional] 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_whatsapp_business_encryption**
> GetWhatsappBusinessEncryption200Response get_whatsapp_business_encryption(token)

Get business encryption public key

Retrieve the WhatsApp business public key and signature status for this channel's
phone number. Required before publishing or sending Flows that use data encryption.


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.get_whatsapp_business_encryption200_response import GetWhatsappBusinessEncryption200Response
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
    api_instance = one_msg_sdk.FlowsApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization

    try:
        # Get business encryption public key
        api_response = api_instance.get_whatsapp_business_encryption(token)
        print("The response of FlowsApi->get_whatsapp_business_encryption:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FlowsApi->get_whatsapp_business_encryption: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 

### Return type

[**GetWhatsappBusinessEncryption200Response**](GetWhatsappBusinessEncryption200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Business encryption key status |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_flows**
> ListFlows200Response list_flows(token, waba_account_id=waba_account_id)

List Flows

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.list_flows200_response import ListFlows200Response
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
    api_instance = one_msg_sdk.FlowsApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    waba_account_id = '{{wabaAccountId}}' # str |  (optional)

    try:
        # List Flows
        api_response = api_instance.list_flows(token, waba_account_id=waba_account_id)
        print("The response of FlowsApi->list_flows:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FlowsApi->list_flows: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **waba_account_id** | **str**|  | [optional] 

### Return type

[**ListFlows200Response**](ListFlows200Response.md)

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

# **patch_flows_flow_id_assets**
> PatchFlowsFlowIdAssets200Response patch_flows_flow_id_assets(flow_id, token, waba_account_id=waba_account_id)

Update Flow Structure

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.patch_flows_flow_id_assets200_response import PatchFlowsFlowIdAssets200Response
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
    api_instance = one_msg_sdk.FlowsApi(api_client)
    flow_id = 'flow_id_example' # str | Flow ID
    token = 'token_example' # str | JWT token or API key for authorization
    waba_account_id = '{{wabaAccountId}}' # str |  (optional)

    try:
        # Update Flow Structure
        api_response = api_instance.patch_flows_flow_id_assets(flow_id, token, waba_account_id=waba_account_id)
        print("The response of FlowsApi->patch_flows_flow_id_assets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FlowsApi->patch_flows_flow_id_assets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flow_id** | **str**| Flow ID | 
 **token** | **str**| JWT token or API key for authorization | 
 **waba_account_id** | **str**|  | [optional] 

### Return type

[**PatchFlowsFlowIdAssets200Response**](PatchFlowsFlowIdAssets200Response.md)

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

# **patch_flows_flow_id_metadata**
> Dict[str, object] patch_flows_flow_id_metadata(flow_id, token, waba_account_id=waba_account_id)

Update Flow Metadata

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
    api_instance = one_msg_sdk.FlowsApi(api_client)
    flow_id = 'flow_id_example' # str | Flow ID
    token = 'token_example' # str | JWT token or API key for authorization
    waba_account_id = '{{wabaAccountId}}' # str |  (optional)

    try:
        # Update Flow Metadata
        api_response = api_instance.patch_flows_flow_id_metadata(flow_id, token, waba_account_id=waba_account_id)
        print("The response of FlowsApi->patch_flows_flow_id_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FlowsApi->patch_flows_flow_id_metadata: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flow_id** | **str**| Flow ID | 
 **token** | **str**| JWT token or API key for authorization | 
 **waba_account_id** | **str**|  | [optional] 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_whatsapp_business_encryption**
> CreateCommerce200Response set_whatsapp_business_encryption(token, set_whatsapp_business_encryption_request)

Set business encryption public key

Upload and sign a 2048-bit RSA business public key (PEM) for this channel's phone number.
Meta requires a signed key before Flow publish/send. Only one active key per number;
a new upload replaces the previous key.


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.create_commerce200_response import CreateCommerce200Response
from one_msg_sdk.models.set_whatsapp_business_encryption_request import SetWhatsappBusinessEncryptionRequest
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
    api_instance = one_msg_sdk.FlowsApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    set_whatsapp_business_encryption_request = one_msg_sdk.SetWhatsappBusinessEncryptionRequest() # SetWhatsappBusinessEncryptionRequest | 

    try:
        # Set business encryption public key
        api_response = api_instance.set_whatsapp_business_encryption(token, set_whatsapp_business_encryption_request)
        print("The response of FlowsApi->set_whatsapp_business_encryption:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FlowsApi->set_whatsapp_business_encryption: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **set_whatsapp_business_encryption_request** | [**SetWhatsappBusinessEncryptionRequest**](SetWhatsappBusinessEncryptionRequest.md)|  | 

### Return type

[**CreateCommerce200Response**](CreateCommerce200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Public key uploaded and signed |  -  |
**400** | Missing or invalid PEM key |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

