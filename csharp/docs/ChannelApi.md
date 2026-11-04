# OneMsg.Sdk.Api.ChannelApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateSettings**](ChannelApi.md#createsettings) | **POST** /settings | Update channel settings |
| [**GetConversationalAutomation**](ChannelApi.md#getconversationalautomation) | **GET** /conversationalAutomation | Get conversational automation settings |
| [**GetStatus**](ChannelApi.md#getstatus) | **GET** /status | Get channel status |
| [**ListSettings**](ChannelApi.md#listsettings) | **GET** /settings | Get channel settings |
| [**SetConversationalAutomation**](ChannelApi.md#setconversationalautomation) | **POST** /conversationalAutomation | Set conversational automation settings |

<a id="createsettings"></a>
# **CreateSettings**
> Dictionary&lt;string, Object&gt; CreateSettings (string token, CreateSettingsRequest createSettingsRequest)

Update channel settings

Update channel settings. Only send fields you want to change.  `webhookUrl` **replaces** the stored list (one URL string, or up to 5 URLs as an array). Passing an empty value clears webhooks. Repeating the same URL(s) also clears a sticky auto-disable. With several URLs, send the complete array to re-enable one of them — omitting a URL removes it from the channel. 

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
    public class CreateSettingsExample
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
            var apiInstance = new ChannelApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var createSettingsRequest = new CreateSettingsRequest(); // CreateSettingsRequest | 

            try
            {
                // Update channel settings
                Dictionary<string, Object> result = apiInstance.CreateSettings(token, createSettingsRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ChannelApi.CreateSettings: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateSettingsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update channel settings
    ApiResponse<Dictionary<string, Object>> response = apiInstance.CreateSettingsWithHttpInfo(token, createSettingsRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ChannelApi.CreateSettingsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **createSettingsRequest** | [**CreateSettingsRequest**](CreateSettingsRequest.md) |  |  |

### Return type

**Dictionary<string, Object>**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated settings |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getconversationalautomation"></a>
# **GetConversationalAutomation**
> ConversationalAutomation GetConversationalAutomation (string token)

Get conversational automation settings

Get WhatsApp conversational components for the channel (welcome message, ice-breaker prompts, and slash commands).  Proxies Meta/360dialog `GET /conversational_automation`.  When `enable_welcome_message` is true and a user opens chat for the first time, Meta delivers a webhook message with `type: request_welcome`. The inbound formatter exposes that as `type: \"request_welcome\"` and `meta.request_welcome: true` so your webhook can send a custom welcome reply. 

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
    public class GetConversationalAutomationExample
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
            var apiInstance = new ChannelApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization

            try
            {
                // Get conversational automation settings
                ConversationalAutomation result = apiInstance.GetConversationalAutomation(token);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ChannelApi.GetConversationalAutomation: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetConversationalAutomationWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get conversational automation settings
    ApiResponse<ConversationalAutomation> response = apiInstance.GetConversationalAutomationWithHttpInfo(token);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ChannelApi.GetConversationalAutomationWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |

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
| **200** | Conversational automation settings |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getstatus"></a>
# **GetStatus**
> GetStatus200Response GetStatus (string token)

Get channel status

Return WhatsApp Cloud API connection status for this channel (`connected` when the number can send). May include `accountStatus`, messaging limit, and MM Lite availability.  Optional `health_status_warning` appears only when Meta Graph health could not be loaded and a soft `connected` response is returned. Omitted on the normal path and when health details are not applicable for the channel — never an internal provider/transport name. 

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
    public class GetStatusExample
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
            var apiInstance = new ChannelApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization

            try
            {
                // Get channel status
                GetStatus200Response result = apiInstance.GetStatus(token);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ChannelApi.GetStatus: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetStatusWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get channel status
    ApiResponse<GetStatus200Response> response = apiInstance.GetStatusWithHttpInfo(token);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ChannelApi.GetStatusWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |

### Return type

[**GetStatus200Response**](GetStatus200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Channel status |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listsettings"></a>
# **ListSettings**
> ListSettings200Response ListSettings (string token)

Get channel settings

Return channel settings: webhook URL(s), delivery flags, and analytics toggles.  Auto-disable / circuit state matches `GET /webhook`. **Prefer `webhookStatuses`** (one row per configured URL). The breaker is per URL, not per channel.  Channel-level `haveDisabledWebhooks` is `true` when **at least one** URL in `webhookUrl` is sticky auto-disabled — not \"the channel is dead\". Live URLs still receive events. Top-level `circuitState` / `reason` / `fails` / `trips` are a compatibility summary of one URL (first sticky-disabled, else first configured).  This is the same `GET /settings` endpoint as the REST API (previously missing from MCP). 

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
    public class ListSettingsExample
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
            var apiInstance = new ChannelApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization

            try
            {
                // Get channel settings
                ListSettings200Response result = apiInstance.ListSettings(token);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ChannelApi.ListSettings: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListSettingsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get channel settings
    ApiResponse<ListSettings200Response> response = apiInstance.ListSettingsWithHttpInfo(token);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ChannelApi.ListSettingsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |

### Return type

[**ListSettings200Response**](ListSettings200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current settings |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="setconversationalautomation"></a>
# **SetConversationalAutomation**
> Dictionary&lt;string, Object&gt; SetConversationalAutomation (string token, ConversationalAutomation conversationalAutomation)

Set conversational automation settings

Update WhatsApp conversational components.  Allowed body fields (others are ignored): - `enable_welcome_message` (boolean) - `prompts` (string[], max 4, each ≤ 80 chars) - `commands` (`{ command_name, command_description }[]`)  Proxies Meta/360dialog `POST /conversational_automation`. 

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
    public class SetConversationalAutomationExample
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
            var apiInstance = new ChannelApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var conversationalAutomation = new ConversationalAutomation(); // ConversationalAutomation | 

            try
            {
                // Set conversational automation settings
                Dictionary<string, Object> result = apiInstance.SetConversationalAutomation(token, conversationalAutomation);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ChannelApi.SetConversationalAutomation: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SetConversationalAutomationWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Set conversational automation settings
    ApiResponse<Dictionary<string, Object>> response = apiInstance.SetConversationalAutomationWithHttpInfo(token, conversationalAutomation);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ChannelApi.SetConversationalAutomationWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **conversationalAutomation** | [**ConversationalAutomation**](ConversationalAutomation.md) |  |  |

### Return type

**Dictionary<string, Object>**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated settings from WABA, or legacy response.error wrapper on upstream failure.  |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

