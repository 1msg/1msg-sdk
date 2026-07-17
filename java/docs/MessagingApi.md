# MessagingApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createReadMessage**](MessagingApi.md#createReadMessage) | **POST** /readMessage | Mark message as read |
| [**createReadMessageWithHttpInfo**](MessagingApi.md#createReadMessageWithHttpInfo) | **POST** /readMessage | Mark message as read |
| [**createUploadMedia**](MessagingApi.md#createUploadMedia) | **POST** /uploadMedia | Upload media |
| [**createUploadMediaWithHttpInfo**](MessagingApi.md#createUploadMediaWithHttpInfo) | **POST** /uploadMedia | Upload media |
| [**listMessages**](MessagingApi.md#listMessages) | **GET** /messages | Get messages list |
| [**listMessagesWithHttpInfo**](MessagingApi.md#listMessagesWithHttpInfo) | **GET** /messages | Get messages list |
| [**sendButton**](MessagingApi.md#sendButton) | **POST** /sendButton | Send Reply Buttons Message |
| [**sendButtonWithHttpInfo**](MessagingApi.md#sendButtonWithHttpInfo) | **POST** /sendButton | Send Reply Buttons Message |
| [**sendCarousel**](MessagingApi.md#sendCarousel) | **POST** /sendCarousel | Send Carousel |
| [**sendCarouselWithHttpInfo**](MessagingApi.md#sendCarouselWithHttpInfo) | **POST** /sendCarousel | Send Carousel |
| [**sendContact**](MessagingApi.md#sendContact) | **POST** /sendContact | Send a Contact |
| [**sendContactWithHttpInfo**](MessagingApi.md#sendContactWithHttpInfo) | **POST** /sendContact | Send a Contact |
| [**sendFile**](MessagingApi.md#sendFile) | **POST** /sendFile | Send a File |
| [**sendFileWithHttpInfo**](MessagingApi.md#sendFileWithHttpInfo) | **POST** /sendFile | Send a File |
| [**sendFlow**](MessagingApi.md#sendFlow) | **POST** /sendFlow | Send WhatsApp Flow Message |
| [**sendFlowWithHttpInfo**](MessagingApi.md#sendFlowWithHttpInfo) | **POST** /sendFlow | Send WhatsApp Flow Message |
| [**sendList**](MessagingApi.md#sendList) | **POST** /sendList | Send List Message |
| [**sendListWithHttpInfo**](MessagingApi.md#sendListWithHttpInfo) | **POST** /sendList | Send List Message |
| [**sendLocation**](MessagingApi.md#sendLocation) | **POST** /sendLocation | Send a Location |
| [**sendLocationWithHttpInfo**](MessagingApi.md#sendLocationWithHttpInfo) | **POST** /sendLocation | Send a Location |
| [**sendLocationRequest**](MessagingApi.md#sendLocationRequest) | **POST** /sendLocationRequest | Send Location Request Message |
| [**sendLocationRequestWithHttpInfo**](MessagingApi.md#sendLocationRequestWithHttpInfo) | **POST** /sendLocationRequest | Send Location Request Message |
| [**sendMessage**](MessagingApi.md#sendMessage) | **POST** /sendMessage | Send a Message |
| [**sendMessageWithHttpInfo**](MessagingApi.md#sendMessageWithHttpInfo) | **POST** /sendMessage | Send a Message |
| [**sendProduct**](MessagingApi.md#sendProduct) | **POST** /sendProduct | Send a Product |
| [**sendProductWithHttpInfo**](MessagingApi.md#sendProductWithHttpInfo) | **POST** /sendProduct | Send a Product |
| [**sendReaction**](MessagingApi.md#sendReaction) | **POST** /sendReaction | Send Reaction |
| [**sendReactionWithHttpInfo**](MessagingApi.md#sendReactionWithHttpInfo) | **POST** /sendReaction | Send Reaction |



## createReadMessage

> CreateReadMessage200Response createReadMessage(token, messageId)

Mark message as read

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        String messageId = "messageId_example"; // String | Message ID. Example: 0XzkmGNn4prUAQlzsHApGNRXQ0U
        try {
            CreateReadMessage200Response result = apiInstance.createReadMessage(token, messageId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#createReadMessage");
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
| **messageId** | **String**| Message ID. Example: 0XzkmGNn4prUAQlzsHApGNRXQ0U | [optional] |

### Return type

[**CreateReadMessage200Response**](CreateReadMessage200Response.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Server response example |  -  |
| **401** | Invalid token |  -  |

## createReadMessageWithHttpInfo

> ApiResponse<CreateReadMessage200Response> createReadMessageWithHttpInfo(token, messageId)

Mark message as read

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        String messageId = "messageId_example"; // String | Message ID. Example: 0XzkmGNn4prUAQlzsHApGNRXQ0U
        try {
            ApiResponse<CreateReadMessage200Response> response = apiInstance.createReadMessageWithHttpInfo(token, messageId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#createReadMessage");
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
| **messageId** | **String**| Message ID. Example: 0XzkmGNn4prUAQlzsHApGNRXQ0U | [optional] |

### Return type

ApiResponse<[**CreateReadMessage200Response**](CreateReadMessage200Response.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Server response example |  -  |
| **401** | Invalid token |  -  |


## createUploadMedia

> void createUploadMedia(token, requestBody)

Upload media

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        Map<String, Object> requestBody = null; // Map<String, Object> | 
        try {
            apiInstance.createUploadMedia(token, requestBody);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#createUploadMedia");
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
| **requestBody** | [**Map&lt;String, Object&gt;**](Object.md)|  | [optional] |

### Return type


null (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## createUploadMediaWithHttpInfo

> ApiResponse<Void> createUploadMediaWithHttpInfo(token, requestBody)

Upload media

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        Map<String, Object> requestBody = null; // Map<String, Object> | 
        try {
            ApiResponse<Void> response = apiInstance.createUploadMediaWithHttpInfo(token, requestBody);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#createUploadMedia");
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
| **requestBody** | [**Map&lt;String, Object&gt;**](Object.md)|  | [optional] |

### Return type


ApiResponse<Void>

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## listMessages

> ListMessages200Response listMessages(token)

Get messages list

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            ListMessages200Response result = apiInstance.listMessages(token);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#listMessages");
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

[**ListMessages200Response**](ListMessages200Response.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## listMessagesWithHttpInfo

> ApiResponse<ListMessages200Response> listMessagesWithHttpInfo(token)

Get messages list

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        try {
            ApiResponse<ListMessages200Response> response = apiInstance.listMessagesWithHttpInfo(token);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#listMessages");
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

ApiResponse<[**ListMessages200Response**](ListMessages200Response.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## sendButton

> MessageSentResponse sendButton(token, sendButtonRequest)

Send Reply Buttons Message

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        SendButtonRequest sendButtonRequest = new SendButtonRequest(); // SendButtonRequest | 
        try {
            MessageSentResponse result = apiInstance.sendButton(token, sendButtonRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendButton");
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
| **sendButtonRequest** | [**SendButtonRequest**](SendButtonRequest.md)|  | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

## sendButtonWithHttpInfo

> ApiResponse<MessageSentResponse> sendButtonWithHttpInfo(token, sendButtonRequest)

Send Reply Buttons Message

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        SendButtonRequest sendButtonRequest = new SendButtonRequest(); // SendButtonRequest | 
        try {
            ApiResponse<MessageSentResponse> response = apiInstance.sendButtonWithHttpInfo(token, sendButtonRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendButton");
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
| **sendButtonRequest** | [**SendButtonRequest**](SendButtonRequest.md)|  | [optional] |

### Return type

ApiResponse<[**MessageSentResponse**](MessageSentResponse.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |


## sendCarousel

> MessageSentResponse sendCarousel(token, params, body, quotedMsgId, chatId, phone)

Send Carousel

You can send product cards via Carousel in two ways:  Template messages: do not require a 24-hour customer service window between you and the recipient. Use sendTemplate.  Free-form messages: can be sent only when a customer service window is open between you and the recipient. Use sendCarousel.  The message structure in /sendCarousel is largely similar to sending a template. However, in this case you must  explicitly specify all elements that are created in advance when working with templates. This is because the message  is sent without using a template.  In /sendCarousel, for sending a Catalog Carousel there can be either 1 URL button or one or more quick reply buttons. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        List<Object> params = null; // List<Object> | Required. Template-like structure (same as sendTemplate params). Must include a CAROUSEL component and its cards.  Structure: - params[] item with type CAROUSEL and cards (2..10) - cards[] item:   - components[] items:     - header: parameters[0] with type image/video/product       - image: {\\\"image\\\": {\\\"link\\\": \\\"https://...\\\"}}       - video: {\\\"video\\\": {\\\"link\\\": \\\"https://...\\\"}}       - product: {\\\"product\\\": {\\\"catalog_id\\\": \\\"...\\\", \\\"product_retailer_id\\\": \\\"...\\\"}}     - button: sub_type url or quick_reply       - url: parameters {\\\"text\\\": \\\"Button\\\", \\\"url\\\": \\\"https://...\\\"}       - quick_reply: parameters[] of {\\\"id\\\": \\\"...\\\", \\\"text\\\": \\\"...\\\"} 
        String body = "body_example"; // String | Text shown above the carousel. Optional. If omitted and params include a body component, the body will be taken from params.
        String quotedMsgId = "quotedMsgId_example"; // String | Quoted message ID (Cloud API)
        String chatId = "chatId_example"; // String | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group)
        Integer phone = 56; // Integer | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369.
        try {
            MessageSentResponse result = apiInstance.sendCarousel(token, params, body, quotedMsgId, chatId, phone);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendCarousel");
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
| **params** | [**List&lt;Object&gt;**](Object.md)| Required. Template-like structure (same as sendTemplate params). Must include a CAROUSEL component and its cards.  Structure: - params[] item with type CAROUSEL and cards (2..10) - cards[] item:   - components[] items:     - header: parameters[0] with type image/video/product       - image: {\\\&quot;image\\\&quot;: {\\\&quot;link\\\&quot;: \\\&quot;https://...\\\&quot;}}       - video: {\\\&quot;video\\\&quot;: {\\\&quot;link\\\&quot;: \\\&quot;https://...\\\&quot;}}       - product: {\\\&quot;product\\\&quot;: {\\\&quot;catalog_id\\\&quot;: \\\&quot;...\\\&quot;, \\\&quot;product_retailer_id\\\&quot;: \\\&quot;...\\\&quot;}}     - button: sub_type url or quick_reply       - url: parameters {\\\&quot;text\\\&quot;: \\\&quot;Button\\\&quot;, \\\&quot;url\\\&quot;: \\\&quot;https://...\\\&quot;}       - quick_reply: parameters[] of {\\\&quot;id\\\&quot;: \\\&quot;...\\\&quot;, \\\&quot;text\\\&quot;: \\\&quot;...\\\&quot;}  | |
| **body** | **String**| Text shown above the carousel. Optional. If omitted and params include a body component, the body will be taken from params. | [optional] |
| **quotedMsgId** | **String**| Quoted message ID (Cloud API) | [optional] |
| **chatId** | **String**| Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) | [optional] |
| **phone** | **Integer**| Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

## sendCarouselWithHttpInfo

> ApiResponse<MessageSentResponse> sendCarouselWithHttpInfo(token, params, body, quotedMsgId, chatId, phone)

Send Carousel

You can send product cards via Carousel in two ways:  Template messages: do not require a 24-hour customer service window between you and the recipient. Use sendTemplate.  Free-form messages: can be sent only when a customer service window is open between you and the recipient. Use sendCarousel.  The message structure in /sendCarousel is largely similar to sending a template. However, in this case you must  explicitly specify all elements that are created in advance when working with templates. This is because the message  is sent without using a template.  In /sendCarousel, for sending a Catalog Carousel there can be either 1 URL button or one or more quick reply buttons. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        List<Object> params = null; // List<Object> | Required. Template-like structure (same as sendTemplate params). Must include a CAROUSEL component and its cards.  Structure: - params[] item with type CAROUSEL and cards (2..10) - cards[] item:   - components[] items:     - header: parameters[0] with type image/video/product       - image: {\\\"image\\\": {\\\"link\\\": \\\"https://...\\\"}}       - video: {\\\"video\\\": {\\\"link\\\": \\\"https://...\\\"}}       - product: {\\\"product\\\": {\\\"catalog_id\\\": \\\"...\\\", \\\"product_retailer_id\\\": \\\"...\\\"}}     - button: sub_type url or quick_reply       - url: parameters {\\\"text\\\": \\\"Button\\\", \\\"url\\\": \\\"https://...\\\"}       - quick_reply: parameters[] of {\\\"id\\\": \\\"...\\\", \\\"text\\\": \\\"...\\\"} 
        String body = "body_example"; // String | Text shown above the carousel. Optional. If omitted and params include a body component, the body will be taken from params.
        String quotedMsgId = "quotedMsgId_example"; // String | Quoted message ID (Cloud API)
        String chatId = "chatId_example"; // String | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group)
        Integer phone = 56; // Integer | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369.
        try {
            ApiResponse<MessageSentResponse> response = apiInstance.sendCarouselWithHttpInfo(token, params, body, quotedMsgId, chatId, phone);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendCarousel");
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
| **params** | [**List&lt;Object&gt;**](Object.md)| Required. Template-like structure (same as sendTemplate params). Must include a CAROUSEL component and its cards.  Structure: - params[] item with type CAROUSEL and cards (2..10) - cards[] item:   - components[] items:     - header: parameters[0] with type image/video/product       - image: {\\\&quot;image\\\&quot;: {\\\&quot;link\\\&quot;: \\\&quot;https://...\\\&quot;}}       - video: {\\\&quot;video\\\&quot;: {\\\&quot;link\\\&quot;: \\\&quot;https://...\\\&quot;}}       - product: {\\\&quot;product\\\&quot;: {\\\&quot;catalog_id\\\&quot;: \\\&quot;...\\\&quot;, \\\&quot;product_retailer_id\\\&quot;: \\\&quot;...\\\&quot;}}     - button: sub_type url or quick_reply       - url: parameters {\\\&quot;text\\\&quot;: \\\&quot;Button\\\&quot;, \\\&quot;url\\\&quot;: \\\&quot;https://...\\\&quot;}       - quick_reply: parameters[] of {\\\&quot;id\\\&quot;: \\\&quot;...\\\&quot;, \\\&quot;text\\\&quot;: \\\&quot;...\\\&quot;}  | |
| **body** | **String**| Text shown above the carousel. Optional. If omitted and params include a body component, the body will be taken from params. | [optional] |
| **quotedMsgId** | **String**| Quoted message ID (Cloud API) | [optional] |
| **chatId** | **String**| Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) | [optional] |
| **phone** | **Integer**| Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. | [optional] |

### Return type

ApiResponse<[**MessageSentResponse**](MessageSentResponse.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |


## sendContact

> MessageSentResponse sendContact(token, sendContactRequest)

Send a Contact

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        SendContactRequest sendContactRequest = new SendContactRequest(); // SendContactRequest | 
        try {
            MessageSentResponse result = apiInstance.sendContact(token, sendContactRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendContact");
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
| **sendContactRequest** | [**SendContactRequest**](SendContactRequest.md)|  | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

## sendContactWithHttpInfo

> ApiResponse<MessageSentResponse> sendContactWithHttpInfo(token, sendContactRequest)

Send a Contact

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        SendContactRequest sendContactRequest = new SendContactRequest(); // SendContactRequest | 
        try {
            ApiResponse<MessageSentResponse> response = apiInstance.sendContactWithHttpInfo(token, sendContactRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendContact");
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
| **sendContactRequest** | [**SendContactRequest**](SendContactRequest.md)|  | [optional] |

### Return type

ApiResponse<[**MessageSentResponse**](MessageSentResponse.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |


## sendFile

> MessageSentResponse sendFile(token, body, filename, caption, quotedMsgId, chatId, phone)

Send a File

Send a file to an existing chat. (Only if the dialogue has an Open Session).  Only one of two parameters is needed to determine the destination - chatId or phone. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        String body = "body_example"; // String | File source: - HTTP/HTTPS URL (https://example.com/file.pdf) - Base64-encoded file with MIME (data:image/jpeg;base64,/9j/4AAQ...) - Form-data field 
        String filename = "filename_example"; // String | File name with extension (required for mime type detection)
        String caption = "caption_example"; // String | Text caption under the file
        String quotedMsgId = "quotedMsgId_example"; // String | Message ID to quote/reply to
        String chatId = "chatId_example"; // String | Chat ID in format: phone@c.us or phone@g.us
        Integer phone = 56; // Integer | Phone number starting with country code
        try {
            MessageSentResponse result = apiInstance.sendFile(token, body, filename, caption, quotedMsgId, chatId, phone);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendFile");
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
| **body** | **String**| File source: - HTTP/HTTPS URL (https://example.com/file.pdf) - Base64-encoded file with MIME (data:image/jpeg;base64,/9j/4AAQ...) - Form-data field  | |
| **filename** | **String**| File name with extension (required for mime type detection) | |
| **caption** | **String**| Text caption under the file | [optional] |
| **quotedMsgId** | **String**| Message ID to quote/reply to | [optional] |
| **chatId** | **String**| Chat ID in format: phone@c.us or phone@g.us | [optional] |
| **phone** | **Integer**| Phone number starting with country code | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

## sendFileWithHttpInfo

> ApiResponse<MessageSentResponse> sendFileWithHttpInfo(token, body, filename, caption, quotedMsgId, chatId, phone)

Send a File

Send a file to an existing chat. (Only if the dialogue has an Open Session).  Only one of two parameters is needed to determine the destination - chatId or phone. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        String body = "body_example"; // String | File source: - HTTP/HTTPS URL (https://example.com/file.pdf) - Base64-encoded file with MIME (data:image/jpeg;base64,/9j/4AAQ...) - Form-data field 
        String filename = "filename_example"; // String | File name with extension (required for mime type detection)
        String caption = "caption_example"; // String | Text caption under the file
        String quotedMsgId = "quotedMsgId_example"; // String | Message ID to quote/reply to
        String chatId = "chatId_example"; // String | Chat ID in format: phone@c.us or phone@g.us
        Integer phone = 56; // Integer | Phone number starting with country code
        try {
            ApiResponse<MessageSentResponse> response = apiInstance.sendFileWithHttpInfo(token, body, filename, caption, quotedMsgId, chatId, phone);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendFile");
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
| **body** | **String**| File source: - HTTP/HTTPS URL (https://example.com/file.pdf) - Base64-encoded file with MIME (data:image/jpeg;base64,/9j/4AAQ...) - Form-data field  | |
| **filename** | **String**| File name with extension (required for mime type detection) | |
| **caption** | **String**| Text caption under the file | [optional] |
| **quotedMsgId** | **String**| Message ID to quote/reply to | [optional] |
| **chatId** | **String**| Chat ID in format: phone@c.us or phone@g.us | [optional] |
| **phone** | **Integer**| Phone number starting with country code | [optional] |

### Return type

ApiResponse<[**MessageSentResponse**](MessageSentResponse.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |


## sendFlow

> MessageSentResponse sendFlow(token, body, flowId, flowToken, flowCta, header, footer, flowAction, flowActionPayload, flowMessageVersion, mode, flowActionData, flowActionScreen, quotedMsgId, chatId, phone)

Send WhatsApp Flow Message

Send Interactive WhatsApp Flow message to an existing chat. (Only if the dialogue has an Open Session).  Only one of two parameters is needed to determine the destination - chatId or phone.  Use this method to send a published WhatsApp Flow as a service (interactive) message.  If the 24-hour window is closed, send a template with a FLOW button via /sendTemplate. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        String body = "body_example"; // String | Flow message body text
        String flowId = "flowId_example"; // String | Published Flow ID
        String flowToken = "flowToken_example"; // String | Flow token generated by the business
        String flowCta = "flowCta_example"; // String | CTA button text
        SendFlowRequestHeader header = new SendFlowRequestHeader(); // SendFlowRequestHeader | 
        String footer = "footer_example"; // String | Footer text
        String flowAction = "navigate"; // String | Flow action type
        Object flowActionPayload = null; // Object | Required for flowAction=navigate (screen is required). Ignored for data_exchange. If data is provided, it must be a non-empty object.
        String flowMessageVersion = "flowMessageVersion_example"; // String | Flow message version (default \\\"3\\\")
        String mode = "draft"; // String | Flow mode (draft or published). If omitted, provider default applies
        Object flowActionData = null; // Object | Shortcut for flowActionPayload.data (optional)
        String flowActionScreen = "flowActionScreen_example"; // String | Shortcut for flowActionPayload.screen (optional)
        String quotedMsgId = "quotedMsgId_example"; // String | Quoted message ID (Cloud API)
        String chatId = "chatId_example"; // String | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group)
        Integer phone = 56; // Integer | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369.
        try {
            MessageSentResponse result = apiInstance.sendFlow(token, body, flowId, flowToken, flowCta, header, footer, flowAction, flowActionPayload, flowMessageVersion, mode, flowActionData, flowActionScreen, quotedMsgId, chatId, phone);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendFlow");
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
| **body** | **String**| Flow message body text | |
| **flowId** | **String**| Published Flow ID | |
| **flowToken** | **String**| Flow token generated by the business | |
| **flowCta** | **String**| CTA button text | |
| **header** | [**SendFlowRequestHeader**](SendFlowRequestHeader.md)|  | [optional] |
| **footer** | **String**| Footer text | [optional] |
| **flowAction** | **String**| Flow action type | [optional] [enum: navigate, data_exchange] |
| **flowActionPayload** | [**Object**](Object.md)| Required for flowAction&#x3D;navigate (screen is required). Ignored for data_exchange. If data is provided, it must be a non-empty object. | [optional] |
| **flowMessageVersion** | **String**| Flow message version (default \\\&quot;3\\\&quot;) | [optional] |
| **mode** | **String**| Flow mode (draft or published). If omitted, provider default applies | [optional] [enum: draft, published] |
| **flowActionData** | [**Object**](Object.md)| Shortcut for flowActionPayload.data (optional) | [optional] |
| **flowActionScreen** | **String**| Shortcut for flowActionPayload.screen (optional) | [optional] |
| **quotedMsgId** | **String**| Quoted message ID (Cloud API) | [optional] |
| **chatId** | **String**| Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) | [optional] |
| **phone** | **Integer**| Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

## sendFlowWithHttpInfo

> ApiResponse<MessageSentResponse> sendFlowWithHttpInfo(token, body, flowId, flowToken, flowCta, header, footer, flowAction, flowActionPayload, flowMessageVersion, mode, flowActionData, flowActionScreen, quotedMsgId, chatId, phone)

Send WhatsApp Flow Message

Send Interactive WhatsApp Flow message to an existing chat. (Only if the dialogue has an Open Session).  Only one of two parameters is needed to determine the destination - chatId or phone.  Use this method to send a published WhatsApp Flow as a service (interactive) message.  If the 24-hour window is closed, send a template with a FLOW button via /sendTemplate. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        String body = "body_example"; // String | Flow message body text
        String flowId = "flowId_example"; // String | Published Flow ID
        String flowToken = "flowToken_example"; // String | Flow token generated by the business
        String flowCta = "flowCta_example"; // String | CTA button text
        SendFlowRequestHeader header = new SendFlowRequestHeader(); // SendFlowRequestHeader | 
        String footer = "footer_example"; // String | Footer text
        String flowAction = "navigate"; // String | Flow action type
        Object flowActionPayload = null; // Object | Required for flowAction=navigate (screen is required). Ignored for data_exchange. If data is provided, it must be a non-empty object.
        String flowMessageVersion = "flowMessageVersion_example"; // String | Flow message version (default \\\"3\\\")
        String mode = "draft"; // String | Flow mode (draft or published). If omitted, provider default applies
        Object flowActionData = null; // Object | Shortcut for flowActionPayload.data (optional)
        String flowActionScreen = "flowActionScreen_example"; // String | Shortcut for flowActionPayload.screen (optional)
        String quotedMsgId = "quotedMsgId_example"; // String | Quoted message ID (Cloud API)
        String chatId = "chatId_example"; // String | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group)
        Integer phone = 56; // Integer | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369.
        try {
            ApiResponse<MessageSentResponse> response = apiInstance.sendFlowWithHttpInfo(token, body, flowId, flowToken, flowCta, header, footer, flowAction, flowActionPayload, flowMessageVersion, mode, flowActionData, flowActionScreen, quotedMsgId, chatId, phone);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendFlow");
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
| **body** | **String**| Flow message body text | |
| **flowId** | **String**| Published Flow ID | |
| **flowToken** | **String**| Flow token generated by the business | |
| **flowCta** | **String**| CTA button text | |
| **header** | [**SendFlowRequestHeader**](SendFlowRequestHeader.md)|  | [optional] |
| **footer** | **String**| Footer text | [optional] |
| **flowAction** | **String**| Flow action type | [optional] [enum: navigate, data_exchange] |
| **flowActionPayload** | [**Object**](Object.md)| Required for flowAction&#x3D;navigate (screen is required). Ignored for data_exchange. If data is provided, it must be a non-empty object. | [optional] |
| **flowMessageVersion** | **String**| Flow message version (default \\\&quot;3\\\&quot;) | [optional] |
| **mode** | **String**| Flow mode (draft or published). If omitted, provider default applies | [optional] [enum: draft, published] |
| **flowActionData** | [**Object**](Object.md)| Shortcut for flowActionPayload.data (optional) | [optional] |
| **flowActionScreen** | **String**| Shortcut for flowActionPayload.screen (optional) | [optional] |
| **quotedMsgId** | **String**| Quoted message ID (Cloud API) | [optional] |
| **chatId** | **String**| Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) | [optional] |
| **phone** | **Integer**| Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. | [optional] |

### Return type

ApiResponse<[**MessageSentResponse**](MessageSentResponse.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |


## sendList

> MessageSentResponse sendList(token, sendListRequest)

Send List Message

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        SendListRequest sendListRequest = new SendListRequest(); // SendListRequest | 
        try {
            MessageSentResponse result = apiInstance.sendList(token, sendListRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendList");
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
| **sendListRequest** | [**SendListRequest**](SendListRequest.md)|  | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

## sendListWithHttpInfo

> ApiResponse<MessageSentResponse> sendListWithHttpInfo(token, sendListRequest)

Send List Message

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        SendListRequest sendListRequest = new SendListRequest(); // SendListRequest | 
        try {
            ApiResponse<MessageSentResponse> response = apiInstance.sendListWithHttpInfo(token, sendListRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendList");
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
| **sendListRequest** | [**SendListRequest**](SendListRequest.md)|  | [optional] |

### Return type

ApiResponse<[**MessageSentResponse**](MessageSentResponse.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |


## sendLocation

> MessageSentResponse sendLocation(token, lat, lng, address, name, quotedMsgId, chatId, phone)

Send a Location

Send a location to an existing chat. (Only if the dialogue has an Open Session).  Only one of two parameters is needed to determine the destination - chatId or phone. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        String lat = "lat_example"; // String | Latitude of the location. Example: 45.018337
        String lng = "lng_example"; // String | Longitude of the location. Example: -73.968285
        String address = "address_example"; // String | Address of the location. Only displayed if name is present. Example: 9766 Valley View St., New York, NY 10024
        String name = "name_example"; // String | Name of the location. Example: Facebook HQ
        String quotedMsgId = "quotedMsgId_example"; // String | Quoted message ID (Cloud API)
        String chatId = "chatId_example"; // String | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group)
        Integer phone = 56; // Integer | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369.
        try {
            MessageSentResponse result = apiInstance.sendLocation(token, lat, lng, address, name, quotedMsgId, chatId, phone);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendLocation");
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
| **lat** | **String**| Latitude of the location. Example: 45.018337 | |
| **lng** | **String**| Longitude of the location. Example: -73.968285 | |
| **address** | **String**| Address of the location. Only displayed if name is present. Example: 9766 Valley View St., New York, NY 10024 | [optional] |
| **name** | **String**| Name of the location. Example: Facebook HQ | [optional] |
| **quotedMsgId** | **String**| Quoted message ID (Cloud API) | [optional] |
| **chatId** | **String**| Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) | [optional] |
| **phone** | **Integer**| Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

## sendLocationWithHttpInfo

> ApiResponse<MessageSentResponse> sendLocationWithHttpInfo(token, lat, lng, address, name, quotedMsgId, chatId, phone)

Send a Location

Send a location to an existing chat. (Only if the dialogue has an Open Session).  Only one of two parameters is needed to determine the destination - chatId or phone. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        String lat = "lat_example"; // String | Latitude of the location. Example: 45.018337
        String lng = "lng_example"; // String | Longitude of the location. Example: -73.968285
        String address = "address_example"; // String | Address of the location. Only displayed if name is present. Example: 9766 Valley View St., New York, NY 10024
        String name = "name_example"; // String | Name of the location. Example: Facebook HQ
        String quotedMsgId = "quotedMsgId_example"; // String | Quoted message ID (Cloud API)
        String chatId = "chatId_example"; // String | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group)
        Integer phone = 56; // Integer | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369.
        try {
            ApiResponse<MessageSentResponse> response = apiInstance.sendLocationWithHttpInfo(token, lat, lng, address, name, quotedMsgId, chatId, phone);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendLocation");
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
| **lat** | **String**| Latitude of the location. Example: 45.018337 | |
| **lng** | **String**| Longitude of the location. Example: -73.968285 | |
| **address** | **String**| Address of the location. Only displayed if name is present. Example: 9766 Valley View St., New York, NY 10024 | [optional] |
| **name** | **String**| Name of the location. Example: Facebook HQ | [optional] |
| **quotedMsgId** | **String**| Quoted message ID (Cloud API) | [optional] |
| **chatId** | **String**| Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) | [optional] |
| **phone** | **Integer**| Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. | [optional] |

### Return type

ApiResponse<[**MessageSentResponse**](MessageSentResponse.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |


## sendLocationRequest

> MessageSentResponse sendLocationRequest(token, sendLocationRequestRequest)

Send Location Request Message

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        SendLocationRequestRequest sendLocationRequestRequest = new SendLocationRequestRequest(); // SendLocationRequestRequest | 
        try {
            MessageSentResponse result = apiInstance.sendLocationRequest(token, sendLocationRequestRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendLocationRequest");
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
| **sendLocationRequestRequest** | [**SendLocationRequestRequest**](SendLocationRequestRequest.md)|  | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

## sendLocationRequestWithHttpInfo

> ApiResponse<MessageSentResponse> sendLocationRequestWithHttpInfo(token, sendLocationRequestRequest)

Send Location Request Message

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        SendLocationRequestRequest sendLocationRequestRequest = new SendLocationRequestRequest(); // SendLocationRequestRequest | 
        try {
            ApiResponse<MessageSentResponse> response = apiInstance.sendLocationRequestWithHttpInfo(token, sendLocationRequestRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendLocationRequest");
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
| **sendLocationRequestRequest** | [**SendLocationRequestRequest**](SendLocationRequestRequest.md)|  | [optional] |

### Return type

ApiResponse<[**MessageSentResponse**](MessageSentResponse.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |


## sendMessage

> MessageSentResponse sendMessage(token, body, quotedMsgId, chatId, phone)

Send a Message

Send a message to an existing chat. (Only if the dialogue has an Open Session).  The message will be added to the queue for sending and delivered even if the phone  is disconnected from the Internet or authorization is not passed.  Only one of two parameters is needed to determine the destination - chatId or phone. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        String body = "body_example"; // String | Message text, UTF-8 or UTF-16 string with emoji
        String quotedMsgId = "quotedMsgId_example"; // String | Message ID to quote/reply to (Cloud API wamid)
        String chatId = "chatId_example"; // String | Chat ID in format: phone@c.us (individual) or phone@g.us (group)
        Integer phone = 56; // Integer | Phone number starting with country code (alternative to chatId)
        try {
            MessageSentResponse result = apiInstance.sendMessage(token, body, quotedMsgId, chatId, phone);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendMessage");
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
| **body** | **String**| Message text, UTF-8 or UTF-16 string with emoji | |
| **quotedMsgId** | **String**| Message ID to quote/reply to (Cloud API wamid) | [optional] |
| **chatId** | **String**| Chat ID in format: phone@c.us (individual) or phone@g.us (group) | [optional] |
| **phone** | **Integer**| Phone number starting with country code (alternative to chatId) | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

## sendMessageWithHttpInfo

> ApiResponse<MessageSentResponse> sendMessageWithHttpInfo(token, body, quotedMsgId, chatId, phone)

Send a Message

Send a message to an existing chat. (Only if the dialogue has an Open Session).  The message will be added to the queue for sending and delivered even if the phone  is disconnected from the Internet or authorization is not passed.  Only one of two parameters is needed to determine the destination - chatId or phone. 

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        String body = "body_example"; // String | Message text, UTF-8 or UTF-16 string with emoji
        String quotedMsgId = "quotedMsgId_example"; // String | Message ID to quote/reply to (Cloud API wamid)
        String chatId = "chatId_example"; // String | Chat ID in format: phone@c.us (individual) or phone@g.us (group)
        Integer phone = 56; // Integer | Phone number starting with country code (alternative to chatId)
        try {
            ApiResponse<MessageSentResponse> response = apiInstance.sendMessageWithHttpInfo(token, body, quotedMsgId, chatId, phone);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendMessage");
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
| **body** | **String**| Message text, UTF-8 or UTF-16 string with emoji | |
| **quotedMsgId** | **String**| Message ID to quote/reply to (Cloud API wamid) | [optional] |
| **chatId** | **String**| Chat ID in format: phone@c.us (individual) or phone@g.us (group) | [optional] |
| **phone** | **Integer**| Phone number starting with country code (alternative to chatId) | [optional] |

### Return type

ApiResponse<[**MessageSentResponse**](MessageSentResponse.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |


## sendProduct

> MessageSentResponse sendProduct(token, requestBody)

Send a Product

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        Map<String, Object> requestBody = null; // Map<String, Object> | 
        try {
            MessageSentResponse result = apiInstance.sendProduct(token, requestBody);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendProduct");
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
| **requestBody** | [**Map&lt;String, Object&gt;**](Object.md)|  | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

## sendProductWithHttpInfo

> ApiResponse<MessageSentResponse> sendProductWithHttpInfo(token, requestBody)

Send a Product

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        Map<String, Object> requestBody = null; // Map<String, Object> | 
        try {
            ApiResponse<MessageSentResponse> response = apiInstance.sendProductWithHttpInfo(token, requestBody);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendProduct");
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
| **requestBody** | [**Map&lt;String, Object&gt;**](Object.md)|  | [optional] |

### Return type

ApiResponse<[**MessageSentResponse**](MessageSentResponse.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |


## sendReaction

> MessageSentResponse sendReaction(token, sendReactionRequest)

Send Reaction

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        SendReactionRequest sendReactionRequest = new SendReactionRequest(); // SendReactionRequest | 
        try {
            MessageSentResponse result = apiInstance.sendReaction(token, sendReactionRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendReaction");
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
| **sendReactionRequest** | [**SendReactionRequest**](SendReactionRequest.md)|  | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

## sendReactionWithHttpInfo

> ApiResponse<MessageSentResponse> sendReactionWithHttpInfo(token, sendReactionRequest)

Send Reaction

### Example

```java
// Import classes:
import io.onemsg.sdk.ApiClient;
import io.onemsg.sdk.ApiException;
import io.onemsg.sdk.ApiResponse;
import io.onemsg.sdk.Configuration;
import io.onemsg.sdk.auth.*;
import io.onemsg.sdk.models.*;
import io.onemsg.sdk.api.MessagingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.1msg.io");
        
        // Configure API key authorization: tokenAuth
        ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
        tokenAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //tokenAuth.setApiKeyPrefix("Token");

        MessagingApi apiInstance = new MessagingApi(defaultClient);
        String token = "token_example"; // String | JWT token or API key for authorization
        SendReactionRequest sendReactionRequest = new SendReactionRequest(); // SendReactionRequest | 
        try {
            ApiResponse<MessageSentResponse> response = apiInstance.sendReactionWithHttpInfo(token, sendReactionRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendReaction");
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
| **sendReactionRequest** | [**SendReactionRequest**](SendReactionRequest.md)|  | [optional] |

### Return type

ApiResponse<[**MessageSentResponse**](MessageSentResponse.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

