# MessagingApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createReadMessage**](MessagingApi.md#createreadmessage) | **POST** /readMessage | Mark message as read |
| [**createUploadMedia**](MessagingApi.md#createuploadmedia) | **POST** /uploadMedia | Upload media |
| [**listMessages**](MessagingApi.md#listmessages) | **GET** /messages | Get messages list |
| [**sendButton**](MessagingApi.md#sendbuttonoperation) | **POST** /sendButton | Send Reply Buttons Message |
| [**sendCarousel**](MessagingApi.md#sendcarousel) | **POST** /sendCarousel | Send Carousel |
| [**sendContact**](MessagingApi.md#sendcontactoperation) | **POST** /sendContact | Send a Contact |
| [**sendFile**](MessagingApi.md#sendfile) | **POST** /sendFile | Send a File |
| [**sendFlow**](MessagingApi.md#sendflow) | **POST** /sendFlow | Send WhatsApp Flow Message |
| [**sendList**](MessagingApi.md#sendlistoperation) | **POST** /sendList | Send List Message |
| [**sendLocation**](MessagingApi.md#sendlocation) | **POST** /sendLocation | Send a Location |
| [**sendLocationRequest**](MessagingApi.md#sendlocationrequestoperation) | **POST** /sendLocationRequest | Send Location Request Message |
| [**sendMessage**](MessagingApi.md#sendmessage) | **POST** /sendMessage | Send a Message |
| [**sendProduct**](MessagingApi.md#sendproduct) | **POST** /sendProduct | Send a Product |
| [**sendReaction**](MessagingApi.md#sendreactionoperation) | **POST** /sendReaction | Send Reaction |



## createReadMessage

> CreateReadMessage200Response createReadMessage(token, messageId)

Mark message as read

### Example

```ts
import {
  Configuration,
  MessagingApi,
} from '@1msg/chat-api-generated';
import type { CreateReadMessageRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MessagingApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
    // string | Message ID. Example: 0XzkmGNn4prUAQlzsHApGNRXQ0U (optional)
    messageId: messageId_example,
  } satisfies CreateReadMessageRequest;

  try {
    const data = await api.createReadMessage(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |
| **messageId** | `string` | Message ID. Example: 0XzkmGNn4prUAQlzsHApGNRXQ0U | [Optional] [Defaults to `undefined`] |

### Return type

[**CreateReadMessage200Response**](CreateReadMessage200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`, `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Server response example |  -  |
| **401** | Invalid token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createUploadMedia

> createUploadMedia(token, requestBody)

Upload media

### Example

```ts
import {
  Configuration,
  MessagingApi,
} from '@1msg/chat-api-generated';
import type { CreateUploadMediaRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MessagingApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
    // { [key: string]: any; } (optional)
    requestBody: Object,
  } satisfies CreateUploadMediaRequest;

  try {
    const data = await api.createUploadMedia(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |
| **requestBody** | `{ [key: string]: any; }` |  | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listMessages

> ListMessages200Response listMessages(token)

Get messages list

### Example

```ts
import {
  Configuration,
  MessagingApi,
} from '@1msg/chat-api-generated';
import type { ListMessagesRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MessagingApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
  } satisfies ListMessagesRequest;

  try {
    const data = await api.listMessages(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |

### Return type

[**ListMessages200Response**](ListMessages200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendButton

> MessageSentResponse sendButton(token, sendButtonRequest)

Send Reply Buttons Message

### Example

```ts
import {
  Configuration,
  MessagingApi,
} from '@1msg/chat-api-generated';
import type { SendButtonOperationRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MessagingApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
    // SendButtonRequest (optional)
    sendButtonRequest: {"phone":"{{testPhone}}","body":"This is a buttons message","footer":"Footer","sections":[{"type":"reply","reply":{"id":"1","title":"Button 1"}}]},
  } satisfies SendButtonOperationRequest;

  try {
    const data = await api.sendButton(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |
| **sendButtonRequest** | [SendButtonRequest](SendButtonRequest.md) |  | [Optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendCarousel

> MessageSentResponse sendCarousel(token, params, body, quotedMsgId, chatId, phone)

Send Carousel

You can send product cards via Carousel in two ways:  Template messages: do not require a 24-hour customer service window between you and the recipient. Use sendTemplate.  Free-form messages: can be sent only when a customer service window is open between you and the recipient. Use sendCarousel.  The message structure in /sendCarousel is largely similar to sending a template. However, in this case you must  explicitly specify all elements that are created in advance when working with templates. This is because the message  is sent without using a template.  In /sendCarousel, for sending a Catalog Carousel there can be either 1 URL button or one or more quick reply buttons. 

### Example

```ts
import {
  Configuration,
  MessagingApi,
} from '@1msg/chat-api-generated';
import type { SendCarouselRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MessagingApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
    // Array<object> | Required. Template-like structure (same as sendTemplate params). Must include a CAROUSEL component and its cards.  Structure: - params[] item with type CAROUSEL and cards (2..10) - cards[] item:   - components[] items:     - header: parameters[0] with type image/video/product       - image: {\\\"image\\\": {\\\"link\\\": \\\"https://...\\\"}}       - video: {\\\"video\\\": {\\\"link\\\": \\\"https://...\\\"}}       - product: {\\\"product\\\": {\\\"catalog_id\\\": \\\"...\\\", \\\"product_retailer_id\\\": \\\"...\\\"}}     - button: sub_type url or quick_reply       - url: parameters {\\\"text\\\": \\\"Button\\\", \\\"url\\\": \\\"https://...\\\"}       - quick_reply: parameters[] of {\\\"id\\\": \\\"...\\\", \\\"text\\\": \\\"...\\\"} 
    params: ...,
    // string | Text shown above the carousel. Optional. If omitted and params include a body component, the body will be taken from params. (optional)
    body: body_example,
    // string | Quoted message ID (Cloud API) (optional)
    quotedMsgId: quotedMsgId_example,
    // string | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) (optional)
    chatId: chatId_example,
    // number | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. (optional)
    phone: 56,
  } satisfies SendCarouselRequest;

  try {
    const data = await api.sendCarousel(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |
| **params** | `Array<object>` | Required. Template-like structure (same as sendTemplate params). Must include a CAROUSEL component and its cards.  Structure: - params[] item with type CAROUSEL and cards (2..10) - cards[] item:   - components[] items:     - header: parameters[0] with type image/video/product       - image: {\\\&quot;image\\\&quot;: {\\\&quot;link\\\&quot;: \\\&quot;https://...\\\&quot;}}       - video: {\\\&quot;video\\\&quot;: {\\\&quot;link\\\&quot;: \\\&quot;https://...\\\&quot;}}       - product: {\\\&quot;product\\\&quot;: {\\\&quot;catalog_id\\\&quot;: \\\&quot;...\\\&quot;, \\\&quot;product_retailer_id\\\&quot;: \\\&quot;...\\\&quot;}}     - button: sub_type url or quick_reply       - url: parameters {\\\&quot;text\\\&quot;: \\\&quot;Button\\\&quot;, \\\&quot;url\\\&quot;: \\\&quot;https://...\\\&quot;}       - quick_reply: parameters[] of {\\\&quot;id\\\&quot;: \\\&quot;...\\\&quot;, \\\&quot;text\\\&quot;: \\\&quot;...\\\&quot;}  | |
| **body** | `string` | Text shown above the carousel. Optional. If omitted and params include a body component, the body will be taken from params. | [Optional] [Defaults to `undefined`] |
| **quotedMsgId** | `string` | Quoted message ID (Cloud API) | [Optional] [Defaults to `undefined`] |
| **chatId** | `string` | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) | [Optional] [Defaults to `undefined`] |
| **phone** | `number` | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. | [Optional] [Defaults to `undefined`] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`, `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendContact

> MessageSentResponse sendContact(token, sendContactRequest)

Send a Contact

### Example

```ts
import {
  Configuration,
  MessagingApi,
} from '@1msg/chat-api-generated';
import type { SendContactOperationRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MessagingApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
    // SendContactRequest (optional)
    sendContactRequest: {"phone":"{{testPhone}}","contacts":[{"name":{"formatted_name":"John Doe","first_name":"John","last_name":"Doe","middle_name":"","suffix":"","prefix":""},"birthday":"","addresses":[],"emails":[],"org":{"company":"","department":"","title":""},"phones":[{"phone":"+1234567890","type":"HOME","wa_id":""}],"urls":[]}]},
  } satisfies SendContactOperationRequest;

  try {
    const data = await api.sendContact(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |
| **sendContactRequest** | [SendContactRequest](SendContactRequest.md) |  | [Optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendFile

> MessageSentResponse sendFile(token, body, filename, caption, quotedMsgId, chatId, phone)

Send a File

Send a file to an existing chat. (Only if the dialogue has an Open Session).  Only one of two parameters is needed to determine the destination - chatId or phone. 

### Example

```ts
import {
  Configuration,
  MessagingApi,
} from '@1msg/chat-api-generated';
import type { SendFileRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MessagingApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
    // string | File source: - HTTP/HTTPS URL (https://example.com/file.pdf) - Base64-encoded file with MIME (data:image/jpeg;base64,/9j/4AAQ...) - Form-data field 
    body: body_example,
    // string | File name with extension (required for mime type detection)
    filename: filename_example,
    // string | Text caption under the file (optional)
    caption: caption_example,
    // string | Message ID to quote/reply to (optional)
    quotedMsgId: quotedMsgId_example,
    // string | Chat ID in format: phone@c.us or phone@g.us (optional)
    chatId: chatId_example,
    // number | Phone number starting with country code (optional)
    phone: 56,
  } satisfies SendFileRequest;

  try {
    const data = await api.sendFile(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |
| **body** | `string` | File source: - HTTP/HTTPS URL (https://example.com/file.pdf) - Base64-encoded file with MIME (data:image/jpeg;base64,/9j/4AAQ...) - Form-data field  | [Defaults to `undefined`] |
| **filename** | `string` | File name with extension (required for mime type detection) | [Defaults to `undefined`] |
| **caption** | `string` | Text caption under the file | [Optional] [Defaults to `undefined`] |
| **quotedMsgId** | `string` | Message ID to quote/reply to | [Optional] [Defaults to `undefined`] |
| **chatId** | `string` | Chat ID in format: phone@c.us or phone@g.us | [Optional] [Defaults to `undefined`] |
| **phone** | `number` | Phone number starting with country code | [Optional] [Defaults to `undefined`] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`, `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendFlow

> MessageSentResponse sendFlow(token, body, flowId, flowToken, flowCta, header, footer, flowAction, flowActionPayload, flowMessageVersion, mode, flowActionData, flowActionScreen, quotedMsgId, chatId, phone)

Send WhatsApp Flow Message

Send Interactive WhatsApp Flow message to an existing chat. (Only if the dialogue has an Open Session).  Only one of two parameters is needed to determine the destination - chatId or phone.  Use this method to send a published WhatsApp Flow as a service (interactive) message.  If the 24-hour window is closed, send a template with a FLOW button via /sendTemplate. 

### Example

```ts
import {
  Configuration,
  MessagingApi,
} from '@1msg/chat-api-generated';
import type { SendFlowRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MessagingApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
    // string | Flow message body text
    body: body_example,
    // string | Published Flow ID
    flowId: flowId_example,
    // string | Flow token generated by the business
    flowToken: flowToken_example,
    // string | CTA button text
    flowCta: flowCta_example,
    // SendFlowRequestHeader (optional)
    header: ...,
    // string | Footer text (optional)
    footer: footer_example,
    // string | Flow action type (optional)
    flowAction: flowAction_example,
    // object | Required for flowAction=navigate (screen is required). Ignored for data_exchange. If data is provided, it must be a non-empty object. (optional)
    flowActionPayload: Object,
    // string | Flow message version (default \\\"3\\\") (optional)
    flowMessageVersion: flowMessageVersion_example,
    // string | Flow mode (draft or published). If omitted, provider default applies (optional)
    mode: mode_example,
    // object | Shortcut for flowActionPayload.data (optional) (optional)
    flowActionData: Object,
    // string | Shortcut for flowActionPayload.screen (optional) (optional)
    flowActionScreen: flowActionScreen_example,
    // string | Quoted message ID (Cloud API) (optional)
    quotedMsgId: quotedMsgId_example,
    // string | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) (optional)
    chatId: chatId_example,
    // number | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. (optional)
    phone: 56,
  } satisfies SendFlowRequest;

  try {
    const data = await api.sendFlow(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |
| **body** | `string` | Flow message body text | [Defaults to `undefined`] |
| **flowId** | `string` | Published Flow ID | [Defaults to `undefined`] |
| **flowToken** | `string` | Flow token generated by the business | [Defaults to `undefined`] |
| **flowCta** | `string` | CTA button text | [Defaults to `undefined`] |
| **header** | [SendFlowRequestHeader](SendFlowRequestHeader.md) |  | [Optional] [Defaults to `undefined`] |
| **footer** | `string` | Footer text | [Optional] [Defaults to `undefined`] |
| **flowAction** | `navigate`, `data_exchange` | Flow action type | [Optional] [Defaults to `undefined`] [Enum: navigate, data_exchange] |
| **flowActionPayload** | `object` | Required for flowAction&#x3D;navigate (screen is required). Ignored for data_exchange. If data is provided, it must be a non-empty object. | [Optional] [Defaults to `undefined`] |
| **flowMessageVersion** | `string` | Flow message version (default \\\&quot;3\\\&quot;) | [Optional] [Defaults to `undefined`] |
| **mode** | `draft`, `published` | Flow mode (draft or published). If omitted, provider default applies | [Optional] [Defaults to `undefined`] [Enum: draft, published] |
| **flowActionData** | `object` | Shortcut for flowActionPayload.data (optional) | [Optional] [Defaults to `undefined`] |
| **flowActionScreen** | `string` | Shortcut for flowActionPayload.screen (optional) | [Optional] [Defaults to `undefined`] |
| **quotedMsgId** | `string` | Quoted message ID (Cloud API) | [Optional] [Defaults to `undefined`] |
| **chatId** | `string` | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) | [Optional] [Defaults to `undefined`] |
| **phone** | `number` | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. | [Optional] [Defaults to `undefined`] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`, `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendList

> MessageSentResponse sendList(token, sendListRequest)

Send List Message

### Example

```ts
import {
  Configuration,
  MessagingApi,
} from '@1msg/chat-api-generated';
import type { SendListOperationRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MessagingApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
    // SendListRequest (optional)
    sendListRequest: {"phone":"{{testPhone}}","body":"This is a list message","buttonText":"Click me","action":"Action","sections":[{"title":"Section 1","rows":[{"id":"1","title":"Row 1","description":"Description for Row 1"}]}]},
  } satisfies SendListOperationRequest;

  try {
    const data = await api.sendList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |
| **sendListRequest** | [SendListRequest](SendListRequest.md) |  | [Optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendLocation

> MessageSentResponse sendLocation(token, lat, lng, address, name, quotedMsgId, chatId, phone)

Send a Location

Send a location to an existing chat. (Only if the dialogue has an Open Session).  Only one of two parameters is needed to determine the destination - chatId or phone. 

### Example

```ts
import {
  Configuration,
  MessagingApi,
} from '@1msg/chat-api-generated';
import type { SendLocationRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MessagingApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
    // string | Latitude of the location. Example: 45.018337
    lat: lat_example,
    // string | Longitude of the location. Example: -73.968285
    lng: lng_example,
    // string | Address of the location. Only displayed if name is present. Example: 9766 Valley View St., New York, NY 10024 (optional)
    address: address_example,
    // string | Name of the location. Example: Facebook HQ (optional)
    name: name_example,
    // string | Quoted message ID (Cloud API) (optional)
    quotedMsgId: quotedMsgId_example,
    // string | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) (optional)
    chatId: chatId_example,
    // number | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. (optional)
    phone: 56,
  } satisfies SendLocationRequest;

  try {
    const data = await api.sendLocation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |
| **lat** | `string` | Latitude of the location. Example: 45.018337 | [Defaults to `undefined`] |
| **lng** | `string` | Longitude of the location. Example: -73.968285 | [Defaults to `undefined`] |
| **address** | `string` | Address of the location. Only displayed if name is present. Example: 9766 Valley View St., New York, NY 10024 | [Optional] [Defaults to `undefined`] |
| **name** | `string` | Name of the location. Example: Facebook HQ | [Optional] [Defaults to `undefined`] |
| **quotedMsgId** | `string` | Quoted message ID (Cloud API) | [Optional] [Defaults to `undefined`] |
| **chatId** | `string` | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) | [Optional] [Defaults to `undefined`] |
| **phone** | `number` | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. | [Optional] [Defaults to `undefined`] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`, `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendLocationRequest

> MessageSentResponse sendLocationRequest(token, sendLocationRequestRequest)

Send Location Request Message

### Example

```ts
import {
  Configuration,
  MessagingApi,
} from '@1msg/chat-api-generated';
import type { SendLocationRequestOperationRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MessagingApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
    // SendLocationRequestRequest (optional)
    sendLocationRequestRequest: {"phone":"{{testPhone}}","body":"Text"},
  } satisfies SendLocationRequestOperationRequest;

  try {
    const data = await api.sendLocationRequest(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |
| **sendLocationRequestRequest** | [SendLocationRequestRequest](SendLocationRequestRequest.md) |  | [Optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendMessage

> MessageSentResponse sendMessage(token, body, quotedMsgId, chatId, phone)

Send a Message

Send a message to an existing chat. (Only if the dialogue has an Open Session).  The message will be added to the queue for sending and delivered even if the phone  is disconnected from the Internet or authorization is not passed.  Only one of two parameters is needed to determine the destination - chatId or phone. 

### Example

```ts
import {
  Configuration,
  MessagingApi,
} from '@1msg/chat-api-generated';
import type { SendMessageRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MessagingApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
    // string | Message text, UTF-8 or UTF-16 string with emoji
    body: body_example,
    // string | Message ID to quote/reply to (Cloud API wamid) (optional)
    quotedMsgId: quotedMsgId_example,
    // string | Chat ID in format: phone@c.us (individual) or phone@g.us (group) (optional)
    chatId: chatId_example,
    // number | Phone number starting with country code (alternative to chatId) (optional)
    phone: 56,
  } satisfies SendMessageRequest;

  try {
    const data = await api.sendMessage(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |
| **body** | `string` | Message text, UTF-8 or UTF-16 string with emoji | [Defaults to `undefined`] |
| **quotedMsgId** | `string` | Message ID to quote/reply to (Cloud API wamid) | [Optional] [Defaults to `undefined`] |
| **chatId** | `string` | Chat ID in format: phone@c.us (individual) or phone@g.us (group) | [Optional] [Defaults to `undefined`] |
| **phone** | `number` | Phone number starting with country code (alternative to chatId) | [Optional] [Defaults to `undefined`] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`, `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendProduct

> MessageSentResponse sendProduct(token, requestBody)

Send a Product

### Example

```ts
import {
  Configuration,
  MessagingApi,
} from '@1msg/chat-api-generated';
import type { SendProductRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MessagingApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
    // { [key: string]: any; } (optional)
    requestBody: Object,
  } satisfies SendProductRequest;

  try {
    const data = await api.sendProduct(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |
| **requestBody** | `{ [key: string]: any; }` |  | [Optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendReaction

> MessageSentResponse sendReaction(token, sendReactionRequest)

Send Reaction

### Example

```ts
import {
  Configuration,
  MessagingApi,
} from '@1msg/chat-api-generated';
import type { SendReactionOperationRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MessagingApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
    // SendReactionRequest (optional)
    sendReactionRequest: {"phone":"{{testPhone}}","body":"😀","quotedMsgId":"{{lastMessageId}}"},
  } satisfies SendReactionOperationRequest;

  try {
    const data = await api.sendReaction(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |
| **sendReactionRequest** | [SendReactionRequest](SendReactionRequest.md) |  | [Optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message sent successfully |  -  |
| **400** | Invalid request parameters |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

