# TemplatesApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addTemplate**](TemplatesApi.md#addTemplate) | **POST** /addTemplate | Create message template |
| [**addTemplateWithHttpInfo**](TemplatesApi.md#addTemplateWithHttpInfo) | **POST** /addTemplate | Create message template |
| [**listTemplates**](TemplatesApi.md#listTemplates) | **GET** /templates | Get templates list |
| [**listTemplatesWithHttpInfo**](TemplatesApi.md#listTemplatesWithHttpInfo) | **GET** /templates | Get templates list |
| [**removeTemplate**](TemplatesApi.md#removeTemplate) | **POST** /removeTemplate | Remove message template |
| [**removeTemplateWithHttpInfo**](TemplatesApi.md#removeTemplateWithHttpInfo) | **POST** /removeTemplate | Remove message template |
| [**sendTemplate**](TemplatesApi.md#sendTemplate) | **POST** /sendTemplate | Send Template Message |
| [**sendTemplateWithHttpInfo**](TemplatesApi.md#sendTemplateWithHttpInfo) | **POST** /sendTemplate | Send Template Message |



## addTemplate

> AddTemplate200Response addTemplate(token, addTemplateRequest)

Create message template

Create a WABA message template (&#x60;name&#x60;, &#x60;category&#x60;, &#x60;language&#x60;, &#x60;components&#x60;). After create, Meta reviews the template; list it with &#x60;GET /templates&#x60;.  Authentication OTP templates (&#x60;category: AUTHENTICATION&#x60;, copy-code / OTP button) can later be sent only to a phone number. Meta does not accept a BSUID recipient for them (error 131062). If the recipient is known only by BSUID — for example they use a username and their phone number is not in your Business Portfolio — that template cannot be sent.  To ask a BSUID user for their phone number, add a &#x60;REQUEST_CONTACT_INFO&#x60; button on a &#x60;UTILITY&#x60; or &#x60;MARKETING&#x60; template. Do not send &#x60;text&#x60; on that button — WhatsApp sets the label (and rejects a custom one). The button also has no send-time parameters: &#x60;POST /sendTemplate&#x60; does not take a button component for it. Inside an open 24-hour window, call &#x60;POST /sendContactInfo&#x60; instead of a template.  When the user shares the number, the inbound webhook is a &#x60;contacts&#x60; message with &#x60;origin: contact_request&#x60;. The phone is stored on that BSUID automatically. See &#x60;POST /sendContactInfo&#x60;.  &#x60;&#x60;&#x60;json {   \&quot;name\&quot;: \&quot;request_phone\&quot;,   \&quot;category\&quot;: \&quot;UTILITY\&quot;,   \&quot;language\&quot;: \&quot;en_US\&quot;,   \&quot;components\&quot;: [     {       \&quot;type\&quot;: \&quot;BODY\&quot;,       \&quot;text\&quot;: \&quot;Please share your phone number so we can continue.\&quot;     },     {       \&quot;type\&quot;: \&quot;BUTTONS\&quot;,       \&quot;buttons\&quot;: [{ \&quot;type\&quot;: \&quot;REQUEST_CONTACT_INFO\&quot; }]     }   ] } &#x60;&#x60;&#x60; 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        AddTemplateRequest addTemplateRequest = new AddTemplateRequest(); // AddTemplateRequest | 
        try {
            AddTemplate200Response result = apiInstance.addTemplate(token, addTemplateRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#addTemplate");
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
| **addTemplateRequest** | [**AddTemplateRequest**](AddTemplateRequest.md)|  | [optional] |

### Return type

[**AddTemplate200Response**](AddTemplate200Response.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Template created. Provider payload is wrapped in &#x60;response&#x60;. |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

## addTemplateWithHttpInfo

> ApiResponse<AddTemplate200Response> addTemplateWithHttpInfo(token, addTemplateRequest)

Create message template

Create a WABA message template (&#x60;name&#x60;, &#x60;category&#x60;, &#x60;language&#x60;, &#x60;components&#x60;). After create, Meta reviews the template; list it with &#x60;GET /templates&#x60;.  Authentication OTP templates (&#x60;category: AUTHENTICATION&#x60;, copy-code / OTP button) can later be sent only to a phone number. Meta does not accept a BSUID recipient for them (error 131062). If the recipient is known only by BSUID — for example they use a username and their phone number is not in your Business Portfolio — that template cannot be sent.  To ask a BSUID user for their phone number, add a &#x60;REQUEST_CONTACT_INFO&#x60; button on a &#x60;UTILITY&#x60; or &#x60;MARKETING&#x60; template. Do not send &#x60;text&#x60; on that button — WhatsApp sets the label (and rejects a custom one). The button also has no send-time parameters: &#x60;POST /sendTemplate&#x60; does not take a button component for it. Inside an open 24-hour window, call &#x60;POST /sendContactInfo&#x60; instead of a template.  When the user shares the number, the inbound webhook is a &#x60;contacts&#x60; message with &#x60;origin: contact_request&#x60;. The phone is stored on that BSUID automatically. See &#x60;POST /sendContactInfo&#x60;.  &#x60;&#x60;&#x60;json {   \&quot;name\&quot;: \&quot;request_phone\&quot;,   \&quot;category\&quot;: \&quot;UTILITY\&quot;,   \&quot;language\&quot;: \&quot;en_US\&quot;,   \&quot;components\&quot;: [     {       \&quot;type\&quot;: \&quot;BODY\&quot;,       \&quot;text\&quot;: \&quot;Please share your phone number so we can continue.\&quot;     },     {       \&quot;type\&quot;: \&quot;BUTTONS\&quot;,       \&quot;buttons\&quot;: [{ \&quot;type\&quot;: \&quot;REQUEST_CONTACT_INFO\&quot; }]     }   ] } &#x60;&#x60;&#x60; 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        AddTemplateRequest addTemplateRequest = new AddTemplateRequest(); // AddTemplateRequest | 
        try {
            ApiResponse<AddTemplate200Response> response = apiInstance.addTemplateWithHttpInfo(token, addTemplateRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#addTemplate");
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
| **addTemplateRequest** | [**AddTemplateRequest**](AddTemplateRequest.md)|  | [optional] |

### Return type

ApiResponse<[**AddTemplate200Response**](AddTemplate200Response.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Template created. Provider payload is wrapped in &#x60;response&#x60;. |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |


## listTemplates

> ListTemplates200Response listTemplates(token, limit, offset, sort)

Get templates list

List message templates. Paginate with &#x60;limit&#x60; / &#x60;offset&#x60;; sort by &#x60;id&#x60;, &#x60;name&#x60;, or &#x60;status&#x60;.

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        Integer limit = 56; // Integer | 
        Integer offset = 56; // Integer | 
        String sort = "id"; // String | Sort field (`id`, `name`, or `status`)
        try {
            ListTemplates200Response result = apiInstance.listTemplates(token, limit, offset, sort);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#listTemplates");
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
| **limit** | **Integer**|  | [optional] |
| **offset** | **Integer**|  | [optional] |
| **sort** | **String**| Sort field (&#x60;id&#x60;, &#x60;name&#x60;, or &#x60;status&#x60;) | [optional] [enum: id, name, status] |

### Return type

[**ListTemplates200Response**](ListTemplates200Response.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## listTemplatesWithHttpInfo

> ApiResponse<ListTemplates200Response> listTemplatesWithHttpInfo(token, limit, offset, sort)

Get templates list

List message templates. Paginate with &#x60;limit&#x60; / &#x60;offset&#x60;; sort by &#x60;id&#x60;, &#x60;name&#x60;, or &#x60;status&#x60;.

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        Integer limit = 56; // Integer | 
        Integer offset = 56; // Integer | 
        String sort = "id"; // String | Sort field (`id`, `name`, or `status`)
        try {
            ApiResponse<ListTemplates200Response> response = apiInstance.listTemplatesWithHttpInfo(token, limit, offset, sort);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#listTemplates");
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
| **limit** | **Integer**|  | [optional] |
| **offset** | **Integer**|  | [optional] |
| **sort** | **String**| Sort field (&#x60;id&#x60;, &#x60;name&#x60;, or &#x60;status&#x60;) | [optional] [enum: id, name, status] |

### Return type

ApiResponse<[**ListTemplates200Response**](ListTemplates200Response.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## removeTemplate

> Map<String, Object> removeTemplate(token, removeTemplateRequest)

Remove message template

Delete a message template by &#x60;name&#x60; (all language versions of that name).

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        RemoveTemplateRequest removeTemplateRequest = new RemoveTemplateRequest(); // RemoveTemplateRequest | 
        try {
            Map<String, Object> result = apiInstance.removeTemplate(token, removeTemplateRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#removeTemplate");
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
| **removeTemplateRequest** | [**RemoveTemplateRequest**](RemoveTemplateRequest.md)|  | |

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
| **200** | Template removed |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

## removeTemplateWithHttpInfo

> ApiResponse<Map<String, Object>> removeTemplateWithHttpInfo(token, removeTemplateRequest)

Remove message template

Delete a message template by &#x60;name&#x60; (all language versions of that name).

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        RemoveTemplateRequest removeTemplateRequest = new RemoveTemplateRequest(); // RemoveTemplateRequest | 
        try {
            ApiResponse<Map<String, Object>> response = apiInstance.removeTemplateWithHttpInfo(token, removeTemplateRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#removeTemplate");
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
| **removeTemplateRequest** | [**RemoveTemplateRequest**](RemoveTemplateRequest.md)|  | |

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
| **200** | Template removed |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |


## sendTemplate

> Map<String, Object> sendTemplate(token, sendTemplateRequest)

Send Template Message

Send a WhatsApp **template** message (works outside the 24-hour session window).  Use this tool — not &#x60;send_message&#x60; — when the 24h session is closed.  &#x60;params&#x60; MUST be Cloud API **component objects**, never a flat list of strings and never the old On-Prem &#x60;hsm&#x60; / &#x60;localizable_params&#x60; format.  Example body variable &#x60;{{1}}&#x60;:  &#x60;&#x60;&#x60;json {   \&quot;type\&quot;: \&quot;body\&quot;,   \&quot;parameters\&quot;: [{ \&quot;type\&quot;: \&quot;text\&quot;, \&quot;text\&quot;: \&quot;Ivan\&quot; }] } &#x60;&#x60;&#x60;  Do not send &#x60;\&quot;type\&quot;: \&quot;hsm\&quot;&#x60; and do not send &#x60;params: [\&quot;Ivan\&quot;, \&quot;123\&quot;]&#x60;.  Supported &#x60;params&#x60; button &#x60;sub_type&#x60; values include: &#x60;url&#x60;, &#x60;quick_reply&#x60;, &#x60;copy_code&#x60; / &#x60;coupon_code&#x60;, &#x60;catalog&#x60;, &#x60;flow&#x60;, &#x60;limited_time_offer&#x60;, and **&#x60;order_details&#x60;** (WhatsApp Payments **India only** — requires an approved Utility template with an ORDER_DETAILS button).  Convenience wrapper with structured fields: &#x60;POST /sendOrderDetails&#x60;.  Authentication OTP templates (category &#x60;AUTHENTICATION&#x60;, or a template with an OTP / copy-code button) can only be sent to a phone number (&#x60;phone&#x60; or a phone &#x60;chatId&#x60;). Meta rejects a BSUID &#x60;recipient&#x60; for these templates with error 131062. If the recipient is known only by BSUID — for example they use a username and their phone number is not in your Business Portfolio — the template cannot be sent.  A &#x60;REQUEST_CONTACT_INFO&#x60; button (UTILITY or MARKETING only) has no send-time parameters. Do not add a button component for it in &#x60;params&#x60;, and do not send button text — WhatsApp sets that label on the template. Create the button with &#x60;POST /addTemplate&#x60; as &#x60;{ \&quot;type\&quot;: \&quot;REQUEST_CONTACT_INFO\&quot; }&#x60; with no &#x60;text&#x60;. Inside an open 24-hour window, &#x60;POST /sendContactInfo&#x60; asks for the number without a template. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        SendTemplateRequest sendTemplateRequest = new SendTemplateRequest(); // SendTemplateRequest | 
        try {
            Map<String, Object> result = apiInstance.sendTemplate(token, sendTemplateRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#sendTemplate");
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
| **sendTemplateRequest** | [**SendTemplateRequest**](SendTemplateRequest.md)|  | [optional] |

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

## sendTemplateWithHttpInfo

> ApiResponse<Map<String, Object>> sendTemplateWithHttpInfo(token, sendTemplateRequest)

Send Template Message

Send a WhatsApp **template** message (works outside the 24-hour session window).  Use this tool — not &#x60;send_message&#x60; — when the 24h session is closed.  &#x60;params&#x60; MUST be Cloud API **component objects**, never a flat list of strings and never the old On-Prem &#x60;hsm&#x60; / &#x60;localizable_params&#x60; format.  Example body variable &#x60;{{1}}&#x60;:  &#x60;&#x60;&#x60;json {   \&quot;type\&quot;: \&quot;body\&quot;,   \&quot;parameters\&quot;: [{ \&quot;type\&quot;: \&quot;text\&quot;, \&quot;text\&quot;: \&quot;Ivan\&quot; }] } &#x60;&#x60;&#x60;  Do not send &#x60;\&quot;type\&quot;: \&quot;hsm\&quot;&#x60; and do not send &#x60;params: [\&quot;Ivan\&quot;, \&quot;123\&quot;]&#x60;.  Supported &#x60;params&#x60; button &#x60;sub_type&#x60; values include: &#x60;url&#x60;, &#x60;quick_reply&#x60;, &#x60;copy_code&#x60; / &#x60;coupon_code&#x60;, &#x60;catalog&#x60;, &#x60;flow&#x60;, &#x60;limited_time_offer&#x60;, and **&#x60;order_details&#x60;** (WhatsApp Payments **India only** — requires an approved Utility template with an ORDER_DETAILS button).  Convenience wrapper with structured fields: &#x60;POST /sendOrderDetails&#x60;.  Authentication OTP templates (category &#x60;AUTHENTICATION&#x60;, or a template with an OTP / copy-code button) can only be sent to a phone number (&#x60;phone&#x60; or a phone &#x60;chatId&#x60;). Meta rejects a BSUID &#x60;recipient&#x60; for these templates with error 131062. If the recipient is known only by BSUID — for example they use a username and their phone number is not in your Business Portfolio — the template cannot be sent.  A &#x60;REQUEST_CONTACT_INFO&#x60; button (UTILITY or MARKETING only) has no send-time parameters. Do not add a button component for it in &#x60;params&#x60;, and do not send button text — WhatsApp sets that label on the template. Create the button with &#x60;POST /addTemplate&#x60; as &#x60;{ \&quot;type\&quot;: \&quot;REQUEST_CONTACT_INFO\&quot; }&#x60; with no &#x60;text&#x60;. Inside an open 24-hour window, &#x60;POST /sendContactInfo&#x60; asks for the number without a template. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        SendTemplateRequest sendTemplateRequest = new SendTemplateRequest(); // SendTemplateRequest | 
        try {
            ApiResponse<Map<String, Object>> response = apiInstance.sendTemplateWithHttpInfo(token, sendTemplateRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#sendTemplate");
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
| **sendTemplateRequest** | [**SendTemplateRequest**](SendTemplateRequest.md)|  | [optional] |

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

