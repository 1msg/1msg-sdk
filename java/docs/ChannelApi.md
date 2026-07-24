# ChannelApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getConversationalAutomation**](ChannelApi.md#getConversationalAutomation) | **GET** /conversationalAutomation | Get conversational automation settings |
| [**getConversationalAutomationWithHttpInfo**](ChannelApi.md#getConversationalAutomationWithHttpInfo) | **GET** /conversationalAutomation | Get conversational automation settings |
| [**getStatus**](ChannelApi.md#getStatus) | **GET** /status | Get channel status |
| [**getStatusWithHttpInfo**](ChannelApi.md#getStatusWithHttpInfo) | **GET** /status | Get channel status |
| [**setConversationalAutomation**](ChannelApi.md#setConversationalAutomation) | **POST** /conversationalAutomation | Set conversational automation settings |
| [**setConversationalAutomationWithHttpInfo**](ChannelApi.md#setConversationalAutomationWithHttpInfo) | **POST** /conversationalAutomation | Set conversational automation settings |



## getConversationalAutomation

> ConversationalAutomation getConversationalAutomation(token)

Get conversational automation settings

Get WhatsApp conversational components for the channel (welcome message, ice-breaker prompts, and slash commands).  Proxies Meta/360dialog &#x60;GET /conversational_automation&#x60;.  When &#x60;enable_welcome_message&#x60; is true and a user opens chat for the first time, Meta delivers a webhook message with &#x60;type: request_welcome&#x60;. The inbound formatter exposes that as &#x60;type: \&quot;request_welcome\&quot;&#x60; and &#x60;meta.request_welcome: true&#x60; so your webhook can send a custom welcome reply. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.ChannelApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        ChannelApi apiInstance = new ChannelApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            ConversationalAutomation result = apiInstance.getConversationalAutomation(token);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChannelApi#getConversationalAutomation");
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

[**ConversationalAutomation**](ConversationalAutomation.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Conversational automation settings |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

## getConversationalAutomationWithHttpInfo

> ApiResponse<ConversationalAutomation> getConversationalAutomationWithHttpInfo(token)

Get conversational automation settings

Get WhatsApp conversational components for the channel (welcome message, ice-breaker prompts, and slash commands).  Proxies Meta/360dialog &#x60;GET /conversational_automation&#x60;.  When &#x60;enable_welcome_message&#x60; is true and a user opens chat for the first time, Meta delivers a webhook message with &#x60;type: request_welcome&#x60;. The inbound formatter exposes that as &#x60;type: \&quot;request_welcome\&quot;&#x60; and &#x60;meta.request_welcome: true&#x60; so your webhook can send a custom welcome reply. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.ChannelApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        ChannelApi apiInstance = new ChannelApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            ApiResponse<ConversationalAutomation> response = apiInstance.getConversationalAutomationWithHttpInfo(token);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ChannelApi#getConversationalAutomation");
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

ApiResponse<[**ConversationalAutomation**](ConversationalAutomation.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Conversational automation settings |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |


## getStatus

> Map<String, Object> getStatus(token)

Get channel status

Returns WhatsApp Business API client connection status.

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.ChannelApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        ChannelApi apiInstance = new ChannelApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            Map<String, Object> result = apiInstance.getStatus(token);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChannelApi#getStatus");
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

**Map&lt;String, Object&gt;**


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Channel status |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

## getStatusWithHttpInfo

> ApiResponse<Map<String, Object>> getStatusWithHttpInfo(token)

Get channel status

Returns WhatsApp Business API client connection status.

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.ChannelApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        ChannelApi apiInstance = new ChannelApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            ApiResponse<Map<String, Object>> response = apiInstance.getStatusWithHttpInfo(token);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ChannelApi#getStatus");
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

ApiResponse<**Map&lt;String, Object&gt;**>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Channel status |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |


## setConversationalAutomation

> Map<String, Object> setConversationalAutomation(token, conversationalAutomation)

Set conversational automation settings

Update WhatsApp conversational components.  Allowed body fields (others are ignored): - &#x60;enable_welcome_message&#x60; (boolean) - &#x60;prompts&#x60; (string[], max 4, each ≤ 80 chars) - &#x60;commands&#x60; (&#x60;{ command_name, command_description }[]&#x60;)  Proxies Meta/360dialog &#x60;POST /conversational_automation&#x60;. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.ChannelApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        ChannelApi apiInstance = new ChannelApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        ConversationalAutomation conversationalAutomation = new ConversationalAutomation(); // ConversationalAutomation | 
        try {
            Map<String, Object> result = apiInstance.setConversationalAutomation(token, conversationalAutomation);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChannelApi#setConversationalAutomation");
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
| **conversationalAutomation** | [**ConversationalAutomation**](ConversationalAutomation.md)|  | |

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
| **200** | Updated settings from WABA, or legacy response.error wrapper on upstream failure.  |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

## setConversationalAutomationWithHttpInfo

> ApiResponse<Map<String, Object>> setConversationalAutomationWithHttpInfo(token, conversationalAutomation)

Set conversational automation settings

Update WhatsApp conversational components.  Allowed body fields (others are ignored): - &#x60;enable_welcome_message&#x60; (boolean) - &#x60;prompts&#x60; (string[], max 4, each ≤ 80 chars) - &#x60;commands&#x60; (&#x60;{ command_name, command_description }[]&#x60;)  Proxies Meta/360dialog &#x60;POST /conversational_automation&#x60;. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.ChannelApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        ChannelApi apiInstance = new ChannelApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        ConversationalAutomation conversationalAutomation = new ConversationalAutomation(); // ConversationalAutomation | 
        try {
            ApiResponse<Map<String, Object>> response = apiInstance.setConversationalAutomationWithHttpInfo(token, conversationalAutomation);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ChannelApi#setConversationalAutomation");
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
| **conversationalAutomation** | [**ConversationalAutomation**](ConversationalAutomation.md)|  | |

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
| **200** | Updated settings from WABA, or legacy response.error wrapper on upstream failure.  |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

