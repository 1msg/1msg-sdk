# one_msg_sdk.CatalogApi

All URIs are relative to *https://api.1msg.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_commerce**](CatalogApi.md#create_commerce) | **POST** /commerce | Set Commerce Settings
[**get_commerce**](CatalogApi.md#get_commerce) | **GET** /commerce | Get Commerce Settings


# **create_commerce**
> CreateCommerce200Response create_commerce(token, create_commerce_request)

Set Commerce Settings

Update catalog/cart commerce settings via the `params` object.

- `params.is_catalog_visible` — show catalog storefront icon (`true`) or hide it (`false`).
- `params.is_cart_enabled` — enable cart (`true`) or disable it (`false`).

Blocked when the channel subscription limit is exceeded.
Requires a commerce-capable channel (Cloud Functions `/commerceWAV2`).


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.create_commerce200_response import CreateCommerce200Response
from one_msg_sdk.models.create_commerce_request import CreateCommerceRequest
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
    api_instance = one_msg_sdk.CatalogApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    create_commerce_request = {"params":{"is_cart_enabled":true,"is_catalog_visible":true}} # CreateCommerceRequest | 

    try:
        # Set Commerce Settings
        api_response = api_instance.create_commerce(token, create_commerce_request)
        print("The response of CatalogApi->create_commerce:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->create_commerce: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **create_commerce_request** | [**CreateCommerceRequest**](CreateCommerceRequest.md)|  | 

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
**200** | Commerce updated |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_commerce**
> List[GetCommerce200ResponseInner] get_commerce(token)

Get Commerce Settings

Returns catalog/cart commerce settings for the channel.

- `is_catalog_visible` — show catalog storefront icon (`true`) or hide it (`false`).
- `is_cart_enabled` — enable cart (`true`) or disable it (`false`).


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.get_commerce200_response_inner import GetCommerce200ResponseInner
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
    api_instance = one_msg_sdk.CatalogApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization

    try:
        # Get Commerce Settings
        api_response = api_instance.get_commerce(token)
        print("The response of CatalogApi->get_commerce:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->get_commerce: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 

### Return type

[**List[GetCommerce200ResponseInner]**](GetCommerce200ResponseInner.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Commerce settings |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

