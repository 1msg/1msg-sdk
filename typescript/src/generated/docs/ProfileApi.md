# ProfileApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getMe**](ProfileApi.md#getme) | **GET** /me | Get Profile Info |



## getMe

> ProfileInfo getMe(token)

Get Profile Info

Get WhatsApp Business Account profile information

### Example

```ts
import {
  Configuration,
  ProfileApi,
} from '@1msg/chat-api-generated';
import type { GetMeRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProfileApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
  } satisfies GetMeRequest;

  try {
    const data = await api.getMe(body);
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

[**ProfileInfo**](ProfileInfo.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Profile information |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

