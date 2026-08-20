# OneMsgSdk::CallingApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_calling_settings**](CallingApi.md#get_calling_settings) | **GET** /callingSettings | Get calling settings |
| [**initiate_call**](CallingApi.md#initiate_call) | **POST** /initiateCall | Call action (connect / pre_accept / accept / reject / terminate) |
| [**update_calling_settings**](CallingApi.md#update_calling_settings) | **POST** /callingSettings | Update calling settings |


## get_calling_settings

> <CallingSettings> get_calling_settings(token)

Get calling settings

Return WhatsApp Calling API settings for this channel (beta).  Proxies upstream `GET /calling/settings`.  **Prerequisites** - Number must be eligible for Meta Calling (Cloud API; not COEX) - Trial / `subscriptionBlocked` channels receive **403** plain text - You need your own WebRTC or SIP stack; 1msg is a **signaling proxy** only   and does **not** store call history or recordings  See the **Calling** tag overview for inbound/outbound flows and webhooks. 

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

> <Array(<CallingSettings>, Integer, Hash)> get_calling_settings_with_http_info(token)

```ruby
begin
  # Get calling settings
  data, status_code, headers = api_instance.get_calling_settings_with_http_info(token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CallingSettings>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling CallingApi->get_calling_settings_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |

### Return type

[**CallingSettings**](CallingSettings.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## initiate_call

> <InitiateCallResponse> initiate_call(token, initiate_call_request)

Call action (connect / pre_accept / accept / reject / terminate)

Perform a WhatsApp Calling action (beta).  Proxies upstream `POST /calling/calls`. Despite the historical path name `/initiateCall`, this endpoint handles **all** call actions:  | action | Use | Required | |--------|-----|----------| | `connect` | Outbound business → user | `to` + `session` (`sdp_type: offer`) | | `pre_accept` | Inbound (optional, reduces audio clipping) | `call_id` + `session` (`sdp_type: answer`) | | `accept` | Inbound answer | `call_id` + `session` (`sdp_type: answer`) | | `reject` | Decline inbound | `call_id` | | `terminate` | Hang up | `call_id` |  **SDP / media (critical)** - `accept` / `pre_accept` require a **WebRTC-generated SDP answer**. - Do **not** send Meta's offer SDP back as the answer. - Postman (or curl) alone **cannot** establish real media — you need a   WebRTC or SIP stack. 1msg only proxies signaling.  Answer within ~**30–60 seconds** of an inbound `connect` webhook or Meta terminates as unanswered. Common Meta errors include Calling not enabled (`138000`), no permission (`138006`), SDP validation failures.  **Outbound** requires a prior Call Permission Request (CPR) acceptance. See the **Calling** tag overview for the full outbound flow and CPR limits.  Trial / `subscriptionBlocked` → **403** plain text. Upstream failures often return HTTP 200 with `{ \"response\": { \"error\": \"...\" } }`. 

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
initiate_call_request = OneMsgSdk::InitiateCallRequest.new({messaging_product: 'whatsapp', action: 'connect'}) # InitiateCallRequest | 

begin
  # Call action (connect / pre_accept / accept / reject / terminate)
  result = api_instance.initiate_call(token, initiate_call_request)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling CallingApi->initiate_call: #{e}"
end
```

#### Using the initiate_call_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<InitiateCallResponse>, Integer, Hash)> initiate_call_with_http_info(token, initiate_call_request)

```ruby
begin
  # Call action (connect / pre_accept / accept / reject / terminate)
  data, status_code, headers = api_instance.initiate_call_with_http_info(token, initiate_call_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <InitiateCallResponse>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling CallingApi->initiate_call_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **initiate_call_request** | [**InitiateCallRequest**](InitiateCallRequest.md) |  |  |

### Return type

[**InitiateCallResponse**](InitiateCallResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## update_calling_settings

> <UpdateCallingSettings200Response> update_calling_settings(token, calling_settings)

Update calling settings

Enable, disable, or update WhatsApp Calling settings (beta).  Proxies upstream `POST /calling/settings`. Body is forwarded as-is (1msg does not validate fields).  **Common fields under `calling`** - `status` (`ENABLED` | `DISABLED`) — required to turn calling on/off - `call_icon_visibility` (`DEFAULT` | `DISABLE_ALL`) — optional - `callback_permission_status` (`ENABLED` | `DISABLED`) — optional;   when enabled, inbound user calls grant callback permission - `call_hours` — optional hours / timezone object - `sip` — optional SIP trunk; when SIP is ENABLED, Graph call actions and   calling webhooks are not used - `srtp_key_exchange_protocol` (`DTLS` | `SDES`) — SDES only with SIP - `video.status` — optional  Meta may accept only one feature group per request — prefer focused updates (e.g. enable status first, then SIP).  Trial / `subscriptionBlocked` → **403** plain text. 

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
calling_settings = OneMsgSdk::CallingSettings.new # CallingSettings | 

begin
  # Update calling settings
  result = api_instance.update_calling_settings(token, calling_settings)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling CallingApi->update_calling_settings: #{e}"
end
```

#### Using the update_calling_settings_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<UpdateCallingSettings200Response>, Integer, Hash)> update_calling_settings_with_http_info(token, calling_settings)

```ruby
begin
  # Update calling settings
  data, status_code, headers = api_instance.update_calling_settings_with_http_info(token, calling_settings)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UpdateCallingSettings200Response>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling CallingApi->update_calling_settings_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **calling_settings** | [**CallingSettings**](CallingSettings.md) |  |  |

### Return type

[**UpdateCallingSettings200Response**](UpdateCallingSettings200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

