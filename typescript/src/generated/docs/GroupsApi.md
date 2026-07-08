# GroupsApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createGroups**](GroupsApi.md#creategroups) | **POST** /groups | Create Group |
| [**createGroupsGroupId**](GroupsApi.md#creategroupsgroupid) | **POST** /groups/{groupId} | Update Group Info |
| [**createGroupsGroupIdInvitelink**](GroupsApi.md#creategroupsgroupidinvitelink) | **POST** /groups/{groupId}/inviteLink | Reset Invite Link |
| [**deleteGroupsGroupId**](GroupsApi.md#deletegroupsgroupid) | **DELETE** /groups/{groupId} | Delete Group |
| [**getGroupsGroupId**](GroupsApi.md#getgroupsgroupid) | **GET** /groups/{groupId} | Get Group Info |
| [**getGroupsGroupIdInvitelink**](GroupsApi.md#getgroupsgroupidinvitelink) | **GET** /groups/{groupId}/inviteLink | Get Invite Link |
| [**listGroups**](GroupsApi.md#listgroups) | **GET** /groups | Get Groups List |



## createGroups

> CreateGroups200Response createGroups(token)

Create Group

### Example

```ts
import {
  Configuration,
  GroupsApi,
} from '@1msg/chat-api-generated';
import type { CreateGroupsRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new GroupsApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
  } satisfies CreateGroupsRequest;

  try {
    const data = await api.createGroups(body);
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


## createGroupsGroupId

> { [key: string]: any; } createGroupsGroupId(groupId, token)

Update Group Info

### Example

```ts
import {
  Configuration,
  GroupsApi,
} from '@1msg/chat-api-generated';
import type { CreateGroupsGroupIdRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new GroupsApi(config);

  const body = {
    // string
    groupId: {{createdGroupId}},
    // string | JWT token or API key for authorization
    token: token_example,
  } satisfies CreateGroupsGroupIdRequest;

  try {
    const data = await api.createGroupsGroupId(body);
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
| **groupId** | `string` |  | [Defaults to `undefined`] |
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |

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


## createGroupsGroupIdInvitelink

> { [key: string]: any; } createGroupsGroupIdInvitelink(groupId, token)

Reset Invite Link

### Example

```ts
import {
  Configuration,
  GroupsApi,
} from '@1msg/chat-api-generated';
import type { CreateGroupsGroupIdInvitelinkRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new GroupsApi(config);

  const body = {
    // string
    groupId: {{createdGroupId}},
    // string | JWT token or API key for authorization
    token: token_example,
  } satisfies CreateGroupsGroupIdInvitelinkRequest;

  try {
    const data = await api.createGroupsGroupIdInvitelink(body);
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
| **groupId** | `string` |  | [Defaults to `undefined`] |
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |

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


## deleteGroupsGroupId

> DeleteGroupsGroupId200Response deleteGroupsGroupId(groupId, token)

Delete Group

### Example

```ts
import {
  Configuration,
  GroupsApi,
} from '@1msg/chat-api-generated';
import type { DeleteGroupsGroupIdRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new GroupsApi(config);

  const body = {
    // string
    groupId: {{createdGroupId}},
    // string | JWT token or API key for authorization
    token: token_example,
  } satisfies DeleteGroupsGroupIdRequest;

  try {
    const data = await api.deleteGroupsGroupId(body);
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
| **groupId** | `string` |  | [Defaults to `undefined`] |
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |

### Return type

[**DeleteGroupsGroupId200Response**](DeleteGroupsGroupId200Response.md)

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


## getGroupsGroupId

> { [key: string]: any; } getGroupsGroupId(groupId, token)

Get Group Info

### Example

```ts
import {
  Configuration,
  GroupsApi,
} from '@1msg/chat-api-generated';
import type { GetGroupsGroupIdRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new GroupsApi(config);

  const body = {
    // string
    groupId: {{createdGroupId}},
    // string | JWT token or API key for authorization
    token: token_example,
  } satisfies GetGroupsGroupIdRequest;

  try {
    const data = await api.getGroupsGroupId(body);
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
| **groupId** | `string` |  | [Defaults to `undefined`] |
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |

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


## getGroupsGroupIdInvitelink

> { [key: string]: any; } getGroupsGroupIdInvitelink(groupId, token)

Get Invite Link

### Example

```ts
import {
  Configuration,
  GroupsApi,
} from '@1msg/chat-api-generated';
import type { GetGroupsGroupIdInvitelinkRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new GroupsApi(config);

  const body = {
    // string
    groupId: {{createdGroupId}},
    // string | JWT token or API key for authorization
    token: token_example,
  } satisfies GetGroupsGroupIdInvitelinkRequest;

  try {
    const data = await api.getGroupsGroupIdInvitelink(body);
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
| **groupId** | `string` |  | [Defaults to `undefined`] |
| **token** | `string` | JWT token or API key for authorization | [Defaults to `undefined`] |

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


## listGroups

> { [key: string]: any; } listGroups(token)

Get Groups List

### Example

```ts
import {
  Configuration,
  GroupsApi,
} from '@1msg/chat-api-generated';
import type { ListGroupsRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new GroupsApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
  } satisfies ListGroupsRequest;

  try {
    const data = await api.listGroups(body);
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

