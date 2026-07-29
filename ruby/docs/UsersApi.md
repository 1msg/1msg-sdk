# OneMsgSdk::UsersApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**block_user**](UsersApi.md#block_user) | **POST** /blockUser | Block WhatsApp user |
| [**list_blocked_users**](UsersApi.md#list_blocked_users) | **GET** /blockedUsers | List blocked WhatsApp users |
| [**unblock_user**](UsersApi.md#unblock_user) | **POST** /unblockUser | Unblock WhatsApp user |


## block_user

> <SuccessResponse> block_user(token, block_user_request)

Block WhatsApp user

### Examples

```ruby
require 'time'
require 'one_msg_sdk'
# setup authorization
OneMsgSdk.configure do |config|
  # Configure API key authorization: tokenAuth
  config.api_key['token'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['token'] = 'Bearer'
end

api_instance = OneMsgSdk::UsersApi.new
token = 'token_example' # String | JWT token or API key for authorization
block_user_request = OneMsgSdk::BlockUserRequest.new({phone: 37}) # BlockUserRequest | 

begin
  # Block WhatsApp user
  result = api_instance.block_user(token, block_user_request)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling UsersApi->block_user: #{e}"
end
```

#### Using the block_user_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SuccessResponse>, Integer, Hash)> block_user_with_http_info(token, block_user_request)

```ruby
begin
  # Block WhatsApp user
  data, status_code, headers = api_instance.block_user_with_http_info(token, block_user_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SuccessResponse>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling UsersApi->block_user_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **block_user_request** | [**BlockUserRequest**](BlockUserRequest.md) |  |  |

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## list_blocked_users

> <ListBlockedUsers200Response> list_blocked_users(token)

List blocked WhatsApp users

Returns users currently blocked on this WhatsApp channel (WABA `GET /block_users`). Same channel token auth as `blockUser` / `unblockUser`. 

### Examples

```ruby
require 'time'
require 'one_msg_sdk'
# setup authorization
OneMsgSdk.configure do |config|
  # Configure API key authorization: tokenAuth
  config.api_key['token'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['token'] = 'Bearer'
end

api_instance = OneMsgSdk::UsersApi.new
token = 'token_example' # String | JWT token or API key for authorization

begin
  # List blocked WhatsApp users
  result = api_instance.list_blocked_users(token)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling UsersApi->list_blocked_users: #{e}"
end
```

#### Using the list_blocked_users_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListBlockedUsers200Response>, Integer, Hash)> list_blocked_users_with_http_info(token)

```ruby
begin
  # List blocked WhatsApp users
  data, status_code, headers = api_instance.list_blocked_users_with_http_info(token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListBlockedUsers200Response>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling UsersApi->list_blocked_users_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |

### Return type

[**ListBlockedUsers200Response**](ListBlockedUsers200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unblock_user

> <SuccessResponse> unblock_user(token, block_user_request)

Unblock WhatsApp user

### Examples

```ruby
require 'time'
require 'one_msg_sdk'
# setup authorization
OneMsgSdk.configure do |config|
  # Configure API key authorization: tokenAuth
  config.api_key['token'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['token'] = 'Bearer'
end

api_instance = OneMsgSdk::UsersApi.new
token = 'token_example' # String | JWT token or API key for authorization
block_user_request = OneMsgSdk::BlockUserRequest.new({phone: 37}) # BlockUserRequest | 

begin
  # Unblock WhatsApp user
  result = api_instance.unblock_user(token, block_user_request)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling UsersApi->unblock_user: #{e}"
end
```

#### Using the unblock_user_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SuccessResponse>, Integer, Hash)> unblock_user_with_http_info(token, block_user_request)

```ruby
begin
  # Unblock WhatsApp user
  data, status_code, headers = api_instance.unblock_user_with_http_info(token, block_user_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SuccessResponse>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling UsersApi->unblock_user_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **block_user_request** | [**BlockUserRequest**](BlockUserRequest.md) |  |  |

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

