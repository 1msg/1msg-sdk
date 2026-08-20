# \CatalogApi

All URIs are relative to *https://api.1msg.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_commerce**](CatalogApi.md#create_commerce) | **POST** /commerce | Set Commerce Settings
[**get_commerce**](CatalogApi.md#get_commerce) | **GET** /commerce | Get Commerce Settings



## create_commerce

> models::CreateCommerce200Response create_commerce(token, create_commerce_request)
Set Commerce Settings

Update catalog/cart commerce settings via the `params` object.  - `params.is_catalog_visible` — show catalog storefront icon (`true`) or hide it (`false`). - `params.is_cart_enabled` — enable cart (`true`) or disable it (`false`).  Blocked when the channel subscription limit is exceeded. Requires a commerce-capable channel (Cloud Functions `/commerceWAV2`). 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**create_commerce_request** | [**CreateCommerceRequest**](CreateCommerceRequest.md) |  | [required] |

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

Returns catalog/cart commerce settings for the channel.  - `is_catalog_visible` — show catalog storefront icon (`true`) or hide it (`false`). - `is_cart_enabled` — enable cart (`true`) or disable it (`false`). 

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

