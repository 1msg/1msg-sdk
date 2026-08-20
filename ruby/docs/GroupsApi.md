# OneMsgSdk::GroupsApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_groups**](GroupsApi.md#create_groups) | **POST** /groups | Create Group |
| [**create_groups_group_id**](GroupsApi.md#create_groups_group_id) | **POST** /groups/{groupId} | Update Group Info |
| [**create_groups_group_id_invitelink**](GroupsApi.md#create_groups_group_id_invitelink) | **POST** /groups/{groupId}/inviteLink | Reset Invite Link |
| [**delete_groups_group_id**](GroupsApi.md#delete_groups_group_id) | **DELETE** /groups/{groupId} | Delete Group |
| [**get_groups_group_id**](GroupsApi.md#get_groups_group_id) | **GET** /groups/{groupId} | Get Group Info |
| [**get_groups_group_id_invitelink**](GroupsApi.md#get_groups_group_id_invitelink) | **GET** /groups/{groupId}/inviteLink | Get Invite Link |
| [**list_groups**](GroupsApi.md#list_groups) | **GET** /groups | Get Groups List |


## create_groups

> <CreateGroups200Response> create_groups(token)

Create Group

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

api_instance = OneMsgSdk::GroupsApi.new
token = 'token_example' # String | JWT token or API key for authorization

begin
  # Create Group
  result = api_instance.create_groups(token)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling GroupsApi->create_groups: #{e}"
end
```

#### Using the create_groups_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateGroups200Response>, Integer, Hash)> create_groups_with_http_info(token)

```ruby
begin
  # Create Group
  data, status_code, headers = api_instance.create_groups_with_http_info(token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateGroups200Response>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling GroupsApi->create_groups_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |

### Return type

[**CreateGroups200Response**](CreateGroups200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## create_groups_group_id

> Hash&lt;String, Object&gt; create_groups_group_id(group_id, token)

Update Group Info

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

api_instance = OneMsgSdk::GroupsApi.new
group_id = '{{createdGroupId}}' # String | 
token = 'token_example' # String | JWT token or API key for authorization

begin
  # Update Group Info
  result = api_instance.create_groups_group_id(group_id, token)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling GroupsApi->create_groups_group_id: #{e}"
end
```

#### Using the create_groups_group_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Object&gt;, Integer, Hash)> create_groups_group_id_with_http_info(group_id, token)

```ruby
begin
  # Update Group Info
  data, status_code, headers = api_instance.create_groups_group_id_with_http_info(group_id, token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Hash&lt;String, Object&gt;
rescue OneMsgSdk::ApiError => e
  puts "Error when calling GroupsApi->create_groups_group_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **group_id** | **String** |  |  |
| **token** | **String** | JWT token or API key for authorization |  |

### Return type

**Hash&lt;String, Object&gt;**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## create_groups_group_id_invitelink

> Hash&lt;String, Object&gt; create_groups_group_id_invitelink(group_id, token)

Reset Invite Link

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

api_instance = OneMsgSdk::GroupsApi.new
group_id = '{{createdGroupId}}' # String | 
token = 'token_example' # String | JWT token or API key for authorization

begin
  # Reset Invite Link
  result = api_instance.create_groups_group_id_invitelink(group_id, token)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling GroupsApi->create_groups_group_id_invitelink: #{e}"
end
```

#### Using the create_groups_group_id_invitelink_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Object&gt;, Integer, Hash)> create_groups_group_id_invitelink_with_http_info(group_id, token)

```ruby
begin
  # Reset Invite Link
  data, status_code, headers = api_instance.create_groups_group_id_invitelink_with_http_info(group_id, token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Hash&lt;String, Object&gt;
rescue OneMsgSdk::ApiError => e
  puts "Error when calling GroupsApi->create_groups_group_id_invitelink_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **group_id** | **String** |  |  |
| **token** | **String** | JWT token or API key for authorization |  |

### Return type

**Hash&lt;String, Object&gt;**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## delete_groups_group_id

> <DeleteGroupsGroupId200Response> delete_groups_group_id(group_id, token)

Delete Group

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

api_instance = OneMsgSdk::GroupsApi.new
group_id = '{{createdGroupId}}' # String | 
token = 'token_example' # String | JWT token or API key for authorization

begin
  # Delete Group
  result = api_instance.delete_groups_group_id(group_id, token)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling GroupsApi->delete_groups_group_id: #{e}"
end
```

#### Using the delete_groups_group_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<DeleteGroupsGroupId200Response>, Integer, Hash)> delete_groups_group_id_with_http_info(group_id, token)

```ruby
begin
  # Delete Group
  data, status_code, headers = api_instance.delete_groups_group_id_with_http_info(group_id, token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <DeleteGroupsGroupId200Response>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling GroupsApi->delete_groups_group_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **group_id** | **String** |  |  |
| **token** | **String** | JWT token or API key for authorization |  |

### Return type

[**DeleteGroupsGroupId200Response**](DeleteGroupsGroupId200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_groups_group_id

> Hash&lt;String, Object&gt; get_groups_group_id(group_id, token)

Get Group Info

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

api_instance = OneMsgSdk::GroupsApi.new
group_id = '{{createdGroupId}}' # String | 
token = 'token_example' # String | JWT token or API key for authorization

begin
  # Get Group Info
  result = api_instance.get_groups_group_id(group_id, token)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling GroupsApi->get_groups_group_id: #{e}"
end
```

#### Using the get_groups_group_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Object&gt;, Integer, Hash)> get_groups_group_id_with_http_info(group_id, token)

```ruby
begin
  # Get Group Info
  data, status_code, headers = api_instance.get_groups_group_id_with_http_info(group_id, token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Hash&lt;String, Object&gt;
rescue OneMsgSdk::ApiError => e
  puts "Error when calling GroupsApi->get_groups_group_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **group_id** | **String** |  |  |
| **token** | **String** | JWT token or API key for authorization |  |

### Return type

**Hash&lt;String, Object&gt;**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_groups_group_id_invitelink

> Hash&lt;String, Object&gt; get_groups_group_id_invitelink(group_id, token)

Get Invite Link

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

api_instance = OneMsgSdk::GroupsApi.new
group_id = '{{createdGroupId}}' # String | 
token = 'token_example' # String | JWT token or API key for authorization

begin
  # Get Invite Link
  result = api_instance.get_groups_group_id_invitelink(group_id, token)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling GroupsApi->get_groups_group_id_invitelink: #{e}"
end
```

#### Using the get_groups_group_id_invitelink_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Object&gt;, Integer, Hash)> get_groups_group_id_invitelink_with_http_info(group_id, token)

```ruby
begin
  # Get Invite Link
  data, status_code, headers = api_instance.get_groups_group_id_invitelink_with_http_info(group_id, token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Hash&lt;String, Object&gt;
rescue OneMsgSdk::ApiError => e
  puts "Error when calling GroupsApi->get_groups_group_id_invitelink_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **group_id** | **String** |  |  |
| **token** | **String** | JWT token or API key for authorization |  |

### Return type

**Hash&lt;String, Object&gt;**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## list_groups

> Hash&lt;String, Object&gt; list_groups(token)

Get Groups List

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

api_instance = OneMsgSdk::GroupsApi.new
token = 'token_example' # String | JWT token or API key for authorization

begin
  # Get Groups List
  result = api_instance.list_groups(token)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling GroupsApi->list_groups: #{e}"
end
```

#### Using the list_groups_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Object&gt;, Integer, Hash)> list_groups_with_http_info(token)

```ruby
begin
  # Get Groups List
  data, status_code, headers = api_instance.list_groups_with_http_info(token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Hash&lt;String, Object&gt;
rescue OneMsgSdk::ApiError => e
  puts "Error when calling GroupsApi->list_groups_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |

### Return type

**Hash&lt;String, Object&gt;**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

