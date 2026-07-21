# OneMsg.ChatApi.Api.FlowsApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateFlows**](FlowsApi.md#createflows) | **POST** /flows | Create Flow |
| [**CreateFlowsFlowIdDeprecate**](FlowsApi.md#createflowsflowiddeprecate) | **POST** /flows/{flowId}/deprecate | Deprecate Flow |
| [**CreateFlowsFlowIdPublish**](FlowsApi.md#createflowsflowidpublish) | **POST** /flows/{flowId}/publish | Publish Flow |
| [**DeleteFlowsFlowId**](FlowsApi.md#deleteflowsflowid) | **DELETE** /flows/{flowId} | Delete Flow |
| [**GetFlowsFlowId**](FlowsApi.md#getflowsflowid) | **GET** /flows/{flowId} | Get Flow Details |
| [**GetFlowsFlowIdPreview**](FlowsApi.md#getflowsflowidpreview) | **GET** /flows/{flowId}/preview | Preview Flow |
| [**GetWhatsappBusinessEncryption**](FlowsApi.md#getwhatsappbusinessencryption) | **GET** /whatsapp_business_encryption | Get business encryption public key |
| [**ListFlows**](FlowsApi.md#listflows) | **GET** /flows | List Flows |
| [**PatchFlowsFlowIdAssets**](FlowsApi.md#patchflowsflowidassets) | **PATCH** /flows/{flowId}/assets | Update Flow Structure |
| [**PatchFlowsFlowIdMetadata**](FlowsApi.md#patchflowsflowidmetadata) | **PATCH** /flows/{flowId}/metadata | Update Flow Metadata |
| [**SetWhatsappBusinessEncryption**](FlowsApi.md#setwhatsappbusinessencryption) | **POST** /whatsapp_business_encryption | Set business encryption public key |

<a id="createflows"></a>
# **CreateFlows**
> CreateGroups200Response CreateFlows (string token, string wabaAccountId = null)

Create Flow

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
    public class CreateFlowsExample
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
            var apiInstance = new FlowsApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var wabaAccountId = {{wabaAccountId}};  // string |  (optional) 

            try
            {
                // Create Flow
                CreateGroups200Response result = apiInstance.CreateFlows(token, wabaAccountId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FlowsApi.CreateFlows: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateFlowsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create Flow
    ApiResponse<CreateGroups200Response> response = apiInstance.CreateFlowsWithHttpInfo(token, wabaAccountId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FlowsApi.CreateFlowsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **wabaAccountId** | **string** |  | [optional]  |

### Return type

[**CreateGroups200Response**](CreateGroups200Response.md)

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

<a id="createflowsflowiddeprecate"></a>
# **CreateFlowsFlowIdDeprecate**
> Dictionary&lt;string, Object&gt; CreateFlowsFlowIdDeprecate (string flowId, string token, string wabaAccountId = null)

Deprecate Flow

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
    public class CreateFlowsFlowIdDeprecateExample
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
            var apiInstance = new FlowsApi(httpClient, config, httpClientHandler);
            var flowId = "flowId_example";  // string | Flow ID
            var token = "token_example";  // string | JWT token or API key for authorization
            var wabaAccountId = {{wabaAccountId}};  // string |  (optional) 

            try
            {
                // Deprecate Flow
                Dictionary<string, Object> result = apiInstance.CreateFlowsFlowIdDeprecate(flowId, token, wabaAccountId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FlowsApi.CreateFlowsFlowIdDeprecate: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateFlowsFlowIdDeprecateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Deprecate Flow
    ApiResponse<Dictionary<string, Object>> response = apiInstance.CreateFlowsFlowIdDeprecateWithHttpInfo(flowId, token, wabaAccountId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FlowsApi.CreateFlowsFlowIdDeprecateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **flowId** | **string** | Flow ID |  |
| **token** | **string** | JWT token or API key for authorization |  |
| **wabaAccountId** | **string** |  | [optional]  |

### Return type

**Dictionary<string, Object>**

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

<a id="createflowsflowidpublish"></a>
# **CreateFlowsFlowIdPublish**
> Dictionary&lt;string, Object&gt; CreateFlowsFlowIdPublish (string flowId, string token, string wabaAccountId = null)

Publish Flow

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
    public class CreateFlowsFlowIdPublishExample
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
            var apiInstance = new FlowsApi(httpClient, config, httpClientHandler);
            var flowId = "flowId_example";  // string | Flow ID
            var token = "token_example";  // string | JWT token or API key for authorization
            var wabaAccountId = {{wabaAccountId}};  // string |  (optional) 

            try
            {
                // Publish Flow
                Dictionary<string, Object> result = apiInstance.CreateFlowsFlowIdPublish(flowId, token, wabaAccountId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FlowsApi.CreateFlowsFlowIdPublish: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateFlowsFlowIdPublishWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Publish Flow
    ApiResponse<Dictionary<string, Object>> response = apiInstance.CreateFlowsFlowIdPublishWithHttpInfo(flowId, token, wabaAccountId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FlowsApi.CreateFlowsFlowIdPublishWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **flowId** | **string** | Flow ID |  |
| **token** | **string** | JWT token or API key for authorization |  |
| **wabaAccountId** | **string** |  | [optional]  |

### Return type

**Dictionary<string, Object>**

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

<a id="deleteflowsflowid"></a>
# **DeleteFlowsFlowId**
> DeleteFlowsFlowId200Response DeleteFlowsFlowId (string flowId, string token, string wabaAccountId = null)

Delete Flow

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
    public class DeleteFlowsFlowIdExample
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
            var apiInstance = new FlowsApi(httpClient, config, httpClientHandler);
            var flowId = "flowId_example";  // string | Flow ID
            var token = "token_example";  // string | JWT token or API key for authorization
            var wabaAccountId = {{wabaAccountId}};  // string |  (optional) 

            try
            {
                // Delete Flow
                DeleteFlowsFlowId200Response result = apiInstance.DeleteFlowsFlowId(flowId, token, wabaAccountId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FlowsApi.DeleteFlowsFlowId: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteFlowsFlowIdWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete Flow
    ApiResponse<DeleteFlowsFlowId200Response> response = apiInstance.DeleteFlowsFlowIdWithHttpInfo(flowId, token, wabaAccountId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FlowsApi.DeleteFlowsFlowIdWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **flowId** | **string** | Flow ID |  |
| **token** | **string** | JWT token or API key for authorization |  |
| **wabaAccountId** | **string** |  | [optional]  |

### Return type

[**DeleteFlowsFlowId200Response**](DeleteFlowsFlowId200Response.md)

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

<a id="getflowsflowid"></a>
# **GetFlowsFlowId**
> CreateGroups200Response GetFlowsFlowId (string flowId, string token, string wabaAccountId = null)

Get Flow Details

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
    public class GetFlowsFlowIdExample
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
            var apiInstance = new FlowsApi(httpClient, config, httpClientHandler);
            var flowId = "flowId_example";  // string | Flow ID
            var token = "token_example";  // string | JWT token or API key for authorization
            var wabaAccountId = {{wabaAccountId}};  // string |  (optional) 

            try
            {
                // Get Flow Details
                CreateGroups200Response result = apiInstance.GetFlowsFlowId(flowId, token, wabaAccountId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FlowsApi.GetFlowsFlowId: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetFlowsFlowIdWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Flow Details
    ApiResponse<CreateGroups200Response> response = apiInstance.GetFlowsFlowIdWithHttpInfo(flowId, token, wabaAccountId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FlowsApi.GetFlowsFlowIdWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **flowId** | **string** | Flow ID |  |
| **token** | **string** | JWT token or API key for authorization |  |
| **wabaAccountId** | **string** |  | [optional]  |

### Return type

[**CreateGroups200Response**](CreateGroups200Response.md)

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

<a id="getflowsflowidpreview"></a>
# **GetFlowsFlowIdPreview**
> Dictionary&lt;string, Object&gt; GetFlowsFlowIdPreview (string flowId, string token, string wabaAccountId = null)

Preview Flow

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
    public class GetFlowsFlowIdPreviewExample
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
            var apiInstance = new FlowsApi(httpClient, config, httpClientHandler);
            var flowId = "flowId_example";  // string | Flow ID
            var token = "token_example";  // string | JWT token or API key for authorization
            var wabaAccountId = {{wabaAccountId}};  // string |  (optional) 

            try
            {
                // Preview Flow
                Dictionary<string, Object> result = apiInstance.GetFlowsFlowIdPreview(flowId, token, wabaAccountId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FlowsApi.GetFlowsFlowIdPreview: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetFlowsFlowIdPreviewWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Preview Flow
    ApiResponse<Dictionary<string, Object>> response = apiInstance.GetFlowsFlowIdPreviewWithHttpInfo(flowId, token, wabaAccountId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FlowsApi.GetFlowsFlowIdPreviewWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **flowId** | **string** | Flow ID |  |
| **token** | **string** | JWT token or API key for authorization |  |
| **wabaAccountId** | **string** |  | [optional]  |

### Return type

**Dictionary<string, Object>**

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

<a id="getwhatsappbusinessencryption"></a>
# **GetWhatsappBusinessEncryption**
> GetWhatsappBusinessEncryption200Response GetWhatsappBusinessEncryption (string token)

Get business encryption public key

Retrieve the WhatsApp business public key and signature status for this channel's phone number. Required before publishing or sending Flows that use data encryption. 

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
    public class GetWhatsappBusinessEncryptionExample
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
            var apiInstance = new FlowsApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization

            try
            {
                // Get business encryption public key
                GetWhatsappBusinessEncryption200Response result = apiInstance.GetWhatsappBusinessEncryption(token);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FlowsApi.GetWhatsappBusinessEncryption: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetWhatsappBusinessEncryptionWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get business encryption public key
    ApiResponse<GetWhatsappBusinessEncryption200Response> response = apiInstance.GetWhatsappBusinessEncryptionWithHttpInfo(token);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FlowsApi.GetWhatsappBusinessEncryptionWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |

### Return type

[**GetWhatsappBusinessEncryption200Response**](GetWhatsappBusinessEncryption200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Business encryption key status |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listflows"></a>
# **ListFlows**
> ListFlows200Response ListFlows (string token, string wabaAccountId = null)

List Flows

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
    public class ListFlowsExample
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
            var apiInstance = new FlowsApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var wabaAccountId = {{wabaAccountId}};  // string |  (optional) 

            try
            {
                // List Flows
                ListFlows200Response result = apiInstance.ListFlows(token, wabaAccountId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FlowsApi.ListFlows: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListFlowsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Flows
    ApiResponse<ListFlows200Response> response = apiInstance.ListFlowsWithHttpInfo(token, wabaAccountId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FlowsApi.ListFlowsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **wabaAccountId** | **string** |  | [optional]  |

### Return type

[**ListFlows200Response**](ListFlows200Response.md)

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

<a id="patchflowsflowidassets"></a>
# **PatchFlowsFlowIdAssets**
> PatchFlowsFlowIdAssets200Response PatchFlowsFlowIdAssets (string flowId, string token, string wabaAccountId = null)

Update Flow Structure

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
    public class PatchFlowsFlowIdAssetsExample
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
            var apiInstance = new FlowsApi(httpClient, config, httpClientHandler);
            var flowId = "flowId_example";  // string | Flow ID
            var token = "token_example";  // string | JWT token or API key for authorization
            var wabaAccountId = {{wabaAccountId}};  // string |  (optional) 

            try
            {
                // Update Flow Structure
                PatchFlowsFlowIdAssets200Response result = apiInstance.PatchFlowsFlowIdAssets(flowId, token, wabaAccountId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FlowsApi.PatchFlowsFlowIdAssets: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PatchFlowsFlowIdAssetsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update Flow Structure
    ApiResponse<PatchFlowsFlowIdAssets200Response> response = apiInstance.PatchFlowsFlowIdAssetsWithHttpInfo(flowId, token, wabaAccountId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FlowsApi.PatchFlowsFlowIdAssetsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **flowId** | **string** | Flow ID |  |
| **token** | **string** | JWT token or API key for authorization |  |
| **wabaAccountId** | **string** |  | [optional]  |

### Return type

[**PatchFlowsFlowIdAssets200Response**](PatchFlowsFlowIdAssets200Response.md)

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

<a id="patchflowsflowidmetadata"></a>
# **PatchFlowsFlowIdMetadata**
> Dictionary&lt;string, Object&gt; PatchFlowsFlowIdMetadata (string flowId, string token, string wabaAccountId = null)

Update Flow Metadata

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
    public class PatchFlowsFlowIdMetadataExample
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
            var apiInstance = new FlowsApi(httpClient, config, httpClientHandler);
            var flowId = "flowId_example";  // string | Flow ID
            var token = "token_example";  // string | JWT token or API key for authorization
            var wabaAccountId = {{wabaAccountId}};  // string |  (optional) 

            try
            {
                // Update Flow Metadata
                Dictionary<string, Object> result = apiInstance.PatchFlowsFlowIdMetadata(flowId, token, wabaAccountId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FlowsApi.PatchFlowsFlowIdMetadata: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PatchFlowsFlowIdMetadataWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update Flow Metadata
    ApiResponse<Dictionary<string, Object>> response = apiInstance.PatchFlowsFlowIdMetadataWithHttpInfo(flowId, token, wabaAccountId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FlowsApi.PatchFlowsFlowIdMetadataWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **flowId** | **string** | Flow ID |  |
| **token** | **string** | JWT token or API key for authorization |  |
| **wabaAccountId** | **string** |  | [optional]  |

### Return type

**Dictionary<string, Object>**

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

<a id="setwhatsappbusinessencryption"></a>
# **SetWhatsappBusinessEncryption**
> SetWhatsappBusinessEncryption200Response SetWhatsappBusinessEncryption (string token, SetWhatsappBusinessEncryptionRequest setWhatsappBusinessEncryptionRequest)

Set business encryption public key

Upload and sign a 2048-bit RSA business public key (PEM) for this channel's phone number. Meta requires a signed key before Flow publish/send. Only one active key per number; a new upload replaces the previous key. 

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
    public class SetWhatsappBusinessEncryptionExample
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
            var apiInstance = new FlowsApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var setWhatsappBusinessEncryptionRequest = new SetWhatsappBusinessEncryptionRequest(); // SetWhatsappBusinessEncryptionRequest | 

            try
            {
                // Set business encryption public key
                SetWhatsappBusinessEncryption200Response result = apiInstance.SetWhatsappBusinessEncryption(token, setWhatsappBusinessEncryptionRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FlowsApi.SetWhatsappBusinessEncryption: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SetWhatsappBusinessEncryptionWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Set business encryption public key
    ApiResponse<SetWhatsappBusinessEncryption200Response> response = apiInstance.SetWhatsappBusinessEncryptionWithHttpInfo(token, setWhatsappBusinessEncryptionRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FlowsApi.SetWhatsappBusinessEncryptionWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **setWhatsappBusinessEncryptionRequest** | [**SetWhatsappBusinessEncryptionRequest**](SetWhatsappBusinessEncryptionRequest.md) |  |  |

### Return type

[**SetWhatsappBusinessEncryption200Response**](SetWhatsappBusinessEncryption200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Public key uploaded and signed |  -  |
| **400** | Missing or invalid PEM key |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

