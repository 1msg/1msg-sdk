# OneMsgSdk::ChannelApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_conversational_automation**](ChannelApi.md#get_conversational_automation) | **GET** /conversationalAutomation | Get conversational automation settings |
| [**get_status**](ChannelApi.md#get_status) | **GET** /status | Get channel status |
| [**set_conversational_automation**](ChannelApi.md#set_conversational_automation) | **POST** /conversationalAutomation | Set conversational automation settings |


## get_conversational_automation

> <ConversationalAutomation> get_conversational_automation(token)

Get conversational automation settings

Get WhatsApp conversational components for the channel (welcome message, ice-breaker prompts, and slash commands).  Proxies Meta/360dialog `GET /conversational_automation`.  When `enable_welcome_message` is true and a user opens chat for the first time, Meta delivers a webhook message with `type: request_welcome`. The inbound formatter exposes that as `type: \"request_welcome\"` and `meta.request_welcome: true` so your webhook can send a custom welcome reply. 

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

api_instance = OneMsgSdk::ChannelApi.new
token = 'token_example' # String | JWT token or API key for authorization

begin
  # Get conversational automation settings
  result = api_instance.get_conversational_automation(token)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling ChannelApi->get_conversational_automation: #{e}"
end
```

#### Using the get_conversational_automation_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ConversationalAutomation>, Integer, Hash)> get_conversational_automation_with_http_info(token)

```ruby
begin
  # Get conversational automation settings
  data, status_code, headers = api_instance.get_conversational_automation_with_http_info(token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ConversationalAutomation>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling ChannelApi->get_conversational_automation_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |

### Return type

[**ConversationalAutomation**](ConversationalAutomation.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_status

> Hash&lt;String, Object&gt; get_status(token)

Get channel status

Returns WhatsApp Business API client connection status.

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

api_instance = OneMsgSdk::ChannelApi.new
token = 'token_example' # String | JWT token or API key for authorization

begin
  # Get channel status
  result = api_instance.get_status(token)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling ChannelApi->get_status: #{e}"
end
```

#### Using the get_status_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Object&gt;, Integer, Hash)> get_status_with_http_info(token)

```ruby
begin
  # Get channel status
  data, status_code, headers = api_instance.get_status_with_http_info(token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Hash&lt;String, Object&gt;
rescue OneMsgSdk::ApiError => e
  puts "Error when calling ChannelApi->get_status_with_http_info: #{e}"
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


## set_conversational_automation

> Hash&lt;String, Object&gt; set_conversational_automation(token, conversational_automation)

Set conversational automation settings

Update WhatsApp conversational components.  Allowed body fields (others are ignored): - `enable_welcome_message` (boolean) - `prompts` (string[], max 4, each ≤ 80 chars) - `commands` (`{ command_name, command_description }[]`)  Proxies Meta/360dialog `POST /conversational_automation`. 

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

api_instance = OneMsgSdk::ChannelApi.new
token = 'token_example' # String | JWT token or API key for authorization
conversational_automation = OneMsgSdk::ConversationalAutomation.new # ConversationalAutomation | 

begin
  # Set conversational automation settings
  result = api_instance.set_conversational_automation(token, conversational_automation)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling ChannelApi->set_conversational_automation: #{e}"
end
```

#### Using the set_conversational_automation_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Object&gt;, Integer, Hash)> set_conversational_automation_with_http_info(token, conversational_automation)

```ruby
begin
  # Set conversational automation settings
  data, status_code, headers = api_instance.set_conversational_automation_with_http_info(token, conversational_automation)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Hash&lt;String, Object&gt;
rescue OneMsgSdk::ApiError => e
  puts "Error when calling ChannelApi->set_conversational_automation_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **conversational_automation** | [**ConversationalAutomation**](ConversationalAutomation.md) |  |  |

### Return type

**Hash&lt;String, Object&gt;**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

