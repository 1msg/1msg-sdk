# MessagingApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createReadMessage**](MessagingApi.md#createReadMessage) | **POST** /readMessage | Mark message as read |
| [**createReadMessageWithHttpInfo**](MessagingApi.md#createReadMessageWithHttpInfo) | **POST** /readMessage | Mark message as read |
| [**createUploadMedia**](MessagingApi.md#createUploadMedia) | **POST** /uploadMedia | Upload media |
| [**createUploadMediaWithHttpInfo**](MessagingApi.md#createUploadMediaWithHttpInfo) | **POST** /uploadMedia | Upload media |
| [**deleteMedia**](MessagingApi.md#deleteMedia) | **DELETE** /media/{mediaId} | Delete media from WABA storage |
| [**deleteMediaWithHttpInfo**](MessagingApi.md#deleteMediaWithHttpInfo) | **DELETE** /media/{mediaId} | Delete media from WABA storage |
| [**deleteMediaLegacy**](MessagingApi.md#deleteMediaLegacy) | **POST** /deleteMedia | Delete media from WABA storage (deprecated alias) |
| [**deleteMediaLegacyWithHttpInfo**](MessagingApi.md#deleteMediaLegacyWithHttpInfo) | **POST** /deleteMedia | Delete media from WABA storage (deprecated alias) |
| [**getMmLiteStatus**](MessagingApi.md#getMmLiteStatus) | **GET** /mmLiteStatus | Get MM Lite availability and status |
| [**getMmLiteStatusWithHttpInfo**](MessagingApi.md#getMmLiteStatusWithHttpInfo) | **GET** /mmLiteStatus | Get MM Lite availability and status |
| [**listMessages**](MessagingApi.md#listMessages) | **GET** /messages | Get messages list |
| [**listMessagesWithHttpInfo**](MessagingApi.md#listMessagesWithHttpInfo) | **GET** /messages | Get messages list |
| [**retrieveMedia**](MessagingApi.md#retrieveMedia) | **GET** /retrieveMedia | Retrieve uploaded media metadata |
| [**retrieveMediaWithHttpInfo**](MessagingApi.md#retrieveMediaWithHttpInfo) | **GET** /retrieveMedia | Retrieve uploaded media metadata |
| [**sendAddressMessage**](MessagingApi.md#sendAddressMessage) | **POST** /sendAddressMessage | Send address request message |
| [**sendAddressMessageWithHttpInfo**](MessagingApi.md#sendAddressMessageWithHttpInfo) | **POST** /sendAddressMessage | Send address request message |
| [**sendButton**](MessagingApi.md#sendButton) | **POST** /sendButton | Send Reply Buttons Message |
| [**sendButtonWithHttpInfo**](MessagingApi.md#sendButtonWithHttpInfo) | **POST** /sendButton | Send Reply Buttons Message |
| [**sendCarousel**](MessagingApi.md#sendCarousel) | **POST** /sendCarousel | Send Carousel |
| [**sendCarouselWithHttpInfo**](MessagingApi.md#sendCarouselWithHttpInfo) | **POST** /sendCarousel | Send Carousel |
| [**sendContact**](MessagingApi.md#sendContact) | **POST** /sendContact | Send a Contact |
| [**sendContactWithHttpInfo**](MessagingApi.md#sendContactWithHttpInfo) | **POST** /sendContact | Send a Contact |
| [**sendCtaUrl**](MessagingApi.md#sendCtaUrl) | **POST** /sendCtaUrl | Send CTA URL interactive message |
| [**sendCtaUrlWithHttpInfo**](MessagingApi.md#sendCtaUrlWithHttpInfo) | **POST** /sendCtaUrl | Send CTA URL interactive message |
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
| [**sendOrderDetails**](MessagingApi.md#sendOrderDetails) | **POST** /sendOrderDetails | Send order details (India payments template) |
| [**sendOrderDetailsWithHttpInfo**](MessagingApi.md#sendOrderDetailsWithHttpInfo) | **POST** /sendOrderDetails | Send order details (India payments template) |
| [**sendPaymentRequest**](MessagingApi.md#sendPaymentRequest) | **POST** /sendPaymentRequest | Send payment request (regional) |
| [**sendPaymentRequestWithHttpInfo**](MessagingApi.md#sendPaymentRequestWithHttpInfo) | **POST** /sendPaymentRequest | Send payment request (regional) |
| [**sendProduct**](MessagingApi.md#sendProduct) | **POST** /sendProduct | Send a Product |
| [**sendProductWithHttpInfo**](MessagingApi.md#sendProductWithHttpInfo) | **POST** /sendProduct | Send a Product |
| [**sendReaction**](MessagingApi.md#sendReaction) | **POST** /sendReaction | Send Reaction |
| [**sendReactionWithHttpInfo**](MessagingApi.md#sendReactionWithHttpInfo) | **POST** /sendReaction | Send Reaction |
| [**sendSticker**](MessagingApi.md#sendSticker) | **POST** /sendSticker | Send sticker message |
| [**sendStickerWithHttpInfo**](MessagingApi.md#sendStickerWithHttpInfo) | **POST** /sendSticker | Send sticker message |



## createReadMessage

> CreateReadMessage200Response createReadMessage(token, messageId, msgId, typingIndicator)

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
        String messageId = "messageId_example"; // String | 
        String msgId = "msgId_example"; // String | 
        Boolean typingIndicator = false; // Boolean | Show WhatsApp typing indicator (max 25s or until reply)
        try {
            CreateReadMessage200Response result = apiInstance.createReadMessage(token, messageId, msgId, typingIndicator);
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
| **messageId** | **String**|  | [optional] |
| **msgId** | **String**|  | [optional] |
| **typingIndicator** | **Boolean**| Show WhatsApp typing indicator (max 25s or until reply) | [optional] [default to false] |

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

> ApiResponse<CreateReadMessage200Response> createReadMessageWithHttpInfo(token, messageId, msgId, typingIndicator)

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
        String messageId = "messageId_example"; // String | 
        String msgId = "msgId_example"; // String | 
        Boolean typingIndicator = false; // Boolean | Show WhatsApp typing indicator (max 25s or until reply)
        try {
            ApiResponse<CreateReadMessage200Response> response = apiInstance.createReadMessageWithHttpInfo(token, messageId, msgId, typingIndicator);
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
| **messageId** | **String**|  | [optional] |
| **msgId** | **String**|  | [optional] |
| **typingIndicator** | **Boolean**| Show WhatsApp typing indicator (max 25s or until reply) | [optional] [default to false] |

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


## deleteMedia

> SuccessResponse deleteMedia(token, mediaId)

Delete media from WABA storage

Delete previously uploaded media by numeric &#x60;mediaId&#x60; (from &#x60;/uploadMedia&#x60;).  This is the canonical deletion endpoint and uses the REST &#x60;DELETE&#x60; verb on the media resource path. The older &#x60;POST /deleteMedia&#x60; is a deprecated alias. 

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
        String mediaId = "mediaId_example"; // String | Numeric WABA media id
        try {
            SuccessResponse result = apiInstance.deleteMedia(token, mediaId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#deleteMedia");
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
| **mediaId** | **String**| Numeric WABA media id | |

### Return type

[**SuccessResponse**](SuccessResponse.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operation successful |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

## deleteMediaWithHttpInfo

> ApiResponse<SuccessResponse> deleteMediaWithHttpInfo(token, mediaId)

Delete media from WABA storage

Delete previously uploaded media by numeric &#x60;mediaId&#x60; (from &#x60;/uploadMedia&#x60;).  This is the canonical deletion endpoint and uses the REST &#x60;DELETE&#x60; verb on the media resource path. The older &#x60;POST /deleteMedia&#x60; is a deprecated alias. 

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
        String mediaId = "mediaId_example"; // String | Numeric WABA media id
        try {
            ApiResponse<SuccessResponse> response = apiInstance.deleteMediaWithHttpInfo(token, mediaId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#deleteMedia");
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
| **mediaId** | **String**| Numeric WABA media id | |

### Return type

ApiResponse<[**SuccessResponse**](SuccessResponse.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operation successful |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |


## deleteMediaLegacy

> SuccessResponse deleteMediaLegacy(token, deleteMediaLegacyRequest)

Delete media from WABA storage (deprecated alias)

**Deprecated.** Use &#x60;DELETE /media/{mediaId}&#x60; instead.  This POST alias is kept for backward compatibility with earlier integrations. New integrations should call &#x60;DELETE /media/{mediaId}&#x60;: 1msg follows REST conventions for resource deletion going forward (delete a resource with the &#x60;DELETE&#x60; verb on its resource path). 

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
        DeleteMediaLegacyRequest deleteMediaLegacyRequest = new DeleteMediaLegacyRequest(); // DeleteMediaLegacyRequest | 
        try {
            SuccessResponse result = apiInstance.deleteMediaLegacy(token, deleteMediaLegacyRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#deleteMediaLegacy");
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
| **deleteMediaLegacyRequest** | [**DeleteMediaLegacyRequest**](DeleteMediaLegacyRequest.md)|  | |

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

## deleteMediaLegacyWithHttpInfo

> ApiResponse<SuccessResponse> deleteMediaLegacyWithHttpInfo(token, deleteMediaLegacyRequest)

Delete media from WABA storage (deprecated alias)

**Deprecated.** Use &#x60;DELETE /media/{mediaId}&#x60; instead.  This POST alias is kept for backward compatibility with earlier integrations. New integrations should call &#x60;DELETE /media/{mediaId}&#x60;: 1msg follows REST conventions for resource deletion going forward (delete a resource with the &#x60;DELETE&#x60; verb on its resource path). 

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
        DeleteMediaLegacyRequest deleteMediaLegacyRequest = new DeleteMediaLegacyRequest(); // DeleteMediaLegacyRequest | 
        try {
            ApiResponse<SuccessResponse> response = apiInstance.deleteMediaLegacyWithHttpInfo(token, deleteMediaLegacyRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#deleteMediaLegacy");
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
| **deleteMediaLegacyRequest** | [**DeleteMediaLegacyRequest**](DeleteMediaLegacyRequest.md)|  | |

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


## getMmLiteStatus

> GetMmLiteStatus200Response getMmLiteStatus(token)

Get MM Lite availability and status

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
            GetMmLiteStatus200Response result = apiInstance.getMmLiteStatus(token);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#getMmLiteStatus");
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

[**GetMmLiteStatus200Response**](GetMmLiteStatus200Response.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | MM Lite status for the channel |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

## getMmLiteStatusWithHttpInfo

> ApiResponse<GetMmLiteStatus200Response> getMmLiteStatusWithHttpInfo(token)

Get MM Lite availability and status

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
            ApiResponse<GetMmLiteStatus200Response> response = apiInstance.getMmLiteStatusWithHttpInfo(token);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#getMmLiteStatus");
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

ApiResponse<[**GetMmLiteStatus200Response**](GetMmLiteStatus200Response.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | MM Lite status for the channel |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |


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


## retrieveMedia

> RetrieveMedia200Response retrieveMedia(token, mediaId)

Retrieve uploaded media metadata

Get WABA media URL and metadata by mediaId (from uploadMedia). The returned &#x60;url&#x60; is temporary and typically expires within ~5 minutes. 

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
        String mediaId = "mediaId_example"; // String | 
        try {
            RetrieveMedia200Response result = apiInstance.retrieveMedia(token, mediaId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#retrieveMedia");
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
| **mediaId** | **String**|  | |

### Return type

[**RetrieveMedia200Response**](RetrieveMedia200Response.md)


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Media metadata |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

## retrieveMediaWithHttpInfo

> ApiResponse<RetrieveMedia200Response> retrieveMediaWithHttpInfo(token, mediaId)

Retrieve uploaded media metadata

Get WABA media URL and metadata by mediaId (from uploadMedia). The returned &#x60;url&#x60; is temporary and typically expires within ~5 minutes. 

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
        String mediaId = "mediaId_example"; // String | 
        try {
            ApiResponse<RetrieveMedia200Response> response = apiInstance.retrieveMediaWithHttpInfo(token, mediaId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#retrieveMedia");
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
| **mediaId** | **String**|  | |

### Return type

ApiResponse<[**RetrieveMedia200Response**](RetrieveMedia200Response.md)>


### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Media metadata |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |


## sendAddressMessage

> MessageSentResponse sendAddressMessage(token, sendAddressMessageRequest)

Send address request message

Request shipping address from the user.  **India only** (WhatsApp Cloud API address messages). Requires an India WhatsApp Business number and an India (+91) recipient. Meta validates eligibility; mismatches return WABA errors such as &#x60;Unsupported Interactive Message type&#x60; (HTTP 200 with &#x60;sent: false&#x60;).  The outbound payload always sends &#x60;action.parameters.country &#x3D; \&quot;IN\&quot;&#x60;. A &#x60;country&#x60; field in the request body (if present) is ignored. 

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
        SendAddressMessageRequest sendAddressMessageRequest = new SendAddressMessageRequest(); // SendAddressMessageRequest | 
        try {
            MessageSentResponse result = apiInstance.sendAddressMessage(token, sendAddressMessageRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendAddressMessage");
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
| **sendAddressMessageRequest** | [**SendAddressMessageRequest**](SendAddressMessageRequest.md)|  | |

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

## sendAddressMessageWithHttpInfo

> ApiResponse<MessageSentResponse> sendAddressMessageWithHttpInfo(token, sendAddressMessageRequest)

Send address request message

Request shipping address from the user.  **India only** (WhatsApp Cloud API address messages). Requires an India WhatsApp Business number and an India (+91) recipient. Meta validates eligibility; mismatches return WABA errors such as &#x60;Unsupported Interactive Message type&#x60; (HTTP 200 with &#x60;sent: false&#x60;).  The outbound payload always sends &#x60;action.parameters.country &#x3D; \&quot;IN\&quot;&#x60;. A &#x60;country&#x60; field in the request body (if present) is ignored. 

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
        SendAddressMessageRequest sendAddressMessageRequest = new SendAddressMessageRequest(); // SendAddressMessageRequest | 
        try {
            ApiResponse<MessageSentResponse> response = apiInstance.sendAddressMessageWithHttpInfo(token, sendAddressMessageRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendAddressMessage");
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
| **sendAddressMessageRequest** | [**SendAddressMessageRequest**](SendAddressMessageRequest.md)|  | |

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


## sendCtaUrl

> MessageSentResponse sendCtaUrl(token, sendCtaUrlRequest)

Send CTA URL interactive message

Send an interactive message with a single call-to-action URL button.

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
        SendCtaUrlRequest sendCtaUrlRequest = new SendCtaUrlRequest(); // SendCtaUrlRequest | 
        try {
            MessageSentResponse result = apiInstance.sendCtaUrl(token, sendCtaUrlRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendCtaUrl");
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
| **sendCtaUrlRequest** | [**SendCtaUrlRequest**](SendCtaUrlRequest.md)|  | |

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

## sendCtaUrlWithHttpInfo

> ApiResponse<MessageSentResponse> sendCtaUrlWithHttpInfo(token, sendCtaUrlRequest)

Send CTA URL interactive message

Send an interactive message with a single call-to-action URL button.

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
        SendCtaUrlRequest sendCtaUrlRequest = new SendCtaUrlRequest(); // SendCtaUrlRequest | 
        try {
            ApiResponse<MessageSentResponse> response = apiInstance.sendCtaUrlWithHttpInfo(token, sendCtaUrlRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendCtaUrl");
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
| **sendCtaUrlRequest** | [**SendCtaUrlRequest**](SendCtaUrlRequest.md)|  | |

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

> MessageSentResponse sendFile(token, body, filename, mediaId, mediaType, voice, caption, quotedMsgId, chatId, phone)

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
        String body = "body_example"; // String | File source (required unless mediaId is set): - HTTP/HTTPS URL - Base64 data URI 
        String filename = "filename_example"; // String | File name with extension (required with body, not with mediaId)
        String mediaId = "mediaId_example"; // String | WABA media id from uploadMedia (alternative to body)
        String mediaType = "image"; // String | Required when using mediaId
        Boolean voice = true; // Boolean | Native WhatsApp voice note (audio/ogg only)
        String caption = "caption_example"; // String | 
        String quotedMsgId = "quotedMsgId_example"; // String | 
        String chatId = "chatId_example"; // String | 
        Integer phone = 56; // Integer | 
        try {
            MessageSentResponse result = apiInstance.sendFile(token, body, filename, mediaId, mediaType, voice, caption, quotedMsgId, chatId, phone);
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
| **body** | **String**| File source (required unless mediaId is set): - HTTP/HTTPS URL - Base64 data URI  | [optional] |
| **filename** | **String**| File name with extension (required with body, not with mediaId) | [optional] |
| **mediaId** | **String**| WABA media id from uploadMedia (alternative to body) | [optional] |
| **mediaType** | **String**| Required when using mediaId | [optional] [enum: image, video, audio, document] |
| **voice** | **Boolean**| Native WhatsApp voice note (audio/ogg only) | [optional] |
| **caption** | **String**|  | [optional] |
| **quotedMsgId** | **String**|  | [optional] |
| **chatId** | **String**|  | [optional] |
| **phone** | **Integer**|  | [optional] |

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

> ApiResponse<MessageSentResponse> sendFileWithHttpInfo(token, body, filename, mediaId, mediaType, voice, caption, quotedMsgId, chatId, phone)

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
        String body = "body_example"; // String | File source (required unless mediaId is set): - HTTP/HTTPS URL - Base64 data URI 
        String filename = "filename_example"; // String | File name with extension (required with body, not with mediaId)
        String mediaId = "mediaId_example"; // String | WABA media id from uploadMedia (alternative to body)
        String mediaType = "image"; // String | Required when using mediaId
        Boolean voice = true; // Boolean | Native WhatsApp voice note (audio/ogg only)
        String caption = "caption_example"; // String | 
        String quotedMsgId = "quotedMsgId_example"; // String | 
        String chatId = "chatId_example"; // String | 
        Integer phone = 56; // Integer | 
        try {
            ApiResponse<MessageSentResponse> response = apiInstance.sendFileWithHttpInfo(token, body, filename, mediaId, mediaType, voice, caption, quotedMsgId, chatId, phone);
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
| **body** | **String**| File source (required unless mediaId is set): - HTTP/HTTPS URL - Base64 data URI  | [optional] |
| **filename** | **String**| File name with extension (required with body, not with mediaId) | [optional] |
| **mediaId** | **String**| WABA media id from uploadMedia (alternative to body) | [optional] |
| **mediaType** | **String**| Required when using mediaId | [optional] [enum: image, video, audio, document] |
| **voice** | **Boolean**| Native WhatsApp voice note (audio/ogg only) | [optional] |
| **caption** | **String**|  | [optional] |
| **quotedMsgId** | **String**|  | [optional] |
| **chatId** | **String**|  | [optional] |
| **phone** | **Integer**|  | [optional] |

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


## sendOrderDetails

> MessageSentResponse sendOrderDetails(token, sendOrderDetailsRequest)

Send order details (India payments template)

Send a WhatsApp **order details** payment message via a pre-approved **Utility** template with an &#x60;ORDER_DETAILS&#x60; button.  **India only** (WhatsApp Payments India). Requires: - India WhatsApp Business Account / phone number - Commerce-enabled channel - Approved template with an &#x60;ORDER_DETAILS&#x60; button  Prefer this helper when you want a dedicated payload (&#x60;order&#x60;, &#x60;referenceId&#x60;, &#x60;currency&#x60;, &#x60;paymentSettings&#x60;). Under the hood it builds a Cloud API template &#x60;button&#x60; component with &#x60;sub_type: order_details&#x60; and calls the same path as &#x60;POST /sendTemplate&#x60;.  To send the same message **outside the 24-hour window**, you can also call &#x60;POST /sendTemplate&#x60; directly with a &#x60;params&#x60; button:  &#x60;&#x60;&#x60;json {   \&quot;type\&quot;: \&quot;button\&quot;,   \&quot;sub_type\&quot;: \&quot;order_details\&quot;,   \&quot;index\&quot;: 0,   \&quot;parameters\&quot;: [{     \&quot;type\&quot;: \&quot;action\&quot;,     \&quot;action\&quot;: {       \&quot;order_details\&quot;: {         \&quot;reference_id\&quot;: \&quot;order-123\&quot;,         \&quot;type\&quot;: \&quot;digital-goods\&quot;,         \&quot;payment_type\&quot;: \&quot;upi\&quot;,         \&quot;payment_configuration\&quot;: \&quot;payment_config_name\&quot;,         \&quot;currency\&quot;: \&quot;INR\&quot;,         \&quot;total_amount\&quot;: { \&quot;offset\&quot;: 100, \&quot;value\&quot;: 65000 },         \&quot;order\&quot;: { \&quot;status\&quot;: \&quot;pending\&quot;, \&quot;items\&quot;: [], \&quot;subtotal\&quot;: { \&quot;offset\&quot;: 100, \&quot;value\&quot;: 65000 } }       }     }   }] } &#x60;&#x60;&#x60;  See Meta/360dialog: Payments India — order details template message. 

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
        SendOrderDetailsRequest sendOrderDetailsRequest = new SendOrderDetailsRequest(); // SendOrderDetailsRequest | 
        try {
            MessageSentResponse result = apiInstance.sendOrderDetails(token, sendOrderDetailsRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendOrderDetails");
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
| **sendOrderDetailsRequest** | [**SendOrderDetailsRequest**](SendOrderDetailsRequest.md)|  | |

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
| **500** | Internal server error |  -  |

## sendOrderDetailsWithHttpInfo

> ApiResponse<MessageSentResponse> sendOrderDetailsWithHttpInfo(token, sendOrderDetailsRequest)

Send order details (India payments template)

Send a WhatsApp **order details** payment message via a pre-approved **Utility** template with an &#x60;ORDER_DETAILS&#x60; button.  **India only** (WhatsApp Payments India). Requires: - India WhatsApp Business Account / phone number - Commerce-enabled channel - Approved template with an &#x60;ORDER_DETAILS&#x60; button  Prefer this helper when you want a dedicated payload (&#x60;order&#x60;, &#x60;referenceId&#x60;, &#x60;currency&#x60;, &#x60;paymentSettings&#x60;). Under the hood it builds a Cloud API template &#x60;button&#x60; component with &#x60;sub_type: order_details&#x60; and calls the same path as &#x60;POST /sendTemplate&#x60;.  To send the same message **outside the 24-hour window**, you can also call &#x60;POST /sendTemplate&#x60; directly with a &#x60;params&#x60; button:  &#x60;&#x60;&#x60;json {   \&quot;type\&quot;: \&quot;button\&quot;,   \&quot;sub_type\&quot;: \&quot;order_details\&quot;,   \&quot;index\&quot;: 0,   \&quot;parameters\&quot;: [{     \&quot;type\&quot;: \&quot;action\&quot;,     \&quot;action\&quot;: {       \&quot;order_details\&quot;: {         \&quot;reference_id\&quot;: \&quot;order-123\&quot;,         \&quot;type\&quot;: \&quot;digital-goods\&quot;,         \&quot;payment_type\&quot;: \&quot;upi\&quot;,         \&quot;payment_configuration\&quot;: \&quot;payment_config_name\&quot;,         \&quot;currency\&quot;: \&quot;INR\&quot;,         \&quot;total_amount\&quot;: { \&quot;offset\&quot;: 100, \&quot;value\&quot;: 65000 },         \&quot;order\&quot;: { \&quot;status\&quot;: \&quot;pending\&quot;, \&quot;items\&quot;: [], \&quot;subtotal\&quot;: { \&quot;offset\&quot;: 100, \&quot;value\&quot;: 65000 } }       }     }   }] } &#x60;&#x60;&#x60;  See Meta/360dialog: Payments India — order details template message. 

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
        SendOrderDetailsRequest sendOrderDetailsRequest = new SendOrderDetailsRequest(); // SendOrderDetailsRequest | 
        try {
            ApiResponse<MessageSentResponse> response = apiInstance.sendOrderDetailsWithHttpInfo(token, sendOrderDetailsRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendOrderDetails");
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
| **sendOrderDetailsRequest** | [**SendOrderDetailsRequest**](SendOrderDetailsRequest.md)|  | |

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
| **500** | Internal server error |  -  |


## sendPaymentRequest

> MessageSentResponse sendPaymentRequest(token, sendPaymentRequestRequest)

Send payment request (regional)

Send a regional payment request interactive message (beta scaffold). &#x60;region&#x60; must be IN, SG, or BR. Payload shape follows Meta regional payments docs; verify on stage before production use. Full regional builders are not implemented yet. 

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
        SendPaymentRequestRequest sendPaymentRequestRequest = new SendPaymentRequestRequest(); // SendPaymentRequestRequest | 
        try {
            MessageSentResponse result = apiInstance.sendPaymentRequest(token, sendPaymentRequestRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendPaymentRequest");
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
| **sendPaymentRequestRequest** | [**SendPaymentRequestRequest**](SendPaymentRequestRequest.md)|  | |

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
| **500** | Internal server error |  -  |

## sendPaymentRequestWithHttpInfo

> ApiResponse<MessageSentResponse> sendPaymentRequestWithHttpInfo(token, sendPaymentRequestRequest)

Send payment request (regional)

Send a regional payment request interactive message (beta scaffold). &#x60;region&#x60; must be IN, SG, or BR. Payload shape follows Meta regional payments docs; verify on stage before production use. Full regional builders are not implemented yet. 

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
        SendPaymentRequestRequest sendPaymentRequestRequest = new SendPaymentRequestRequest(); // SendPaymentRequestRequest | 
        try {
            ApiResponse<MessageSentResponse> response = apiInstance.sendPaymentRequestWithHttpInfo(token, sendPaymentRequestRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendPaymentRequest");
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
| **sendPaymentRequestRequest** | [**SendPaymentRequestRequest**](SendPaymentRequestRequest.md)|  | |

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


## sendSticker

> MessageSentResponse sendSticker(token, sendStickerRequest)

Send sticker message

Send a WhatsApp sticker by mediaId or link URL.

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
        SendStickerRequest sendStickerRequest = new SendStickerRequest(); // SendStickerRequest | 
        try {
            MessageSentResponse result = apiInstance.sendSticker(token, sendStickerRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendSticker");
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
| **sendStickerRequest** | [**SendStickerRequest**](SendStickerRequest.md)|  | |

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

## sendStickerWithHttpInfo

> ApiResponse<MessageSentResponse> sendStickerWithHttpInfo(token, sendStickerRequest)

Send sticker message

Send a WhatsApp sticker by mediaId or link URL.

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
        SendStickerRequest sendStickerRequest = new SendStickerRequest(); // SendStickerRequest | 
        try {
            ApiResponse<MessageSentResponse> response = apiInstance.sendStickerWithHttpInfo(token, sendStickerRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MessagingApi#sendSticker");
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
| **sendStickerRequest** | [**SendStickerRequest**](SendStickerRequest.md)|  | |

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

