# OneMsgSdk::TemplatesApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**add_template**](TemplatesApi.md#add_template) | **POST** /addTemplate | Create message template |
| [**list_templates**](TemplatesApi.md#list_templates) | **GET** /templates | Get templates list |
| [**remove_template**](TemplatesApi.md#remove_template) | **POST** /removeTemplate | Remove message template |
| [**send_template**](TemplatesApi.md#send_template) | **POST** /sendTemplate | Send Template Message |


## add_template

> Hash&lt;String, Object&gt; add_template(token, opts)

Create message template

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

api_instance = OneMsgSdk::TemplatesApi.new
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  add_template_request: OneMsgSdk::AddTemplateRequest.new # AddTemplateRequest | 
}

begin
  # Create message template
  result = api_instance.add_template(token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling TemplatesApi->add_template: #{e}"
end
```

#### Using the add_template_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Object&gt;, Integer, Hash)> add_template_with_http_info(token, opts)

```ruby
begin
  # Create message template
  data, status_code, headers = api_instance.add_template_with_http_info(token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Hash&lt;String, Object&gt;
rescue OneMsgSdk::ApiError => e
  puts "Error when calling TemplatesApi->add_template_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **add_template_request** | [**AddTemplateRequest**](AddTemplateRequest.md) |  | [optional] |

### Return type

**Hash&lt;String, Object&gt;**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## list_templates

> <ListTemplates200Response> list_templates(token)

Get templates list

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

api_instance = OneMsgSdk::TemplatesApi.new
token = 'token_example' # String | JWT token or API key for authorization

begin
  # Get templates list
  result = api_instance.list_templates(token)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling TemplatesApi->list_templates: #{e}"
end
```

#### Using the list_templates_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListTemplates200Response>, Integer, Hash)> list_templates_with_http_info(token)

```ruby
begin
  # Get templates list
  data, status_code, headers = api_instance.list_templates_with_http_info(token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListTemplates200Response>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling TemplatesApi->list_templates_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |

### Return type

[**ListTemplates200Response**](ListTemplates200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## remove_template

> Hash&lt;String, Object&gt; remove_template(token, opts)

Remove message template

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

api_instance = OneMsgSdk::TemplatesApi.new
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  request_body: { key: 3.56} # Hash<String, Object> | 
}

begin
  # Remove message template
  result = api_instance.remove_template(token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling TemplatesApi->remove_template: #{e}"
end
```

#### Using the remove_template_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Object&gt;, Integer, Hash)> remove_template_with_http_info(token, opts)

```ruby
begin
  # Remove message template
  data, status_code, headers = api_instance.remove_template_with_http_info(token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Hash&lt;String, Object&gt;
rescue OneMsgSdk::ApiError => e
  puts "Error when calling TemplatesApi->remove_template_with_http_info: #{e}"
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


## send_template

> Hash&lt;String, Object&gt; send_template(token, opts)

Send Template Message

Send a WhatsApp template message (works outside the 24-hour session window).  Supported `params` button `sub_type` values include: `url`, `quick_reply`, `copy_code` / `coupon_code`, `catalog`, `flow`, `limited_time_offer`, and **`order_details`** (WhatsApp Payments **India only** — requires an approved Utility template with an ORDER_DETAILS button).  For India order/invoice payments outside 24h, include a button component:  ```json {   \"type\": \"button\",   \"sub_type\": \"order_details\",   \"index\": 0,   \"parameters\": [{     \"type\": \"action\",     \"action\": { \"order_details\": { \"reference_id\": \"...\", \"currency\": \"INR\", \"order\": {} } }   }] } ```  Convenience wrapper with structured fields: `POST /sendOrderDetails`. 

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

api_instance = OneMsgSdk::TemplatesApi.new
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  send_template_request: OneMsgSdk::SendTemplateRequest.new # SendTemplateRequest | 
}

begin
  # Send Template Message
  result = api_instance.send_template(token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling TemplatesApi->send_template: #{e}"
end
```

#### Using the send_template_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Object&gt;, Integer, Hash)> send_template_with_http_info(token, opts)

```ruby
begin
  # Send Template Message
  data, status_code, headers = api_instance.send_template_with_http_info(token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Hash&lt;String, Object&gt;
rescue OneMsgSdk::ApiError => e
  puts "Error when calling TemplatesApi->send_template_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **send_template_request** | [**SendTemplateRequest**](SendTemplateRequest.md) |  | [optional] |

### Return type

**Hash&lt;String, Object&gt;**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

