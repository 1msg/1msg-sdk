# one_msg_sdk.ProfileApi

All URIs are relative to *https://api.1msg.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_me**](ProfileApi.md#get_me) | **GET** /me | Get Profile Info
[**update_me**](ProfileApi.md#update_me) | **POST** /me | Update profile info


# **get_me**
> ProfileInfo get_me(token)

Get Profile Info

Get WhatsApp Business Account profile information

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.profile_info import ProfileInfo
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
    api_instance = one_msg_sdk.ProfileApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization

    try:
        # Get Profile Info
        api_response = api_instance.get_me(token)
        print("The response of ProfileApi->get_me:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfileApi->get_me: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 

### Return type

[**ProfileInfo**](ProfileInfo.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Profile information |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_me**
> Dict[str, object] update_me(token, update_me_request=update_me_request)

Update profile info

Update WhatsApp Business Account profile fields. At least one of
about, description, email, photo, address, vertical, websites is required.
Blocked when the channel subscription limit is exceeded.


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.update_me_request import UpdateMeRequest
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
    api_instance = one_msg_sdk.ProfileApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    update_me_request = one_msg_sdk.UpdateMeRequest() # UpdateMeRequest |  (optional)

    try:
        # Update profile info
        api_response = api_instance.update_me(token, update_me_request=update_me_request)
        print("The response of ProfileApi->update_me:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfileApi->update_me: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **update_me_request** | [**UpdateMeRequest**](UpdateMeRequest.md)|  | [optional] 

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
**200** | Profile updated |  -  |
**401** | Invalid or missing authentication token |  -  |
**422** | Wrong request (no updatable fields) |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

