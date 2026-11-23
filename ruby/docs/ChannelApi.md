# OneMsgSdk::ChannelApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_settings**](ChannelApi.md#create_settings) | **POST** /settings | Update channel settings |
| [**get_conversational_automation**](ChannelApi.md#get_conversational_automation) | **GET** /conversationalAutomation | Get conversational automation settings |
| [**get_status**](ChannelApi.md#get_status) | **GET** /status | Get channel status |
| [**list_settings**](ChannelApi.md#list_settings) | **GET** /settings | Get channel settings |
| [**set_conversational_automation**](ChannelApi.md#set_conversational_automation) | **POST** /conversationalAutomation | Set conversational automation settings |


## create_settings

> Hash&lt;String, Object&gt; create_settings(token, create_settings_request)

Update channel settings

Update channel settings. Only send fields you want to change.  `webhookUrl` **replaces** the stored list (one URL string, or up to 5 URLs as an array). Passing an empty value clears webhooks. Repeating the same URL(s) also clears a sticky auto-disable. With several URLs, send the complete array to re-enable one of them — omitting a URL removes it from the channel. 

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
create_settings_request = OneMsgSdk::CreateSettingsRequest.new # CreateSettingsRequest | 

begin
  # Update channel settings
  result = api_instance.create_settings(token, create_settings_request)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling ChannelApi->create_settings: #{e}"
end
```

#### Using the create_settings_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Object&gt;, Integer, Hash)> create_settings_with_http_info(token, create_settings_request)

```ruby
begin
  # Update channel settings
  data, status_code, headers = api_instance.create_settings_with_http_info(token, create_settings_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Hash&lt;String, Object&gt;
rescue OneMsgSdk::ApiError => e
  puts "Error when calling ChannelApi->create_settings_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **create_settings_request** | [**CreateSettingsRequest**](CreateSettingsRequest.md) |  |  |

### Return type

**Hash&lt;String, Object&gt;**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


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

> <GetStatus200Response> get_status(token)

Get channel status

Return WhatsApp Cloud API connection status for this channel (`connected` when the number can send). May include `accountStatus`, messaging limit, and MM Lite availability.  Optional `health_status_warning` appears only when Meta Graph health could not be loaded and a soft `connected` response is returned. Omitted on the normal path and when health details are not applicable for the channel — never an internal provider/transport name. 

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

> <Array(<GetStatus200Response>, Integer, Hash)> get_status_with_http_info(token)

```ruby
begin
  # Get channel status
  data, status_code, headers = api_instance.get_status_with_http_info(token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetStatus200Response>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling ChannelApi->get_status_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |

### Return type

[**GetStatus200Response**](GetStatus200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## list_settings

> <ListSettings200Response> list_settings(token)

Get channel settings

Return channel settings: webhook URL(s), delivery flags, and analytics toggles.  Auto-disable / circuit state matches `GET /webhook`. **Prefer `webhookStatuses`** (one row per configured URL). The breaker is per URL, not per channel.  Channel-level `haveDisabledWebhooks` is `true` when **at least one** URL in `webhookUrl` is sticky auto-disabled — not \"the channel is dead\". Live URLs still receive events. Top-level `circuitState` / `reason` / `fails` / `trips` are a compatibility summary of one URL (first sticky-disabled, else first configured).  This is the same `GET /settings` endpoint as the REST API (previously missing from MCP). 

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
  # Get channel settings
  result = api_instance.list_settings(token)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling ChannelApi->list_settings: #{e}"
end
```

#### Using the list_settings_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListSettings200Response>, Integer, Hash)> list_settings_with_http_info(token)

```ruby
begin
  # Get channel settings
  data, status_code, headers = api_instance.list_settings_with_http_info(token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListSettings200Response>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling ChannelApi->list_settings_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |

### Return type

[**ListSettings200Response**](ListSettings200Response.md)

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

