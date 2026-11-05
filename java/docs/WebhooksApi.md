# WebhooksApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getWebhook**](WebhooksApi.md#getWebhook) | **GET** /webhook | Get webhook URL |
| [**getWebhookWithHttpInfo**](WebhooksApi.md#getWebhookWithHttpInfo) | **GET** /webhook | Get webhook URL |
| [**setWebhook**](WebhooksApi.md#setWebhook) | **POST** /webhook | Set webhook URL |
| [**setWebhookWithHttpInfo**](WebhooksApi.md#setWebhookWithHttpInfo) | **POST** /webhook | Set webhook URL |



## getWebhook

> GetWebhook200Response getWebhook(token)

Get webhook URL

Return the webhook URL(s) currently configured for this channel, plus delivery status for each URL.  &#x60;webhookUrl&#x60; is a string when a single URL is set, an array of strings when multiple URLs are configured, or &#x60;null&#x60; if none is set.  **Prefer &#x60;webhookStatuses&#x60;.** The circuit breaker is per URL, not per channel. If 1 of 4 URLs is sticky-disabled, that URL is skipped; the other three still receive events. Send/receive are not affected.  Channel-level &#x60;haveDisabledWebhooks&#x60;, &#x60;circuitState&#x60;, &#x60;reason&#x60;, &#x60;fails&#x60;, &#x60;trips&#x60;, and timestamps are a compatibility summary of **one** URL (the first sticky-disabled URL, else the first configured URL). They are not \&quot;the channel is dead\&quot;.  - &#x60;haveDisabledWebhooks&#x60; — &#x60;true&#x60; when **at least one** URL in &#x60;webhookUrl&#x60; is   sticky auto-disabled. Live URLs still get events. - &#x60;circuitState&#x60; — compressed scalar for that same primary URL:   &#x60;ok&#x60; | &#x60;degraded&#x60; | &#x60;open&#x60; | &#x60;half_open&#x60; | &#x60;disabled&#x60;. - &#x60;disabledWebhooks&#x60; — currently configured URLs that are sticky-disabled   (subset of &#x60;webhookUrl&#x60;). - &#x60;webhookStatuses&#x60; — one row per currently configured URL. Use this array   to see which endpoints are live vs skipped. - &#x60;fails&#x60; / &#x60;trips&#x60; / &#x60;firstFailAt&#x60; — **diagnostics for support**, not product   UI. &#x60;fails&#x60; &#x3D; failures in a rolling ~10 minute window (not lifetime).   &#x60;trips&#x60; &#x3D; failed recovery probes on the 15 min → 1 h → 6 h schedule (sticky   disable after 3). Clients can ignore these and use &#x60;webhookStatuses&#x60; +   &#x60;disabledWebhooks&#x60; only.  Sticky disable skips delivery; it does not unconfigure the URL (it stays in &#x60;webhookUrl&#x60;). Re-enable with &#x60;POST /webhook&#x60; or &#x60;POST /settings&#x60;. Those endpoints **replace** the whole list — with multiple URLs, send the full array. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            GetWebhook200Response result = apiInstance.getWebhook(token);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#getWebhook");
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

[**GetWebhook200Response**](GetWebhook200Response.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current webhook URL and per-URL circuit status |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

## getWebhookWithHttpInfo

> ApiResponse<GetWebhook200Response> getWebhookWithHttpInfo(token)

Get webhook URL

Return the webhook URL(s) currently configured for this channel, plus delivery status for each URL.  &#x60;webhookUrl&#x60; is a string when a single URL is set, an array of strings when multiple URLs are configured, or &#x60;null&#x60; if none is set.  **Prefer &#x60;webhookStatuses&#x60;.** The circuit breaker is per URL, not per channel. If 1 of 4 URLs is sticky-disabled, that URL is skipped; the other three still receive events. Send/receive are not affected.  Channel-level &#x60;haveDisabledWebhooks&#x60;, &#x60;circuitState&#x60;, &#x60;reason&#x60;, &#x60;fails&#x60;, &#x60;trips&#x60;, and timestamps are a compatibility summary of **one** URL (the first sticky-disabled URL, else the first configured URL). They are not \&quot;the channel is dead\&quot;.  - &#x60;haveDisabledWebhooks&#x60; — &#x60;true&#x60; when **at least one** URL in &#x60;webhookUrl&#x60; is   sticky auto-disabled. Live URLs still get events. - &#x60;circuitState&#x60; — compressed scalar for that same primary URL:   &#x60;ok&#x60; | &#x60;degraded&#x60; | &#x60;open&#x60; | &#x60;half_open&#x60; | &#x60;disabled&#x60;. - &#x60;disabledWebhooks&#x60; — currently configured URLs that are sticky-disabled   (subset of &#x60;webhookUrl&#x60;). - &#x60;webhookStatuses&#x60; — one row per currently configured URL. Use this array   to see which endpoints are live vs skipped. - &#x60;fails&#x60; / &#x60;trips&#x60; / &#x60;firstFailAt&#x60; — **diagnostics for support**, not product   UI. &#x60;fails&#x60; &#x3D; failures in a rolling ~10 minute window (not lifetime).   &#x60;trips&#x60; &#x3D; failed recovery probes on the 15 min → 1 h → 6 h schedule (sticky   disable after 3). Clients can ignore these and use &#x60;webhookStatuses&#x60; +   &#x60;disabledWebhooks&#x60; only.  Sticky disable skips delivery; it does not unconfigure the URL (it stays in &#x60;webhookUrl&#x60;). Re-enable with &#x60;POST /webhook&#x60; or &#x60;POST /settings&#x60;. Those endpoints **replace** the whole list — with multiple URLs, send the full array. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            ApiResponse<GetWebhook200Response> response = apiInstance.getWebhookWithHttpInfo(token);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#getWebhook");
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

ApiResponse<[**GetWebhook200Response**](GetWebhook200Response.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current webhook URL and per-URL circuit status |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |


## setWebhook

> SetWebhook200Response setWebhook(token, setWebhookRequest)

Set webhook URL

Set the client webhook URL that receives inbound events for this channel.  **Replaces** the stored webhook list (it does not append). To deliver the same events to several endpoints, pass an array in &#x60;webhookUrl&#x60; (max 5) or use &#x60;POST /settings&#x60;. With several URLs already configured, posting only the disabled URL **drops the others** — send the complete array to re-enable one of many.  Incoming payloads include messages, delivery ACKs, group updates, coexistence echoes, and calling events. WhatsApp Calling payloads (&#x60;type: \&quot;calls\&quot;&#x60;) are documented under the **Calling** tag. Call permission replies arrive on the normal messages path (&#x60;call_permission_reply&#x60;).  Repeating &#x60;POST /webhook&#x60; with the same URL(s) clears an auto-disable (self-serve re-enable). Send/receive are not affected by webhook auto-disable. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        SetWebhookRequest setWebhookRequest = new SetWebhookRequest(); // SetWebhookRequest | 
        try {
            SetWebhook200Response result = apiInstance.setWebhook(token, setWebhookRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#setWebhook");
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
| **setWebhookRequest** | [**SetWebhookRequest**](SetWebhookRequest.md)|  | |

### Return type

[**SetWebhook200Response**](SetWebhook200Response.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook configured |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

## setWebhookWithHttpInfo

> ApiResponse<SetWebhook200Response> setWebhookWithHttpInfo(token, setWebhookRequest)

Set webhook URL

Set the client webhook URL that receives inbound events for this channel.  **Replaces** the stored webhook list (it does not append). To deliver the same events to several endpoints, pass an array in &#x60;webhookUrl&#x60; (max 5) or use &#x60;POST /settings&#x60;. With several URLs already configured, posting only the disabled URL **drops the others** — send the complete array to re-enable one of many.  Incoming payloads include messages, delivery ACKs, group updates, coexistence echoes, and calling events. WhatsApp Calling payloads (&#x60;type: \&quot;calls\&quot;&#x60;) are documented under the **Calling** tag. Call permission replies arrive on the normal messages path (&#x60;call_permission_reply&#x60;).  Repeating &#x60;POST /webhook&#x60; with the same URL(s) clears an auto-disable (self-serve re-enable). Send/receive are not affected by webhook auto-disable. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        SetWebhookRequest setWebhookRequest = new SetWebhookRequest(); // SetWebhookRequest | 
        try {
            ApiResponse<SetWebhook200Response> response = apiInstance.setWebhookWithHttpInfo(token, setWebhookRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#setWebhook");
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
| **setWebhookRequest** | [**SetWebhookRequest**](SetWebhookRequest.md)|  | |

### Return type

ApiResponse<[**SetWebhook200Response**](SetWebhook200Response.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook configured |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

