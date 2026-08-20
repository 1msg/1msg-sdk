# OneMsgSdk::ProfileApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_me**](ProfileApi.md#get_me) | **GET** /me | Get Profile Info |
| [**update_me**](ProfileApi.md#update_me) | **POST** /me | Update profile info |


## get_me

> <ProfileInfo> get_me(token)

Get Profile Info

Get WhatsApp Business Account profile information

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

api_instance = OneMsgSdk::ProfileApi.new
token = 'token_example' # String | JWT token or API key for authorization

begin
  # Get Profile Info
  result = api_instance.get_me(token)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling ProfileApi->get_me: #{e}"
end
```

#### Using the get_me_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ProfileInfo>, Integer, Hash)> get_me_with_http_info(token)

```ruby
begin
  # Get Profile Info
  data, status_code, headers = api_instance.get_me_with_http_info(token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ProfileInfo>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling ProfileApi->get_me_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |

### Return type

[**ProfileInfo**](ProfileInfo.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## update_me

> Hash&lt;String, Object&gt; update_me(token, opts)

Update profile info

Update WhatsApp Business Account profile fields. At least one of about, description, email, photo, address, vertical, websites is required. Blocked when the channel subscription limit is exceeded. 

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

api_instance = OneMsgSdk::ProfileApi.new
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  update_me_request: OneMsgSdk::UpdateMeRequest.new # UpdateMeRequest | 
}

begin
  # Update profile info
  result = api_instance.update_me(token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling ProfileApi->update_me: #{e}"
end
```

#### Using the update_me_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Object&gt;, Integer, Hash)> update_me_with_http_info(token, opts)

```ruby
begin
  # Update profile info
  data, status_code, headers = api_instance.update_me_with_http_info(token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Hash&lt;String, Object&gt;
rescue OneMsgSdk::ApiError => e
  puts "Error when calling ProfileApi->update_me_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **update_me_request** | [**UpdateMeRequest**](UpdateMeRequest.md) |  | [optional] |

### Return type

**Hash&lt;String, Object&gt;**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

