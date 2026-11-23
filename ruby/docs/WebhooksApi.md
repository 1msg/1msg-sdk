# OneMsgSdk::WebhooksApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_webhook**](WebhooksApi.md#get_webhook) | **GET** /webhook | Get webhook URL |
| [**set_webhook**](WebhooksApi.md#set_webhook) | **POST** /webhook | Set webhook URL |


## get_webhook

> <GetWebhook200Response> get_webhook(token)

Get webhook URL

Return the webhook URL(s) currently configured for this channel, plus delivery status for each URL.  `webhookUrl` is a string when a single URL is set, an array of strings when multiple URLs are configured, or `null` if none is set.  **Prefer `webhookStatuses`.** The circuit breaker is per URL, not per channel. If 1 of 4 URLs is sticky-disabled, that URL is skipped; the other three still receive events. Send/receive are not affected.  Channel-level `haveDisabledWebhooks`, `circuitState`, `reason`, `fails`, `trips`, and timestamps are a compatibility summary of **one** URL (the first sticky-disabled URL, else the first configured URL). They are not \"the channel is dead\".  - `haveDisabledWebhooks` — `true` when **at least one** URL in `webhookUrl` is   sticky auto-disabled. Live URLs still get events. - `circuitState` — compressed scalar for that same primary URL:   `ok` | `degraded` | `open` | `half_open` | `disabled`. - `disabledWebhooks` — currently configured URLs that are sticky-disabled   (subset of `webhookUrl`). - `webhookStatuses` — one row per currently configured URL. Use this array   to see which endpoints are live vs skipped. - `fails` / `trips` / `firstFailAt` — **diagnostics for support**, not product   UI. `fails` = failures in a rolling ~10 minute window (not lifetime).   `trips` = failed recovery probes on the 15 min → 1 h → 6 h schedule (sticky   disable after 3). Clients can ignore these and use `webhookStatuses` +   `disabledWebhooks` only.  Sticky disable skips delivery; it does not unconfigure the URL (it stays in `webhookUrl`). Re-enable with `POST /webhook` or `POST /settings`. Those endpoints **replace** the whole list — with multiple URLs, send the full array. 

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

> <SetWebhook200Response> set_webhook(token, set_webhook_request)

Set webhook URL

Set the client webhook URL that receives inbound events for this channel.  **Replaces** the stored webhook list (it does not append). To deliver the same events to several endpoints, pass an array in `webhookUrl` (max 5) or use `POST /settings`. With several URLs already configured, posting only the disabled URL **drops the others** — send the complete array to re-enable one of many.  Incoming payloads include messages, delivery ACKs, group updates, coexistence echoes, and calling events. WhatsApp Calling payloads (`type: \"calls\"`) are documented under the **Calling** tag. Call permission replies arrive on the normal messages path (`call_permission_reply`).  Repeating `POST /webhook` with the same URL(s) clears an auto-disable (self-serve re-enable). Send/receive are not affected by webhook auto-disable. 

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
set_webhook_request = OneMsgSdk::SetWebhookRequest.new({webhook_url: nil}) # SetWebhookRequest | 

begin
  # Set webhook URL
  result = api_instance.set_webhook(token, set_webhook_request)
  p result
rescue OneMsgSdk::ApiError => e
  puts "Error when calling WebhooksApi->set_webhook: #{e}"
end
```

#### Using the set_webhook_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SetWebhook200Response>, Integer, Hash)> set_webhook_with_http_info(token, set_webhook_request)

```ruby
begin
  # Set webhook URL
  data, status_code, headers = api_instance.set_webhook_with_http_info(token, set_webhook_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SetWebhook200Response>
rescue OneMsgSdk::ApiError => e
  puts "Error when calling WebhooksApi->set_webhook_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | JWT token or API key for authorization |  |
| **set_webhook_request** | [**SetWebhookRequest**](SetWebhookRequest.md) |  |  |

### Return type

[**SetWebhook200Response**](SetWebhook200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

