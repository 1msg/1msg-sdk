# \UsersApi

All URIs are relative to *https://api.1msg.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**block_user**](UsersApi.md#block_user) | **POST** /blockUser | Block WhatsApp user
[**list_blocked_users**](UsersApi.md#list_blocked_users) | **GET** /blockedUsers | List blocked WhatsApp users
[**unblock_user**](UsersApi.md#unblock_user) | **POST** /unblockUser | Unblock WhatsApp user



## block_user

> models::SuccessResponse block_user(token, block_user_request)
Block WhatsApp user

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**block_user_request** | [**BlockUserRequest**](BlockUserRequest.md) |  | [required] |

### Return type

[**models::SuccessResponse**](SuccessResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_blocked_users

> models::ListBlockedUsers200Response list_blocked_users(token)
List blocked WhatsApp users

Returns users currently blocked on this WhatsApp channel (WABA `GET /block_users`). Same channel token auth as `blockUser` / `unblockUser`. 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |

### Return type

[**models::ListBlockedUsers200Response**](listBlockedUsers_200_response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## unblock_user

> models::SuccessResponse unblock_user(token, block_user_request)
Unblock WhatsApp user

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**block_user_request** | [**BlockUserRequest**](BlockUserRequest.md) |  | [required] |

### Return type

[**models::SuccessResponse**](SuccessResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

