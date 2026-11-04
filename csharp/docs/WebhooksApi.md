# OneMsg.Sdk.Api.WebhooksApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetWebhook**](WebhooksApi.md#getwebhook) | **GET** /webhook | Get webhook URL |
| [**SetWebhook**](WebhooksApi.md#setwebhook) | **POST** /webhook | Set webhook URL |

<a id="getwebhook"></a>
# **GetWebhook**
> GetWebhook200Response GetWebhook (string token)

Get webhook URL

Return the webhook URL(s) currently configured for this channel, plus delivery status for each URL.  `webhookUrl` is a string when a single URL is set, an array of strings when multiple URLs are configured, or `null` if none is set.  **Prefer `webhookStatuses`.** The circuit breaker is per URL, not per channel. If 1 of 4 URLs is sticky-disabled, that URL is skipped; the other three still receive events. Send/receive are not affected.  Channel-level `haveDisabledWebhooks`, `circuitState`, `reason`, `fails`, `trips`, and timestamps are a compatibility summary of **one** URL (the first sticky-disabled URL, else the first configured URL). They are not \"the channel is dead\".  - `haveDisabledWebhooks` — `true` when **at least one** URL in `webhookUrl` is   sticky auto-disabled. Live URLs still get events. - `circuitState` — compressed scalar for that same primary URL:   `ok` | `degraded` | `open` | `half_open` | `disabled`. - `disabledWebhooks` — currently configured URLs that are sticky-disabled   (subset of `webhookUrl`). - `webhookStatuses` — one row per currently configured URL. Use this array   to see which endpoints are live vs skipped. - `fails` / `trips` / `firstFailAt` — **diagnostics for support**, not product   UI. `fails` = failures in a rolling ~10 minute window (not lifetime).   `trips` = failed recovery probes on the 15 min → 1 h → 6 h schedule (sticky   disable after 3). Clients can ignore these and use `webhookStatuses` +   `disabledWebhooks` only.  Sticky disable skips delivery; it does not unconfigure the URL (it stays in `webhookUrl`). Re-enable with `POST /webhook` or `POST /settings`. Those endpoints **replace** the whole list — with multiple URLs, send the full array. 

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
    public class GetWebhookExample
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
            var apiInstance = new WebhooksApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization

            try
            {
                // Get webhook URL
                GetWebhook200Response result = apiInstance.GetWebhook(token);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling WebhooksApi.GetWebhook: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetWebhookWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get webhook URL
    ApiResponse<GetWebhook200Response> response = apiInstance.GetWebhookWithHttpInfo(token);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling WebhooksApi.GetWebhookWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |

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
| **200** | Current webhook URL and per-URL circuit status |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="setwebhook"></a>
# **SetWebhook**
> SetWebhook200Response SetWebhook (string token, SetWebhookRequest setWebhookRequest)

Set webhook URL

Set the client webhook URL that receives inbound events for this channel.  **Replaces** the stored webhook list (it does not append). To deliver the same events to several endpoints, pass an array in `webhookUrl` (max 5) or use `POST /settings`. With several URLs already configured, posting only the disabled URL **drops the others** — send the complete array to re-enable one of many.  Incoming payloads include messages, delivery ACKs, group updates, coexistence echoes, and calling events. WhatsApp Calling payloads (`type: \"calls\"`) are documented under the **Calling** tag. Call permission replies arrive on the normal messages path (`call_permission_reply`).  Repeating `POST /webhook` with the same URL(s) clears an auto-disable (self-serve re-enable). Send/receive are not affected by webhook auto-disable. 

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
    public class SetWebhookExample
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
            var apiInstance = new WebhooksApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var setWebhookRequest = new SetWebhookRequest(); // SetWebhookRequest | 

            try
            {
                // Set webhook URL
                SetWebhook200Response result = apiInstance.SetWebhook(token, setWebhookRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling WebhooksApi.SetWebhook: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SetWebhookWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Set webhook URL
    ApiResponse<SetWebhook200Response> response = apiInstance.SetWebhookWithHttpInfo(token, setWebhookRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling WebhooksApi.SetWebhookWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **setWebhookRequest** | [**SetWebhookRequest**](SetWebhookRequest.md) |  |  |

### Return type

[**SetWebhook200Response**](SetWebhook200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook configured |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

