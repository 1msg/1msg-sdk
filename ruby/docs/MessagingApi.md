# OneMsgSdk::MessagingApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_read_message**](MessagingApi.md#create_read_message) | **POST** /readMessage | Mark message as read |
| [**create_upload_media**](MessagingApi.md#create_upload_media) | **POST** /uploadMedia | Upload media |
| [**delete_media**](MessagingApi.md#delete_media) | **DELETE** /media/{mediaId} | Delete media from WABA storage |
| [**delete_media_legacy**](MessagingApi.md#delete_media_legacy) | **POST** /deleteMedia | Delete media from WABA storage (deprecated alias) |
| [**get_mm_lite_status**](MessagingApi.md#get_mm_lite_status) | **GET** /mmLiteStatus | Get MM Lite availability and status |
| [**list_messages**](MessagingApi.md#list_messages) | **GET** /messages | Get messages list |
| [**retrieve_media**](MessagingApi.md#retrieve_media) | **GET** /retrieveMedia | Retrieve uploaded media metadata |
| [**send_address_message**](MessagingApi.md#send_address_message) | **POST** /sendAddressMessage | Send address request message |
| [**send_button**](MessagingApi.md#send_button) | **POST** /sendButton | Send Reply Buttons Message |
| [**send_carousel**](MessagingApi.md#send_carousel) | **POST** /sendCarousel | Send Carousel |
| [**send_contact**](MessagingApi.md#send_contact) | **POST** /sendContact | Send a Contact |
| [**send_cta_url**](MessagingApi.md#send_cta_url) | **POST** /sendCtaUrl | Send CTA URL interactive message |
| [**send_file**](MessagingApi.md#send_file) | **POST** /sendFile | Send a File |
| [**send_flow**](MessagingApi.md#send_flow) | **POST** /sendFlow | Send WhatsApp Flow Message |
| [**send_list**](MessagingApi.md#send_list) | **POST** /sendList | Send List Message |
| [**send_location**](MessagingApi.md#send_location) | **POST** /sendLocation | Send a Location |
| [**send_location_request**](MessagingApi.md#send_location_request) | **POST** /sendLocationRequest | Send Location Request Message |
| [**send_message**](MessagingApi.md#send_message) | **POST** /sendMessage | Send a Message |
| [**send_order_details**](MessagingApi.md#send_order_details) | **POST** /sendOrderDetails | Send order details (India payments template) |
| [**send_payment_request**](MessagingApi.md#send_payment_request) | **POST** /sendPaymentRequest | Send payment request (regional) |
| [**send_product**](MessagingApi.md#send_product) | **POST** /sendProduct | Send a Product |
| [**send_reaction**](MessagingApi.md#send_reaction) | **POST** /sendReaction | Send Reaction |
| [**send_sticker**](MessagingApi.md#send_sticker) | **POST** /sendSticker | Send sticker message |


## create_read_message

> <CreateReadMessage200Response> create_read_message(token, opts)

Mark message as read

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  message_id: 'message_id_example', # String | 
  msg_id: 'msg_id_example', # String | 
  typing_indicator: true # Boolean | Show WhatsApp typing indicator (max 25s or until reply)
}

begin
  # Mark message as read
  result = api_instance.create_read_message(token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->create_read_message: #{e}"
end
```

#### Using the create_read_message_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateReadMessage200Response>, Integer, Hash)> create_read_message_with_http_info(token, opts)

```ruby
begin
  # Mark message as read
  data, status_code, headers = api_instance.create_read_message_with_http_info(token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateReadMessage200Response>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->create_read_message_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **message_id** | **String** |  | [optional] |
| **msg_id** | **String** |  | [optional] |
| **typing_indicator** | **Boolean** | Show WhatsApp typing indicator (max 25s or until reply) | [optional][default to false] |

### Return type

[**CreateReadMessage200Response**](CreateReadMessage200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json


## create_upload_media

> create_upload_media(token, opts)

Upload media

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  request_body: { key: 3.56} # Hash<String, Object> | 
}

begin
  # Upload media
  api_instance.create_upload_media(token, opts)
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->create_upload_media: #{e}"
end
```

#### Using the create_upload_media_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> create_upload_media_with_http_info(token, opts)

```ruby
begin
  # Upload media
  data, status_code, headers = api_instance.create_upload_media_with_http_info(token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->create_upload_media_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **request_body** | [**Hash&lt;String, Object&gt;**](Object.md) |  | [optional] |

### Return type

nil (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## delete_media

> <SuccessResponse> delete_media(token, media_id)

Delete media from WABA storage

Delete previously uploaded media by numeric `mediaId` (from `/uploadMedia`).  This is the canonical deletion endpoint and uses the REST `DELETE` verb on the media resource path. The older `POST /deleteMedia` is a deprecated alias. 

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization
media_id = 'media_id_example' # String | Numeric WABA media id

begin
  # Delete media from WABA storage
  result = api_instance.delete_media(token, media_id)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->delete_media: #{e}"
end
```

#### Using the delete_media_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SuccessResponse>, Integer, Hash)> delete_media_with_http_info(token, media_id)

```ruby
begin
  # Delete media from WABA storage
  data, status_code, headers = api_instance.delete_media_with_http_info(token, media_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SuccessResponse>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->delete_media_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **media_id** | **String** | Numeric WABA media id |  |

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## delete_media_legacy

> <SuccessResponse> delete_media_legacy(token, delete_media_legacy_request)

Delete media from WABA storage (deprecated alias)

**Deprecated.** Use `DELETE /media/{mediaId}` instead.  This POST alias is kept for backward compatibility with earlier integrations. New integrations should call `DELETE /media/{mediaId}`: 1msg follows REST conventions for resource deletion going forward (delete a resource with the `DELETE` verb on its resource path). 

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization
delete_media_legacy_request = OneMsgSdk::DeleteMediaLegacyRequest.new({media_id: 'media_id_example'}) # DeleteMediaLegacyRequest | 

begin
  # Delete media from WABA storage (deprecated alias)
  result = api_instance.delete_media_legacy(token, delete_media_legacy_request)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->delete_media_legacy: #{e}"
end
```

#### Using the delete_media_legacy_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SuccessResponse>, Integer, Hash)> delete_media_legacy_with_http_info(token, delete_media_legacy_request)

```ruby
begin
  # Delete media from WABA storage (deprecated alias)
  data, status_code, headers = api_instance.delete_media_legacy_with_http_info(token, delete_media_legacy_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SuccessResponse>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->delete_media_legacy_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **delete_media_legacy_request** | [**DeleteMediaLegacyRequest**](DeleteMediaLegacyRequest.md) |  |  |

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## get_mm_lite_status

> <GetMmLiteStatus200Response> get_mm_lite_status(token)

Get MM Lite availability and status

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization

begin
  # Get MM Lite availability and status
  result = api_instance.get_mm_lite_status(token)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->get_mm_lite_status: #{e}"
end
```

#### Using the get_mm_lite_status_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetMmLiteStatus200Response>, Integer, Hash)> get_mm_lite_status_with_http_info(token)

```ruby
begin
  # Get MM Lite availability and status
  data, status_code, headers = api_instance.get_mm_lite_status_with_http_info(token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetMmLiteStatus200Response>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->get_mm_lite_status_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |

### Return type

[**GetMmLiteStatus200Response**](GetMmLiteStatus200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## list_messages

> <ListMessages200Response> list_messages(token)

Get messages list

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization

begin
  # Get messages list
  result = api_instance.list_messages(token)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->list_messages: #{e}"
end
```

#### Using the list_messages_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListMessages200Response>, Integer, Hash)> list_messages_with_http_info(token)

```ruby
begin
  # Get messages list
  data, status_code, headers = api_instance.list_messages_with_http_info(token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListMessages200Response>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->list_messages_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |

### Return type

[**ListMessages200Response**](ListMessages200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieve_media

> <RetrieveMedia200Response> retrieve_media(token, media_id)

Retrieve uploaded media metadata

Get WABA media URL and metadata by mediaId (from uploadMedia). The returned `url` is temporary and typically expires within ~5 minutes. 

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization
media_id = 'media_id_example' # String | 

begin
  # Retrieve uploaded media metadata
  result = api_instance.retrieve_media(token, media_id)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->retrieve_media: #{e}"
end
```

#### Using the retrieve_media_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<RetrieveMedia200Response>, Integer, Hash)> retrieve_media_with_http_info(token, media_id)

```ruby
begin
  # Retrieve uploaded media metadata
  data, status_code, headers = api_instance.retrieve_media_with_http_info(token, media_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <RetrieveMedia200Response>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->retrieve_media_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **media_id** | **String** |  |  |

### Return type

[**RetrieveMedia200Response**](RetrieveMedia200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## send_address_message

> <MessageSentResponse> send_address_message(token, send_address_message_request)

Send address request message

Request shipping address from the user (WhatsApp interactive `address_message`).  **India and Singapore only.** Requires: - Business WhatsApp number registered in that country - Recipient phone matching the country (`+91` ↔ `IN`, `+65` ↔ `SG`)  Pass `country: \"IN\"` or `country: \"SG\"`. Eligibility is validated upstream; mismatches (e.g. Singapore phone with `country: \"IN\"`) return errors such as `Unsupported Interactive Message type` (HTTP 200 with `sent: false`).  Optional action parameters: `values`, `saved_addresses`, `validation_errors`. 

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization
send_address_message_request = OneMsgSdk::SendAddressMessageRequest.new({body: 'body_example'}) # SendAddressMessageRequest | 

begin
  # Send address request message
  result = api_instance.send_address_message(token, send_address_message_request)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_address_message: #{e}"
end
```

#### Using the send_address_message_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MessageSentResponse>, Integer, Hash)> send_address_message_with_http_info(token, send_address_message_request)

```ruby
begin
  # Send address request message
  data, status_code, headers = api_instance.send_address_message_with_http_info(token, send_address_message_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MessageSentResponse>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_address_message_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **send_address_message_request** | [**SendAddressMessageRequest**](SendAddressMessageRequest.md) |  |  |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## send_button

> <MessageSentResponse> send_button(token, opts)

Send Reply Buttons Message

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  send_button_request: OneMsgSdk::SendButtonRequest.new # SendButtonRequest | 
}

begin
  # Send Reply Buttons Message
  result = api_instance.send_button(token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_button: #{e}"
end
```

#### Using the send_button_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MessageSentResponse>, Integer, Hash)> send_button_with_http_info(token, opts)

```ruby
begin
  # Send Reply Buttons Message
  data, status_code, headers = api_instance.send_button_with_http_info(token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MessageSentResponse>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_button_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **send_button_request** | [**SendButtonRequest**](SendButtonRequest.md) |  | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## send_carousel

> <MessageSentResponse> send_carousel(token, params, opts)

Send Carousel

You can send product cards via Carousel in two ways:  Template messages: do not require a 24-hour customer service window between you and the recipient. Use sendTemplate.  Free-form messages: can be sent only when a customer service window is open between you and the recipient. Use sendCarousel.  The message structure in /sendCarousel is largely similar to sending a template. However, in this case you must  explicitly specify all elements that are created in advance when working with templates. This is because the message  is sent without using a template.  In /sendCarousel, for sending a Catalog Carousel there can be either 1 URL button or one or more quick reply buttons. 

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization
params = [3.56] # Array<Object> | Required. Template-like structure (same as sendTemplate params). Must include a CAROUSEL component and its cards.  Structure: - params[] item with type CAROUSEL and cards (2..10) - cards[] item:   - components[] items:     - header: parameters[0] with type image/video/product       - image: {\\\"image\\\": {\\\"link\\\": \\\"https://...\\\"}}       - video: {\\\"video\\\": {\\\"link\\\": \\\"https://...\\\"}}       - product: {\\\"product\\\": {\\\"catalog_id\\\": \\\"...\\\", \\\"product_retailer_id\\\": \\\"...\\\"}}     - button: sub_type url or quick_reply       - url: parameters {\\\"text\\\": \\\"Button\\\", \\\"url\\\": \\\"https://...\\\"}       - quick_reply: parameters[] of {\\\"id\\\": \\\"...\\\", \\\"text\\\": \\\"...\\\"} 
opts = {
  body: 'body_example', # String | Text shown above the carousel. Optional. If omitted and params include a body component, the body will be taken from params.
  quoted_msg_id: 'quoted_msg_id_example', # String | Quoted message ID (Cloud API)
  chat_id: 'chat_id_example', # String | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group)
  phone: 56 # Integer | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369.
}

begin
  # Send Carousel
  result = api_instance.send_carousel(token, params, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_carousel: #{e}"
end
```

#### Using the send_carousel_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MessageSentResponse>, Integer, Hash)> send_carousel_with_http_info(token, params, opts)

```ruby
begin
  # Send Carousel
  data, status_code, headers = api_instance.send_carousel_with_http_info(token, params, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MessageSentResponse>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_carousel_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **params** | [**Array&lt;Object&gt;**](Object.md) | Required. Template-like structure (same as sendTemplate params). Must include a CAROUSEL component and its cards.  Structure: - params[] item with type CAROUSEL and cards (2..10) - cards[] item:   - components[] items:     - header: parameters[0] with type image/video/product       - image: {\\\&quot;image\\\&quot;: {\\\&quot;link\\\&quot;: \\\&quot;https://...\\\&quot;}}       - video: {\\\&quot;video\\\&quot;: {\\\&quot;link\\\&quot;: \\\&quot;https://...\\\&quot;}}       - product: {\\\&quot;product\\\&quot;: {\\\&quot;catalog_id\\\&quot;: \\\&quot;...\\\&quot;, \\\&quot;product_retailer_id\\\&quot;: \\\&quot;...\\\&quot;}}     - button: sub_type url or quick_reply       - url: parameters {\\\&quot;text\\\&quot;: \\\&quot;Button\\\&quot;, \\\&quot;url\\\&quot;: \\\&quot;https://...\\\&quot;}       - quick_reply: parameters[] of {\\\&quot;id\\\&quot;: \\\&quot;...\\\&quot;, \\\&quot;text\\\&quot;: \\\&quot;...\\\&quot;}  |  |
| **body** | **String** | Text shown above the carousel. Optional. If omitted and params include a body component, the body will be taken from params. | [optional] |
| **quoted_msg_id** | **String** | Quoted message ID (Cloud API) | [optional] |
| **chat_id** | **String** | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) | [optional] |
| **phone** | **Integer** | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json


## send_contact

> <MessageSentResponse> send_contact(token, opts)

Send a Contact

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  send_contact_request: OneMsgSdk::SendContactRequest.new # SendContactRequest | 
}

begin
  # Send a Contact
  result = api_instance.send_contact(token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_contact: #{e}"
end
```

#### Using the send_contact_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MessageSentResponse>, Integer, Hash)> send_contact_with_http_info(token, opts)

```ruby
begin
  # Send a Contact
  data, status_code, headers = api_instance.send_contact_with_http_info(token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MessageSentResponse>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_contact_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **send_contact_request** | [**SendContactRequest**](SendContactRequest.md) |  | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## send_cta_url

> <MessageSentResponse> send_cta_url(token, send_cta_url_request)

Send CTA URL interactive message

Send an interactive message with a single call-to-action URL button.

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization
send_cta_url_request = OneMsgSdk::SendCtaUrlRequest.new({body: 'body_example', display_text: 'display_text_example', url: 'url_example'}) # SendCtaUrlRequest | 

begin
  # Send CTA URL interactive message
  result = api_instance.send_cta_url(token, send_cta_url_request)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_cta_url: #{e}"
end
```

#### Using the send_cta_url_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MessageSentResponse>, Integer, Hash)> send_cta_url_with_http_info(token, send_cta_url_request)

```ruby
begin
  # Send CTA URL interactive message
  data, status_code, headers = api_instance.send_cta_url_with_http_info(token, send_cta_url_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MessageSentResponse>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_cta_url_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **send_cta_url_request** | [**SendCtaUrlRequest**](SendCtaUrlRequest.md) |  |  |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## send_file

> <MessageSentResponse> send_file(token, opts)

Send a File

Send a file to an existing chat. (Only if the dialogue has an Open Session).  Only one of two parameters is needed to determine the destination - chatId or phone. 

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  body: 'body_example', # String | File source (required unless mediaId is set): - HTTP/HTTPS URL - Base64 data URI 
  filename: 'filename_example', # String | File name with extension (required with body, not with mediaId)
  media_id: 'media_id_example', # String | WABA media id from uploadMedia (alternative to body)
  media_type: 'image', # String | Required when using mediaId
  voice: true, # Boolean | Native WhatsApp voice note (audio/ogg only)
  caption: 'caption_example', # String | 
  quoted_msg_id: 'quoted_msg_id_example', # String | 
  chat_id: 'chat_id_example', # String | 
  phone: 56 # Integer | 
}

begin
  # Send a File
  result = api_instance.send_file(token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_file: #{e}"
end
```

#### Using the send_file_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MessageSentResponse>, Integer, Hash)> send_file_with_http_info(token, opts)

```ruby
begin
  # Send a File
  data, status_code, headers = api_instance.send_file_with_http_info(token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MessageSentResponse>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_file_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **body** | **String** | File source (required unless mediaId is set): - HTTP/HTTPS URL - Base64 data URI  | [optional] |
| **filename** | **String** | File name with extension (required with body, not with mediaId) | [optional] |
| **media_id** | **String** | WABA media id from uploadMedia (alternative to body) | [optional] |
| **media_type** | **String** | Required when using mediaId | [optional] |
| **voice** | **Boolean** | Native WhatsApp voice note (audio/ogg only) | [optional] |
| **caption** | **String** |  | [optional] |
| **quoted_msg_id** | **String** |  | [optional] |
| **chat_id** | **String** |  | [optional] |
| **phone** | **Integer** |  | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json


## send_flow

> <MessageSentResponse> send_flow(token, body, flow_id, flow_token, flow_cta, opts)

Send WhatsApp Flow Message

Send Interactive WhatsApp Flow message to an existing chat. (Only if the dialogue has an Open Session).  Only one of two parameters is needed to determine the destination - chatId or phone.  Use this method to send a published WhatsApp Flow as a service (interactive) message.  If the 24-hour window is closed, send a template with a FLOW button via /sendTemplate. 

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization
body = 'body_example' # String | Flow message body text
flow_id = 'flow_id_example' # String | Published Flow ID
flow_token = 'flow_token_example' # String | Flow token generated by the business
flow_cta = 'flow_cta_example' # String | CTA button text
opts = {
  header: nil, # SendFlowRequestHeader | 
  footer: 'footer_example', # String | Footer text
  flow_action: 'navigate', # String | Flow action type
  flow_action_payload: { ... }, # Object | Required for flowAction=navigate (screen is required). Ignored for data_exchange. If data is provided, it must be a non-empty object.
  flow_message_version: 'flow_message_version_example', # String | Flow message version (default \\\"3\\\")
  mode: 'draft', # String | Flow mode (draft or published). If omitted, provider default applies
  flow_action_data: { ... }, # Object | Shortcut for flowActionPayload.data (optional)
  flow_action_screen: 'flow_action_screen_example', # String | Shortcut for flowActionPayload.screen (optional)
  quoted_msg_id: 'quoted_msg_id_example', # String | Quoted message ID (Cloud API)
  chat_id: 'chat_id_example', # String | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group)
  phone: 56 # Integer | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369.
}

begin
  # Send WhatsApp Flow Message
  result = api_instance.send_flow(token, body, flow_id, flow_token, flow_cta, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_flow: #{e}"
end
```

#### Using the send_flow_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MessageSentResponse>, Integer, Hash)> send_flow_with_http_info(token, body, flow_id, flow_token, flow_cta, opts)

```ruby
begin
  # Send WhatsApp Flow Message
  data, status_code, headers = api_instance.send_flow_with_http_info(token, body, flow_id, flow_token, flow_cta, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MessageSentResponse>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_flow_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **body** | **String** | Flow message body text |  |
| **flow_id** | **String** | Published Flow ID |  |
| **flow_token** | **String** | Flow token generated by the business |  |
| **flow_cta** | **String** | CTA button text |  |
| **header** | [**SendFlowRequestHeader**](SendFlowRequestHeader.md) |  | [optional] |
| **footer** | **String** | Footer text | [optional] |
| **flow_action** | **String** | Flow action type | [optional] |
| **flow_action_payload** | [**Object**](Object.md) | Required for flowAction&#x3D;navigate (screen is required). Ignored for data_exchange. If data is provided, it must be a non-empty object. | [optional] |
| **flow_message_version** | **String** | Flow message version (default \\\&quot;3\\\&quot;) | [optional] |
| **mode** | **String** | Flow mode (draft or published). If omitted, provider default applies | [optional] |
| **flow_action_data** | [**Object**](Object.md) | Shortcut for flowActionPayload.data (optional) | [optional] |
| **flow_action_screen** | **String** | Shortcut for flowActionPayload.screen (optional) | [optional] |
| **quoted_msg_id** | **String** | Quoted message ID (Cloud API) | [optional] |
| **chat_id** | **String** | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) | [optional] |
| **phone** | **Integer** | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json


## send_list

> <MessageSentResponse> send_list(token, opts)

Send List Message

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  send_list_request: OneMsgSdk::SendListRequest.new # SendListRequest | 
}

begin
  # Send List Message
  result = api_instance.send_list(token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_list: #{e}"
end
```

#### Using the send_list_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MessageSentResponse>, Integer, Hash)> send_list_with_http_info(token, opts)

```ruby
begin
  # Send List Message
  data, status_code, headers = api_instance.send_list_with_http_info(token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MessageSentResponse>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_list_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **send_list_request** | [**SendListRequest**](SendListRequest.md) |  | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## send_location

> <MessageSentResponse> send_location(token, lat, lng, opts)

Send a Location

Send a location to an existing chat. (Only if the dialogue has an Open Session).  Only one of two parameters is needed to determine the destination - chatId or phone. 

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization
lat = 'lat_example' # String | Latitude of the location. Example: 45.018337
lng = 'lng_example' # String | Longitude of the location. Example: -73.968285
opts = {
  address: 'address_example', # String | Address of the location. Only displayed if name is present. Example: 9766 Valley View St., New York, NY 10024
  name: 'name_example', # String | Name of the location. Example: Facebook HQ
  quoted_msg_id: 'quoted_msg_id_example', # String | Quoted message ID (Cloud API)
  chat_id: 'chat_id_example', # String | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group)
  phone: 56 # Integer | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369.
}

begin
  # Send a Location
  result = api_instance.send_location(token, lat, lng, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_location: #{e}"
end
```

#### Using the send_location_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MessageSentResponse>, Integer, Hash)> send_location_with_http_info(token, lat, lng, opts)

```ruby
begin
  # Send a Location
  data, status_code, headers = api_instance.send_location_with_http_info(token, lat, lng, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MessageSentResponse>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_location_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **lat** | **String** | Latitude of the location. Example: 45.018337 |  |
| **lng** | **String** | Longitude of the location. Example: -73.968285 |  |
| **address** | **String** | Address of the location. Only displayed if name is present. Example: 9766 Valley View St., New York, NY 10024 | [optional] |
| **name** | **String** | Name of the location. Example: Facebook HQ | [optional] |
| **quoted_msg_id** | **String** | Quoted message ID (Cloud API) | [optional] |
| **chat_id** | **String** | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) | [optional] |
| **phone** | **Integer** | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json


## send_location_request

> <MessageSentResponse> send_location_request(token, opts)

Send Location Request Message

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  send_location_request_request: OneMsgSdk::SendLocationRequestRequest.new # SendLocationRequestRequest | 
}

begin
  # Send Location Request Message
  result = api_instance.send_location_request(token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_location_request: #{e}"
end
```

#### Using the send_location_request_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MessageSentResponse>, Integer, Hash)> send_location_request_with_http_info(token, opts)

```ruby
begin
  # Send Location Request Message
  data, status_code, headers = api_instance.send_location_request_with_http_info(token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MessageSentResponse>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_location_request_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **send_location_request_request** | [**SendLocationRequestRequest**](SendLocationRequestRequest.md) |  | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## send_message

> <MessageSentResponse> send_message(token, body, opts)

Send a Message

Send a message to an existing chat. (Only if the dialogue has an Open Session).  The message will be added to the queue for sending and delivered even if the phone  is disconnected from the Internet or authorization is not passed.  Only one of two parameters is needed to determine the destination - chatId or phone. 

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization
body = 'body_example' # String | Message text, UTF-8 or UTF-16 string with emoji
opts = {
  quoted_msg_id: 'quoted_msg_id_example', # String | Message ID to quote/reply to (Cloud API wamid)
  chat_id: 'chat_id_example', # String | Chat ID in format: phone@c.us (individual) or phone@g.us (group)
  phone: 56 # Integer | Phone number starting with country code (alternative to chatId)
}

begin
  # Send a Message
  result = api_instance.send_message(token, body, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_message: #{e}"
end
```

#### Using the send_message_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MessageSentResponse>, Integer, Hash)> send_message_with_http_info(token, body, opts)

```ruby
begin
  # Send a Message
  data, status_code, headers = api_instance.send_message_with_http_info(token, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MessageSentResponse>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_message_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **body** | **String** | Message text, UTF-8 or UTF-16 string with emoji |  |
| **quoted_msg_id** | **String** | Message ID to quote/reply to (Cloud API wamid) | [optional] |
| **chat_id** | **String** | Chat ID in format: phone@c.us (individual) or phone@g.us (group) | [optional] |
| **phone** | **Integer** | Phone number starting with country code (alternative to chatId) | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json


## send_order_details

> <MessageSentResponse> send_order_details(token, send_order_details_request)

Send order details (India payments template)

Send a WhatsApp **order details** payment / invoice message using a pre-approved **Utility** template that has an `ORDER_DETAILS` button.  **India only** (WhatsApp Payments India). Requires: - India WhatsApp Business number - Commerce enabled on the channel (`GET`/`POST /commerce`) - Approved template with an `ORDER_DETAILS` button  Use this method when you need structured fields (`order`, `referenceId`, `currency`, `paymentSettings`). The API appends a template button `sub_type: order_details` and sends via the same path as `POST /sendTemplate`.  Works **outside the 24-hour session window** (template message).  You can also send the same payload yourself with `POST /sendTemplate` by including a button component in `params`:  ```json {   \"type\": \"button\",   \"sub_type\": \"order_details\",   \"index\": 0,   \"parameters\": [{     \"type\": \"action\",     \"action\": {       \"order_details\": {         \"reference_id\": \"order-123\",         \"currency\": \"INR\",         \"order\": { \"status\": \"pending\", \"items\": [], \"subtotal\": { \"offset\": 100, \"value\": 50000 } }       }     }   }] } ``` 

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization
send_order_details_request = OneMsgSdk::SendOrderDetailsRequest.new({template: 'order_details_utility', namespace: 'your_namespace_uuid', language: OneMsgSdk::SendOrderDetailsRequestLanguage.new({code: 'en'}), order: OneMsgSdk::SendOrderDetailsRequestOrder.new({items: [OneMsgSdk::SendOrderDetailsRequestOrderItemsInner.new]})}) # SendOrderDetailsRequest | 

begin
  # Send order details (India payments template)
  result = api_instance.send_order_details(token, send_order_details_request)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_order_details: #{e}"
end
```

#### Using the send_order_details_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MessageSentResponse>, Integer, Hash)> send_order_details_with_http_info(token, send_order_details_request)

```ruby
begin
  # Send order details (India payments template)
  data, status_code, headers = api_instance.send_order_details_with_http_info(token, send_order_details_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MessageSentResponse>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_order_details_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **send_order_details_request** | [**SendOrderDetailsRequest**](SendOrderDetailsRequest.md) |  |  |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## send_payment_request

> <MessageSentResponse> send_payment_request(token, send_payment_request_request)

Send payment request (regional)

Send a regional payment request interactive message (beta scaffold). `region` must be IN, SG, or BR. Payload shape follows Meta regional payments docs; verify on stage before production use. Full regional builders are not implemented yet. 

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization
send_payment_request_request = OneMsgSdk::SendPaymentRequestRequest.new({phone: 37, region: 'IN'}) # SendPaymentRequestRequest | 

begin
  # Send payment request (regional)
  result = api_instance.send_payment_request(token, send_payment_request_request)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_payment_request: #{e}"
end
```

#### Using the send_payment_request_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MessageSentResponse>, Integer, Hash)> send_payment_request_with_http_info(token, send_payment_request_request)

```ruby
begin
  # Send payment request (regional)
  data, status_code, headers = api_instance.send_payment_request_with_http_info(token, send_payment_request_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MessageSentResponse>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_payment_request_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **send_payment_request_request** | [**SendPaymentRequestRequest**](SendPaymentRequestRequest.md) |  |  |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## send_product

> <MessageSentResponse> send_product(token, opts)

Send a Product

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  request_body: { key: 3.56} # Hash<String, Object> | 
}

begin
  # Send a Product
  result = api_instance.send_product(token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_product: #{e}"
end
```

#### Using the send_product_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MessageSentResponse>, Integer, Hash)> send_product_with_http_info(token, opts)

```ruby
begin
  # Send a Product
  data, status_code, headers = api_instance.send_product_with_http_info(token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MessageSentResponse>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_product_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **request_body** | [**Hash&lt;String, Object&gt;**](Object.md) |  | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## send_reaction

> <MessageSentResponse> send_reaction(token, opts)

Send Reaction

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  send_reaction_request: OneMsgSdk::SendReactionRequest.new # SendReactionRequest | 
}

begin
  # Send Reaction
  result = api_instance.send_reaction(token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_reaction: #{e}"
end
```

#### Using the send_reaction_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MessageSentResponse>, Integer, Hash)> send_reaction_with_http_info(token, opts)

```ruby
begin
  # Send Reaction
  data, status_code, headers = api_instance.send_reaction_with_http_info(token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MessageSentResponse>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_reaction_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **send_reaction_request** | [**SendReactionRequest**](SendReactionRequest.md) |  | [optional] |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## send_sticker

> <MessageSentResponse> send_sticker(token, send_sticker_request)

Send sticker message

Send a WhatsApp sticker by mediaId or link URL.

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

api_instance = OneMsgSdk::MessagingApi.new
token = 'token_example' # String | JWT token or API key for authorization
send_sticker_request = OneMsgSdk::SendStickerRequest.new # SendStickerRequest | 

begin
  # Send sticker message
  result = api_instance.send_sticker(token, send_sticker_request)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_sticker: #{e}"
end
```

#### Using the send_sticker_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MessageSentResponse>, Integer, Hash)> send_sticker_with_http_info(token, send_sticker_request)

```ruby
begin
  # Send sticker message
  data, status_code, headers = api_instance.send_sticker_with_http_info(token, send_sticker_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MessageSentResponse>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling MessagingApi->send_sticker_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **send_sticker_request** | [**SendStickerRequest**](SendStickerRequest.md) |  |  |

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

