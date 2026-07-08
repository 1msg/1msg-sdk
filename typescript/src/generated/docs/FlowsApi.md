# FlowsApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createFlows**](FlowsApi.md#createflows) | **POST** /flows | Create Flow |
| [**createFlowsFlowIdDeprecate**](FlowsApi.md#createflowsflowiddeprecate) | **POST** /flows/{flowId}/deprecate | Deprecate Flow |
| [**createFlowsFlowIdPublish**](FlowsApi.md#createflowsflowidpublish) | **POST** /flows/{flowId}/publish | Publish Flow |
| [**deleteFlowsFlowId**](FlowsApi.md#deleteflowsflowid) | **DELETE** /flows/{flowId} | Delete Flow |
| [**getFlowsFlowId**](FlowsApi.md#getflowsflowid) | **GET** /flows/{flowId} | Get Flow Details |
| [**getFlowsFlowIdPreview**](FlowsApi.md#getflowsflowidpreview) | **GET** /flows/{flowId}/preview | Preview Flow |
| [**listFlows**](FlowsApi.md#listflows) | **GET** /flows | List Flows |
| [**patchFlowsFlowIdAssets**](FlowsApi.md#patchflowsflowidassets) | **PATCH** /flows/{flowId}/assets | Update Flow Structure |
| [**patchFlowsFlowIdMetadata**](FlowsApi.md#patchflowsflowidmetadata) | **PATCH** /flows/{flowId}/metadata | Update Flow Metadata |



## createFlows

> CreateGroups200Response createFlows(token, wabaAccountId)

Create Flow

### Example

```ts
import {
  Configuration,
  FlowsApi,
} from '@1msg/chat-api-generated';
import type { CreateFlowsRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new FlowsApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
    // string (optional)
    wabaAccountId: {{wabaAccountId}},
  } satisfies CreateFlowsRequest;

  try {
    const data = await api.createFlows(body);
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
| **wabaAccountId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**CreateGroups200Response**](CreateGroups200Response.md)

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


## createFlowsFlowIdDeprecate

> { [key: string]: any; } createFlowsFlowIdDeprecate(flowId, token, wabaAccountId)

Deprecate Flow

### Example

```ts
import {
  Configuration,
  FlowsApi,
} from '@1msg/chat-api-generated';
import type { CreateFlowsFlowIdDeprecateRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new FlowsApi(config);

  const body = {
    // string | Flow ID
    flowId: flowId_example,
    // string | JWT token or API key for authorization
    token: token_example,
    // string (optional)
    wabaAccountId: {{wabaAccountId}},
  } satisfies CreateFlowsFlowIdDeprecateRequest;

  try {
    const data = await api.createFlowsFlowIdDeprecate(body);
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
| **flowId** | `string` | Flow ID | [Defaults to `undefined`] |
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |
| **wabaAccountId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

**{ [key: string]: any; }**

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


## createFlowsFlowIdPublish

> { [key: string]: any; } createFlowsFlowIdPublish(flowId, token, wabaAccountId)

Publish Flow

### Example

```ts
import {
  Configuration,
  FlowsApi,
} from '@1msg/chat-api-generated';
import type { CreateFlowsFlowIdPublishRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new FlowsApi(config);

  const body = {
    // string | Flow ID
    flowId: flowId_example,
    // string | JWT token or API key for authorization
    token: token_example,
    // string (optional)
    wabaAccountId: {{wabaAccountId}},
  } satisfies CreateFlowsFlowIdPublishRequest;

  try {
    const data = await api.createFlowsFlowIdPublish(body);
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
| **flowId** | `string` | Flow ID | [Defaults to `undefined`] |
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |
| **wabaAccountId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

**{ [key: string]: any; }**

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


## deleteFlowsFlowId

> DeleteFlowsFlowId200Response deleteFlowsFlowId(flowId, token, wabaAccountId)

Delete Flow

### Example

```ts
import {
  Configuration,
  FlowsApi,
} from '@1msg/chat-api-generated';
import type { DeleteFlowsFlowIdRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new FlowsApi(config);

  const body = {
    // string | Flow ID
    flowId: flowId_example,
    // string | JWT token or API key for authorization
    token: token_example,
    // string (optional)
    wabaAccountId: {{wabaAccountId}},
  } satisfies DeleteFlowsFlowIdRequest;

  try {
    const data = await api.deleteFlowsFlowId(body);
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
| **flowId** | `string` | Flow ID | [Defaults to `undefined`] |
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |
| **wabaAccountId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**DeleteFlowsFlowId200Response**](DeleteFlowsFlowId200Response.md)

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


## getFlowsFlowId

> CreateGroups200Response getFlowsFlowId(flowId, token, wabaAccountId)

Get Flow Details

### Example

```ts
import {
  Configuration,
  FlowsApi,
} from '@1msg/chat-api-generated';
import type { GetFlowsFlowIdRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new FlowsApi(config);

  const body = {
    // string | Flow ID
    flowId: flowId_example,
    // string | JWT token or API key for authorization
    token: token_example,
    // string (optional)
    wabaAccountId: {{wabaAccountId}},
  } satisfies GetFlowsFlowIdRequest;

  try {
    const data = await api.getFlowsFlowId(body);
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
| **flowId** | `string` | Flow ID | [Defaults to `undefined`] |
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |
| **wabaAccountId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**CreateGroups200Response**](CreateGroups200Response.md)

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


## getFlowsFlowIdPreview

> { [key: string]: any; } getFlowsFlowIdPreview(flowId, token, wabaAccountId)

Preview Flow

### Example

```ts
import {
  Configuration,
  FlowsApi,
} from '@1msg/chat-api-generated';
import type { GetFlowsFlowIdPreviewRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new FlowsApi(config);

  const body = {
    // string | Flow ID
    flowId: flowId_example,
    // string | JWT token or API key for authorization
    token: token_example,
    // string (optional)
    wabaAccountId: {{wabaAccountId}},
  } satisfies GetFlowsFlowIdPreviewRequest;

  try {
    const data = await api.getFlowsFlowIdPreview(body);
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
| **flowId** | `string` | Flow ID | [Defaults to `undefined`] |
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |
| **wabaAccountId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

**{ [key: string]: any; }**

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


## listFlows

> ListFlows200Response listFlows(token, wabaAccountId)

List Flows

### Example

```ts
import {
  Configuration,
  FlowsApi,
} from '@1msg/chat-api-generated';
import type { ListFlowsRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new FlowsApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
    // string (optional)
    wabaAccountId: {{wabaAccountId}},
  } satisfies ListFlowsRequest;

  try {
    const data = await api.listFlows(body);
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
| **wabaAccountId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ListFlows200Response**](ListFlows200Response.md)

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


## patchFlowsFlowIdAssets

> PatchFlowsFlowIdAssets200Response patchFlowsFlowIdAssets(flowId, token, wabaAccountId)

Update Flow Structure

### Example

```ts
import {
  Configuration,
  FlowsApi,
} from '@1msg/chat-api-generated';
import type { PatchFlowsFlowIdAssetsRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new FlowsApi(config);

  const body = {
    // string | Flow ID
    flowId: flowId_example,
    // string | JWT token or API key for authorization
    token: token_example,
    // string (optional)
    wabaAccountId: {{wabaAccountId}},
  } satisfies PatchFlowsFlowIdAssetsRequest;

  try {
    const data = await api.patchFlowsFlowIdAssets(body);
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
| **flowId** | `string` | Flow ID | [Defaults to `undefined`] |
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |
| **wabaAccountId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PatchFlowsFlowIdAssets200Response**](PatchFlowsFlowIdAssets200Response.md)

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


## patchFlowsFlowIdMetadata

> { [key: string]: any; } patchFlowsFlowIdMetadata(flowId, token, wabaAccountId)

Update Flow Metadata

### Example

```ts
import {
  Configuration,
  FlowsApi,
} from '@1msg/chat-api-generated';
import type { PatchFlowsFlowIdMetadataRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new FlowsApi(config);

  const body = {
    // string | Flow ID
    flowId: flowId_example,
    // string | JWT token or API key for authorization
    token: token_example,
    // string (optional)
    wabaAccountId: {{wabaAccountId}},
  } satisfies PatchFlowsFlowIdMetadataRequest;

  try {
    const data = await api.patchFlowsFlowIdMetadata(body);
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
| **flowId** | `string` | Flow ID | [Defaults to `undefined`] |
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |
| **wabaAccountId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

**{ [key: string]: any; }**

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

