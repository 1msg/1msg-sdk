# OneMsg.ChatApi.Api.GroupsApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateGroups**](GroupsApi.md#creategroups) | **POST** /groups | Create Group |
| [**CreateGroupsGroupId**](GroupsApi.md#creategroupsgroupid) | **POST** /groups/{groupId} | Update Group Info |
| [**CreateGroupsGroupIdInvitelink**](GroupsApi.md#creategroupsgroupidinvitelink) | **POST** /groups/{groupId}/inviteLink | Reset Invite Link |
| [**DeleteGroupsGroupId**](GroupsApi.md#deletegroupsgroupid) | **DELETE** /groups/{groupId} | Delete Group |
| [**GetGroupsGroupId**](GroupsApi.md#getgroupsgroupid) | **GET** /groups/{groupId} | Get Group Info |
| [**GetGroupsGroupIdInvitelink**](GroupsApi.md#getgroupsgroupidinvitelink) | **GET** /groups/{groupId}/inviteLink | Get Invite Link |
| [**ListGroups**](GroupsApi.md#listgroups) | **GET** /groups | Get Groups List |

<a id="creategroups"></a>
# **CreateGroups**
> CreateGroups200Response CreateGroups (string token)

Create Group

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
    public class CreateGroupsExample
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
            var apiInstance = new GroupsApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization

            try
            {
                // Create Group
                CreateGroups200Response result = apiInstance.CreateGroups(token);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GroupsApi.CreateGroups: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateGroupsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create Group
    ApiResponse<CreateGroups200Response> response = apiInstance.CreateGroupsWithHttpInfo(token);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling GroupsApi.CreateGroupsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |

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

<a id="creategroupsgroupid"></a>
# **CreateGroupsGroupId**
> Dictionary&lt;string, Object&gt; CreateGroupsGroupId (string groupId, string token)

Update Group Info

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
    public class CreateGroupsGroupIdExample
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
            var apiInstance = new GroupsApi(httpClient, config, httpClientHandler);
            var groupId = {{createdGroupId}};  // string | 
            var token = "token_example";  // string | JWT token or API key for authorization

            try
            {
                // Update Group Info
                Dictionary<string, Object> result = apiInstance.CreateGroupsGroupId(groupId, token);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GroupsApi.CreateGroupsGroupId: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateGroupsGroupIdWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update Group Info
    ApiResponse<Dictionary<string, Object>> response = apiInstance.CreateGroupsGroupIdWithHttpInfo(groupId, token);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling GroupsApi.CreateGroupsGroupIdWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **groupId** | **string** |  |  |
| **token** | **string** | JWT token or API key for authorization |  |

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

<a id="creategroupsgroupidinvitelink"></a>
# **CreateGroupsGroupIdInvitelink**
> Dictionary&lt;string, Object&gt; CreateGroupsGroupIdInvitelink (string groupId, string token)

Reset Invite Link

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
    public class CreateGroupsGroupIdInvitelinkExample
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
            var apiInstance = new GroupsApi(httpClient, config, httpClientHandler);
            var groupId = {{createdGroupId}};  // string | 
            var token = "token_example";  // string | JWT token or API key for authorization

            try
            {
                // Reset Invite Link
                Dictionary<string, Object> result = apiInstance.CreateGroupsGroupIdInvitelink(groupId, token);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GroupsApi.CreateGroupsGroupIdInvitelink: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateGroupsGroupIdInvitelinkWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Reset Invite Link
    ApiResponse<Dictionary<string, Object>> response = apiInstance.CreateGroupsGroupIdInvitelinkWithHttpInfo(groupId, token);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling GroupsApi.CreateGroupsGroupIdInvitelinkWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **groupId** | **string** |  |  |
| **token** | **string** | JWT token or API key for authorization |  |

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

<a id="deletegroupsgroupid"></a>
# **DeleteGroupsGroupId**
> DeleteGroupsGroupId200Response DeleteGroupsGroupId (string groupId, string token)

Delete Group

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
    public class DeleteGroupsGroupIdExample
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
            var apiInstance = new GroupsApi(httpClient, config, httpClientHandler);
            var groupId = {{createdGroupId}};  // string | 
            var token = "token_example";  // string | JWT token or API key for authorization

            try
            {
                // Delete Group
                DeleteGroupsGroupId200Response result = apiInstance.DeleteGroupsGroupId(groupId, token);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GroupsApi.DeleteGroupsGroupId: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteGroupsGroupIdWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete Group
    ApiResponse<DeleteGroupsGroupId200Response> response = apiInstance.DeleteGroupsGroupIdWithHttpInfo(groupId, token);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling GroupsApi.DeleteGroupsGroupIdWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **groupId** | **string** |  |  |
| **token** | **string** | JWT token or API key for authorization |  |

### Return type

[**DeleteGroupsGroupId200Response**](DeleteGroupsGroupId200Response.md)

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

<a id="getgroupsgroupid"></a>
# **GetGroupsGroupId**
> Dictionary&lt;string, Object&gt; GetGroupsGroupId (string groupId, string token)

Get Group Info

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
    public class GetGroupsGroupIdExample
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
            var apiInstance = new GroupsApi(httpClient, config, httpClientHandler);
            var groupId = {{createdGroupId}};  // string | 
            var token = "token_example";  // string | JWT token or API key for authorization

            try
            {
                // Get Group Info
                Dictionary<string, Object> result = apiInstance.GetGroupsGroupId(groupId, token);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GroupsApi.GetGroupsGroupId: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetGroupsGroupIdWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Group Info
    ApiResponse<Dictionary<string, Object>> response = apiInstance.GetGroupsGroupIdWithHttpInfo(groupId, token);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling GroupsApi.GetGroupsGroupIdWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **groupId** | **string** |  |  |
| **token** | **string** | JWT token or API key for authorization |  |

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

<a id="getgroupsgroupidinvitelink"></a>
# **GetGroupsGroupIdInvitelink**
> Dictionary&lt;string, Object&gt; GetGroupsGroupIdInvitelink (string groupId, string token)

Get Invite Link

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
    public class GetGroupsGroupIdInvitelinkExample
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
            var apiInstance = new GroupsApi(httpClient, config, httpClientHandler);
            var groupId = {{createdGroupId}};  // string | 
            var token = "token_example";  // string | JWT token or API key for authorization

            try
            {
                // Get Invite Link
                Dictionary<string, Object> result = apiInstance.GetGroupsGroupIdInvitelink(groupId, token);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GroupsApi.GetGroupsGroupIdInvitelink: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetGroupsGroupIdInvitelinkWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Invite Link
    ApiResponse<Dictionary<string, Object>> response = apiInstance.GetGroupsGroupIdInvitelinkWithHttpInfo(groupId, token);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling GroupsApi.GetGroupsGroupIdInvitelinkWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **groupId** | **string** |  |  |
| **token** | **string** | JWT token or API key for authorization |  |

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

<a id="listgroups"></a>
# **ListGroups**
> Dictionary&lt;string, Object&gt; ListGroups (string token)

Get Groups List

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
    public class ListGroupsExample
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
            var apiInstance = new GroupsApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization

            try
            {
                // Get Groups List
                Dictionary<string, Object> result = apiInstance.ListGroups(token);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GroupsApi.ListGroups: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListGroupsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Groups List
    ApiResponse<Dictionary<string, Object>> response = apiInstance.ListGroupsWithHttpInfo(token);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling GroupsApi.ListGroupsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |

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

