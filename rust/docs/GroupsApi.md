# \GroupsApi

All URIs are relative to *https://api.1msg.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_groups**](GroupsApi.md#create_groups) | **POST** /groups | Create Group
[**create_groups_group_id**](GroupsApi.md#create_groups_group_id) | **POST** /groups/{groupId} | Update Group Info
[**create_groups_group_id_invitelink**](GroupsApi.md#create_groups_group_id_invitelink) | **POST** /groups/{groupId}/inviteLink | Reset Invite Link
[**delete_groups_group_id**](GroupsApi.md#delete_groups_group_id) | **DELETE** /groups/{groupId} | Delete Group
[**get_groups_group_id**](GroupsApi.md#get_groups_group_id) | **GET** /groups/{groupId} | Get Group Info
[**get_groups_group_id_invitelink**](GroupsApi.md#get_groups_group_id_invitelink) | **GET** /groups/{groupId}/inviteLink | Get Invite Link
[**list_groups**](GroupsApi.md#list_groups) | **GET** /groups | Get Groups List



## create_groups

> models::CreateGroups200Response create_groups(token, create_groups_request)
Create Group

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**create_groups_request** | [**CreateGroupsRequest**](CreateGroupsRequest.md) |  | [required] |

### Return type

[**models::CreateGroups200Response**](createGroups_200_response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_groups_group_id

> std::collections::HashMap<String, serde_json::Value> create_groups_group_id(group_id, token, create_groups_group_id_request)
Update Group Info

Update group subject, description, and/or profile picture. Path `groupId` is the WABA group id (without `@g.us`). 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**group_id** | **String** |  | [required] |
**token** | **String** | JWT token or API key for authorization | [required] |
**create_groups_group_id_request** | [**CreateGroupsGroupIdRequest**](CreateGroupsGroupIdRequest.md) |  | [required] |

### Return type

[**std::collections::HashMap<String, serde_json::Value>**](serde_json::Value.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_groups_group_id_invitelink

> std::collections::HashMap<String, serde_json::Value> create_groups_group_id_invitelink(group_id, token)
Reset Invite Link

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**group_id** | **String** |  | [required] |
**token** | **String** | JWT token or API key for authorization | [required] |

### Return type

[**std::collections::HashMap<String, serde_json::Value>**](serde_json::Value.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_groups_group_id

> models::DeleteGroupsGroupId200Response delete_groups_group_id(group_id, token)
Delete Group

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**group_id** | **String** |  | [required] |
**token** | **String** | JWT token or API key for authorization | [required] |

### Return type

[**models::DeleteGroupsGroupId200Response**](deleteGroupsGroupId_200_response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_groups_group_id

> std::collections::HashMap<String, serde_json::Value> get_groups_group_id(group_id, token, fields)
Get Group Info

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**group_id** | **String** |  | [required] |
**token** | **String** | JWT token or API key for authorization | [required] |
**fields** | Option<**String**> | Comma-separated group fields to return |  |

### Return type

[**std::collections::HashMap<String, serde_json::Value>**](serde_json::Value.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_groups_group_id_invitelink

> std::collections::HashMap<String, serde_json::Value> get_groups_group_id_invitelink(group_id, token)
Get Invite Link

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**group_id** | **String** |  | [required] |
**token** | **String** | JWT token or API key for authorization | [required] |

### Return type

[**std::collections::HashMap<String, serde_json::Value>**](serde_json::Value.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_groups

> std::collections::HashMap<String, serde_json::Value> list_groups(token, limit, before, after)
Get Groups List

List WhatsApp groups for this channel. Paginate with `limit`, `before`, and `after`.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**limit** | Option<**i32**> | Max groups to return |  |
**before** | Option<**String**> | Cursor for the previous page |  |
**after** | Option<**String**> | Cursor for the next page |  |

### Return type

[**std::collections::HashMap<String, serde_json::Value>**](serde_json::Value.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

