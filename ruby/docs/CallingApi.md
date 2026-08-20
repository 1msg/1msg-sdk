# OneMsgSdk::CallingApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_calling_settings**](CallingApi.md#get_calling_settings) | **GET** /callingSettings | Get calling settings |
| [**initiate_call**](CallingApi.md#initiate_call) | **POST** /initiateCall | Initiate WhatsApp call |
| [**update_calling_settings**](CallingApi.md#update_calling_settings) | **POST** /callingSettings | Update calling settings |


## get_calling_settings

> Hash&lt;String, Object&gt; get_calling_settings(token)

Get calling settings

WhatsApp Calling API settings (beta). Requires Meta Calling enablement on the WABA. Not production-complete — paths and webhook field names may change. Trial/subscription-limited channels are blocked. 

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

api_instance = OneMsgSdk::CallingApi.new
token = 'token_example' # String | JWT token or API key for authorization

begin
  # Get calling settings
  result = api_instance.get_calling_settings(token)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling CallingApi->get_calling_settings: #{e}"
end
```

#### Using the get_calling_settings_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Object&gt;, Integer, Hash)> get_calling_settings_with_http_info(token)

```ruby
begin
  # Get calling settings
  data, status_code, headers = api_instance.get_calling_settings_with_http_info(token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Hash&lt;String, Object&gt;
rescue OneMsgSdk::ApiError => e
  puts "Error when calling CallingApi->get_calling_settings_with_http_info: #{e}"
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


## initiate_call

> Hash&lt;String, Object&gt; initiate_call(token, opts)

Initiate WhatsApp call

Outbound Calling API (beta). Requires Meta Calling enablement and product consent. Not production-complete — verify on stage before relying on this in production. Trial/subscription-limited channels are blocked. 

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

api_instance = OneMsgSdk::CallingApi.new
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  request_body: { key: 3.56} # Hash<String, Object> | 
}

begin
  # Initiate WhatsApp call
  result = api_instance.initiate_call(token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling CallingApi->initiate_call: #{e}"
end
```

#### Using the initiate_call_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Object&gt;, Integer, Hash)> initiate_call_with_http_info(token, opts)

```ruby
begin
  # Initiate WhatsApp call
  data, status_code, headers = api_instance.initiate_call_with_http_info(token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Hash&lt;String, Object&gt;
rescue OneMsgSdk::ApiError => e
  puts "Error when calling CallingApi->initiate_call_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **request_body** | [**Hash&lt;String, Object&gt;**](Object.md) |  | [optional] |

### Return type

**Hash&lt;String, Object&gt;**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## update_calling_settings

> Hash&lt;String, Object&gt; update_calling_settings(token, opts)

Update calling settings

Update WhatsApp Calling API settings (beta). Requires Meta Calling enablement. Trial/subscription-limited channels are blocked. 

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

api_instance = OneMsgSdk::CallingApi.new
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  request_body: { key: 3.56} # Hash<String, Object> | 
}

begin
  # Update calling settings
  result = api_instance.update_calling_settings(token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling CallingApi->update_calling_settings: #{e}"
end
```

#### Using the update_calling_settings_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Object&gt;, Integer, Hash)> update_calling_settings_with_http_info(token, opts)

```ruby
begin
  # Update calling settings
  data, status_code, headers = api_instance.update_calling_settings_with_http_info(token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Hash&lt;String, Object&gt;
rescue OneMsgSdk::ApiError => e
  puts "Error when calling CallingApi->update_calling_settings_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **request_body** | [**Hash&lt;String, Object&gt;**](Object.md) |  | [optional] |

### Return type

**Hash&lt;String, Object&gt;**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

