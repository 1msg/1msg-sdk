# \ChannelApi

All URIs are relative to *https://api.1msg.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_conversational_automation**](ChannelApi.md#get_conversational_automation) | **GET** /conversationalAutomation | Get conversational automation settings
[**get_status**](ChannelApi.md#get_status) | **GET** /status | Get channel status
[**set_conversational_automation**](ChannelApi.md#set_conversational_automation) | **POST** /conversationalAutomation | Set conversational automation settings



## get_conversational_automation

> models::ConversationalAutomation get_conversational_automation(token)
Get conversational automation settings

Get WhatsApp conversational components for the channel (welcome message, ice-breaker prompts, and slash commands).  Proxies Meta/360dialog `GET /conversational_automation`.  When `enable_welcome_message` is true and a user opens chat for the first time, Meta delivers a webhook message with `type: request_welcome`. The inbound formatter exposes that as `type: \"request_welcome\"` and `meta.request_welcome: true` so your webhook can send a custom welcome reply. 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |

### Return type

[**models::ConversationalAutomation**](ConversationalAutomation.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_status

> std::collections::HashMap<String, serde_json::Value> get_status(token)
Get channel status

Returns WhatsApp Business API client connection status.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |

### Return type

[**std::collections::HashMap<String, serde_json::Value>**](serde_json::Value.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## set_conversational_automation

> std::collections::HashMap<String, serde_json::Value> set_conversational_automation(token, conversational_automation)
Set conversational automation settings

Update WhatsApp conversational components.  Allowed body fields (others are ignored): - `enable_welcome_message` (boolean) - `prompts` (string[], max 4, each ≤ 80 chars) - `commands` (`{ command_name, command_description }[]`)  Proxies Meta/360dialog `POST /conversational_automation`. 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**conversational_automation** | [**ConversationalAutomation**](ConversationalAutomation.md) |  | [required] |

### Return type

[**std::collections::HashMap<String, serde_json::Value>**](serde_json::Value.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

