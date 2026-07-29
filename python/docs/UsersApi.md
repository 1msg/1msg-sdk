# one_msg_sdk.UsersApi

All URIs are relative to *https://api.1msg.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**block_user**](UsersApi.md#block_user) | **POST** /blockUser | Block WhatsApp user
[**list_blocked_users**](UsersApi.md#list_blocked_users) | **GET** /blockedUsers | List blocked WhatsApp users
[**unblock_user**](UsersApi.md#unblock_user) | **POST** /unblockUser | Unblock WhatsApp user


# **block_user**
> SuccessResponse block_user(token, block_user_request)

Block WhatsApp user

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.block_user_request import BlockUserRequest
from one_msg_sdk.models.success_response import SuccessResponse
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
    api_instance = one_msg_sdk.UsersApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    block_user_request = one_msg_sdk.BlockUserRequest() # BlockUserRequest | 

    try:
        # Block WhatsApp user
        api_response = api_instance.block_user(token, block_user_request)
        print("The response of UsersApi->block_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->block_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **block_user_request** | [**BlockUserRequest**](BlockUserRequest.md)|  | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Operation successful |  -  |
**400** | Invalid request parameters |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_blocked_users**
> ListBlockedUsers200Response list_blocked_users(token)

List blocked WhatsApp users

Returns users currently blocked on this WhatsApp channel (WABA `GET /block_users`).
Same channel token auth as `blockUser` / `unblockUser`.


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.list_blocked_users200_response import ListBlockedUsers200Response
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
    api_instance = one_msg_sdk.UsersApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization

    try:
        # List blocked WhatsApp users
        api_response = api_instance.list_blocked_users(token)
        print("The response of UsersApi->list_blocked_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->list_blocked_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 

### Return type

[**ListBlockedUsers200Response**](ListBlockedUsers200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Blocked users list |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unblock_user**
> SuccessResponse unblock_user(token, block_user_request)

Unblock WhatsApp user

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.block_user_request import BlockUserRequest
from one_msg_sdk.models.success_response import SuccessResponse
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
    api_instance = one_msg_sdk.UsersApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    block_user_request = one_msg_sdk.BlockUserRequest() # BlockUserRequest | 

    try:
        # Unblock WhatsApp user
        api_response = api_instance.unblock_user(token, block_user_request)
        print("The response of UsersApi->unblock_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->unblock_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **block_user_request** | [**BlockUserRequest**](BlockUserRequest.md)|  | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Operation successful |  -  |
**400** | Invalid request parameters |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

