# OneMsgSdk::FlowsApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_flows**](FlowsApi.md#create_flows) | **POST** /flows | Create Flow |
| [**create_flows_flow_id_deprecate**](FlowsApi.md#create_flows_flow_id_deprecate) | **POST** /flows/{flowId}/deprecate | Deprecate Flow |
| [**create_flows_flow_id_publish**](FlowsApi.md#create_flows_flow_id_publish) | **POST** /flows/{flowId}/publish | Publish Flow |
| [**delete_flows_flow_id**](FlowsApi.md#delete_flows_flow_id) | **DELETE** /flows/{flowId} | Delete Flow |
| [**get_flows_flow_id**](FlowsApi.md#get_flows_flow_id) | **GET** /flows/{flowId} | Get Flow Details |
| [**get_flows_flow_id_preview**](FlowsApi.md#get_flows_flow_id_preview) | **GET** /flows/{flowId}/preview | Preview Flow |
| [**get_whatsapp_business_encryption**](FlowsApi.md#get_whatsapp_business_encryption) | **GET** /whatsapp_business_encryption | Get business encryption public key |
| [**list_flows**](FlowsApi.md#list_flows) | **GET** /flows | List Flows |
| [**patch_flows_flow_id_assets**](FlowsApi.md#patch_flows_flow_id_assets) | **PATCH** /flows/{flowId}/assets | Update Flow Structure |
| [**patch_flows_flow_id_metadata**](FlowsApi.md#patch_flows_flow_id_metadata) | **PATCH** /flows/{flowId}/metadata | Update Flow Metadata |
| [**set_whatsapp_business_encryption**](FlowsApi.md#set_whatsapp_business_encryption) | **POST** /whatsapp_business_encryption | Set business encryption public key |


## create_flows

> <CreateGroups200Response> create_flows(token, opts)

Create Flow

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

api_instance = OneMsgSdk::FlowsApi.new
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  waba_account_id: '{{wabaAccountId}}' # String | 
}

begin
  # Create Flow
  result = api_instance.create_flows(token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->create_flows: #{e}"
end
```

#### Using the create_flows_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateGroups200Response>, Integer, Hash)> create_flows_with_http_info(token, opts)

```ruby
begin
  # Create Flow
  data, status_code, headers = api_instance.create_flows_with_http_info(token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateGroups200Response>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->create_flows_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **waba_account_id** | **String** |  | [optional] |

### Return type

[**CreateGroups200Response**](CreateGroups200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## create_flows_flow_id_deprecate

> Hash&lt;String, Object&gt; create_flows_flow_id_deprecate(flow_id, token, opts)

Deprecate Flow

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

api_instance = OneMsgSdk::FlowsApi.new
flow_id = 'flow_id_example' # String | Flow ID
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  waba_account_id: '{{wabaAccountId}}' # String | 
}

begin
  # Deprecate Flow
  result = api_instance.create_flows_flow_id_deprecate(flow_id, token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->create_flows_flow_id_deprecate: #{e}"
end
```

#### Using the create_flows_flow_id_deprecate_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Object&gt;, Integer, Hash)> create_flows_flow_id_deprecate_with_http_info(flow_id, token, opts)

```ruby
begin
  # Deprecate Flow
  data, status_code, headers = api_instance.create_flows_flow_id_deprecate_with_http_info(flow_id, token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Hash&lt;String, Object&gt;
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->create_flows_flow_id_deprecate_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **flow_id** | **String** | Flow ID |  |
| **token** | **String** | JWT token or API key for authorization |  |
| **waba_account_id** | **String** |  | [optional] |

### Return type

**Hash&lt;String, Object&gt;**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## create_flows_flow_id_publish

> Hash&lt;String, Object&gt; create_flows_flow_id_publish(flow_id, token, opts)

Publish Flow

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

api_instance = OneMsgSdk::FlowsApi.new
flow_id = 'flow_id_example' # String | Flow ID
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  waba_account_id: '{{wabaAccountId}}' # String | 
}

begin
  # Publish Flow
  result = api_instance.create_flows_flow_id_publish(flow_id, token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->create_flows_flow_id_publish: #{e}"
end
```

#### Using the create_flows_flow_id_publish_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Object&gt;, Integer, Hash)> create_flows_flow_id_publish_with_http_info(flow_id, token, opts)

```ruby
begin
  # Publish Flow
  data, status_code, headers = api_instance.create_flows_flow_id_publish_with_http_info(flow_id, token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Hash&lt;String, Object&gt;
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->create_flows_flow_id_publish_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **flow_id** | **String** | Flow ID |  |
| **token** | **String** | JWT token or API key for authorization |  |
| **waba_account_id** | **String** |  | [optional] |

### Return type

**Hash&lt;String, Object&gt;**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## delete_flows_flow_id

> <DeleteFlowsFlowId200Response> delete_flows_flow_id(flow_id, token, opts)

Delete Flow

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

api_instance = OneMsgSdk::FlowsApi.new
flow_id = 'flow_id_example' # String | Flow ID
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  waba_account_id: '{{wabaAccountId}}' # String | 
}

begin
  # Delete Flow
  result = api_instance.delete_flows_flow_id(flow_id, token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->delete_flows_flow_id: #{e}"
end
```

#### Using the delete_flows_flow_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<DeleteFlowsFlowId200Response>, Integer, Hash)> delete_flows_flow_id_with_http_info(flow_id, token, opts)

```ruby
begin
  # Delete Flow
  data, status_code, headers = api_instance.delete_flows_flow_id_with_http_info(flow_id, token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <DeleteFlowsFlowId200Response>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->delete_flows_flow_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **flow_id** | **String** | Flow ID |  |
| **token** | **String** | JWT token or API key for authorization |  |
| **waba_account_id** | **String** |  | [optional] |

### Return type

[**DeleteFlowsFlowId200Response**](DeleteFlowsFlowId200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_flows_flow_id

> <CreateGroups200Response> get_flows_flow_id(flow_id, token, opts)

Get Flow Details

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

api_instance = OneMsgSdk::FlowsApi.new
flow_id = 'flow_id_example' # String | Flow ID
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  waba_account_id: '{{wabaAccountId}}' # String | 
}

begin
  # Get Flow Details
  result = api_instance.get_flows_flow_id(flow_id, token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->get_flows_flow_id: #{e}"
end
```

#### Using the get_flows_flow_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateGroups200Response>, Integer, Hash)> get_flows_flow_id_with_http_info(flow_id, token, opts)

```ruby
begin
  # Get Flow Details
  data, status_code, headers = api_instance.get_flows_flow_id_with_http_info(flow_id, token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateGroups200Response>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->get_flows_flow_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **flow_id** | **String** | Flow ID |  |
| **token** | **String** | JWT token or API key for authorization |  |
| **waba_account_id** | **String** |  | [optional] |

### Return type

[**CreateGroups200Response**](CreateGroups200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_flows_flow_id_preview

> Hash&lt;String, Object&gt; get_flows_flow_id_preview(flow_id, token, opts)

Preview Flow

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

api_instance = OneMsgSdk::FlowsApi.new
flow_id = 'flow_id_example' # String | Flow ID
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  waba_account_id: '{{wabaAccountId}}' # String | 
}

begin
  # Preview Flow
  result = api_instance.get_flows_flow_id_preview(flow_id, token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->get_flows_flow_id_preview: #{e}"
end
```

#### Using the get_flows_flow_id_preview_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Object&gt;, Integer, Hash)> get_flows_flow_id_preview_with_http_info(flow_id, token, opts)

```ruby
begin
  # Preview Flow
  data, status_code, headers = api_instance.get_flows_flow_id_preview_with_http_info(flow_id, token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Hash&lt;String, Object&gt;
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->get_flows_flow_id_preview_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **flow_id** | **String** | Flow ID |  |
| **token** | **String** | JWT token or API key for authorization |  |
| **waba_account_id** | **String** |  | [optional] |

### Return type

**Hash&lt;String, Object&gt;**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_whatsapp_business_encryption

> <GetWhatsappBusinessEncryption200Response> get_whatsapp_business_encryption(token)

Get business encryption public key

Retrieve the WhatsApp business public key and signature status for this channel's phone number. Required before publishing or sending Flows that use data encryption. 

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

api_instance = OneMsgSdk::FlowsApi.new
token = 'token_example' # String | JWT token or API key for authorization

begin
  # Get business encryption public key
  result = api_instance.get_whatsapp_business_encryption(token)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->get_whatsapp_business_encryption: #{e}"
end
```

#### Using the get_whatsapp_business_encryption_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetWhatsappBusinessEncryption200Response>, Integer, Hash)> get_whatsapp_business_encryption_with_http_info(token)

```ruby
begin
  # Get business encryption public key
  data, status_code, headers = api_instance.get_whatsapp_business_encryption_with_http_info(token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetWhatsappBusinessEncryption200Response>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->get_whatsapp_business_encryption_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |

### Return type

[**GetWhatsappBusinessEncryption200Response**](GetWhatsappBusinessEncryption200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## list_flows

> <ListFlows200Response> list_flows(token, opts)

List Flows

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

api_instance = OneMsgSdk::FlowsApi.new
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  waba_account_id: '{{wabaAccountId}}' # String | 
}

begin
  # List Flows
  result = api_instance.list_flows(token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->list_flows: #{e}"
end
```

#### Using the list_flows_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListFlows200Response>, Integer, Hash)> list_flows_with_http_info(token, opts)

```ruby
begin
  # List Flows
  data, status_code, headers = api_instance.list_flows_with_http_info(token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListFlows200Response>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->list_flows_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **waba_account_id** | **String** |  | [optional] |

### Return type

[**ListFlows200Response**](ListFlows200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patch_flows_flow_id_assets

> <PatchFlowsFlowIdAssets200Response> patch_flows_flow_id_assets(flow_id, token, opts)

Update Flow Structure

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

api_instance = OneMsgSdk::FlowsApi.new
flow_id = 'flow_id_example' # String | Flow ID
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  waba_account_id: '{{wabaAccountId}}' # String | 
}

begin
  # Update Flow Structure
  result = api_instance.patch_flows_flow_id_assets(flow_id, token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->patch_flows_flow_id_assets: #{e}"
end
```

#### Using the patch_flows_flow_id_assets_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PatchFlowsFlowIdAssets200Response>, Integer, Hash)> patch_flows_flow_id_assets_with_http_info(flow_id, token, opts)

```ruby
begin
  # Update Flow Structure
  data, status_code, headers = api_instance.patch_flows_flow_id_assets_with_http_info(flow_id, token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PatchFlowsFlowIdAssets200Response>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->patch_flows_flow_id_assets_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **flow_id** | **String** | Flow ID |  |
| **token** | **String** | JWT token or API key for authorization |  |
| **waba_account_id** | **String** |  | [optional] |

### Return type

[**PatchFlowsFlowIdAssets200Response**](PatchFlowsFlowIdAssets200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patch_flows_flow_id_metadata

> Hash&lt;String, Object&gt; patch_flows_flow_id_metadata(flow_id, token, opts)

Update Flow Metadata

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

api_instance = OneMsgSdk::FlowsApi.new
flow_id = 'flow_id_example' # String | Flow ID
token = 'token_example' # String | JWT token or API key for authorization
opts = {
  waba_account_id: '{{wabaAccountId}}' # String | 
}

begin
  # Update Flow Metadata
  result = api_instance.patch_flows_flow_id_metadata(flow_id, token, opts)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->patch_flows_flow_id_metadata: #{e}"
end
```

#### Using the patch_flows_flow_id_metadata_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Object&gt;, Integer, Hash)> patch_flows_flow_id_metadata_with_http_info(flow_id, token, opts)

```ruby
begin
  # Update Flow Metadata
  data, status_code, headers = api_instance.patch_flows_flow_id_metadata_with_http_info(flow_id, token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Hash&lt;String, Object&gt;
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->patch_flows_flow_id_metadata_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **flow_id** | **String** | Flow ID |  |
| **token** | **String** | JWT token or API key for authorization |  |
| **waba_account_id** | **String** |  | [optional] |

### Return type

**Hash&lt;String, Object&gt;**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## set_whatsapp_business_encryption

> <CreateCommerce200Response> set_whatsapp_business_encryption(token, set_whatsapp_business_encryption_request)

Set business encryption public key

Upload and sign a 2048-bit RSA business public key (PEM) for this channel's phone number. Meta requires a signed key before Flow publish/send. Only one active key per number; a new upload replaces the previous key. 

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

api_instance = OneMsgSdk::FlowsApi.new
token = 'token_example' # String | JWT token or API key for authorization
set_whatsapp_business_encryption_request = OneMsgSdk::SetWhatsappBusinessEncryptionRequest.new({business_public_key: '-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
-----END PUBLIC KEY-----
'}) # SetWhatsappBusinessEncryptionRequest | 

begin
  # Set business encryption public key
  result = api_instance.set_whatsapp_business_encryption(token, set_whatsapp_business_encryption_request)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->set_whatsapp_business_encryption: #{e}"
end
```

#### Using the set_whatsapp_business_encryption_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateCommerce200Response>, Integer, Hash)> set_whatsapp_business_encryption_with_http_info(token, set_whatsapp_business_encryption_request)

```ruby
begin
  # Set business encryption public key
  data, status_code, headers = api_instance.set_whatsapp_business_encryption_with_http_info(token, set_whatsapp_business_encryption_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateCommerce200Response>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling FlowsApi->set_whatsapp_business_encryption_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **set_whatsapp_business_encryption_request** | [**SetWhatsappBusinessEncryptionRequest**](SetWhatsappBusinessEncryptionRequest.md) |  |  |

### Return type

[**CreateCommerce200Response**](CreateCommerce200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

