# CatalogApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCommerce**](CatalogApi.md#createCommerce) | **POST** /commerce | Set Commerce Settings |
| [**createCommerceWithHttpInfo**](CatalogApi.md#createCommerceWithHttpInfo) | **POST** /commerce | Set Commerce Settings |
| [**getCommerce**](CatalogApi.md#getCommerce) | **GET** /commerce | Get Commerce Settings |
| [**getCommerceWithHttpInfo**](CatalogApi.md#getCommerceWithHttpInfo) | **GET** /commerce | Get Commerce Settings |



## createCommerce

> CreateCommerce200Response createCommerce(token, createCommerceRequest)

Set Commerce Settings

Update catalog/cart commerce settings via the &#x60;params&#x60; object.  - &#x60;params.is_catalog_visible&#x60; — show catalog storefront icon (&#x60;true&#x60;) or hide it (&#x60;false&#x60;). - &#x60;params.is_cart_enabled&#x60; — enable cart (&#x60;true&#x60;) or disable it (&#x60;false&#x60;).  Blocked when the channel subscription limit is exceeded. Requires a commerce-capable channel (Cloud Functions &#x60;/commerceWAV2&#x60;). 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.CatalogApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        CatalogApi apiInstance = new CatalogApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        CreateCommerceRequest createCommerceRequest = new CreateCommerceRequest(); // CreateCommerceRequest | 
        try {
            CreateCommerce200Response result = apiInstance.createCommerce(token, createCommerceRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CatalogApi#createCommerce");
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
| **createCommerceRequest** | [**CreateCommerceRequest**](CreateCommerceRequest.md)|  | |

### Return type

[**CreateCommerce200Response**](CreateCommerce200Response.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Commerce updated |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

## createCommerceWithHttpInfo

> ApiResponse<CreateCommerce200Response> createCommerceWithHttpInfo(token, createCommerceRequest)

Set Commerce Settings

Update catalog/cart commerce settings via the &#x60;params&#x60; object.  - &#x60;params.is_catalog_visible&#x60; — show catalog storefront icon (&#x60;true&#x60;) or hide it (&#x60;false&#x60;). - &#x60;params.is_cart_enabled&#x60; — enable cart (&#x60;true&#x60;) or disable it (&#x60;false&#x60;).  Blocked when the channel subscription limit is exceeded. Requires a commerce-capable channel (Cloud Functions &#x60;/commerceWAV2&#x60;). 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.CatalogApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        CatalogApi apiInstance = new CatalogApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        CreateCommerceRequest createCommerceRequest = new CreateCommerceRequest(); // CreateCommerceRequest | 
        try {
            ApiResponse<CreateCommerce200Response> response = apiInstance.createCommerceWithHttpInfo(token, createCommerceRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CatalogApi#createCommerce");
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
| **createCommerceRequest** | [**CreateCommerceRequest**](CreateCommerceRequest.md)|  | |

### Return type

ApiResponse<[**CreateCommerce200Response**](CreateCommerce200Response.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Commerce updated |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |


## getCommerce

> List<GetCommerce200ResponseInner> getCommerce(token)

Get Commerce Settings

Returns catalog/cart commerce settings for the channel.  - &#x60;is_catalog_visible&#x60; — show catalog storefront icon (&#x60;true&#x60;) or hide it (&#x60;false&#x60;). - &#x60;is_cart_enabled&#x60; — enable cart (&#x60;true&#x60;) or disable it (&#x60;false&#x60;). 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.CatalogApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        CatalogApi apiInstance = new CatalogApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            List<GetCommerce200ResponseInner> result = apiInstance.getCommerce(token);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CatalogApi#getCommerce");
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

[**List&lt;GetCommerce200ResponseInner&gt;**](GetCommerce200ResponseInner.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Commerce settings |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

## getCommerceWithHttpInfo

> ApiResponse<List<GetCommerce200ResponseInner>> getCommerceWithHttpInfo(token)

Get Commerce Settings

Returns catalog/cart commerce settings for the channel.  - &#x60;is_catalog_visible&#x60; — show catalog storefront icon (&#x60;true&#x60;) or hide it (&#x60;false&#x60;). - &#x60;is_cart_enabled&#x60; — enable cart (&#x60;true&#x60;) or disable it (&#x60;false&#x60;). 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.CatalogApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        CatalogApi apiInstance = new CatalogApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            ApiResponse<List<GetCommerce200ResponseInner>> response = apiInstance.getCommerceWithHttpInfo(token);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CatalogApi#getCommerce");
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

ApiResponse<[**List&lt;GetCommerce200ResponseInner&gt;**](GetCommerce200ResponseInner.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Commerce settings |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

