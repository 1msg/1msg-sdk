# GroupsApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createGroups**](GroupsApi.md#createGroups) | **POST** /groups | Create Group |
| [**createGroupsWithHttpInfo**](GroupsApi.md#createGroupsWithHttpInfo) | **POST** /groups | Create Group |
| [**createGroupsGroupId**](GroupsApi.md#createGroupsGroupId) | **POST** /groups/{groupId} | Update Group Info |
| [**createGroupsGroupIdWithHttpInfo**](GroupsApi.md#createGroupsGroupIdWithHttpInfo) | **POST** /groups/{groupId} | Update Group Info |
| [**createGroupsGroupIdInvitelink**](GroupsApi.md#createGroupsGroupIdInvitelink) | **POST** /groups/{groupId}/inviteLink | Reset Invite Link |
| [**createGroupsGroupIdInvitelinkWithHttpInfo**](GroupsApi.md#createGroupsGroupIdInvitelinkWithHttpInfo) | **POST** /groups/{groupId}/inviteLink | Reset Invite Link |
| [**deleteGroupsGroupId**](GroupsApi.md#deleteGroupsGroupId) | **DELETE** /groups/{groupId} | Delete Group |
| [**deleteGroupsGroupIdWithHttpInfo**](GroupsApi.md#deleteGroupsGroupIdWithHttpInfo) | **DELETE** /groups/{groupId} | Delete Group |
| [**getGroupsGroupId**](GroupsApi.md#getGroupsGroupId) | **GET** /groups/{groupId} | Get Group Info |
| [**getGroupsGroupIdWithHttpInfo**](GroupsApi.md#getGroupsGroupIdWithHttpInfo) | **GET** /groups/{groupId} | Get Group Info |
| [**getGroupsGroupIdInvitelink**](GroupsApi.md#getGroupsGroupIdInvitelink) | **GET** /groups/{groupId}/inviteLink | Get Invite Link |
| [**getGroupsGroupIdInvitelinkWithHttpInfo**](GroupsApi.md#getGroupsGroupIdInvitelinkWithHttpInfo) | **GET** /groups/{groupId}/inviteLink | Get Invite Link |
| [**listGroups**](GroupsApi.md#listGroups) | **GET** /groups | Get Groups List |
| [**listGroupsWithHttpInfo**](GroupsApi.md#listGroupsWithHttpInfo) | **GET** /groups | Get Groups List |



## createGroups

> CreateGroups200Response createGroups(token, createGroupsRequest)

Create Group

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.GroupsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        GroupsApi apiInstance = new GroupsApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        CreateGroupsRequest createGroupsRequest = new CreateGroupsRequest(); // CreateGroupsRequest | 
        try {
            CreateGroups200Response result = apiInstance.createGroups(token, createGroupsRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling GroupsApi#createGroups");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| JWT token or API key for authorization | |
| **createGroupsRequest** | [**CreateGroupsRequest**](CreateGroupsRequest.md)|  | |

### Return type

[**CreateGroups200Response**](CreateGroups200Response.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## createGroupsWithHttpInfo

> ApiResponse<CreateGroups200Response> createGroupsWithHttpInfo(token, createGroupsRequest)

Create Group

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.GroupsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        GroupsApi apiInstance = new GroupsApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        CreateGroupsRequest createGroupsRequest = new CreateGroupsRequest(); // CreateGroupsRequest | 
        try {
            ApiResponse<CreateGroups200Response> response = apiInstance.createGroupsWithHttpInfo(token, createGroupsRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling GroupsApi#createGroups");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| JWT token or API key for authorization | |
| **createGroupsRequest** | [**CreateGroupsRequest**](CreateGroupsRequest.md)|  | |

### Return type

ApiResponse<[**CreateGroups200Response**](CreateGroups200Response.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## createGroupsGroupId

> Map<String, Object> createGroupsGroupId(groupId, token, createGroupsGroupIdRequest)

Update Group Info

Update group subject, description, and/or profile picture. Path &#x60;groupId&#x60; is the WABA group id (without &#x60;@g.us&#x60;). 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.GroupsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        GroupsApi apiInstance = new GroupsApi(defaultClient);
        String groupId = "{{createdGroupId}}"; // String | 
        String token = "token_example"; // String | JWT token or API key for authorization
        CreateGroupsGroupIdRequest createGroupsGroupIdRequest = new CreateGroupsGroupIdRequest(); // CreateGroupsGroupIdRequest | 
        try {
            Map<String, Object> result = apiInstance.createGroupsGroupId(groupId, token, createGroupsGroupIdRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling GroupsApi#createGroupsGroupId");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **groupId** | **String**|  | |
| **token** | **String**| JWT token or API key for authorization | |
| **createGroupsGroupIdRequest** | [**CreateGroupsGroupIdRequest**](CreateGroupsGroupIdRequest.md)|  | |

### Return type

**Map&lt;String, Object&gt;**


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## createGroupsGroupIdWithHttpInfo

> ApiResponse<Map<String, Object>> createGroupsGroupIdWithHttpInfo(groupId, token, createGroupsGroupIdRequest)

Update Group Info

Update group subject, description, and/or profile picture. Path &#x60;groupId&#x60; is the WABA group id (without &#x60;@g.us&#x60;). 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.GroupsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        GroupsApi apiInstance = new GroupsApi(defaultClient);
        String groupId = "{{createdGroupId}}"; // String | 
        String token = "token_example"; // String | JWT token or API key for authorization
        CreateGroupsGroupIdRequest createGroupsGroupIdRequest = new CreateGroupsGroupIdRequest(); // CreateGroupsGroupIdRequest | 
        try {
            ApiResponse<Map<String, Object>> response = apiInstance.createGroupsGroupIdWithHttpInfo(groupId, token, createGroupsGroupIdRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling GroupsApi#createGroupsGroupId");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **groupId** | **String**|  | |
| **token** | **String**| JWT token or API key for authorization | |
| **createGroupsGroupIdRequest** | [**CreateGroupsGroupIdRequest**](CreateGroupsGroupIdRequest.md)|  | |

### Return type

ApiResponse<**Map&lt;String, Object&gt;**>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## createGroupsGroupIdInvitelink

> Map<String, Object> createGroupsGroupIdInvitelink(groupId, token)

Reset Invite Link

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.GroupsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        GroupsApi apiInstance = new GroupsApi(defaultClient);
        String groupId = "{{createdGroupId}}"; // String | 
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            Map<String, Object> result = apiInstance.createGroupsGroupIdInvitelink(groupId, token);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling GroupsApi#createGroupsGroupIdInvitelink");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **groupId** | **String**|  | |
| **token** | **String**| JWT token or API key for authorization | |

### Return type

**Map&lt;String, Object&gt;**


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## createGroupsGroupIdInvitelinkWithHttpInfo

> ApiResponse<Map<String, Object>> createGroupsGroupIdInvitelinkWithHttpInfo(groupId, token)

Reset Invite Link

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.GroupsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        GroupsApi apiInstance = new GroupsApi(defaultClient);
        String groupId = "{{createdGroupId}}"; // String | 
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            ApiResponse<Map<String, Object>> response = apiInstance.createGroupsGroupIdInvitelinkWithHttpInfo(groupId, token);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling GroupsApi#createGroupsGroupIdInvitelink");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **groupId** | **String**|  | |
| **token** | **String**| JWT token or API key for authorization | |

### Return type

ApiResponse<**Map&lt;String, Object&gt;**>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## deleteGroupsGroupId

> DeleteGroupsGroupId200Response deleteGroupsGroupId(groupId, token)

Delete Group

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.GroupsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        GroupsApi apiInstance = new GroupsApi(defaultClient);
        String groupId = "{{createdGroupId}}"; // String | 
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            DeleteGroupsGroupId200Response result = apiInstance.deleteGroupsGroupId(groupId, token);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling GroupsApi#deleteGroupsGroupId");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **groupId** | **String**|  | |
| **token** | **String**| JWT token or API key for authorization | |

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

## deleteGroupsGroupIdWithHttpInfo

> ApiResponse<DeleteGroupsGroupId200Response> deleteGroupsGroupIdWithHttpInfo(groupId, token)

Delete Group

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.GroupsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        GroupsApi apiInstance = new GroupsApi(defaultClient);
        String groupId = "{{createdGroupId}}"; // String | 
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            ApiResponse<DeleteGroupsGroupId200Response> response = apiInstance.deleteGroupsGroupIdWithHttpInfo(groupId, token);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling GroupsApi#deleteGroupsGroupId");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **groupId** | **String**|  | |
| **token** | **String**| JWT token or API key for authorization | |

### Return type

ApiResponse<[**DeleteGroupsGroupId200Response**](DeleteGroupsGroupId200Response.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## getGroupsGroupId

> Map<String, Object> getGroupsGroupId(groupId, token, fields)

Get Group Info

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.GroupsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        GroupsApi apiInstance = new GroupsApi(defaultClient);
        String groupId = "{{createdGroupId}}"; // String | 
        String token = "token_example"; // String | JWT token or API key for authorization
        String fields = "fields_example"; // String | Comma-separated group fields to return
        try {
            Map<String, Object> result = apiInstance.getGroupsGroupId(groupId, token, fields);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling GroupsApi#getGroupsGroupId");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **groupId** | **String**|  | |
| **token** | **String**| JWT token or API key for authorization | |
| **fields** | **String**| Comma-separated group fields to return | [optional] |

### Return type

**Map&lt;String, Object&gt;**


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## getGroupsGroupIdWithHttpInfo

> ApiResponse<Map<String, Object>> getGroupsGroupIdWithHttpInfo(groupId, token, fields)

Get Group Info

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.GroupsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        GroupsApi apiInstance = new GroupsApi(defaultClient);
        String groupId = "{{createdGroupId}}"; // String | 
        String token = "token_example"; // String | JWT token or API key for authorization
        String fields = "fields_example"; // String | Comma-separated group fields to return
        try {
            ApiResponse<Map<String, Object>> response = apiInstance.getGroupsGroupIdWithHttpInfo(groupId, token, fields);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling GroupsApi#getGroupsGroupId");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **groupId** | **String**|  | |
| **token** | **String**| JWT token or API key for authorization | |
| **fields** | **String**| Comma-separated group fields to return | [optional] |

### Return type

ApiResponse<**Map&lt;String, Object&gt;**>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## getGroupsGroupIdInvitelink

> Map<String, Object> getGroupsGroupIdInvitelink(groupId, token)

Get Invite Link

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.GroupsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        GroupsApi apiInstance = new GroupsApi(defaultClient);
        String groupId = "{{createdGroupId}}"; // String | 
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            Map<String, Object> result = apiInstance.getGroupsGroupIdInvitelink(groupId, token);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling GroupsApi#getGroupsGroupIdInvitelink");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **groupId** | **String**|  | |
| **token** | **String**| JWT token or API key for authorization | |

### Return type

**Map&lt;String, Object&gt;**


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## getGroupsGroupIdInvitelinkWithHttpInfo

> ApiResponse<Map<String, Object>> getGroupsGroupIdInvitelinkWithHttpInfo(groupId, token)

Get Invite Link

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.GroupsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        GroupsApi apiInstance = new GroupsApi(defaultClient);
        String groupId = "{{createdGroupId}}"; // String | 
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            ApiResponse<Map<String, Object>> response = apiInstance.getGroupsGroupIdInvitelinkWithHttpInfo(groupId, token);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling GroupsApi#getGroupsGroupIdInvitelink");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **groupId** | **String**|  | |
| **token** | **String**| JWT token or API key for authorization | |

### Return type

ApiResponse<**Map&lt;String, Object&gt;**>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## listGroups

> Map<String, Object> listGroups(token, limit, before, after)

Get Groups List

List WhatsApp groups for this channel. Paginate with &#x60;limit&#x60;, &#x60;before&#x60;, and &#x60;after&#x60;.

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.GroupsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        GroupsApi apiInstance = new GroupsApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        Integer limit = 56; // Integer | Max groups to return
        String before = "before_example"; // String | Cursor for the previous page
        String after = "after_example"; // String | Cursor for the next page
        try {
            Map<String, Object> result = apiInstance.listGroups(token, limit, before, after);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling GroupsApi#listGroups");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| JWT token or API key for authorization | |
| **limit** | **Integer**| Max groups to return | [optional] |
| **before** | **String**| Cursor for the previous page | [optional] |
| **after** | **String**| Cursor for the next page | [optional] |

### Return type

**Map&lt;String, Object&gt;**


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## listGroupsWithHttpInfo

> ApiResponse<Map<String, Object>> listGroupsWithHttpInfo(token, limit, before, after)

Get Groups List

List WhatsApp groups for this channel. Paginate with &#x60;limit&#x60;, &#x60;before&#x60;, and &#x60;after&#x60;.

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.GroupsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        GroupsApi apiInstance = new GroupsApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        Integer limit = 56; // Integer | Max groups to return
        String before = "before_example"; // String | Cursor for the previous page
        String after = "after_example"; // String | Cursor for the next page
        try {
            ApiResponse<Map<String, Object>> response = apiInstance.listGroupsWithHttpInfo(token, limit, before, after);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling GroupsApi#listGroups");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| JWT token or API key for authorization | |
| **limit** | **Integer**| Max groups to return | [optional] |
| **before** | **String**| Cursor for the previous page | [optional] |
| **after** | **String**| Cursor for the next page | [optional] |

### Return type

ApiResponse<**Map&lt;String, Object&gt;**>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

