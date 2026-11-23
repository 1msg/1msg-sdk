# OneMsgSdk::TemplatesApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**add_template**](TemplatesApi.md#add_template) | **POST** /addTemplate | Create message template |
| [**list_templates**](TemplatesApi.md#list_templates) | **GET** /templates | Get templates list |
| [**remove_template**](TemplatesApi.md#remove_template) | **POST** /removeTemplate | Remove message template |
| [**send_template**](TemplatesApi.md#send_template) | **POST** /sendTemplate | Send Template Message |


## add_template

> <AddTemplate200Response> add_template(token, opts)

Create message template

Create a WABA message template (`name`, `category`, `language`, `components`). After create, Meta reviews the template; list it with `GET /templates`.  Authentication OTP templates (`category: AUTHENTICATION`, copy-code / OTP button) can later be sent only to a phone number. Meta does not accept a BSUID recipient for them (error 131062). If the recipient is known only by BSUID — for example they use a username and their phone number is not in your Business Portfolio — that template cannot be sent.  To ask a BSUID user for their phone number, add a `REQUEST_CONTACT_INFO` button on a `UTILITY` or `MARKETING` template. Do not send `text` on that button — WhatsApp sets the label (and rejects a custom one). The button also has no send-time parameters: `POST /sendTemplate` does not take a button component for it. Inside an open 24-hour window, call `POST /sendContactInfo` instead of a template.  When the user shares the number, the inbound webhook is a `contacts` message with `origin: contact_request`. The phone is stored on that BSUID automatically. See `POST /sendContactInfo`.  ```json {   \"name\": \"request_phone\",   \"category\": \"UTILITY\",   \"language\": \"en_US\",   \"components\": [     {       \"type\": \"BODY\",       \"text\": \"Please share your phone number so we can continue.\"     },     {       \"type\": \"BUTTONS\",       \"buttons\": [{ \"type\": \"REQUEST_CONTACT_INFO\" }]     }   ] } ``` 

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

> <Array(<AddTemplate200Response>, Integer, Hash)> add_template_with_http_info(token, opts)

```ruby
begin
  # Create message template
  data, status_code, headers = api_instance.add_template_with_http_info(token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <AddTemplate200Response>
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

[**AddTemplate200Response**](AddTemplate200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## list_templates

> <ListTemplates200Response> list_templates(token, opts)

Get templates list

List message templates. Paginate with `limit` / `offset`; sort by `id`, `name`, or `status`.

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
  limit: 56, # Integer | 
  offset: 56, # Integer | 
  sort: 'id' # String | Sort field (`id`, `name`, or `status`)
}

begin
  # Get templates list
  result = api_instance.list_templates(token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling TemplatesApi->list_templates: #{e}"
end
```

#### Using the list_templates_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListTemplates200Response>, Integer, Hash)> list_templates_with_http_info(token, opts)

```ruby
begin
  # Get templates list
  data, status_code, headers = api_instance.list_templates_with_http_info(token, opts)
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
| **limit** | **Integer** |  | [optional] |
| **offset** | **Integer** |  | [optional] |
| **sort** | **String** | Sort field (&#x60;id&#x60;, &#x60;name&#x60;, or &#x60;status&#x60;) | [optional] |

### Return type

[**ListTemplates200Response**](ListTemplates200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## remove_template

> Hash&lt;String, Object&gt; remove_template(token, remove_template_request)

Remove message template

Delete a message template by `name` (all language versions of that name).

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
remove_template_request = OneMsgSdk::RemoveTemplateRequest.new({name: 'name_example'}) # RemoveTemplateRequest | 

begin
  # Remove message template
  result = api_instance.remove_template(token, remove_template_request)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling TemplatesApi->remove_template: #{e}"
end
```

#### Using the remove_template_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Object&gt;, Integer, Hash)> remove_template_with_http_info(token, remove_template_request)

```ruby
begin
  # Remove message template
  data, status_code, headers = api_instance.remove_template_with_http_info(token, remove_template_request)
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
| **remove_template_request** | [**RemoveTemplateRequest**](RemoveTemplateRequest.md) |  |  |

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

Send a WhatsApp **template** message (works outside the 24-hour session window).  Use this tool — not `send_message` — when the 24h session is closed.  `params` MUST be Cloud API **component objects**, never a flat list of strings and never the old On-Prem `hsm` / `localizable_params` format.  Example body variable `{{1}}`:  ```json {   \"type\": \"body\",   \"parameters\": [{ \"type\": \"text\", \"text\": \"Ivan\" }] } ```  Do not send `\"type\": \"hsm\"` and do not send `params: [\"Ivan\", \"123\"]`.  Supported `params` button `sub_type` values include: `url`, `quick_reply`, `copy_code` / `coupon_code`, `catalog`, `flow`, `limited_time_offer`, and **`order_details`** (WhatsApp Payments **India only** — requires an approved Utility template with an ORDER_DETAILS button).  Convenience wrapper with structured fields: `POST /sendOrderDetails`.  Authentication OTP templates (category `AUTHENTICATION`, or a template with an OTP / copy-code button) can only be sent to a phone number (`phone` or a phone `chatId`). Meta rejects a BSUID `recipient` for these templates with error 131062. If the recipient is known only by BSUID — for example they use a username and their phone number is not in your Business Portfolio — the template cannot be sent.  A `REQUEST_CONTACT_INFO` button (UTILITY or MARKETING only) has no send-time parameters. Do not add a button component for it in `params`, and do not send button text — WhatsApp sets that label on the template. Create the button with `POST /addTemplate` as `{ \"type\": \"REQUEST_CONTACT_INFO\" }` with no `text`. Inside an open 24-hour window, `POST /sendContactInfo` asks for the number without a template. 

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

