# TemplatesApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listTemplates**](TemplatesApi.md#listtemplates) | **GET** /templates | Get templates list |
| [**sendTemplate**](TemplatesApi.md#sendtemplateoperation) | **POST** /sendTemplate | Send Template Message |



## listTemplates

> ListTemplates200Response listTemplates(token)

Get templates list

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '@1msg/chat-api-generated';
import type { ListTemplatesRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TemplatesApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
  } satisfies ListTemplatesRequest;

  try {
    const data = await api.listTemplates(body);
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

[**ListTemplates200Response**](ListTemplates200Response.md)

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


## sendTemplate

> { [key: string]: any; } sendTemplate(token, sendTemplateRequest)

Send Template Message

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '@1msg/chat-api-generated';
import type { SendTemplateOperationRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TemplatesApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
    // SendTemplateRequest (optional)
    sendTemplateRequest: {"template":"test_buttons_2","language":{"policy":"deterministic","code":"ru"},"namespace":"41123797_e45e_4f06_a2fa_443b27c6f5ec","params":[],"phone":"{{testPhone}}"},
  } satisfies SendTemplateOperationRequest;

  try {
    const data = await api.sendTemplate(body);
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
| **sendTemplateRequest** | [SendTemplateRequest](SendTemplateRequest.md) |  | [Optional] |

### Return type

**{ [key: string]: any; }**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

