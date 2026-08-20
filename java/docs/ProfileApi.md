# ProfileApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getMe**](ProfileApi.md#getMe) | **GET** /me | Get Profile Info |
| [**getMeWithHttpInfo**](ProfileApi.md#getMeWithHttpInfo) | **GET** /me | Get Profile Info |
| [**updateMe**](ProfileApi.md#updateMe) | **POST** /me | Update profile info |
| [**updateMeWithHttpInfo**](ProfileApi.md#updateMeWithHttpInfo) | **POST** /me | Update profile info |



## getMe

> ProfileInfo getMe(token)

Get Profile Info

Get WhatsApp Business Account profile information

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.ProfileApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        ProfileApi apiInstance = new ProfileApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            ProfileInfo result = apiInstance.getMe(token);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProfileApi#getMe");
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

## getMeWithHttpInfo

> ApiResponse<ProfileInfo> getMeWithHttpInfo(token)

Get Profile Info

Get WhatsApp Business Account profile information

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.ProfileApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        ProfileApi apiInstance = new ProfileApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            ApiResponse<ProfileInfo> response = apiInstance.getMeWithHttpInfo(token);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProfileApi#getMe");
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

ApiResponse<[**ProfileInfo**](ProfileInfo.md)>


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


## updateMe

> Map<String, Object> updateMe(token, updateMeRequest)

Update profile info

Update WhatsApp Business Account profile fields. At least one of about, description, email, photo, address, vertical, websites is required. Blocked when the channel subscription limit is exceeded. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.ProfileApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        ProfileApi apiInstance = new ProfileApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        UpdateMeRequest updateMeRequest = new UpdateMeRequest(); // UpdateMeRequest | 
        try {
            Map<String, Object> result = apiInstance.updateMe(token, updateMeRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProfileApi#updateMe");
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
| **updateMeRequest** | [**UpdateMeRequest**](UpdateMeRequest.md)|  | [optional] |

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
| **200** | Profile updated |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **422** | Wrong request (no updatable fields) |  -  |
| **500** | Internal server error |  -  |

## updateMeWithHttpInfo

> ApiResponse<Map<String, Object>> updateMeWithHttpInfo(token, updateMeRequest)

Update profile info

Update WhatsApp Business Account profile fields. At least one of about, description, email, photo, address, vertical, websites is required. Blocked when the channel subscription limit is exceeded. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.ProfileApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        ProfileApi apiInstance = new ProfileApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        UpdateMeRequest updateMeRequest = new UpdateMeRequest(); // UpdateMeRequest | 
        try {
            ApiResponse<Map<String, Object>> response = apiInstance.updateMeWithHttpInfo(token, updateMeRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProfileApi#updateMe");
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
| **updateMeRequest** | [**UpdateMeRequest**](UpdateMeRequest.md)|  | [optional] |

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
| **200** | Profile updated |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **422** | Wrong request (no updatable fields) |  -  |
| **500** | Internal server error |  -  |

