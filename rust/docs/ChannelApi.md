# \ChannelApi

All URIs are relative to *https://api.1msg.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_commerce**](ChannelApi.md#create_commerce) | **POST** /commerce | Set Commerce Settings
[**get_commerce**](ChannelApi.md#get_commerce) | **GET** /commerce | Get Commerce Settings
[**get_conversational_automation**](ChannelApi.md#get_conversational_automation) | **GET** /conversationalAutomation | Get conversational automation settings
[**get_status**](ChannelApi.md#get_status) | **GET** /status | Get channel status
[**set_conversational_automation**](ChannelApi.md#set_conversational_automation) | **POST** /conversationalAutomation | Set conversational automation settings



## create_commerce

> models::CreateCommerce200Response create_commerce(token, create_commerce_request)
Set Commerce Settings

Update catalog/cart commerce settings (`params` object). Blocked when the channel subscription limit is exceeded. Requires commerce-capable channel (Cloud Functions `/commerceWAV2`). 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**create_commerce_request** | Option<[**CreateCommerceRequest**](CreateCommerceRequest.md)> |  |  |

### Return type

[**models::CreateCommerce200Response**](createCommerce_200_response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_commerce

> Vec<models::GetCommerce200ResponseInner> get_commerce(token)
Get Commerce Settings

Returns catalog/cart commerce settings for the channel. `is_catalog_visible` — show catalog storefront icon. `is_cart_enabled` — enable cart. 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |

### Return type

[**Vec<models::GetCommerce200ResponseInner>**](getCommerce_200_response_inner.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_conversational_automation

> std::collections::HashMap<String, serde_json::Value> get_conversational_automation(token)
Get conversational automation settings

Proxy to WABA conversational_automation. Path verified per channel/provider.

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

> std::collections::HashMap<String, serde_json::Value> set_conversational_automation(token, request_body)
Set conversational automation settings

Update WABA conversational_automation settings.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**request_body** | Option<[**std::collections::HashMap<String, serde_json::Value>**](SerdeJson__Value.md)> |  |  |

### Return type

[**std::collections::HashMap<String, serde_json::Value>**](serde_json::Value.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

