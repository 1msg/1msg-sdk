# CallingApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCallingSettings**](CallingApi.md#getCallingSettings) | **GET** /callingSettings | Get calling settings |
| [**getCallingSettingsWithHttpInfo**](CallingApi.md#getCallingSettingsWithHttpInfo) | **GET** /callingSettings | Get calling settings |
| [**initiateCall**](CallingApi.md#initiateCall) | **POST** /initiateCall | Call action (connect / pre_accept / accept / reject / terminate) |
| [**initiateCallWithHttpInfo**](CallingApi.md#initiateCallWithHttpInfo) | **POST** /initiateCall | Call action (connect / pre_accept / accept / reject / terminate) |
| [**updateCallingSettings**](CallingApi.md#updateCallingSettings) | **POST** /callingSettings | Update calling settings |
| [**updateCallingSettingsWithHttpInfo**](CallingApi.md#updateCallingSettingsWithHttpInfo) | **POST** /callingSettings | Update calling settings |



## getCallingSettings

> CallingSettings getCallingSettings(token)

Get calling settings

Return WhatsApp Calling API settings for this channel (beta).  Proxies upstream &#x60;GET /calling/settings&#x60;.  **Prerequisites** - Number must be eligible for Meta Calling (Cloud API; not COEX) - Trial / &#x60;subscriptionBlocked&#x60; channels receive **403** plain text - You need your own WebRTC or SIP stack; 1msg is a **signaling proxy** only   and does **not** store call history or recordings  See the **Calling** tag overview for inbound/outbound flows and webhooks. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.CallingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        CallingApi apiInstance = new CallingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            CallingSettings result = apiInstance.getCallingSettings(token);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallingApi#getCallingSettings");
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

[**CallingSettings**](CallingSettings.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Calling settings (and possibly other Cloud API settings Meta returns) |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

## getCallingSettingsWithHttpInfo

> ApiResponse<CallingSettings> getCallingSettingsWithHttpInfo(token)

Get calling settings

Return WhatsApp Calling API settings for this channel (beta).  Proxies upstream &#x60;GET /calling/settings&#x60;.  **Prerequisites** - Number must be eligible for Meta Calling (Cloud API; not COEX) - Trial / &#x60;subscriptionBlocked&#x60; channels receive **403** plain text - You need your own WebRTC or SIP stack; 1msg is a **signaling proxy** only   and does **not** store call history or recordings  See the **Calling** tag overview for inbound/outbound flows and webhooks. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.CallingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        CallingApi apiInstance = new CallingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            ApiResponse<CallingSettings> response = apiInstance.getCallingSettingsWithHttpInfo(token);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CallingApi#getCallingSettings");
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

ApiResponse<[**CallingSettings**](CallingSettings.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Calling settings (and possibly other Cloud API settings Meta returns) |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |


## initiateCall

> InitiateCallResponse initiateCall(token, initiateCallRequest)

Call action (connect / pre_accept / accept / reject / terminate)

Perform a WhatsApp Calling action (beta).  Proxies upstream &#x60;POST /calling/calls&#x60;. Despite the historical path name &#x60;/initiateCall&#x60;, this endpoint handles **all** call actions:  | action | Use | Required | |--------|-----|----------| | &#x60;connect&#x60; | Outbound business → user | &#x60;to&#x60; + &#x60;session&#x60; (&#x60;sdp_type: offer&#x60;) | | &#x60;pre_accept&#x60; | Inbound (optional, reduces audio clipping) | &#x60;call_id&#x60; + &#x60;session&#x60; (&#x60;sdp_type: answer&#x60;) | | &#x60;accept&#x60; | Inbound answer | &#x60;call_id&#x60; + &#x60;session&#x60; (&#x60;sdp_type: answer&#x60;) | | &#x60;reject&#x60; | Decline inbound | &#x60;call_id&#x60; | | &#x60;terminate&#x60; | Hang up | &#x60;call_id&#x60; |  **SDP / media (critical)** - &#x60;accept&#x60; / &#x60;pre_accept&#x60; require a **WebRTC-generated SDP answer**. - Do **not** send Meta&#39;s offer SDP back as the answer. - Postman (or curl) alone **cannot** establish real media — you need a   WebRTC or SIP stack. 1msg only proxies signaling.  Answer within ~**30–60 seconds** of an inbound &#x60;connect&#x60; webhook or Meta terminates as unanswered. Common Meta errors include Calling not enabled (&#x60;138000&#x60;), no permission (&#x60;138006&#x60;), SDP validation failures.  **Outbound** requires a prior Call Permission Request (CPR) acceptance. See the **Calling** tag overview for the full outbound flow and CPR limits.  Trial / &#x60;subscriptionBlocked&#x60; → **403** plain text. Upstream failures often return HTTP 200 with &#x60;{ \&quot;response\&quot;: { \&quot;error\&quot;: \&quot;...\&quot; } }&#x60;. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.CallingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        CallingApi apiInstance = new CallingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        InitiateCallRequest initiateCallRequest = new InitiateCallRequest(); // InitiateCallRequest | 
        try {
            InitiateCallResponse result = apiInstance.initiateCall(token, initiateCallRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallingApi#initiateCall");
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
| **initiateCallRequest** | [**InitiateCallRequest**](InitiateCallRequest.md)|  | |

### Return type

[**InitiateCallResponse**](InitiateCallResponse.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Call action result from upstream, or legacy error wrapper |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

## initiateCallWithHttpInfo

> ApiResponse<InitiateCallResponse> initiateCallWithHttpInfo(token, initiateCallRequest)

Call action (connect / pre_accept / accept / reject / terminate)

Perform a WhatsApp Calling action (beta).  Proxies upstream &#x60;POST /calling/calls&#x60;. Despite the historical path name &#x60;/initiateCall&#x60;, this endpoint handles **all** call actions:  | action | Use | Required | |--------|-----|----------| | &#x60;connect&#x60; | Outbound business → user | &#x60;to&#x60; + &#x60;session&#x60; (&#x60;sdp_type: offer&#x60;) | | &#x60;pre_accept&#x60; | Inbound (optional, reduces audio clipping) | &#x60;call_id&#x60; + &#x60;session&#x60; (&#x60;sdp_type: answer&#x60;) | | &#x60;accept&#x60; | Inbound answer | &#x60;call_id&#x60; + &#x60;session&#x60; (&#x60;sdp_type: answer&#x60;) | | &#x60;reject&#x60; | Decline inbound | &#x60;call_id&#x60; | | &#x60;terminate&#x60; | Hang up | &#x60;call_id&#x60; |  **SDP / media (critical)** - &#x60;accept&#x60; / &#x60;pre_accept&#x60; require a **WebRTC-generated SDP answer**. - Do **not** send Meta&#39;s offer SDP back as the answer. - Postman (or curl) alone **cannot** establish real media — you need a   WebRTC or SIP stack. 1msg only proxies signaling.  Answer within ~**30–60 seconds** of an inbound &#x60;connect&#x60; webhook or Meta terminates as unanswered. Common Meta errors include Calling not enabled (&#x60;138000&#x60;), no permission (&#x60;138006&#x60;), SDP validation failures.  **Outbound** requires a prior Call Permission Request (CPR) acceptance. See the **Calling** tag overview for the full outbound flow and CPR limits.  Trial / &#x60;subscriptionBlocked&#x60; → **403** plain text. Upstream failures often return HTTP 200 with &#x60;{ \&quot;response\&quot;: { \&quot;error\&quot;: \&quot;...\&quot; } }&#x60;. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.CallingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        CallingApi apiInstance = new CallingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        InitiateCallRequest initiateCallRequest = new InitiateCallRequest(); // InitiateCallRequest | 
        try {
            ApiResponse<InitiateCallResponse> response = apiInstance.initiateCallWithHttpInfo(token, initiateCallRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CallingApi#initiateCall");
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
| **initiateCallRequest** | [**InitiateCallRequest**](InitiateCallRequest.md)|  | |

### Return type

ApiResponse<[**InitiateCallResponse**](InitiateCallResponse.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Call action result from upstream, or legacy error wrapper |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |


## updateCallingSettings

> UpdateCallingSettings200Response updateCallingSettings(token, callingSettings)

Update calling settings

Enable, disable, or update WhatsApp Calling settings (beta).  Proxies upstream &#x60;POST /calling/settings&#x60;. Body is forwarded as-is (1msg does not validate fields).  **Common fields under &#x60;calling&#x60;** - &#x60;status&#x60; (&#x60;ENABLED&#x60; | &#x60;DISABLED&#x60;) — required to turn calling on/off - &#x60;call_icon_visibility&#x60; (&#x60;DEFAULT&#x60; | &#x60;DISABLE_ALL&#x60;) — optional - &#x60;callback_permission_status&#x60; (&#x60;ENABLED&#x60; | &#x60;DISABLED&#x60;) — optional;   when enabled, inbound user calls grant callback permission - &#x60;call_hours&#x60; — optional hours / timezone object - &#x60;sip&#x60; — optional SIP trunk; when SIP is ENABLED, Graph call actions and   calling webhooks are not used - &#x60;srtp_key_exchange_protocol&#x60; (&#x60;DTLS&#x60; | &#x60;SDES&#x60;) — SDES only with SIP - &#x60;video.status&#x60; — optional  Meta may accept only one feature group per request — prefer focused updates (e.g. enable status first, then SIP).  Trial / &#x60;subscriptionBlocked&#x60; → **403** plain text. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.CallingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        CallingApi apiInstance = new CallingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        CallingSettings callingSettings = new CallingSettings(); // CallingSettings | 
        try {
            UpdateCallingSettings200Response result = apiInstance.updateCallingSettings(token, callingSettings);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallingApi#updateCallingSettings");
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
| **callingSettings** | [**CallingSettings**](CallingSettings.md)|  | |

### Return type

[**UpdateCallingSettings200Response**](UpdateCallingSettings200Response.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Usually &#x60;{ \&quot;success\&quot;: true }&#x60; from upstream, or legacy &#x60;{ \&quot;result\&quot;: \&quot;success\&quot; }&#x60; / &#x60;{ \&quot;response\&quot;: { \&quot;error\&quot;: \&quot;...\&quot; } }&#x60;.  |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

## updateCallingSettingsWithHttpInfo

> ApiResponse<UpdateCallingSettings200Response> updateCallingSettingsWithHttpInfo(token, callingSettings)

Update calling settings

Enable, disable, or update WhatsApp Calling settings (beta).  Proxies upstream &#x60;POST /calling/settings&#x60;. Body is forwarded as-is (1msg does not validate fields).  **Common fields under &#x60;calling&#x60;** - &#x60;status&#x60; (&#x60;ENABLED&#x60; | &#x60;DISABLED&#x60;) — required to turn calling on/off - &#x60;call_icon_visibility&#x60; (&#x60;DEFAULT&#x60; | &#x60;DISABLE_ALL&#x60;) — optional - &#x60;callback_permission_status&#x60; (&#x60;ENABLED&#x60; | &#x60;DISABLED&#x60;) — optional;   when enabled, inbound user calls grant callback permission - &#x60;call_hours&#x60; — optional hours / timezone object - &#x60;sip&#x60; — optional SIP trunk; when SIP is ENABLED, Graph call actions and   calling webhooks are not used - &#x60;srtp_key_exchange_protocol&#x60; (&#x60;DTLS&#x60; | &#x60;SDES&#x60;) — SDES only with SIP - &#x60;video.status&#x60; — optional  Meta may accept only one feature group per request — prefer focused updates (e.g. enable status first, then SIP).  Trial / &#x60;subscriptionBlocked&#x60; → **403** plain text. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.CallingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        CallingApi apiInstance = new CallingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        CallingSettings callingSettings = new CallingSettings(); // CallingSettings | 
        try {
            ApiResponse<UpdateCallingSettings200Response> response = apiInstance.updateCallingSettingsWithHttpInfo(token, callingSettings);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CallingApi#updateCallingSettings");
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
| **callingSettings** | [**CallingSettings**](CallingSettings.md)|  | |

### Return type

ApiResponse<[**UpdateCallingSettings200Response**](UpdateCallingSettings200Response.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Usually &#x60;{ \&quot;success\&quot;: true }&#x60; from upstream, or legacy &#x60;{ \&quot;result\&quot;: \&quot;success\&quot; }&#x60; / &#x60;{ \&quot;response\&quot;: { \&quot;error\&quot;: \&quot;...\&quot; } }&#x60;.  |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

