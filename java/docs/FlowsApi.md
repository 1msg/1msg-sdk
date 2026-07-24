# FlowsApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createFlows**](FlowsApi.md#createFlows) | **POST** /flows | Create Flow |
| [**createFlowsWithHttpInfo**](FlowsApi.md#createFlowsWithHttpInfo) | **POST** /flows | Create Flow |
| [**createFlowsFlowIdDeprecate**](FlowsApi.md#createFlowsFlowIdDeprecate) | **POST** /flows/{flowId}/deprecate | Deprecate Flow |
| [**createFlowsFlowIdDeprecateWithHttpInfo**](FlowsApi.md#createFlowsFlowIdDeprecateWithHttpInfo) | **POST** /flows/{flowId}/deprecate | Deprecate Flow |
| [**createFlowsFlowIdPublish**](FlowsApi.md#createFlowsFlowIdPublish) | **POST** /flows/{flowId}/publish | Publish Flow |
| [**createFlowsFlowIdPublishWithHttpInfo**](FlowsApi.md#createFlowsFlowIdPublishWithHttpInfo) | **POST** /flows/{flowId}/publish | Publish Flow |
| [**deleteFlowsFlowId**](FlowsApi.md#deleteFlowsFlowId) | **DELETE** /flows/{flowId} | Delete Flow |
| [**deleteFlowsFlowIdWithHttpInfo**](FlowsApi.md#deleteFlowsFlowIdWithHttpInfo) | **DELETE** /flows/{flowId} | Delete Flow |
| [**getFlowsFlowId**](FlowsApi.md#getFlowsFlowId) | **GET** /flows/{flowId} | Get Flow Details |
| [**getFlowsFlowIdWithHttpInfo**](FlowsApi.md#getFlowsFlowIdWithHttpInfo) | **GET** /flows/{flowId} | Get Flow Details |
| [**getFlowsFlowIdPreview**](FlowsApi.md#getFlowsFlowIdPreview) | **GET** /flows/{flowId}/preview | Preview Flow |
| [**getFlowsFlowIdPreviewWithHttpInfo**](FlowsApi.md#getFlowsFlowIdPreviewWithHttpInfo) | **GET** /flows/{flowId}/preview | Preview Flow |
| [**getWhatsappBusinessEncryption**](FlowsApi.md#getWhatsappBusinessEncryption) | **GET** /whatsapp_business_encryption | Get business encryption public key |
| [**getWhatsappBusinessEncryptionWithHttpInfo**](FlowsApi.md#getWhatsappBusinessEncryptionWithHttpInfo) | **GET** /whatsapp_business_encryption | Get business encryption public key |
| [**listFlows**](FlowsApi.md#listFlows) | **GET** /flows | List Flows |
| [**listFlowsWithHttpInfo**](FlowsApi.md#listFlowsWithHttpInfo) | **GET** /flows | List Flows |
| [**patchFlowsFlowIdAssets**](FlowsApi.md#patchFlowsFlowIdAssets) | **PATCH** /flows/{flowId}/assets | Update Flow Structure |
| [**patchFlowsFlowIdAssetsWithHttpInfo**](FlowsApi.md#patchFlowsFlowIdAssetsWithHttpInfo) | **PATCH** /flows/{flowId}/assets | Update Flow Structure |
| [**patchFlowsFlowIdMetadata**](FlowsApi.md#patchFlowsFlowIdMetadata) | **PATCH** /flows/{flowId}/metadata | Update Flow Metadata |
| [**patchFlowsFlowIdMetadataWithHttpInfo**](FlowsApi.md#patchFlowsFlowIdMetadataWithHttpInfo) | **PATCH** /flows/{flowId}/metadata | Update Flow Metadata |
| [**setWhatsappBusinessEncryption**](FlowsApi.md#setWhatsappBusinessEncryption) | **POST** /whatsapp_business_encryption | Set business encryption public key |
| [**setWhatsappBusinessEncryptionWithHttpInfo**](FlowsApi.md#setWhatsappBusinessEncryptionWithHttpInfo) | **POST** /whatsapp_business_encryption | Set business encryption public key |



## createFlows

> CreateGroups200Response createFlows(token, wabaAccountId)

Create Flow

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        String wabaAccountId = "{{wabaAccountId}}"; // String | 
        try {
            CreateGroups200Response result = apiInstance.createFlows(token, wabaAccountId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#createFlows");
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
| **wabaAccountId** | **String**|  | [optional] |

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

## createFlowsWithHttpInfo

> ApiResponse<CreateGroups200Response> createFlowsWithHttpInfo(token, wabaAccountId)

Create Flow

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        String wabaAccountId = "{{wabaAccountId}}"; // String | 
        try {
            ApiResponse<CreateGroups200Response> response = apiInstance.createFlowsWithHttpInfo(token, wabaAccountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#createFlows");
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
| **wabaAccountId** | **String**|  | [optional] |

### Return type

ApiResponse<[**CreateGroups200Response**](CreateGroups200Response.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## createFlowsFlowIdDeprecate

> Map<String, Object> createFlowsFlowIdDeprecate(flowId, token, wabaAccountId)

Deprecate Flow

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String flowId = "flowId_example"; // String | Flow ID
        String token = "token_example"; // String | JWT token or API key for authorization
        String wabaAccountId = "{{wabaAccountId}}"; // String | 
        try {
            Map<String, Object> result = apiInstance.createFlowsFlowIdDeprecate(flowId, token, wabaAccountId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#createFlowsFlowIdDeprecate");
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
| **flowId** | **String**| Flow ID | |
| **token** | **String**| JWT token or API key for authorization | |
| **wabaAccountId** | **String**|  | [optional] |

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

## createFlowsFlowIdDeprecateWithHttpInfo

> ApiResponse<Map<String, Object>> createFlowsFlowIdDeprecateWithHttpInfo(flowId, token, wabaAccountId)

Deprecate Flow

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String flowId = "flowId_example"; // String | Flow ID
        String token = "token_example"; // String | JWT token or API key for authorization
        String wabaAccountId = "{{wabaAccountId}}"; // String | 
        try {
            ApiResponse<Map<String, Object>> response = apiInstance.createFlowsFlowIdDeprecateWithHttpInfo(flowId, token, wabaAccountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#createFlowsFlowIdDeprecate");
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
| **flowId** | **String**| Flow ID | |
| **token** | **String**| JWT token or API key for authorization | |
| **wabaAccountId** | **String**|  | [optional] |

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


## createFlowsFlowIdPublish

> Map<String, Object> createFlowsFlowIdPublish(flowId, token, wabaAccountId)

Publish Flow

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String flowId = "flowId_example"; // String | Flow ID
        String token = "token_example"; // String | JWT token or API key for authorization
        String wabaAccountId = "{{wabaAccountId}}"; // String | 
        try {
            Map<String, Object> result = apiInstance.createFlowsFlowIdPublish(flowId, token, wabaAccountId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#createFlowsFlowIdPublish");
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
| **flowId** | **String**| Flow ID | |
| **token** | **String**| JWT token or API key for authorization | |
| **wabaAccountId** | **String**|  | [optional] |

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

## createFlowsFlowIdPublishWithHttpInfo

> ApiResponse<Map<String, Object>> createFlowsFlowIdPublishWithHttpInfo(flowId, token, wabaAccountId)

Publish Flow

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String flowId = "flowId_example"; // String | Flow ID
        String token = "token_example"; // String | JWT token or API key for authorization
        String wabaAccountId = "{{wabaAccountId}}"; // String | 
        try {
            ApiResponse<Map<String, Object>> response = apiInstance.createFlowsFlowIdPublishWithHttpInfo(flowId, token, wabaAccountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#createFlowsFlowIdPublish");
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
| **flowId** | **String**| Flow ID | |
| **token** | **String**| JWT token or API key for authorization | |
| **wabaAccountId** | **String**|  | [optional] |

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


## deleteFlowsFlowId

> DeleteFlowsFlowId200Response deleteFlowsFlowId(flowId, token, wabaAccountId)

Delete Flow

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String flowId = "flowId_example"; // String | Flow ID
        String token = "token_example"; // String | JWT token or API key for authorization
        String wabaAccountId = "{{wabaAccountId}}"; // String | 
        try {
            DeleteFlowsFlowId200Response result = apiInstance.deleteFlowsFlowId(flowId, token, wabaAccountId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#deleteFlowsFlowId");
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
| **flowId** | **String**| Flow ID | |
| **token** | **String**| JWT token or API key for authorization | |
| **wabaAccountId** | **String**|  | [optional] |

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

## deleteFlowsFlowIdWithHttpInfo

> ApiResponse<DeleteFlowsFlowId200Response> deleteFlowsFlowIdWithHttpInfo(flowId, token, wabaAccountId)

Delete Flow

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String flowId = "flowId_example"; // String | Flow ID
        String token = "token_example"; // String | JWT token or API key for authorization
        String wabaAccountId = "{{wabaAccountId}}"; // String | 
        try {
            ApiResponse<DeleteFlowsFlowId200Response> response = apiInstance.deleteFlowsFlowIdWithHttpInfo(flowId, token, wabaAccountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#deleteFlowsFlowId");
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
| **flowId** | **String**| Flow ID | |
| **token** | **String**| JWT token or API key for authorization | |
| **wabaAccountId** | **String**|  | [optional] |

### Return type

ApiResponse<[**DeleteFlowsFlowId200Response**](DeleteFlowsFlowId200Response.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## getFlowsFlowId

> CreateGroups200Response getFlowsFlowId(flowId, token, wabaAccountId)

Get Flow Details

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String flowId = "flowId_example"; // String | Flow ID
        String token = "token_example"; // String | JWT token or API key for authorization
        String wabaAccountId = "{{wabaAccountId}}"; // String | 
        try {
            CreateGroups200Response result = apiInstance.getFlowsFlowId(flowId, token, wabaAccountId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#getFlowsFlowId");
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
| **flowId** | **String**| Flow ID | |
| **token** | **String**| JWT token or API key for authorization | |
| **wabaAccountId** | **String**|  | [optional] |

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

## getFlowsFlowIdWithHttpInfo

> ApiResponse<CreateGroups200Response> getFlowsFlowIdWithHttpInfo(flowId, token, wabaAccountId)

Get Flow Details

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String flowId = "flowId_example"; // String | Flow ID
        String token = "token_example"; // String | JWT token or API key for authorization
        String wabaAccountId = "{{wabaAccountId}}"; // String | 
        try {
            ApiResponse<CreateGroups200Response> response = apiInstance.getFlowsFlowIdWithHttpInfo(flowId, token, wabaAccountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#getFlowsFlowId");
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
| **flowId** | **String**| Flow ID | |
| **token** | **String**| JWT token or API key for authorization | |
| **wabaAccountId** | **String**|  | [optional] |

### Return type

ApiResponse<[**CreateGroups200Response**](CreateGroups200Response.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## getFlowsFlowIdPreview

> Map<String, Object> getFlowsFlowIdPreview(flowId, token, wabaAccountId)

Preview Flow

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String flowId = "flowId_example"; // String | Flow ID
        String token = "token_example"; // String | JWT token or API key for authorization
        String wabaAccountId = "{{wabaAccountId}}"; // String | 
        try {
            Map<String, Object> result = apiInstance.getFlowsFlowIdPreview(flowId, token, wabaAccountId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#getFlowsFlowIdPreview");
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
| **flowId** | **String**| Flow ID | |
| **token** | **String**| JWT token or API key for authorization | |
| **wabaAccountId** | **String**|  | [optional] |

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

## getFlowsFlowIdPreviewWithHttpInfo

> ApiResponse<Map<String, Object>> getFlowsFlowIdPreviewWithHttpInfo(flowId, token, wabaAccountId)

Preview Flow

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String flowId = "flowId_example"; // String | Flow ID
        String token = "token_example"; // String | JWT token or API key for authorization
        String wabaAccountId = "{{wabaAccountId}}"; // String | 
        try {
            ApiResponse<Map<String, Object>> response = apiInstance.getFlowsFlowIdPreviewWithHttpInfo(flowId, token, wabaAccountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#getFlowsFlowIdPreview");
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
| **flowId** | **String**| Flow ID | |
| **token** | **String**| JWT token or API key for authorization | |
| **wabaAccountId** | **String**|  | [optional] |

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


## getWhatsappBusinessEncryption

> GetWhatsappBusinessEncryption200Response getWhatsappBusinessEncryption(token)

Get business encryption public key

Retrieve the WhatsApp business public key and signature status for this channel&#39;s phone number. Required before publishing or sending Flows that use data encryption. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            GetWhatsappBusinessEncryption200Response result = apiInstance.getWhatsappBusinessEncryption(token);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#getWhatsappBusinessEncryption");
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

## getWhatsappBusinessEncryptionWithHttpInfo

> ApiResponse<GetWhatsappBusinessEncryption200Response> getWhatsappBusinessEncryptionWithHttpInfo(token)

Get business encryption public key

Retrieve the WhatsApp business public key and signature status for this channel&#39;s phone number. Required before publishing or sending Flows that use data encryption. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            ApiResponse<GetWhatsappBusinessEncryption200Response> response = apiInstance.getWhatsappBusinessEncryptionWithHttpInfo(token);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#getWhatsappBusinessEncryption");
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

ApiResponse<[**GetWhatsappBusinessEncryption200Response**](GetWhatsappBusinessEncryption200Response.md)>


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


## listFlows

> ListFlows200Response listFlows(token, wabaAccountId)

List Flows

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        String wabaAccountId = "{{wabaAccountId}}"; // String | 
        try {
            ListFlows200Response result = apiInstance.listFlows(token, wabaAccountId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#listFlows");
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
| **wabaAccountId** | **String**|  | [optional] |

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

## listFlowsWithHttpInfo

> ApiResponse<ListFlows200Response> listFlowsWithHttpInfo(token, wabaAccountId)

List Flows

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        String wabaAccountId = "{{wabaAccountId}}"; // String | 
        try {
            ApiResponse<ListFlows200Response> response = apiInstance.listFlowsWithHttpInfo(token, wabaAccountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#listFlows");
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
| **wabaAccountId** | **String**|  | [optional] |

### Return type

ApiResponse<[**ListFlows200Response**](ListFlows200Response.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## patchFlowsFlowIdAssets

> PatchFlowsFlowIdAssets200Response patchFlowsFlowIdAssets(flowId, token, wabaAccountId)

Update Flow Structure

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String flowId = "flowId_example"; // String | Flow ID
        String token = "token_example"; // String | JWT token or API key for authorization
        String wabaAccountId = "{{wabaAccountId}}"; // String | 
        try {
            PatchFlowsFlowIdAssets200Response result = apiInstance.patchFlowsFlowIdAssets(flowId, token, wabaAccountId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#patchFlowsFlowIdAssets");
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
| **flowId** | **String**| Flow ID | |
| **token** | **String**| JWT token or API key for authorization | |
| **wabaAccountId** | **String**|  | [optional] |

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

## patchFlowsFlowIdAssetsWithHttpInfo

> ApiResponse<PatchFlowsFlowIdAssets200Response> patchFlowsFlowIdAssetsWithHttpInfo(flowId, token, wabaAccountId)

Update Flow Structure

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String flowId = "flowId_example"; // String | Flow ID
        String token = "token_example"; // String | JWT token or API key for authorization
        String wabaAccountId = "{{wabaAccountId}}"; // String | 
        try {
            ApiResponse<PatchFlowsFlowIdAssets200Response> response = apiInstance.patchFlowsFlowIdAssetsWithHttpInfo(flowId, token, wabaAccountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#patchFlowsFlowIdAssets");
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
| **flowId** | **String**| Flow ID | |
| **token** | **String**| JWT token or API key for authorization | |
| **wabaAccountId** | **String**|  | [optional] |

### Return type

ApiResponse<[**PatchFlowsFlowIdAssets200Response**](PatchFlowsFlowIdAssets200Response.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## patchFlowsFlowIdMetadata

> Map<String, Object> patchFlowsFlowIdMetadata(flowId, token, wabaAccountId)

Update Flow Metadata

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String flowId = "flowId_example"; // String | Flow ID
        String token = "token_example"; // String | JWT token or API key for authorization
        String wabaAccountId = "{{wabaAccountId}}"; // String | 
        try {
            Map<String, Object> result = apiInstance.patchFlowsFlowIdMetadata(flowId, token, wabaAccountId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#patchFlowsFlowIdMetadata");
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
| **flowId** | **String**| Flow ID | |
| **token** | **String**| JWT token or API key for authorization | |
| **wabaAccountId** | **String**|  | [optional] |

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

## patchFlowsFlowIdMetadataWithHttpInfo

> ApiResponse<Map<String, Object>> patchFlowsFlowIdMetadataWithHttpInfo(flowId, token, wabaAccountId)

Update Flow Metadata

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String flowId = "flowId_example"; // String | Flow ID
        String token = "token_example"; // String | JWT token or API key for authorization
        String wabaAccountId = "{{wabaAccountId}}"; // String | 
        try {
            ApiResponse<Map<String, Object>> response = apiInstance.patchFlowsFlowIdMetadataWithHttpInfo(flowId, token, wabaAccountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#patchFlowsFlowIdMetadata");
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
| **flowId** | **String**| Flow ID | |
| **token** | **String**| JWT token or API key for authorization | |
| **wabaAccountId** | **String**|  | [optional] |

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


## setWhatsappBusinessEncryption

> CreateCommerce200Response setWhatsappBusinessEncryption(token, setWhatsappBusinessEncryptionRequest)

Set business encryption public key

Upload and sign a 2048-bit RSA business public key (PEM) for this channel&#39;s phone number. Meta requires a signed key before Flow publish/send. Only one active key per number; a new upload replaces the previous key. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        SetWhatsappBusinessEncryptionRequest setWhatsappBusinessEncryptionRequest = new SetWhatsappBusinessEncryptionRequest(); // SetWhatsappBusinessEncryptionRequest | 
        try {
            CreateCommerce200Response result = apiInstance.setWhatsappBusinessEncryption(token, setWhatsappBusinessEncryptionRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#setWhatsappBusinessEncryption");
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
| **setWhatsappBusinessEncryptionRequest** | [**SetWhatsappBusinessEncryptionRequest**](SetWhatsappBusinessEncryptionRequest.md)|  | |

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
| **200** | Public key uploaded and signed |  -  |
| **400** | Missing or invalid PEM key |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

## setWhatsappBusinessEncryptionWithHttpInfo

> ApiResponse<CreateCommerce200Response> setWhatsappBusinessEncryptionWithHttpInfo(token, setWhatsappBusinessEncryptionRequest)

Set business encryption public key

Upload and sign a 2048-bit RSA business public key (PEM) for this channel&#39;s phone number. Meta requires a signed key before Flow publish/send. Only one active key per number; a new upload replaces the previous key. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.FlowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        FlowsApi apiInstance = new FlowsApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        SetWhatsappBusinessEncryptionRequest setWhatsappBusinessEncryptionRequest = new SetWhatsappBusinessEncryptionRequest(); // SetWhatsappBusinessEncryptionRequest | 
        try {
            ApiResponse<CreateCommerce200Response> response = apiInstance.setWhatsappBusinessEncryptionWithHttpInfo(token, setWhatsappBusinessEncryptionRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FlowsApi#setWhatsappBusinessEncryption");
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
| **setWhatsappBusinessEncryptionRequest** | [**SetWhatsappBusinessEncryptionRequest**](SetWhatsappBusinessEncryptionRequest.md)|  | |

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
| **200** | Public key uploaded and signed |  -  |
| **400** | Missing or invalid PEM key |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

