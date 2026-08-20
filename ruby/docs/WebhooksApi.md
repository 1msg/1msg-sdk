# OneMsgSdk::WebhooksApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_webhook**](WebhooksApi.md#get_webhook) | **GET** /webhook | Get webhook URL |
| [**set_webhook**](WebhooksApi.md#set_webhook) | **POST** /webhook | Set webhook URL |


## get_webhook

> <GetWebhook200Response> get_webhook(token)

Get webhook URL

Returns the configured client webhook URL for this channel.

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

api_instance = OneMsgSdk::WebhooksApi.new
token = 'token_example' # String | JWT token or API key for authorization

begin
  # Get webhook URL
  result = api_instance.get_webhook(token)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling WebhooksApi->get_webhook: #{e}"
end
```

#### Using the get_webhook_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetWebhook200Response>, Integer, Hash)> get_webhook_with_http_info(token)

```ruby
begin
  # Get webhook URL
  data, status_code, headers = api_instance.get_webhook_with_http_info(token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetWebhook200Response>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling WebhooksApi->get_webhook_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |

### Return type

[**GetWebhook200Response**](GetWebhook200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## set_webhook

> Hash&lt;String, Object&gt; set_webhook(token, opts)

Set webhook URL

Configure the client webhook URL for inbound events.

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

api_instance = OneMsgSdk::WebhooksApi.new
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  get_webhook200_response: OneMsgSdk::GetWebhook200Response.new # GetWebhook200Response | 
}

begin
  # Set webhook URL
  result = api_instance.set_webhook(token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling WebhooksApi->set_webhook: #{e}"
end
```

#### Using the set_webhook_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Object&gt;, Integer, Hash)> set_webhook_with_http_info(token, opts)

```ruby
begin
  # Set webhook URL
  data, status_code, headers = api_instance.set_webhook_with_http_info(token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Hash&lt;String, Object&gt;
rescue OneMsgSdk::ApiError => e
  puts "Error when calling WebhooksApi->set_webhook_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **get_webhook200_response** | [**GetWebhook200Response**](GetWebhook200Response.md) |  | [optional] |

### Return type

**Hash&lt;String, Object&gt;**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

