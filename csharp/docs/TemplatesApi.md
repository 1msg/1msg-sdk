# OneMsg.ChatApi.Api.TemplatesApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ListTemplates**](TemplatesApi.md#listtemplates) | **GET** /templates | Get templates list |
| [**SendTemplate**](TemplatesApi.md#sendtemplate) | **POST** /sendTemplate | Send Template Message |

<a id="listtemplates"></a>
# **ListTemplates**
> ListTemplates200Response ListTemplates (string token)

Get templates list

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
    public class ListTemplatesExample
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
            var apiInstance = new TemplatesApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization

            try
            {
                // Get templates list
                ListTemplates200Response result = apiInstance.ListTemplates(token);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TemplatesApi.ListTemplates: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListTemplatesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get templates list
    ApiResponse<ListTemplates200Response> response = apiInstance.ListTemplatesWithHttpInfo(token);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TemplatesApi.ListTemplatesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |

### Return type

[**ListTemplates200Response**](ListTemplates200Response.md)

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

<a id="sendtemplate"></a>
# **SendTemplate**
> Dictionary&lt;string, Object&gt; SendTemplate (string token, SendTemplateRequest sendTemplateRequest = null)

Send Template Message

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
    public class SendTemplateExample
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
            var apiInstance = new TemplatesApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var sendTemplateRequest = new SendTemplateRequest(); // SendTemplateRequest |  (optional) 

            try
            {
                // Send Template Message
                Dictionary<string, Object> result = apiInstance.SendTemplate(token, sendTemplateRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TemplatesApi.SendTemplate: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SendTemplateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send Template Message
    ApiResponse<Dictionary<string, Object>> response = apiInstance.SendTemplateWithHttpInfo(token, sendTemplateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TemplatesApi.SendTemplateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **sendTemplateRequest** | [**SendTemplateRequest**](SendTemplateRequest.md) |  | [optional]  |

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
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

