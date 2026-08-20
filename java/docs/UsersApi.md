# UsersApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**blockUser**](UsersApi.md#blockUser) | **POST** /blockUser | Block WhatsApp user |
| [**blockUserWithHttpInfo**](UsersApi.md#blockUserWithHttpInfo) | **POST** /blockUser | Block WhatsApp user |
| [**listBlockedUsers**](UsersApi.md#listBlockedUsers) | **GET** /blockedUsers | List blocked WhatsApp users |
| [**listBlockedUsersWithHttpInfo**](UsersApi.md#listBlockedUsersWithHttpInfo) | **GET** /blockedUsers | List blocked WhatsApp users |
| [**unblockUser**](UsersApi.md#unblockUser) | **POST** /unblockUser | Unblock WhatsApp user |
| [**unblockUserWithHttpInfo**](UsersApi.md#unblockUserWithHttpInfo) | **POST** /unblockUser | Unblock WhatsApp user |



## blockUser

> SuccessResponse blockUser(token, blockUserRequest)

Block WhatsApp user

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.UsersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        UsersApi apiInstance = new UsersApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        BlockUserRequest blockUserRequest = new BlockUserRequest(); // BlockUserRequest | 
        try {
            SuccessResponse result = apiInstance.blockUser(token, blockUserRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#blockUser");
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
| **blockUserRequest** | [**BlockUserRequest**](BlockUserRequest.md)|  | |

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

## blockUserWithHttpInfo

> ApiResponse<SuccessResponse> blockUserWithHttpInfo(token, blockUserRequest)

Block WhatsApp user

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.UsersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        UsersApi apiInstance = new UsersApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        BlockUserRequest blockUserRequest = new BlockUserRequest(); // BlockUserRequest | 
        try {
            ApiResponse<SuccessResponse> response = apiInstance.blockUserWithHttpInfo(token, blockUserRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#blockUser");
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
| **blockUserRequest** | [**BlockUserRequest**](BlockUserRequest.md)|  | |

### Return type

ApiResponse<[**SuccessResponse**](SuccessResponse.md)>


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


## listBlockedUsers

> ListBlockedUsers200Response listBlockedUsers(token)

List blocked WhatsApp users

Returns users currently blocked on this WhatsApp channel (WABA &#x60;GET /block_users&#x60;). Same channel token auth as &#x60;blockUser&#x60; / &#x60;unblockUser&#x60;. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.UsersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        UsersApi apiInstance = new UsersApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            ListBlockedUsers200Response result = apiInstance.listBlockedUsers(token);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#listBlockedUsers");
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

### Return type

[**ListBlockedUsers200Response**](ListBlockedUsers200Response.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Blocked users list |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

## listBlockedUsersWithHttpInfo

> ApiResponse<ListBlockedUsers200Response> listBlockedUsersWithHttpInfo(token)

List blocked WhatsApp users

Returns users currently blocked on this WhatsApp channel (WABA &#x60;GET /block_users&#x60;). Same channel token auth as &#x60;blockUser&#x60; / &#x60;unblockUser&#x60;. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.UsersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        UsersApi apiInstance = new UsersApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            ApiResponse<ListBlockedUsers200Response> response = apiInstance.listBlockedUsersWithHttpInfo(token);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#listBlockedUsers");
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

### Return type

ApiResponse<[**ListBlockedUsers200Response**](ListBlockedUsers200Response.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Blocked users list |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |


## unblockUser

> SuccessResponse unblockUser(token, blockUserRequest)

Unblock WhatsApp user

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.UsersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        UsersApi apiInstance = new UsersApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        BlockUserRequest blockUserRequest = new BlockUserRequest(); // BlockUserRequest | 
        try {
            SuccessResponse result = apiInstance.unblockUser(token, blockUserRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#unblockUser");
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
| **blockUserRequest** | [**BlockUserRequest**](BlockUserRequest.md)|  | |

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

## unblockUserWithHttpInfo

> ApiResponse<SuccessResponse> unblockUserWithHttpInfo(token, blockUserRequest)

Unblock WhatsApp user

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.UsersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        UsersApi apiInstance = new UsersApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        BlockUserRequest blockUserRequest = new BlockUserRequest(); // BlockUserRequest | 
        try {
            ApiResponse<SuccessResponse> response = apiInstance.unblockUserWithHttpInfo(token, blockUserRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#unblockUser");
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
| **blockUserRequest** | [**BlockUserRequest**](BlockUserRequest.md)|  | |

### Return type

ApiResponse<[**SuccessResponse**](SuccessResponse.md)>


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

