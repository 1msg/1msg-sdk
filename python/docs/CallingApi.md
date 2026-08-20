# one_msg_sdk.CallingApi

All URIs are relative to *https://api.1msg.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_calling_settings**](CallingApi.md#get_calling_settings) | **GET** /callingSettings | Get calling settings
[**initiate_call**](CallingApi.md#initiate_call) | **POST** /initiateCall | Call action (connect / pre_accept / accept / reject / terminate)
[**update_calling_settings**](CallingApi.md#update_calling_settings) | **POST** /callingSettings | Update calling settings


# **get_calling_settings**
> CallingSettings get_calling_settings(token)

Get calling settings

Return WhatsApp Calling API settings for this channel (beta).

Proxies upstream `GET /calling/settings`.

**Prerequisites**
- Number must be eligible for Meta Calling (Cloud API; not COEX)
- Trial / `subscriptionBlocked` channels receive **403** plain text
- You need your own WebRTC or SIP stack; 1msg is a **signaling proxy** only
  and does **not** store call history or recordings

See the **Calling** tag overview for inbound/outbound flows and webhooks.


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.calling_settings import CallingSettings
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
    api_instance = one_msg_sdk.CallingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization

    try:
        # Get calling settings
        api_response = api_instance.get_calling_settings(token)
        print("The response of CallingApi->get_calling_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallingApi->get_calling_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 

### Return type

[**CallingSettings**](CallingSettings.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Calling settings (and possibly other Cloud API settings Meta returns) |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initiate_call**
> InitiateCallResponse initiate_call(token, initiate_call_request)

Call action (connect / pre_accept / accept / reject / terminate)

Perform a WhatsApp Calling action (beta).

Proxies upstream `POST /calling/calls`. Despite the historical path
name `/initiateCall`, this endpoint handles **all** call actions:

| action | Use | Required |
|--------|-----|----------|
| `connect` | Outbound business → user | `to` + `session` (`sdp_type: offer`) |
| `pre_accept` | Inbound (optional, reduces audio clipping) | `call_id` + `session` (`sdp_type: answer`) |
| `accept` | Inbound answer | `call_id` + `session` (`sdp_type: answer`) |
| `reject` | Decline inbound | `call_id` |
| `terminate` | Hang up | `call_id` |

**SDP / media (critical)**
- `accept` / `pre_accept` require a **WebRTC-generated SDP answer**.
- Do **not** send Meta's offer SDP back as the answer.
- Postman (or curl) alone **cannot** establish real media — you need a
  WebRTC or SIP stack. 1msg only proxies signaling.

Answer within ~**30–60 seconds** of an inbound `connect` webhook or Meta
terminates as unanswered. Common Meta errors include Calling not enabled
(`138000`), no permission (`138006`), SDP validation failures.

**Outbound** requires a prior Call Permission Request (CPR) acceptance.
See the **Calling** tag overview for the full outbound flow and CPR limits.

Trial / `subscriptionBlocked` → **403** plain text.
Upstream failures often return HTTP 200 with `{ "response": { "error": "..." } }`.


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.initiate_call_request import InitiateCallRequest
from one_msg_sdk.models.initiate_call_response import InitiateCallResponse
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
    api_instance = one_msg_sdk.CallingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    initiate_call_request = {"messaging_product":"whatsapp","to":"12185552828","action":"connect","biz_opaque_callback_data":"order-123","session":{"sdp_type":"offer","sdp":"[REPLACE_WITH_WEBRTC_SDP]"}} # InitiateCallRequest | 

    try:
        # Call action (connect / pre_accept / accept / reject / terminate)
        api_response = api_instance.initiate_call(token, initiate_call_request)
        print("The response of CallingApi->initiate_call:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallingApi->initiate_call: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **initiate_call_request** | [**InitiateCallRequest**](InitiateCallRequest.md)|  | 

### Return type

[**InitiateCallResponse**](InitiateCallResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Call action result from upstream, or legacy error wrapper |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_calling_settings**
> UpdateCallingSettings200Response update_calling_settings(token, calling_settings)

Update calling settings

Enable, disable, or update WhatsApp Calling settings (beta).

Proxies upstream `POST /calling/settings`.
Body is forwarded as-is (1msg does not validate fields).

**Common fields under `calling`**
- `status` (`ENABLED` | `DISABLED`) — required to turn calling on/off
- `call_icon_visibility` (`DEFAULT` | `DISABLE_ALL`) — optional
- `callback_permission_status` (`ENABLED` | `DISABLED`) — optional;
  when enabled, inbound user calls grant callback permission
- `call_hours` — optional hours / timezone object
- `sip` — optional SIP trunk; when SIP is ENABLED, Graph call actions and
  calling webhooks are not used
- `srtp_key_exchange_protocol` (`DTLS` | `SDES`) — SDES only with SIP
- `video.status` — optional

Meta may accept only one feature group per request — prefer focused updates
(e.g. enable status first, then SIP).

Trial / `subscriptionBlocked` → **403** plain text.


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.calling_settings import CallingSettings
from one_msg_sdk.models.update_calling_settings200_response import UpdateCallingSettings200Response
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
    api_instance = one_msg_sdk.CallingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    calling_settings = {"calling":{"status":"ENABLED","call_icon_visibility":"DEFAULT","callback_permission_status":"ENABLED"}} # CallingSettings | 

    try:
        # Update calling settings
        api_response = api_instance.update_calling_settings(token, calling_settings)
        print("The response of CallingApi->update_calling_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallingApi->update_calling_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **calling_settings** | [**CallingSettings**](CallingSettings.md)|  | 

### Return type

[**UpdateCallingSettings200Response**](UpdateCallingSettings200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Usually &#x60;{ \&quot;success\&quot;: true }&#x60; from upstream, or legacy &#x60;{ \&quot;result\&quot;: \&quot;success\&quot; }&#x60; / &#x60;{ \&quot;response\&quot;: { \&quot;error\&quot;: \&quot;...\&quot; } }&#x60;.  |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

