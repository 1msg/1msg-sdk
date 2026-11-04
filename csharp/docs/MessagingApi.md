# OneMsg.Sdk.Api.MessagingApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateReadMessage**](MessagingApi.md#createreadmessage) | **POST** /readMessage | Mark message as read |
| [**CreateUploadMedia**](MessagingApi.md#createuploadmedia) | **POST** /uploadMedia | Upload media |
| [**DeleteMedia**](MessagingApi.md#deletemedia) | **DELETE** /media/{mediaId} | Delete media from WABA storage |
| [**DeleteMediaLegacy**](MessagingApi.md#deletemedialegacy) | **POST** /deleteMedia | Delete media from WABA storage (deprecated alias) |
| [**GetMmLiteStatus**](MessagingApi.md#getmmlitestatus) | **GET** /mmLiteStatus | Get MM Lite availability and status |
| [**ListMessages**](MessagingApi.md#listmessages) | **GET** /messages | Get messages list |
| [**RetrieveMedia**](MessagingApi.md#retrievemedia) | **GET** /retrieveMedia | Retrieve uploaded media metadata |
| [**SendAddressMessage**](MessagingApi.md#sendaddressmessage) | **POST** /sendAddressMessage | Send address request message |
| [**SendButton**](MessagingApi.md#sendbutton) | **POST** /sendButton | Send Reply Buttons Message |
| [**SendCarousel**](MessagingApi.md#sendcarousel) | **POST** /sendCarousel | Send Carousel |
| [**SendContact**](MessagingApi.md#sendcontact) | **POST** /sendContact | Send a Contact |
| [**SendContactInfo**](MessagingApi.md#sendcontactinfo) | **POST** /sendContactInfo | Request the user&#39;s phone number |
| [**SendCtaUrl**](MessagingApi.md#sendctaurl) | **POST** /sendCtaUrl | Send CTA URL interactive message |
| [**SendFile**](MessagingApi.md#sendfile) | **POST** /sendFile | Send a File |
| [**SendFlow**](MessagingApi.md#sendflow) | **POST** /sendFlow | Send WhatsApp Flow Message |
| [**SendList**](MessagingApi.md#sendlist) | **POST** /sendList | Send List Message |
| [**SendLocation**](MessagingApi.md#sendlocation) | **POST** /sendLocation | Send a Location |
| [**SendLocationRequest**](MessagingApi.md#sendlocationrequest) | **POST** /sendLocationRequest | Send Location Request Message |
| [**SendMessage**](MessagingApi.md#sendmessage) | **POST** /sendMessage | Send a Message |
| [**SendOrderDetails**](MessagingApi.md#sendorderdetails) | **POST** /sendOrderDetails | Send order details (India payments template) |
| [**SendPaymentRequest**](MessagingApi.md#sendpaymentrequest) | **POST** /sendPaymentRequest | Send payment request (regional) |
| [**SendProduct**](MessagingApi.md#sendproduct) | **POST** /sendProduct | Send a Product |
| [**SendReaction**](MessagingApi.md#sendreaction) | **POST** /sendReaction | Send Reaction |
| [**SendSticker**](MessagingApi.md#sendsticker) | **POST** /sendSticker | Send sticker message |

<a id="createreadmessage"></a>
# **CreateReadMessage**
> CreateReadMessage200Response CreateReadMessage (string token, string messageId = null, string msgId = null, bool? typingIndicator = null)

Mark message as read

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class CreateReadMessageExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var messageId = "messageId_example";  // string |  (optional) 
            var msgId = "msgId_example";  // string |  (optional) 
            var typingIndicator = false;  // bool? | Show WhatsApp typing indicator (max 25s or until reply) (optional)  (default to false)

            try
            {
                // Mark message as read
                CreateReadMessage200Response result = apiInstance.CreateReadMessage(token, messageId, msgId, typingIndicator);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.CreateReadMessage: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateReadMessageWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Mark message as read
    ApiResponse<CreateReadMessage200Response> response = apiInstance.CreateReadMessageWithHttpInfo(token, messageId, msgId, typingIndicator);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.CreateReadMessageWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **messageId** | **string** |  | [optional]  |
| **msgId** | **string** |  | [optional]  |
| **typingIndicator** | **bool?** | Show WhatsApp typing indicator (max 25s or until reply) | [optional] [default to false] |

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
| **200** | Server response example |  -  |
| **401** | Invalid token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createuploadmedia"></a>
# **CreateUploadMedia**
> CreateUploadMedia200Response CreateUploadMedia (string token, CreateUploadMediaRequest createUploadMediaRequest)

Upload media

Upload a file to WhatsApp media storage and get a numeric `mediaId` for later use with `send_file` / `send_sticker` (`mediaId` field, not `body`).  Pass the file as `body` **or** `url` — an HTTP(S) URL or a base64 data URI. The `mediaId` in the response is a numeric string (keep it as a string). 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class CreateUploadMediaExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var createUploadMediaRequest = new CreateUploadMediaRequest(); // CreateUploadMediaRequest | 

            try
            {
                // Upload media
                CreateUploadMedia200Response result = apiInstance.CreateUploadMedia(token, createUploadMediaRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.CreateUploadMedia: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateUploadMediaWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Upload media
    ApiResponse<CreateUploadMedia200Response> response = apiInstance.CreateUploadMediaWithHttpInfo(token, createUploadMediaRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.CreateUploadMediaWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **createUploadMediaRequest** | [**CreateUploadMediaRequest**](CreateUploadMediaRequest.md) |  |  |

### Return type

[**CreateUploadMedia200Response**](CreateUploadMedia200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletemedia"></a>
# **DeleteMedia**
> SuccessResponse DeleteMedia (string token, string mediaId)

Delete media from WABA storage

Delete previously uploaded media by numeric `mediaId` (from `/uploadMedia`).  This is the canonical deletion endpoint and uses the REST `DELETE` verb on the media resource path. The older `POST /deleteMedia` is a deprecated alias. 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class DeleteMediaExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var mediaId = "mediaId_example";  // string | Numeric WABA media id

            try
            {
                // Delete media from WABA storage
                SuccessResponse result = apiInstance.DeleteMedia(token, mediaId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.DeleteMedia: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteMediaWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete media from WABA storage
    ApiResponse<SuccessResponse> response = apiInstance.DeleteMediaWithHttpInfo(token, mediaId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.DeleteMediaWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **mediaId** | **string** | Numeric WABA media id |  |

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
| **200** | Operation successful |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletemedialegacy"></a>
# **DeleteMediaLegacy**
> SuccessResponse DeleteMediaLegacy (string token, DeleteMediaLegacyRequest deleteMediaLegacyRequest)

Delete media from WABA storage (deprecated alias)

**Deprecated.** Use `DELETE /media/{mediaId}` instead.  This POST alias is kept for backward compatibility with earlier integrations. New integrations should call `DELETE /media/{mediaId}`: 1msg follows REST conventions for resource deletion going forward (delete a resource with the `DELETE` verb on its resource path). 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class DeleteMediaLegacyExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var deleteMediaLegacyRequest = new DeleteMediaLegacyRequest(); // DeleteMediaLegacyRequest | 

            try
            {
                // Delete media from WABA storage (deprecated alias)
                SuccessResponse result = apiInstance.DeleteMediaLegacy(token, deleteMediaLegacyRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.DeleteMediaLegacy: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteMediaLegacyWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete media from WABA storage (deprecated alias)
    ApiResponse<SuccessResponse> response = apiInstance.DeleteMediaLegacyWithHttpInfo(token, deleteMediaLegacyRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.DeleteMediaLegacyWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **deleteMediaLegacyRequest** | [**DeleteMediaLegacyRequest**](DeleteMediaLegacyRequest.md) |  |  |

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
| **200** | Operation successful |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getmmlitestatus"></a>
# **GetMmLiteStatus**
> GetMmLiteStatus200Response GetMmLiteStatus (string token)

Get MM Lite availability and status

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class GetMmLiteStatusExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization

            try
            {
                // Get MM Lite availability and status
                GetMmLiteStatus200Response result = apiInstance.GetMmLiteStatus(token);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.GetMmLiteStatus: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetMmLiteStatusWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get MM Lite availability and status
    ApiResponse<GetMmLiteStatus200Response> response = apiInstance.GetMmLiteStatusWithHttpInfo(token);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.GetMmLiteStatusWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |

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
| **200** | MM Lite status for the channel |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listmessages"></a>
# **ListMessages**
> ListMessages200Response ListMessages (string token, string chatId = null, int? limit = null, bool? last = null, int? lastMessageNumber = null, int? firstMessageNumber = null, int? minTime = null, int? maxTime = null, string msgId = null)

Get messages list

List stored chat history for this channel (requires history storage). Filter with `chatId`, `limit`, `last`, message numbers, or time bounds. 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class ListMessagesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var chatId = "chatId_example";  // string | Filter messages for one chat (`phone@c.us`, group `@g.us`, or BSUID `@lid`) (optional) 
            var limit = 56;  // int? | Max rows to return (default 100) (optional) 
            var last = true;  // bool? | If true, return the latest messages (DESC). Default false. (optional) 
            var lastMessageNumber = 56;  // int? |  (optional) 
            var firstMessageNumber = 56;  // int? |  (optional) 
            var minTime = 56;  // int? | Unix timestamp lower bound (optional) 
            var maxTime = 56;  // int? | Unix timestamp upper bound (optional) 
            var msgId = "msgId_example";  // string | Filter by stored message id (optional) 

            try
            {
                // Get messages list
                ListMessages200Response result = apiInstance.ListMessages(token, chatId, limit, last, lastMessageNumber, firstMessageNumber, minTime, maxTime, msgId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.ListMessages: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListMessagesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get messages list
    ApiResponse<ListMessages200Response> response = apiInstance.ListMessagesWithHttpInfo(token, chatId, limit, last, lastMessageNumber, firstMessageNumber, minTime, maxTime, msgId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.ListMessagesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **chatId** | **string** | Filter messages for one chat (&#x60;phone@c.us&#x60;, group &#x60;@g.us&#x60;, or BSUID &#x60;@lid&#x60;) | [optional]  |
| **limit** | **int?** | Max rows to return (default 100) | [optional]  |
| **last** | **bool?** | If true, return the latest messages (DESC). Default false. | [optional]  |
| **lastMessageNumber** | **int?** |  | [optional]  |
| **firstMessageNumber** | **int?** |  | [optional]  |
| **minTime** | **int?** | Unix timestamp lower bound | [optional]  |
| **maxTime** | **int?** | Unix timestamp upper bound | [optional]  |
| **msgId** | **string** | Filter by stored message id | [optional]  |

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
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="retrievemedia"></a>
# **RetrieveMedia**
> RetrieveMedia200Response RetrieveMedia (string token, string mediaId)

Retrieve uploaded media metadata

Get WABA media URL and metadata by mediaId (from uploadMedia). The returned `url` is temporary and typically expires within ~5 minutes. 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class RetrieveMediaExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var mediaId = "mediaId_example";  // string | 

            try
            {
                // Retrieve uploaded media metadata
                RetrieveMedia200Response result = apiInstance.RetrieveMedia(token, mediaId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.RetrieveMedia: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RetrieveMediaWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve uploaded media metadata
    ApiResponse<RetrieveMedia200Response> response = apiInstance.RetrieveMediaWithHttpInfo(token, mediaId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.RetrieveMediaWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **mediaId** | **string** |  |  |

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
| **200** | Media metadata |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="sendaddressmessage"></a>
# **SendAddressMessage**
> MessageSentResponse SendAddressMessage (string token, SendAddressMessageRequest sendAddressMessageRequest)

Send address request message

Request shipping address from the user (WhatsApp interactive `address_message`).  **India and Singapore only.** Requires: - Business WhatsApp number registered in that country - Recipient phone matching the country (`+91` ↔ `IN`, `+65` ↔ `SG`)  Pass `country: \"IN\"` or `country: \"SG\"`. Eligibility is validated upstream; mismatches (e.g. Singapore phone with `country: \"IN\"`) return errors such as `Unsupported Interactive Message type` (HTTP 200 with `sent: false`).  Optional action parameters: `values`, `saved_addresses`, `validation_errors`. 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class SendAddressMessageExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var sendAddressMessageRequest = new SendAddressMessageRequest(); // SendAddressMessageRequest | 

            try
            {
                // Send address request message
                MessageSentResponse result = apiInstance.SendAddressMessage(token, sendAddressMessageRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.SendAddressMessage: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SendAddressMessageWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send address request message
    ApiResponse<MessageSentResponse> response = apiInstance.SendAddressMessageWithHttpInfo(token, sendAddressMessageRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.SendAddressMessageWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **sendAddressMessageRequest** | [**SendAddressMessageRequest**](SendAddressMessageRequest.md) |  |  |

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
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="sendbutton"></a>
# **SendButton**
> MessageSentResponse SendButton (string token, SendButtonRequest sendButtonRequest = null)

Send Reply Buttons Message

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class SendButtonExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var sendButtonRequest = new SendButtonRequest(); // SendButtonRequest |  (optional) 

            try
            {
                // Send Reply Buttons Message
                MessageSentResponse result = apiInstance.SendButton(token, sendButtonRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.SendButton: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SendButtonWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send Reply Buttons Message
    ApiResponse<MessageSentResponse> response = apiInstance.SendButtonWithHttpInfo(token, sendButtonRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.SendButtonWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **sendButtonRequest** | [**SendButtonRequest**](SendButtonRequest.md) |  | [optional]  |

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
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="sendcarousel"></a>
# **SendCarousel**
> MessageSentResponse SendCarousel (string token, string body = null, List<Dictionary<string, Object>> cards = null, List<Object> varParams = null, string quotedMsgId = null, string chatId = null, int? phone = null)

Send Carousel

You can send product cards via Carousel in two ways:  Template messages: do not require a 24-hour customer service window between you and the recipient. Use sendTemplate.  Free-form messages: can be sent only when a customer service window is open between you and the recipient. Use sendCarousel.  The message structure in /sendCarousel is largely similar to sending a template. However, in this case you must  explicitly specify all elements that are created in advance when working with templates. This is because the message  is sent without using a template.  In /sendCarousel, for a Catalog Carousel there can be either 1 URL button or one or more quick reply buttons.  Prefer the simple `cards` array (2–10 cards). Each card needs a header media/product plus a CTA URL or quick-reply buttons. Example:  ```json {   \"phone\": \"79001234567\",   \"body\": \"Pick a product\",   \"cards\": [     {       \"header\": { \"type\": \"image\", \"image\": { \"link\": \"https://example.com/1.jpg\" } },       \"body\": { \"text\": \"Card one\" },       \"type\": \"cta_url\",       \"action\": { \"name\": \"cta_url\", \"parameters\": { \"url\": \"https://example.com/p1\", \"display_text\": \"Open\" } }     },     {       \"header\": { \"type\": \"image\", \"image\": { \"link\": \"https://example.com/2.jpg\" } },       \"body\": { \"text\": \"Card two\" },       \"type\": \"cta_url\",       \"action\": { \"name\": \"cta_url\", \"parameters\": { \"url\": \"https://example.com/p2\", \"display_text\": \"Open\" } }     }   ] } ```  `params` with a `CAROUSEL` component is the template-like alternative. 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class SendCarouselExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var body = "body_example";  // string | Text shown above the carousel. Optional. If omitted and params include a body component, the body will be taken from params. (optional) 
            var cards = new List<Dictionary<string, Object>>(); // List<Dictionary<string, Object>> | Preferred. 2–10 carousel cards (header + body + CTA or quick replies). (optional) 
            var varParams = new List<Object>(); // List<Object> | Required. Template-like structure (same as sendTemplate params). Must include a CAROUSEL component and its cards.  Structure: - params[] item with type CAROUSEL and cards (2..10) - cards[] item:   - components[] items:     - header: parameters[0] with type image/video/product       - image: {\\\"image\\\": {\\\"link\\\": \\\"https://...\\\"}}       - video: {\\\"video\\\": {\\\"link\\\": \\\"https://...\\\"}}       - product: {\\\"product\\\": {\\\"catalog_id\\\": \\\"...\\\", \\\"product_retailer_id\\\": \\\"...\\\"}}     - button: sub_type url or quick_reply       - url: parameters {\\\"text\\\": \\\"Button\\\", \\\"url\\\": \\\"https://...\\\"}       - quick_reply: parameters[] of {\\\"id\\\": \\\"...\\\", \\\"text\\\": \\\"...\\\"}  (optional) 
            var quotedMsgId = "quotedMsgId_example";  // string | Quoted message ID (Cloud API) (optional) 
            var chatId = "chatId_example";  // string | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) (optional) 
            var phone = 56;  // int? | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. (optional) 

            try
            {
                // Send Carousel
                MessageSentResponse result = apiInstance.SendCarousel(token, body, cards, varParams, quotedMsgId, chatId, phone);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.SendCarousel: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SendCarouselWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send Carousel
    ApiResponse<MessageSentResponse> response = apiInstance.SendCarouselWithHttpInfo(token, body, cards, varParams, quotedMsgId, chatId, phone);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.SendCarouselWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **body** | **string** | Text shown above the carousel. Optional. If omitted and params include a body component, the body will be taken from params. | [optional]  |
| **cards** | [**List&lt;Dictionary&lt;string, Object&gt;&gt;**](Dictionary&lt;string, Object&gt;.md) | Preferred. 2–10 carousel cards (header + body + CTA or quick replies). | [optional]  |
| **varParams** | [**List&lt;Object&gt;**](Object.md) | Required. Template-like structure (same as sendTemplate params). Must include a CAROUSEL component and its cards.  Structure: - params[] item with type CAROUSEL and cards (2..10) - cards[] item:   - components[] items:     - header: parameters[0] with type image/video/product       - image: {\\\&quot;image\\\&quot;: {\\\&quot;link\\\&quot;: \\\&quot;https://...\\\&quot;}}       - video: {\\\&quot;video\\\&quot;: {\\\&quot;link\\\&quot;: \\\&quot;https://...\\\&quot;}}       - product: {\\\&quot;product\\\&quot;: {\\\&quot;catalog_id\\\&quot;: \\\&quot;...\\\&quot;, \\\&quot;product_retailer_id\\\&quot;: \\\&quot;...\\\&quot;}}     - button: sub_type url or quick_reply       - url: parameters {\\\&quot;text\\\&quot;: \\\&quot;Button\\\&quot;, \\\&quot;url\\\&quot;: \\\&quot;https://...\\\&quot;}       - quick_reply: parameters[] of {\\\&quot;id\\\&quot;: \\\&quot;...\\\&quot;, \\\&quot;text\\\&quot;: \\\&quot;...\\\&quot;}  | [optional]  |
| **quotedMsgId** | **string** | Quoted message ID (Cloud API) | [optional]  |
| **chatId** | **string** | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) | [optional]  |
| **phone** | **int?** | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. | [optional]  |

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
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="sendcontact"></a>
# **SendContact**
> MessageSentResponse SendContact (string token, SendContactRequest sendContactRequest = null)

Send a Contact

Send a WhatsApp contact card.  Preferred simple body (legacy-compatible):  ```json {   \"phone\": \"79001234567\",   \"contact\": { \"name\": \"Lida\", \"phone\": \"+79181976551\" } } ```  Cloud API shape also works: `contacts` is an array of objects with `name.formatted_name` and `phones[].phone` (E.164 string, **not** a timestamp). 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class SendContactExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var sendContactRequest = new SendContactRequest(); // SendContactRequest |  (optional) 

            try
            {
                // Send a Contact
                MessageSentResponse result = apiInstance.SendContact(token, sendContactRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.SendContact: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SendContactWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send a Contact
    ApiResponse<MessageSentResponse> response = apiInstance.SendContactWithHttpInfo(token, sendContactRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.SendContactWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **sendContactRequest** | [**SendContactRequest**](SendContactRequest.md) |  | [optional]  |

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
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="sendcontactinfo"></a>
# **SendContactInfo**
> MessageSentResponse SendContactInfo (string token, SendContactInfoRequest sendContactInfoRequest = null)

Request the user's phone number

Send a service-window interactive message that asks the WhatsApp user to share their phone number (`request_contact_info`).  Use this when you only know the user by BSUID (WhatsApp username) and the 24-hour customer service window is open. Outside that window, create a UTILITY or MARKETING template with a `REQUEST_CONTACT_INFO` button (`POST /addTemplate`) and send it with `POST /sendTemplate`.  `body` is the text shown above the button (1–1024 characters). WhatsApp chooses the button label. This method has no button-text field — do not send one.  ```json {   \"bsuid\": \"US.13491208655302741918\",   \"body\": \"Please share your phone number so we can reach you.\" } ```  `phone`, `chatId` (`…@c.us`, `…@lid`, `…@username`), or `bsuid` identifies the recipient. One of them is enough.  After Meta accepts the send, the outgoing webhook and stored history message use this same text as `messages[].body` (`type: interactive`).  When the user taps the button, Meta sends an inbound `contacts` message. The sender stays the BSUID. The shared number is on the card with `origin: contact_request`. We write that phone onto the existing BSUID contact automatically — there is no separate “link phone” call.  ```json {   \"contacts\": [     {       \"profile\": { \"name\": \"Ada\", \"username\": \"ada\" },       \"user_id\": \"US.13491208655302741918\"     }   ],   \"messages\": [     {       \"from_user_id\": \"US.13491208655302741918\",       \"type\": \"contacts\",       \"contacts\": [         {           \"origin\": \"contact_request\",           \"phones\": [{ \"phone\": \"+1 202-555-0123\", \"wa_id\": \"12025550123\" }]         }       ]     }   ] } ```  The stored inbound message body is the digits (`12025550123`).  If Meta later includes a phone on an ordinary message or status for that same BSUID (`wa_id`, `from`, or `recipient_id`, together with `user_id` / `recipient_user_id`), that phone is merged onto the same contact. A contact card the user forwards (`origin` other than `contact_request`) is someone else's number and is not stored as this sender's phone. 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class SendContactInfoExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var sendContactInfoRequest = new SendContactInfoRequest(); // SendContactInfoRequest |  (optional) 

            try
            {
                // Request the user's phone number
                MessageSentResponse result = apiInstance.SendContactInfo(token, sendContactInfoRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.SendContactInfo: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SendContactInfoWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Request the user's phone number
    ApiResponse<MessageSentResponse> response = apiInstance.SendContactInfoWithHttpInfo(token, sendContactInfoRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.SendContactInfoWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **sendContactInfoRequest** | [**SendContactInfoRequest**](SendContactInfoRequest.md) |  | [optional]  |

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
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="sendctaurl"></a>
# **SendCtaUrl**
> MessageSentResponse SendCtaUrl (string token, SendCtaUrlRequest sendCtaUrlRequest)

Send CTA URL interactive message

Send an interactive message with a single call-to-action URL button.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class SendCtaUrlExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var sendCtaUrlRequest = new SendCtaUrlRequest(); // SendCtaUrlRequest | 

            try
            {
                // Send CTA URL interactive message
                MessageSentResponse result = apiInstance.SendCtaUrl(token, sendCtaUrlRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.SendCtaUrl: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SendCtaUrlWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send CTA URL interactive message
    ApiResponse<MessageSentResponse> response = apiInstance.SendCtaUrlWithHttpInfo(token, sendCtaUrlRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.SendCtaUrlWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **sendCtaUrlRequest** | [**SendCtaUrlRequest**](SendCtaUrlRequest.md) |  |  |

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
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="sendfile"></a>
# **SendFile**
> MessageSentResponse SendFile (string token, string body = null, string filename = null, string mediaId = null, string mediaType = null, bool? voice = null, string caption = null, string quotedMsgId = null, string chatId = null, int? phone = null)

Send a File

Send a file to an existing chat. (Only if the dialogue has an Open Session).  Only one of two parameters is needed to determine the destination - chatId or phone. 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class SendFileExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var body = "body_example";  // string | File source (required unless mediaId is set): - HTTP/HTTPS URL - Base64 data URI  (optional) 
            var filename = "filename_example";  // string | File name with extension (required with body, not with mediaId) (optional) 
            var mediaId = "mediaId_example";  // string | WABA media id from uploadMedia (alternative to body) (optional) 
            var mediaType = "image";  // string | Required when using mediaId (optional) 
            var voice = true;  // bool? | Native WhatsApp voice note (audio/ogg only) (optional) 
            var caption = "caption_example";  // string |  (optional) 
            var quotedMsgId = "quotedMsgId_example";  // string |  (optional) 
            var chatId = "chatId_example";  // string |  (optional) 
            var phone = 56;  // int? |  (optional) 

            try
            {
                // Send a File
                MessageSentResponse result = apiInstance.SendFile(token, body, filename, mediaId, mediaType, voice, caption, quotedMsgId, chatId, phone);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.SendFile: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SendFileWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send a File
    ApiResponse<MessageSentResponse> response = apiInstance.SendFileWithHttpInfo(token, body, filename, mediaId, mediaType, voice, caption, quotedMsgId, chatId, phone);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.SendFileWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **body** | **string** | File source (required unless mediaId is set): - HTTP/HTTPS URL - Base64 data URI  | [optional]  |
| **filename** | **string** | File name with extension (required with body, not with mediaId) | [optional]  |
| **mediaId** | **string** | WABA media id from uploadMedia (alternative to body) | [optional]  |
| **mediaType** | **string** | Required when using mediaId | [optional]  |
| **voice** | **bool?** | Native WhatsApp voice note (audio/ogg only) | [optional]  |
| **caption** | **string** |  | [optional]  |
| **quotedMsgId** | **string** |  | [optional]  |
| **chatId** | **string** |  | [optional]  |
| **phone** | **int?** |  | [optional]  |

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
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="sendflow"></a>
# **SendFlow**
> MessageSentResponse SendFlow (string token, string body, string flowId, string flowToken, string flowCta, SendFlowRequestHeader header = null, string footer = null, string flowAction = null, Object flowActionPayload = null, string flowMessageVersion = null, string mode = null, Object flowActionData = null, string flowActionScreen = null, string quotedMsgId = null, string chatId = null, int? phone = null)

Send WhatsApp Flow Message

Send Interactive WhatsApp Flow message to an existing chat. (Only if the dialogue has an Open Session).  Only one of two parameters is needed to determine the destination - chatId or phone.  Use this method to send a published WhatsApp Flow as a service (interactive) message.  If the 24-hour window is closed, send a template with a FLOW button via /sendTemplate. 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class SendFlowExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var body = "body_example";  // string | Flow message body text
            var flowId = "flowId_example";  // string | Published Flow ID
            var flowToken = "flowToken_example";  // string | Flow token generated by the business
            var flowCta = "flowCta_example";  // string | CTA button text
            var header = new SendFlowRequestHeader(); // SendFlowRequestHeader |  (optional) 
            var footer = "footer_example";  // string | Footer text (optional) 
            var flowAction = "navigate";  // string | Flow action type (optional) 
            var flowActionPayload = new Object(); // Object | Required for flowAction=navigate (screen is required). Ignored for data_exchange. If data is provided, it must be a non-empty object. (optional) 
            var flowMessageVersion = "flowMessageVersion_example";  // string | Flow message version (default \\\"3\\\") (optional) 
            var mode = "draft";  // string | Flow mode (draft or published). If omitted, provider default applies (optional) 
            var flowActionData = new Object(); // Object | Shortcut for flowActionPayload.data (optional) (optional) 
            var flowActionScreen = "flowActionScreen_example";  // string | Shortcut for flowActionPayload.screen (optional) (optional) 
            var quotedMsgId = "quotedMsgId_example";  // string | Quoted message ID (Cloud API) (optional) 
            var chatId = "chatId_example";  // string | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) (optional) 
            var phone = 56;  // int? | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. (optional) 

            try
            {
                // Send WhatsApp Flow Message
                MessageSentResponse result = apiInstance.SendFlow(token, body, flowId, flowToken, flowCta, header, footer, flowAction, flowActionPayload, flowMessageVersion, mode, flowActionData, flowActionScreen, quotedMsgId, chatId, phone);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.SendFlow: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SendFlowWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send WhatsApp Flow Message
    ApiResponse<MessageSentResponse> response = apiInstance.SendFlowWithHttpInfo(token, body, flowId, flowToken, flowCta, header, footer, flowAction, flowActionPayload, flowMessageVersion, mode, flowActionData, flowActionScreen, quotedMsgId, chatId, phone);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.SendFlowWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **body** | **string** | Flow message body text |  |
| **flowId** | **string** | Published Flow ID |  |
| **flowToken** | **string** | Flow token generated by the business |  |
| **flowCta** | **string** | CTA button text |  |
| **header** | [**SendFlowRequestHeader**](SendFlowRequestHeader.md) |  | [optional]  |
| **footer** | **string** | Footer text | [optional]  |
| **flowAction** | **string** | Flow action type | [optional]  |
| **flowActionPayload** | [**Object**](Object.md) | Required for flowAction&#x3D;navigate (screen is required). Ignored for data_exchange. If data is provided, it must be a non-empty object. | [optional]  |
| **flowMessageVersion** | **string** | Flow message version (default \\\&quot;3\\\&quot;) | [optional]  |
| **mode** | **string** | Flow mode (draft or published). If omitted, provider default applies | [optional]  |
| **flowActionData** | [**Object**](Object.md) | Shortcut for flowActionPayload.data (optional) | [optional]  |
| **flowActionScreen** | **string** | Shortcut for flowActionPayload.screen (optional) | [optional]  |
| **quotedMsgId** | **string** | Quoted message ID (Cloud API) | [optional]  |
| **chatId** | **string** | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) | [optional]  |
| **phone** | **int?** | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. | [optional]  |

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
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="sendlist"></a>
# **SendList**
> MessageSentResponse SendList (string token, SendListRequest sendListRequest = null)

Send List Message

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class SendListExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var sendListRequest = new SendListRequest(); // SendListRequest |  (optional) 

            try
            {
                // Send List Message
                MessageSentResponse result = apiInstance.SendList(token, sendListRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.SendList: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SendListWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send List Message
    ApiResponse<MessageSentResponse> response = apiInstance.SendListWithHttpInfo(token, sendListRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.SendListWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **sendListRequest** | [**SendListRequest**](SendListRequest.md) |  | [optional]  |

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
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="sendlocation"></a>
# **SendLocation**
> MessageSentResponse SendLocation (string token, string lat, string lng, string address = null, string name = null, string quotedMsgId = null, string chatId = null, int? phone = null)

Send a Location

Send a location to an existing chat. (Only if the dialogue has an Open Session).  Only one of two parameters is needed to determine the destination - chatId or phone. 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class SendLocationExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var lat = "lat_example";  // string | Latitude of the location. Example: 45.018337
            var lng = "lng_example";  // string | Longitude of the location. Example: -73.968285
            var address = "address_example";  // string | Address of the location. Only displayed if name is present. Example: 9766 Valley View St., New York, NY 10024 (optional) 
            var name = "name_example";  // string | Name of the location. Example: Facebook HQ (optional) 
            var quotedMsgId = "quotedMsgId_example";  // string | Quoted message ID (Cloud API) (optional) 
            var chatId = "chatId_example";  // string | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) (optional) 
            var phone = 56;  // int? | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. (optional) 

            try
            {
                // Send a Location
                MessageSentResponse result = apiInstance.SendLocation(token, lat, lng, address, name, quotedMsgId, chatId, phone);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.SendLocation: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SendLocationWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send a Location
    ApiResponse<MessageSentResponse> response = apiInstance.SendLocationWithHttpInfo(token, lat, lng, address, name, quotedMsgId, chatId, phone);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.SendLocationWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **lat** | **string** | Latitude of the location. Example: 45.018337 |  |
| **lng** | **string** | Longitude of the location. Example: -73.968285 |  |
| **address** | **string** | Address of the location. Only displayed if name is present. Example: 9766 Valley View St., New York, NY 10024 | [optional]  |
| **name** | **string** | Name of the location. Example: Facebook HQ | [optional]  |
| **quotedMsgId** | **string** | Quoted message ID (Cloud API) | [optional]  |
| **chatId** | **string** | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) | [optional]  |
| **phone** | **int?** | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. | [optional]  |

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
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="sendlocationrequest"></a>
# **SendLocationRequest**
> MessageSentResponse SendLocationRequest (string token, SendLocationRequestRequest sendLocationRequestRequest = null)

Send Location Request Message

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class SendLocationRequestExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var sendLocationRequestRequest = new SendLocationRequestRequest(); // SendLocationRequestRequest |  (optional) 

            try
            {
                // Send Location Request Message
                MessageSentResponse result = apiInstance.SendLocationRequest(token, sendLocationRequestRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.SendLocationRequest: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SendLocationRequestWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send Location Request Message
    ApiResponse<MessageSentResponse> response = apiInstance.SendLocationRequestWithHttpInfo(token, sendLocationRequestRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.SendLocationRequestWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **sendLocationRequestRequest** | [**SendLocationRequestRequest**](SendLocationRequestRequest.md) |  | [optional]  |

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
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="sendmessage"></a>
# **SendMessage**
> MessageSentResponse SendMessage (string token, string body, string quotedMsgId = null, string chatId = null, int? phone = null, string category = null, SendMessageRequestDirectSend directSend = null)

Send a Message

Send a message to an existing chat. (Only if the dialogue has an Open Session).  The message will be added to the queue for sending and delivered even if the phone  is disconnected from the Internet or authorization is not passed.  Only one of two parameters is needed to determine the destination - chatId or phone.  Direct Send is in beta. Meta has not enabled it on every business portfolio, so `category` and `directSend` are a beta option: watch delivery errors before relying on them.  Set `category` to `utility` or `authentication` to send outside the 24-hour window as a Meta Direct Send template instead of the 1MSG marketing auto-template. `authentication` is part of that beta and is not recommended. `directSend.serviceFirst: true` tries a free service message first and uses Direct Send only when Meta rejects it because the window is closed (131047). `directSend.templateName` is only valid with `utility` (`^[a-z0-9_]+$`, max 512). Direct Send text is limited to 1024 characters. Without `templateName`, the first unseen phrase may be delivered as Meta's onboarding template. A named template does not guarantee delivery — wait for webhook errors 131000 or 132021. An open 24-hour window is still billed as utility when `category` is set and `serviceFirst` is not true. 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class SendMessageExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var body = "body_example";  // string | Message text, UTF-8 or UTF-16 string with emoji
            var quotedMsgId = "quotedMsgId_example";  // string | Message ID to quote/reply to (Cloud API wamid) (optional) 
            var chatId = "chatId_example";  // string | Recipient chat ID: phone@c.us, group@g.us, or BSUID@lid (optional) 
            var phone = 56;  // int? | Phone number starting with country code (alternative to chatId) (optional) 
            var category = "utility";  // string | Optional Direct Send category. Direct Send is in beta: Meta has not enabled it on every business portfolio. `utility` or `authentication` enables it. `authentication` is part of that beta and is not recommended. Omit or `service` keeps a normal service message (and the marketing auto-template outside the 24-hour window). `marketing` is rejected.  (optional) 
            var directSend = new SendMessageRequestDirectSend(); // SendMessageRequestDirectSend |  (optional) 

            try
            {
                // Send a Message
                MessageSentResponse result = apiInstance.SendMessage(token, body, quotedMsgId, chatId, phone, category, directSend);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.SendMessage: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SendMessageWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send a Message
    ApiResponse<MessageSentResponse> response = apiInstance.SendMessageWithHttpInfo(token, body, quotedMsgId, chatId, phone, category, directSend);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.SendMessageWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **body** | **string** | Message text, UTF-8 or UTF-16 string with emoji |  |
| **quotedMsgId** | **string** | Message ID to quote/reply to (Cloud API wamid) | [optional]  |
| **chatId** | **string** | Recipient chat ID: phone@c.us, group@g.us, or BSUID@lid | [optional]  |
| **phone** | **int?** | Phone number starting with country code (alternative to chatId) | [optional]  |
| **category** | **string** | Optional Direct Send category. Direct Send is in beta: Meta has not enabled it on every business portfolio. &#x60;utility&#x60; or &#x60;authentication&#x60; enables it. &#x60;authentication&#x60; is part of that beta and is not recommended. Omit or &#x60;service&#x60; keeps a normal service message (and the marketing auto-template outside the 24-hour window). &#x60;marketing&#x60; is rejected.  | [optional]  |
| **directSend** | [**SendMessageRequestDirectSend**](SendMessageRequestDirectSend.md) |  | [optional]  |

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
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="sendorderdetails"></a>
# **SendOrderDetails**
> MessageSentResponse SendOrderDetails (string token, SendOrderDetailsRequest sendOrderDetailsRequest)

Send order details (India payments template)

Send a WhatsApp **order details** payment / invoice message using a pre-approved **Utility** template that has an `ORDER_DETAILS` button.  **India only** (WhatsApp Payments India). Requires: - India WhatsApp Business number - Commerce enabled on the channel (`GET`/`POST /commerce`) - Approved template with an `ORDER_DETAILS` button  Use this method when you need structured fields (`order`, `referenceId`, `currency`, `paymentSettings`). The API appends a template button `sub_type: order_details` and sends via the same path as `POST /sendTemplate`.  Works **outside the 24-hour session window** (template message).  You can also send the same payload yourself with `POST /sendTemplate` by including a button component in `params`:  ```json {   \"type\": \"button\",   \"sub_type\": \"order_details\",   \"index\": 0,   \"parameters\": [{     \"type\": \"action\",     \"action\": {       \"order_details\": {         \"reference_id\": \"order-123\",         \"currency\": \"INR\",         \"order\": { \"status\": \"pending\", \"items\": [], \"subtotal\": { \"offset\": 100, \"value\": 50000 } }       }     }   }] } ``` 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class SendOrderDetailsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var sendOrderDetailsRequest = new SendOrderDetailsRequest(); // SendOrderDetailsRequest | 

            try
            {
                // Send order details (India payments template)
                MessageSentResponse result = apiInstance.SendOrderDetails(token, sendOrderDetailsRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.SendOrderDetails: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SendOrderDetailsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send order details (India payments template)
    ApiResponse<MessageSentResponse> response = apiInstance.SendOrderDetailsWithHttpInfo(token, sendOrderDetailsRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.SendOrderDetailsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **sendOrderDetailsRequest** | [**SendOrderDetailsRequest**](SendOrderDetailsRequest.md) |  |  |

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
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="sendpaymentrequest"></a>
# **SendPaymentRequest**
> MessageSentResponse SendPaymentRequest (string token, SendPaymentRequestRequest sendPaymentRequestRequest)

Send payment request (regional)

Send a regional payment request interactive message (beta scaffold). `region` must be IN, SG, or BR. Payload shape follows Meta regional payments docs; verify on stage before production use. Full regional builders are not implemented yet. 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class SendPaymentRequestExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var sendPaymentRequestRequest = new SendPaymentRequestRequest(); // SendPaymentRequestRequest | 

            try
            {
                // Send payment request (regional)
                MessageSentResponse result = apiInstance.SendPaymentRequest(token, sendPaymentRequestRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.SendPaymentRequest: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SendPaymentRequestWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send payment request (regional)
    ApiResponse<MessageSentResponse> response = apiInstance.SendPaymentRequestWithHttpInfo(token, sendPaymentRequestRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.SendPaymentRequestWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **sendPaymentRequestRequest** | [**SendPaymentRequestRequest**](SendPaymentRequestRequest.md) |  |  |

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
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="sendproduct"></a>
# **SendProduct**
> MessageSentResponse SendProduct (string token, SendProductRequest sendProductRequest)

Send a Product

Send a single catalog product or a product list. Destination is `chatId` or `phone`. `action` is required: - single product: `{ \"catalog_id\": \"...\", \"product_retailer_id\": \"...\" }` - product list: `{ \"catalog_id\": \"...\", \"sections\": [{ \"title\": \"...\", \"product_items\": [{ \"product_retailer_id\": \"...\" }] }] }` 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class SendProductExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var sendProductRequest = new SendProductRequest(); // SendProductRequest | 

            try
            {
                // Send a Product
                MessageSentResponse result = apiInstance.SendProduct(token, sendProductRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.SendProduct: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SendProductWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send a Product
    ApiResponse<MessageSentResponse> response = apiInstance.SendProductWithHttpInfo(token, sendProductRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.SendProductWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **sendProductRequest** | [**SendProductRequest**](SendProductRequest.md) |  |  |

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
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="sendreaction"></a>
# **SendReaction**
> MessageSentResponse SendReaction (string token, SendReactionRequest sendReactionRequest = null)

Send Reaction

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class SendReactionExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var sendReactionRequest = new SendReactionRequest(); // SendReactionRequest |  (optional) 

            try
            {
                // Send Reaction
                MessageSentResponse result = apiInstance.SendReaction(token, sendReactionRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.SendReaction: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SendReactionWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send Reaction
    ApiResponse<MessageSentResponse> response = apiInstance.SendReactionWithHttpInfo(token, sendReactionRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.SendReactionWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **sendReactionRequest** | [**SendReactionRequest**](SendReactionRequest.md) |  | [optional]  |

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
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="sendsticker"></a>
# **SendSticker**
> MessageSentResponse SendSticker (string token, SendStickerRequest sendStickerRequest)

Send sticker message

Send a WhatsApp sticker by mediaId or link URL.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class SendStickerExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new MessagingApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var sendStickerRequest = new SendStickerRequest(); // SendStickerRequest | 

            try
            {
                // Send sticker message
                MessageSentResponse result = apiInstance.SendSticker(token, sendStickerRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MessagingApi.SendSticker: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SendStickerWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send sticker message
    ApiResponse<MessageSentResponse> response = apiInstance.SendStickerWithHttpInfo(token, sendStickerRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MessagingApi.SendStickerWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **sendStickerRequest** | [**SendStickerRequest**](SendStickerRequest.md) |  |  |

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
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

