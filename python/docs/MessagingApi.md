# one_msg_sdk.MessagingApi

All URIs are relative to *https://api.1msg.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_read_message**](MessagingApi.md#create_read_message) | **POST** /readMessage | Mark message as read
[**create_upload_media**](MessagingApi.md#create_upload_media) | **POST** /uploadMedia | Upload media
[**delete_media**](MessagingApi.md#delete_media) | **DELETE** /media/{mediaId} | Delete media from WABA storage
[**delete_media_legacy**](MessagingApi.md#delete_media_legacy) | **POST** /deleteMedia | Delete media from WABA storage (deprecated alias)
[**get_mm_lite_status**](MessagingApi.md#get_mm_lite_status) | **GET** /mmLiteStatus | Get MM Lite availability and status
[**list_messages**](MessagingApi.md#list_messages) | **GET** /messages | Get messages list
[**retrieve_media**](MessagingApi.md#retrieve_media) | **GET** /retrieveMedia | Retrieve uploaded media metadata
[**send_address_message**](MessagingApi.md#send_address_message) | **POST** /sendAddressMessage | Send address request message
[**send_button**](MessagingApi.md#send_button) | **POST** /sendButton | Send Reply Buttons Message
[**send_carousel**](MessagingApi.md#send_carousel) | **POST** /sendCarousel | Send Carousel
[**send_contact**](MessagingApi.md#send_contact) | **POST** /sendContact | Send a Contact
[**send_cta_url**](MessagingApi.md#send_cta_url) | **POST** /sendCtaUrl | Send CTA URL interactive message
[**send_file**](MessagingApi.md#send_file) | **POST** /sendFile | Send a File
[**send_flow**](MessagingApi.md#send_flow) | **POST** /sendFlow | Send WhatsApp Flow Message
[**send_list**](MessagingApi.md#send_list) | **POST** /sendList | Send List Message
[**send_location**](MessagingApi.md#send_location) | **POST** /sendLocation | Send a Location
[**send_location_request**](MessagingApi.md#send_location_request) | **POST** /sendLocationRequest | Send Location Request Message
[**send_message**](MessagingApi.md#send_message) | **POST** /sendMessage | Send a Message
[**send_order_details**](MessagingApi.md#send_order_details) | **POST** /sendOrderDetails | Send order details (India payments template)
[**send_payment_request**](MessagingApi.md#send_payment_request) | **POST** /sendPaymentRequest | Send payment request (regional)
[**send_product**](MessagingApi.md#send_product) | **POST** /sendProduct | Send a Product
[**send_reaction**](MessagingApi.md#send_reaction) | **POST** /sendReaction | Send Reaction
[**send_sticker**](MessagingApi.md#send_sticker) | **POST** /sendSticker | Send sticker message


# **create_read_message**
> CreateReadMessage200Response create_read_message(token, message_id=message_id, msg_id=msg_id, typing_indicator=typing_indicator)

Mark message as read

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.create_read_message200_response import CreateReadMessage200Response
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    message_id = 'message_id_example' # str |  (optional)
    msg_id = 'msg_id_example' # str |  (optional)
    typing_indicator = False # bool | Show WhatsApp typing indicator (max 25s or until reply) (optional) (default to False)

    try:
        # Mark message as read
        api_response = api_instance.create_read_message(token, message_id=message_id, msg_id=msg_id, typing_indicator=typing_indicator)
        print("The response of MessagingApi->create_read_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->create_read_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **message_id** | **str**|  | [optional] 
 **msg_id** | **str**|  | [optional] 
 **typing_indicator** | **bool**| Show WhatsApp typing indicator (max 25s or until reply) | [optional] [default to False]

### Return type

[**CreateReadMessage200Response**](CreateReadMessage200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Server response example |  -  |
**401** | Invalid token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_upload_media**
> create_upload_media(token, request_body=request_body)

Upload media

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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    request_body = None # Dict[str, object] |  (optional)

    try:
        # Upload media
        api_instance.create_upload_media(token, request_body=request_body)
    except Exception as e:
        print("Exception when calling MessagingApi->create_upload_media: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **request_body** | [**Dict[str, object]**](object.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_media**
> SuccessResponse delete_media(token, media_id)

Delete media from WABA storage

Delete previously uploaded media by numeric `mediaId` (from `/uploadMedia`).

This is the canonical deletion endpoint and uses the REST `DELETE` verb on the
media resource path. The older `POST /deleteMedia` is a deprecated alias.


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    media_id = 'media_id_example' # str | Numeric WABA media id

    try:
        # Delete media from WABA storage
        api_response = api_instance.delete_media(token, media_id)
        print("The response of MessagingApi->delete_media:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->delete_media: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **media_id** | **str**| Numeric WABA media id | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Operation successful |  -  |
**400** | Invalid request parameters |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_media_legacy**
> SuccessResponse delete_media_legacy(token, delete_media_legacy_request)

Delete media from WABA storage (deprecated alias)

**Deprecated.** Use `DELETE /media/{mediaId}` instead.

This POST alias is kept for backward compatibility with earlier integrations.
New integrations should call `DELETE /media/{mediaId}`: 1msg follows REST
conventions for resource deletion going forward (delete a resource with the
`DELETE` verb on its resource path).


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.delete_media_legacy_request import DeleteMediaLegacyRequest
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    delete_media_legacy_request = one_msg_sdk.DeleteMediaLegacyRequest() # DeleteMediaLegacyRequest | 

    try:
        # Delete media from WABA storage (deprecated alias)
        api_response = api_instance.delete_media_legacy(token, delete_media_legacy_request)
        print("The response of MessagingApi->delete_media_legacy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->delete_media_legacy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **delete_media_legacy_request** | [**DeleteMediaLegacyRequest**](DeleteMediaLegacyRequest.md)|  | 

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

# **get_mm_lite_status**
> GetMmLiteStatus200Response get_mm_lite_status(token)

Get MM Lite availability and status

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.get_mm_lite_status200_response import GetMmLiteStatus200Response
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization

    try:
        # Get MM Lite availability and status
        api_response = api_instance.get_mm_lite_status(token)
        print("The response of MessagingApi->get_mm_lite_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->get_mm_lite_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 

### Return type

[**GetMmLiteStatus200Response**](GetMmLiteStatus200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MM Lite status for the channel |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_messages**
> ListMessages200Response list_messages(token)

Get messages list

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.list_messages200_response import ListMessages200Response
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization

    try:
        # Get messages list
        api_response = api_instance.list_messages(token)
        print("The response of MessagingApi->list_messages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->list_messages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 

### Return type

[**ListMessages200Response**](ListMessages200Response.md)

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

# **retrieve_media**
> RetrieveMedia200Response retrieve_media(token, media_id)

Retrieve uploaded media metadata

Get WABA media URL and metadata by mediaId (from uploadMedia).
The returned `url` is temporary and typically expires within ~5 minutes.


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.retrieve_media200_response import RetrieveMedia200Response
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    media_id = 'media_id_example' # str | 

    try:
        # Retrieve uploaded media metadata
        api_response = api_instance.retrieve_media(token, media_id)
        print("The response of MessagingApi->retrieve_media:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->retrieve_media: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **media_id** | **str**|  | 

### Return type

[**RetrieveMedia200Response**](RetrieveMedia200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Media metadata |  -  |
**400** | Invalid request parameters |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_address_message**
> MessageSentResponse send_address_message(token, send_address_message_request)

Send address request message

Request shipping address from the user (WhatsApp interactive `address_message`).

**India and Singapore only.** Requires:
- Business WhatsApp number registered in that country
- Recipient phone matching the country (`+91` ↔ `IN`, `+65` ↔ `SG`)

Pass `country: "IN"` or `country: "SG"`. Eligibility is validated upstream;
mismatches (e.g. Singapore phone with `country: "IN"`) return errors such as
`Unsupported Interactive Message type` (HTTP 200 with `sent: false`).

Optional action parameters: `values`, `saved_addresses`, `validation_errors`.


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.message_sent_response import MessageSentResponse
from one_msg_sdk.models.send_address_message_request import SendAddressMessageRequest
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    send_address_message_request = {"phone":6531650115,"body":"Thanks for your order! Tell us what address you’d like this delivered to.","country":"SG"} # SendAddressMessageRequest | 

    try:
        # Send address request message
        api_response = api_instance.send_address_message(token, send_address_message_request)
        print("The response of MessagingApi->send_address_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->send_address_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **send_address_message_request** | [**SendAddressMessageRequest**](SendAddressMessageRequest.md)|  | 

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Message sent successfully |  -  |
**400** | Invalid request parameters |  -  |
**401** | Invalid or missing authentication token |  -  |
**429** | Rate limit exceeded |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_button**
> MessageSentResponse send_button(token, send_button_request=send_button_request)

Send Reply Buttons Message

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.message_sent_response import MessageSentResponse
from one_msg_sdk.models.send_button_request import SendButtonRequest
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    send_button_request = {"phone":"{{testPhone}}","body":"This is a buttons message","footer":"Footer","sections":[{"type":"reply","reply":{"id":"1","title":"Button 1"}}]} # SendButtonRequest |  (optional)

    try:
        # Send Reply Buttons Message
        api_response = api_instance.send_button(token, send_button_request=send_button_request)
        print("The response of MessagingApi->send_button:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->send_button: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **send_button_request** | [**SendButtonRequest**](SendButtonRequest.md)|  | [optional] 

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Message sent successfully |  -  |
**400** | Invalid request parameters |  -  |
**401** | Invalid or missing authentication token |  -  |
**429** | Rate limit exceeded |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_carousel**
> MessageSentResponse send_carousel(token, params, body=body, quoted_msg_id=quoted_msg_id, chat_id=chat_id, phone=phone)

Send Carousel

You can send product cards via Carousel in two ways:

Template messages: do not require a 24-hour customer service window between you and the recipient. Use sendTemplate.

Free-form messages: can be sent only when a customer service window is open between you and the recipient. Use sendCarousel.

The message structure in /sendCarousel is largely similar to sending a template. However, in this case you must 
explicitly specify all elements that are created in advance when working with templates. This is because the message 
is sent without using a template.

In /sendCarousel, for sending a Catalog Carousel there can be either 1 URL button or one or more quick reply buttons.


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.message_sent_response import MessageSentResponse
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    params = None # List[object] | Required. Template-like structure (same as sendTemplate params). Must include a CAROUSEL component and its cards.  Structure: - params[] item with type CAROUSEL and cards (2..10) - cards[] item:   - components[] items:     - header: parameters[0] with type image/video/product       - image: {\\\"image\\\": {\\\"link\\\": \\\"https://...\\\"}}       - video: {\\\"video\\\": {\\\"link\\\": \\\"https://...\\\"}}       - product: {\\\"product\\\": {\\\"catalog_id\\\": \\\"...\\\", \\\"product_retailer_id\\\": \\\"...\\\"}}     - button: sub_type url or quick_reply       - url: parameters {\\\"text\\\": \\\"Button\\\", \\\"url\\\": \\\"https://...\\\"}       - quick_reply: parameters[] of {\\\"id\\\": \\\"...\\\", \\\"text\\\": \\\"...\\\"} 
    body = 'body_example' # str | Text shown above the carousel. Optional. If omitted and params include a body component, the body will be taken from params. (optional)
    quoted_msg_id = 'quoted_msg_id_example' # str | Quoted message ID (Cloud API) (optional)
    chat_id = 'chat_id_example' # str | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) (optional)
    phone = 56 # int | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. (optional)

    try:
        # Send Carousel
        api_response = api_instance.send_carousel(token, params, body=body, quoted_msg_id=quoted_msg_id, chat_id=chat_id, phone=phone)
        print("The response of MessagingApi->send_carousel:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->send_carousel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **params** | [**List[object]**](object.md)| Required. Template-like structure (same as sendTemplate params). Must include a CAROUSEL component and its cards.  Structure: - params[] item with type CAROUSEL and cards (2..10) - cards[] item:   - components[] items:     - header: parameters[0] with type image/video/product       - image: {\\\&quot;image\\\&quot;: {\\\&quot;link\\\&quot;: \\\&quot;https://...\\\&quot;}}       - video: {\\\&quot;video\\\&quot;: {\\\&quot;link\\\&quot;: \\\&quot;https://...\\\&quot;}}       - product: {\\\&quot;product\\\&quot;: {\\\&quot;catalog_id\\\&quot;: \\\&quot;...\\\&quot;, \\\&quot;product_retailer_id\\\&quot;: \\\&quot;...\\\&quot;}}     - button: sub_type url or quick_reply       - url: parameters {\\\&quot;text\\\&quot;: \\\&quot;Button\\\&quot;, \\\&quot;url\\\&quot;: \\\&quot;https://...\\\&quot;}       - quick_reply: parameters[] of {\\\&quot;id\\\&quot;: \\\&quot;...\\\&quot;, \\\&quot;text\\\&quot;: \\\&quot;...\\\&quot;}  | 
 **body** | **str**| Text shown above the carousel. Optional. If omitted and params include a body component, the body will be taken from params. | [optional] 
 **quoted_msg_id** | **str**| Quoted message ID (Cloud API) | [optional] 
 **chat_id** | **str**| Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) | [optional] 
 **phone** | **int**| Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. | [optional] 

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Message sent successfully |  -  |
**400** | Invalid request parameters |  -  |
**401** | Invalid or missing authentication token |  -  |
**429** | Rate limit exceeded |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_contact**
> MessageSentResponse send_contact(token, send_contact_request=send_contact_request)

Send a Contact

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.message_sent_response import MessageSentResponse
from one_msg_sdk.models.send_contact_request import SendContactRequest
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    send_contact_request = {"phone":"{{testPhone}}","contacts":[{"name":{"formatted_name":"John Doe","first_name":"John","last_name":"Doe","middle_name":"","suffix":"","prefix":""},"birthday":"","addresses":[],"emails":[],"org":{"company":"","department":"","title":""},"phones":[{"phone":"+1234567890","type":"HOME","wa_id":""}],"urls":[]}]} # SendContactRequest |  (optional)

    try:
        # Send a Contact
        api_response = api_instance.send_contact(token, send_contact_request=send_contact_request)
        print("The response of MessagingApi->send_contact:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->send_contact: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **send_contact_request** | [**SendContactRequest**](SendContactRequest.md)|  | [optional] 

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Message sent successfully |  -  |
**400** | Invalid request parameters |  -  |
**401** | Invalid or missing authentication token |  -  |
**429** | Rate limit exceeded |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_cta_url**
> MessageSentResponse send_cta_url(token, send_cta_url_request)

Send CTA URL interactive message

Send an interactive message with a single call-to-action URL button.

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.message_sent_response import MessageSentResponse
from one_msg_sdk.models.send_cta_url_request import SendCtaUrlRequest
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    send_cta_url_request = one_msg_sdk.SendCtaUrlRequest() # SendCtaUrlRequest | 

    try:
        # Send CTA URL interactive message
        api_response = api_instance.send_cta_url(token, send_cta_url_request)
        print("The response of MessagingApi->send_cta_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->send_cta_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **send_cta_url_request** | [**SendCtaUrlRequest**](SendCtaUrlRequest.md)|  | 

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Message sent successfully |  -  |
**400** | Invalid request parameters |  -  |
**401** | Invalid or missing authentication token |  -  |
**429** | Rate limit exceeded |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_file**
> MessageSentResponse send_file(token, body=body, filename=filename, media_id=media_id, media_type=media_type, voice=voice, caption=caption, quoted_msg_id=quoted_msg_id, chat_id=chat_id, phone=phone)

Send a File

Send a file to an existing chat. (Only if the dialogue has an Open Session). 
Only one of two parameters is needed to determine the destination - chatId or phone.


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.message_sent_response import MessageSentResponse
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    body = 'body_example' # str | File source (required unless mediaId is set): - HTTP/HTTPS URL - Base64 data URI  (optional)
    filename = 'filename_example' # str | File name with extension (required with body, not with mediaId) (optional)
    media_id = 'media_id_example' # str | WABA media id from uploadMedia (alternative to body) (optional)
    media_type = 'media_type_example' # str | Required when using mediaId (optional)
    voice = True # bool | Native WhatsApp voice note (audio/ogg only) (optional)
    caption = 'caption_example' # str |  (optional)
    quoted_msg_id = 'quoted_msg_id_example' # str |  (optional)
    chat_id = 'chat_id_example' # str |  (optional)
    phone = 56 # int |  (optional)

    try:
        # Send a File
        api_response = api_instance.send_file(token, body=body, filename=filename, media_id=media_id, media_type=media_type, voice=voice, caption=caption, quoted_msg_id=quoted_msg_id, chat_id=chat_id, phone=phone)
        print("The response of MessagingApi->send_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->send_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **body** | **str**| File source (required unless mediaId is set): - HTTP/HTTPS URL - Base64 data URI  | [optional] 
 **filename** | **str**| File name with extension (required with body, not with mediaId) | [optional] 
 **media_id** | **str**| WABA media id from uploadMedia (alternative to body) | [optional] 
 **media_type** | **str**| Required when using mediaId | [optional] 
 **voice** | **bool**| Native WhatsApp voice note (audio/ogg only) | [optional] 
 **caption** | **str**|  | [optional] 
 **quoted_msg_id** | **str**|  | [optional] 
 **chat_id** | **str**|  | [optional] 
 **phone** | **int**|  | [optional] 

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Message sent successfully |  -  |
**400** | Invalid request parameters |  -  |
**401** | Invalid or missing authentication token |  -  |
**429** | Rate limit exceeded |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_flow**
> MessageSentResponse send_flow(token, body, flow_id, flow_token, flow_cta, header=header, footer=footer, flow_action=flow_action, flow_action_payload=flow_action_payload, flow_message_version=flow_message_version, mode=mode, flow_action_data=flow_action_data, flow_action_screen=flow_action_screen, quoted_msg_id=quoted_msg_id, chat_id=chat_id, phone=phone)

Send WhatsApp Flow Message

Send Interactive WhatsApp Flow message to an existing chat. (Only if the dialogue has an Open Session). 
Only one of two parameters is needed to determine the destination - chatId or phone.

Use this method to send a published WhatsApp Flow as a service (interactive) message. 
If the 24-hour window is closed, send a template with a FLOW button via /sendTemplate.


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.message_sent_response import MessageSentResponse
from one_msg_sdk.models.send_flow_request_header import SendFlowRequestHeader
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    body = 'body_example' # str | Flow message body text
    flow_id = 'flow_id_example' # str | Published Flow ID
    flow_token = 'flow_token_example' # str | Flow token generated by the business
    flow_cta = 'flow_cta_example' # str | CTA button text
    header = one_msg_sdk.SendFlowRequestHeader() # SendFlowRequestHeader |  (optional)
    footer = 'footer_example' # str | Footer text (optional)
    flow_action = 'flow_action_example' # str | Flow action type (optional)
    flow_action_payload = None # object | Required for flowAction=navigate (screen is required). Ignored for data_exchange. If data is provided, it must be a non-empty object. (optional)
    flow_message_version = 'flow_message_version_example' # str | Flow message version (default \\\"3\\\") (optional)
    mode = 'mode_example' # str | Flow mode (draft or published). If omitted, provider default applies (optional)
    flow_action_data = None # object | Shortcut for flowActionPayload.data (optional) (optional)
    flow_action_screen = 'flow_action_screen_example' # str | Shortcut for flowActionPayload.screen (optional) (optional)
    quoted_msg_id = 'quoted_msg_id_example' # str | Quoted message ID (Cloud API) (optional)
    chat_id = 'chat_id_example' # str | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) (optional)
    phone = 56 # int | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. (optional)

    try:
        # Send WhatsApp Flow Message
        api_response = api_instance.send_flow(token, body, flow_id, flow_token, flow_cta, header=header, footer=footer, flow_action=flow_action, flow_action_payload=flow_action_payload, flow_message_version=flow_message_version, mode=mode, flow_action_data=flow_action_data, flow_action_screen=flow_action_screen, quoted_msg_id=quoted_msg_id, chat_id=chat_id, phone=phone)
        print("The response of MessagingApi->send_flow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->send_flow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **body** | **str**| Flow message body text | 
 **flow_id** | **str**| Published Flow ID | 
 **flow_token** | **str**| Flow token generated by the business | 
 **flow_cta** | **str**| CTA button text | 
 **header** | [**SendFlowRequestHeader**](SendFlowRequestHeader.md)|  | [optional] 
 **footer** | **str**| Footer text | [optional] 
 **flow_action** | **str**| Flow action type | [optional] 
 **flow_action_payload** | [**object**](object.md)| Required for flowAction&#x3D;navigate (screen is required). Ignored for data_exchange. If data is provided, it must be a non-empty object. | [optional] 
 **flow_message_version** | **str**| Flow message version (default \\\&quot;3\\\&quot;) | [optional] 
 **mode** | **str**| Flow mode (draft or published). If omitted, provider default applies | [optional] 
 **flow_action_data** | [**object**](object.md)| Shortcut for flowActionPayload.data (optional) | [optional] 
 **flow_action_screen** | **str**| Shortcut for flowActionPayload.screen (optional) | [optional] 
 **quoted_msg_id** | **str**| Quoted message ID (Cloud API) | [optional] 
 **chat_id** | **str**| Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) | [optional] 
 **phone** | **int**| Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. | [optional] 

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Message sent successfully |  -  |
**400** | Invalid request parameters |  -  |
**401** | Invalid or missing authentication token |  -  |
**429** | Rate limit exceeded |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_list**
> MessageSentResponse send_list(token, send_list_request=send_list_request)

Send List Message

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.message_sent_response import MessageSentResponse
from one_msg_sdk.models.send_list_request import SendListRequest
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    send_list_request = {"phone":"{{testPhone}}","body":"This is a list message","buttonText":"Click me","action":"Action","sections":[{"title":"Section 1","rows":[{"id":"1","title":"Row 1","description":"Description for Row 1"}]}]} # SendListRequest |  (optional)

    try:
        # Send List Message
        api_response = api_instance.send_list(token, send_list_request=send_list_request)
        print("The response of MessagingApi->send_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->send_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **send_list_request** | [**SendListRequest**](SendListRequest.md)|  | [optional] 

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Message sent successfully |  -  |
**400** | Invalid request parameters |  -  |
**401** | Invalid or missing authentication token |  -  |
**429** | Rate limit exceeded |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_location**
> MessageSentResponse send_location(token, lat, lng, address=address, name=name, quoted_msg_id=quoted_msg_id, chat_id=chat_id, phone=phone)

Send a Location

Send a location to an existing chat. (Only if the dialogue has an Open Session). 
Only one of two parameters is needed to determine the destination - chatId or phone.


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.message_sent_response import MessageSentResponse
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    lat = 'lat_example' # str | Latitude of the location. Example: 45.018337
    lng = 'lng_example' # str | Longitude of the location. Example: -73.968285
    address = 'address_example' # str | Address of the location. Only displayed if name is present. Example: 9766 Valley View St., New York, NY 10024 (optional)
    name = 'name_example' # str | Name of the location. Example: Facebook HQ (optional)
    quoted_msg_id = 'quoted_msg_id_example' # str | Quoted message ID (Cloud API) (optional)
    chat_id = 'chat_id_example' # str | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) (optional)
    phone = 56 # int | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. (optional)

    try:
        # Send a Location
        api_response = api_instance.send_location(token, lat, lng, address=address, name=name, quoted_msg_id=quoted_msg_id, chat_id=chat_id, phone=phone)
        print("The response of MessagingApi->send_location:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->send_location: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **lat** | **str**| Latitude of the location. Example: 45.018337 | 
 **lng** | **str**| Longitude of the location. Example: -73.968285 | 
 **address** | **str**| Address of the location. Only displayed if name is present. Example: 9766 Valley View St., New York, NY 10024 | [optional] 
 **name** | **str**| Name of the location. Example: Facebook HQ | [optional] 
 **quoted_msg_id** | **str**| Quoted message ID (Cloud API) | [optional] 
 **chat_id** | **str**| Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) | [optional] 
 **phone** | **int**| Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. | [optional] 

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Message sent successfully |  -  |
**400** | Invalid request parameters |  -  |
**401** | Invalid or missing authentication token |  -  |
**429** | Rate limit exceeded |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_location_request**
> MessageSentResponse send_location_request(token, send_location_request_request=send_location_request_request)

Send Location Request Message

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.message_sent_response import MessageSentResponse
from one_msg_sdk.models.send_location_request_request import SendLocationRequestRequest
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    send_location_request_request = {"phone":"{{testPhone}}","body":"Text"} # SendLocationRequestRequest |  (optional)

    try:
        # Send Location Request Message
        api_response = api_instance.send_location_request(token, send_location_request_request=send_location_request_request)
        print("The response of MessagingApi->send_location_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->send_location_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **send_location_request_request** | [**SendLocationRequestRequest**](SendLocationRequestRequest.md)|  | [optional] 

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Message sent successfully |  -  |
**400** | Invalid request parameters |  -  |
**401** | Invalid or missing authentication token |  -  |
**429** | Rate limit exceeded |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_message**
> MessageSentResponse send_message(token, body, quoted_msg_id=quoted_msg_id, chat_id=chat_id, phone=phone)

Send a Message

Send a message to an existing chat. (Only if the dialogue has an Open Session). 
The message will be added to the queue for sending and delivered even if the phone 
is disconnected from the Internet or authorization is not passed.

Only one of two parameters is needed to determine the destination - chatId or phone.


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.message_sent_response import MessageSentResponse
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    body = 'body_example' # str | Message text, UTF-8 or UTF-16 string with emoji
    quoted_msg_id = 'quoted_msg_id_example' # str | Message ID to quote/reply to (Cloud API wamid) (optional)
    chat_id = 'chat_id_example' # str | Chat ID in format: phone@c.us (individual) or phone@g.us (group) (optional)
    phone = 56 # int | Phone number starting with country code (alternative to chatId) (optional)

    try:
        # Send a Message
        api_response = api_instance.send_message(token, body, quoted_msg_id=quoted_msg_id, chat_id=chat_id, phone=phone)
        print("The response of MessagingApi->send_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->send_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **body** | **str**| Message text, UTF-8 or UTF-16 string with emoji | 
 **quoted_msg_id** | **str**| Message ID to quote/reply to (Cloud API wamid) | [optional] 
 **chat_id** | **str**| Chat ID in format: phone@c.us (individual) or phone@g.us (group) | [optional] 
 **phone** | **int**| Phone number starting with country code (alternative to chatId) | [optional] 

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Message sent successfully |  -  |
**400** | Invalid request parameters |  -  |
**401** | Invalid or missing authentication token |  -  |
**429** | Rate limit exceeded |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_order_details**
> MessageSentResponse send_order_details(token, send_order_details_request)

Send order details (India payments template)

Send a WhatsApp **order details** payment / invoice message using a
pre-approved **Utility** template that has an `ORDER_DETAILS` button.

**India only** (WhatsApp Payments India). Requires:
- India WhatsApp Business number
- Commerce enabled on the channel (`GET`/`POST /commerce`)
- Approved template with an `ORDER_DETAILS` button

Use this method when you need structured fields (`order`, `referenceId`,
`currency`, `paymentSettings`). The API appends a template button
`sub_type: order_details` and sends via the same path as `POST /sendTemplate`.

Works **outside the 24-hour session window** (template message).

You can also send the same payload yourself with `POST /sendTemplate` by
including a button component in `params`:

```json
{
  "type": "button",
  "sub_type": "order_details",
  "index": 0,
  "parameters": [{
    "type": "action",
    "action": {
      "order_details": {
        "reference_id": "order-123",
        "currency": "INR",
        "order": { "status": "pending", "items": [], "subtotal": { "offset": 100, "value": 50000 } }
      }
    }
  }]
}
```


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.message_sent_response import MessageSentResponse
from one_msg_sdk.models.send_order_details_request import SendOrderDetailsRequest
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    send_order_details_request = {"phone":919876543210,"template":"order_details_utility","namespace":"your_namespace_uuid","language":{"code":"en"},"referenceId":"order-123","currency":"INR","order":{"status":"pending","items":[{"retailer_id":"SKU-1","name":"Item","amount":{"offset":100,"value":50000},"quantity":1}],"subtotal":{"offset":100,"value":50000}}} # SendOrderDetailsRequest | 

    try:
        # Send order details (India payments template)
        api_response = api_instance.send_order_details(token, send_order_details_request)
        print("The response of MessagingApi->send_order_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->send_order_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **send_order_details_request** | [**SendOrderDetailsRequest**](SendOrderDetailsRequest.md)|  | 

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Message sent successfully |  -  |
**400** | Invalid request parameters |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_payment_request**
> MessageSentResponse send_payment_request(token, send_payment_request_request)

Send payment request (regional)

Send a regional payment request interactive message (beta scaffold).
`region` must be IN, SG, or BR. Payload shape follows Meta regional payments docs;
verify on stage before production use. Full regional builders are not implemented yet.


### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.message_sent_response import MessageSentResponse
from one_msg_sdk.models.send_payment_request_request import SendPaymentRequestRequest
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    send_payment_request_request = one_msg_sdk.SendPaymentRequestRequest() # SendPaymentRequestRequest | 

    try:
        # Send payment request (regional)
        api_response = api_instance.send_payment_request(token, send_payment_request_request)
        print("The response of MessagingApi->send_payment_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->send_payment_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **send_payment_request_request** | [**SendPaymentRequestRequest**](SendPaymentRequestRequest.md)|  | 

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Message sent successfully |  -  |
**400** | Invalid request parameters |  -  |
**401** | Invalid or missing authentication token |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_product**
> MessageSentResponse send_product(token, request_body=request_body)

Send a Product

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.message_sent_response import MessageSentResponse
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    request_body = None # Dict[str, object] |  (optional)

    try:
        # Send a Product
        api_response = api_instance.send_product(token, request_body=request_body)
        print("The response of MessagingApi->send_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->send_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **request_body** | [**Dict[str, object]**](object.md)|  | [optional] 

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Message sent successfully |  -  |
**400** | Invalid request parameters |  -  |
**401** | Invalid or missing authentication token |  -  |
**429** | Rate limit exceeded |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_reaction**
> MessageSentResponse send_reaction(token, send_reaction_request=send_reaction_request)

Send Reaction

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.message_sent_response import MessageSentResponse
from one_msg_sdk.models.send_reaction_request import SendReactionRequest
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    send_reaction_request = {"phone":"{{testPhone}}","body":"😀","quotedMsgId":"{{lastMessageId}}"} # SendReactionRequest |  (optional)

    try:
        # Send Reaction
        api_response = api_instance.send_reaction(token, send_reaction_request=send_reaction_request)
        print("The response of MessagingApi->send_reaction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->send_reaction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **send_reaction_request** | [**SendReactionRequest**](SendReactionRequest.md)|  | [optional] 

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Message sent successfully |  -  |
**400** | Invalid request parameters |  -  |
**401** | Invalid or missing authentication token |  -  |
**429** | Rate limit exceeded |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_sticker**
> MessageSentResponse send_sticker(token, send_sticker_request)

Send sticker message

Send a WhatsApp sticker by mediaId or link URL.

### Example

* Api Key Authentication (tokenAuth):

```python
import one_msg_sdk
from one_msg_sdk.models.message_sent_response import MessageSentResponse
from one_msg_sdk.models.send_sticker_request import SendStickerRequest
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
    api_instance = one_msg_sdk.MessagingApi(api_client)
    token = 'token_example' # str | JWT token or API key for authorization
    send_sticker_request = one_msg_sdk.SendStickerRequest() # SendStickerRequest | 

    try:
        # Send sticker message
        api_response = api_instance.send_sticker(token, send_sticker_request)
        print("The response of MessagingApi->send_sticker:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->send_sticker: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT token or API key for authorization | 
 **send_sticker_request** | [**SendStickerRequest**](SendStickerRequest.md)|  | 

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Message sent successfully |  -  |
**400** | Invalid request parameters |  -  |
**401** | Invalid or missing authentication token |  -  |
**429** | Rate limit exceeded |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

