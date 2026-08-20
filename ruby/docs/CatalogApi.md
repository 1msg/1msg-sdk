# OneMsgSdk::CatalogApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_commerce**](CatalogApi.md#create_commerce) | **POST** /commerce | Set Commerce Settings |
| [**get_commerce**](CatalogApi.md#get_commerce) | **GET** /commerce | Get Commerce Settings |


## create_commerce

> <CreateCommerce200Response> create_commerce(token, create_commerce_request)

Set Commerce Settings

Update catalog/cart commerce settings via the `params` object.  - `params.is_catalog_visible` — show catalog storefront icon (`true`) or hide it (`false`). - `params.is_cart_enabled` — enable cart (`true`) or disable it (`false`).  Blocked when the channel subscription limit is exceeded. Requires a commerce-capable channel (Cloud Functions `/commerceWAV2`). 

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

api_instance = OneMsgSdk::CatalogApi.new
token = 'token_example' # String | JWT token or API key for authorization
create_commerce_request = OneMsgSdk::CreateCommerceRequest.new({params: OneMsgSdk::CreateCommerceRequestParams.new({is_cart_enabled: false, is_catalog_visible: false})}) # CreateCommerceRequest | 

begin
  # Set Commerce Settings
  result = api_instance.create_commerce(token, create_commerce_request)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling CatalogApi->create_commerce: #{e}"
end
```

#### Using the create_commerce_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateCommerce200Response>, Integer, Hash)> create_commerce_with_http_info(token, create_commerce_request)

```ruby
begin
  # Set Commerce Settings
  data, status_code, headers = api_instance.create_commerce_with_http_info(token, create_commerce_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateCommerce200Response>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling CatalogApi->create_commerce_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **create_commerce_request** | [**CreateCommerceRequest**](CreateCommerceRequest.md) |  |  |

### Return type

[**CreateCommerce200Response**](CreateCommerce200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## get_commerce

> <Array<GetCommerce200ResponseInner>> get_commerce(token)

Get Commerce Settings

Returns catalog/cart commerce settings for the channel.  - `is_catalog_visible` — show catalog storefront icon (`true`) or hide it (`false`). - `is_cart_enabled` — enable cart (`true`) or disable it (`false`). 

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

api_instance = OneMsgSdk::CatalogApi.new
token = 'token_example' # String | JWT token or API key for authorization

begin
  # Get Commerce Settings
  result = api_instance.get_commerce(token)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling CatalogApi->get_commerce: #{e}"
end
```

#### Using the get_commerce_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<GetCommerce200ResponseInner>>, Integer, Hash)> get_commerce_with_http_info(token)

```ruby
begin
  # Get Commerce Settings
  data, status_code, headers = api_instance.get_commerce_with_http_info(token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<GetCommerce200ResponseInner>>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling CatalogApi->get_commerce_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |

### Return type

[**Array&lt;GetCommerce200ResponseInner&gt;**](GetCommerce200ResponseInner.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

