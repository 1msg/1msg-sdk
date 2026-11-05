# ChannelApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSettings**](ChannelApi.md#createSettings) | **POST** /settings | Update channel settings |
| [**createSettingsWithHttpInfo**](ChannelApi.md#createSettingsWithHttpInfo) | **POST** /settings | Update channel settings |
| [**getConversationalAutomation**](ChannelApi.md#getConversationalAutomation) | **GET** /conversationalAutomation | Get conversational automation settings |
| [**getConversationalAutomationWithHttpInfo**](ChannelApi.md#getConversationalAutomationWithHttpInfo) | **GET** /conversationalAutomation | Get conversational automation settings |
| [**getStatus**](ChannelApi.md#getStatus) | **GET** /status | Get channel status |
| [**getStatusWithHttpInfo**](ChannelApi.md#getStatusWithHttpInfo) | **GET** /status | Get channel status |
| [**listSettings**](ChannelApi.md#listSettings) | **GET** /settings | Get channel settings |
| [**listSettingsWithHttpInfo**](ChannelApi.md#listSettingsWithHttpInfo) | **GET** /settings | Get channel settings |
| [**setConversationalAutomation**](ChannelApi.md#setConversationalAutomation) | **POST** /conversationalAutomation | Set conversational automation settings |
| [**setConversationalAutomationWithHttpInfo**](ChannelApi.md#setConversationalAutomationWithHttpInfo) | **POST** /conversationalAutomation | Set conversational automation settings |



## createSettings

> Map<String, Object> createSettings(token, createSettingsRequest)

Update channel settings

Update channel settings. Only send fields you want to change.  &#x60;webhookUrl&#x60; **replaces** the stored list (one URL string, or up to 5 URLs as an array). Passing an empty value clears webhooks. Repeating the same URL(s) also clears a sticky auto-disable. With several URLs, send the complete array to re-enable one of them — omitting a URL removes it from the channel. 

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
        CreateSettingsRequest createSettingsRequest = new CreateSettingsRequest(); // CreateSettingsRequest | 
        try {
            Map<String, Object> result = apiInstance.createSettings(token, createSettingsRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChannelApi#createSettings");
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
| **createSettingsRequest** | [**CreateSettingsRequest**](CreateSettingsRequest.md)|  | |

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
| **200** | Updated settings |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

## createSettingsWithHttpInfo

> ApiResponse<Map<String, Object>> createSettingsWithHttpInfo(token, createSettingsRequest)

Update channel settings

Update channel settings. Only send fields you want to change.  &#x60;webhookUrl&#x60; **replaces** the stored list (one URL string, or up to 5 URLs as an array). Passing an empty value clears webhooks. Repeating the same URL(s) also clears a sticky auto-disable. With several URLs, send the complete array to re-enable one of them — omitting a URL removes it from the channel. 

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
        CreateSettingsRequest createSettingsRequest = new CreateSettingsRequest(); // CreateSettingsRequest | 
        try {
            ApiResponse<Map<String, Object>> response = apiInstance.createSettingsWithHttpInfo(token, createSettingsRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ChannelApi#createSettings");
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
| **createSettingsRequest** | [**CreateSettingsRequest**](CreateSettingsRequest.md)|  | |

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
| **200** | Updated settings |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |


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

> GetStatus200Response getStatus(token)

Get channel status

Return WhatsApp Cloud API connection status for this channel (&#x60;connected&#x60; when the number can send). May include &#x60;accountStatus&#x60;, messaging limit, and MM Lite availability.  Optional &#x60;health_status_warning&#x60; appears only when Meta Graph health could not be loaded and a soft &#x60;connected&#x60; response is returned. Omitted on the normal path and when health details are not applicable for the channel — never an internal provider/transport name. 

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
            GetStatus200Response result = apiInstance.getStatus(token);
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

[**GetStatus200Response**](GetStatus200Response.md)


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

> ApiResponse<GetStatus200Response> getStatusWithHttpInfo(token)

Get channel status

Return WhatsApp Cloud API connection status for this channel (&#x60;connected&#x60; when the number can send). May include &#x60;accountStatus&#x60;, messaging limit, and MM Lite availability.  Optional &#x60;health_status_warning&#x60; appears only when Meta Graph health could not be loaded and a soft &#x60;connected&#x60; response is returned. Omitted on the normal path and when health details are not applicable for the channel — never an internal provider/transport name. 

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
            ApiResponse<GetStatus200Response> response = apiInstance.getStatusWithHttpInfo(token);
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

ApiResponse<[**GetStatus200Response**](GetStatus200Response.md)>


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


## listSettings

> ListSettings200Response listSettings(token)

Get channel settings

Return channel settings: webhook URL(s), delivery flags, and analytics toggles.  Auto-disable / circuit state matches &#x60;GET /webhook&#x60;. **Prefer &#x60;webhookStatuses&#x60;** (one row per configured URL). The breaker is per URL, not per channel.  Channel-level &#x60;haveDisabledWebhooks&#x60; is &#x60;true&#x60; when **at least one** URL in &#x60;webhookUrl&#x60; is sticky auto-disabled — not \&quot;the channel is dead\&quot;. Live URLs still receive events. Top-level &#x60;circuitState&#x60; / &#x60;reason&#x60; / &#x60;fails&#x60; / &#x60;trips&#x60; are a compatibility summary of one URL (first sticky-disabled, else first configured).  This is the same &#x60;GET /settings&#x60; endpoint as the REST API (previously missing from MCP). 

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
            ListSettings200Response result = apiInstance.listSettings(token);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChannelApi#listSettings");
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

[**ListSettings200Response**](ListSettings200Response.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current settings |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

## listSettingsWithHttpInfo

> ApiResponse<ListSettings200Response> listSettingsWithHttpInfo(token)

Get channel settings

Return channel settings: webhook URL(s), delivery flags, and analytics toggles.  Auto-disable / circuit state matches &#x60;GET /webhook&#x60;. **Prefer &#x60;webhookStatuses&#x60;** (one row per configured URL). The breaker is per URL, not per channel.  Channel-level &#x60;haveDisabledWebhooks&#x60; is &#x60;true&#x60; when **at least one** URL in &#x60;webhookUrl&#x60; is sticky auto-disabled — not \&quot;the channel is dead\&quot;. Live URLs still receive events. Top-level &#x60;circuitState&#x60; / &#x60;reason&#x60; / &#x60;fails&#x60; / &#x60;trips&#x60; are a compatibility summary of one URL (first sticky-disabled, else first configured).  This is the same &#x60;GET /settings&#x60; endpoint as the REST API (previously missing from MCP). 

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
            ApiResponse<ListSettings200Response> response = apiInstance.listSettingsWithHttpInfo(token);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ChannelApi#listSettings");
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

ApiResponse<[**ListSettings200Response**](ListSettings200Response.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current settings |  -  |
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

