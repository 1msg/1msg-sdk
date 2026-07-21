# OneMsg.ChatApi.Api.ProfileApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetMe**](ProfileApi.md#getme) | **GET** /me | Get Profile Info |

<a id="getme"></a>
# **GetMe**
> ProfileInfo GetMe (string token)

Get Profile Info

Get WhatsApp Business Account profile information

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.ChatApi.Api;
using OneMsg.ChatApi.Client;
using OneMsg.ChatApi.Model;

namespace Example
{
    public class GetMeExample
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
            var apiInstance = new ProfileApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization

            try
            {
                // Get Profile Info
                ProfileInfo result = apiInstance.GetMe(token);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProfileApi.GetMe: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetMeWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Profile Info
    ApiResponse<ProfileInfo> response = apiInstance.GetMeWithHttpInfo(token);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProfileApi.GetMeWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |

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
| **200** | Profile information |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

