# \FlowsApi

All URIs are relative to *https://api.1msg.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_flows**](FlowsApi.md#create_flows) | **POST** /flows | Create Flow
[**create_flows_flow_id_deprecate**](FlowsApi.md#create_flows_flow_id_deprecate) | **POST** /flows/{flowId}/deprecate | Deprecate Flow
[**create_flows_flow_id_publish**](FlowsApi.md#create_flows_flow_id_publish) | **POST** /flows/{flowId}/publish | Publish Flow
[**delete_flows_flow_id**](FlowsApi.md#delete_flows_flow_id) | **DELETE** /flows/{flowId} | Delete Flow
[**get_flows_flow_id**](FlowsApi.md#get_flows_flow_id) | **GET** /flows/{flowId} | Get Flow Details
[**get_flows_flow_id_preview**](FlowsApi.md#get_flows_flow_id_preview) | **GET** /flows/{flowId}/preview | Preview Flow
[**get_whatsapp_business_encryption**](FlowsApi.md#get_whatsapp_business_encryption) | **GET** /whatsapp_business_encryption | Get business encryption public key
[**list_flows**](FlowsApi.md#list_flows) | **GET** /flows | List Flows
[**patch_flows_flow_id_assets**](FlowsApi.md#patch_flows_flow_id_assets) | **PATCH** /flows/{flowId}/assets | Update Flow Structure
[**patch_flows_flow_id_metadata**](FlowsApi.md#patch_flows_flow_id_metadata) | **PATCH** /flows/{flowId}/metadata | Update Flow Metadata
[**set_whatsapp_business_encryption**](FlowsApi.md#set_whatsapp_business_encryption) | **POST** /whatsapp_business_encryption | Set business encryption public key



## create_flows

> models::CreateGroups200Response create_flows(token, waba_account_id)
Create Flow

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**waba_account_id** | Option<**String**> |  |  |

### Return type

[**models::CreateGroups200Response**](createGroups_200_response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_flows_flow_id_deprecate

> std::collections::HashMap<String, serde_json::Value> create_flows_flow_id_deprecate(flow_id, token, waba_account_id)
Deprecate Flow

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**flow_id** | **String** | Flow ID | [required] |
**token** | **String** | JWT token or API key for authorization | [required] |
**waba_account_id** | Option<**String**> |  |  |

### Return type

[**std::collections::HashMap<String, serde_json::Value>**](serde_json::Value.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_flows_flow_id_publish

> std::collections::HashMap<String, serde_json::Value> create_flows_flow_id_publish(flow_id, token, waba_account_id)
Publish Flow

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**flow_id** | **String** | Flow ID | [required] |
**token** | **String** | JWT token or API key for authorization | [required] |
**waba_account_id** | Option<**String**> |  |  |

### Return type

[**std::collections::HashMap<String, serde_json::Value>**](serde_json::Value.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_flows_flow_id

> models::DeleteFlowsFlowId200Response delete_flows_flow_id(flow_id, token, waba_account_id)
Delete Flow

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**flow_id** | **String** | Flow ID | [required] |
**token** | **String** | JWT token or API key for authorization | [required] |
**waba_account_id** | Option<**String**> |  |  |

### Return type

[**models::DeleteFlowsFlowId200Response**](deleteFlowsFlowId_200_response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_flows_flow_id

> models::CreateGroups200Response get_flows_flow_id(flow_id, token, waba_account_id)
Get Flow Details

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**flow_id** | **String** | Flow ID | [required] |
**token** | **String** | JWT token or API key for authorization | [required] |
**waba_account_id** | Option<**String**> |  |  |

### Return type

[**models::CreateGroups200Response**](createGroups_200_response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_flows_flow_id_preview

> std::collections::HashMap<String, serde_json::Value> get_flows_flow_id_preview(flow_id, token, waba_account_id)
Preview Flow

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**flow_id** | **String** | Flow ID | [required] |
**token** | **String** | JWT token or API key for authorization | [required] |
**waba_account_id** | Option<**String**> |  |  |

### Return type

[**std::collections::HashMap<String, serde_json::Value>**](serde_json::Value.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_whatsapp_business_encryption

> models::GetWhatsappBusinessEncryption200Response get_whatsapp_business_encryption(token)
Get business encryption public key

Retrieve the WhatsApp business public key and signature status for this channel's phone number. Required before publishing or sending Flows that use data encryption. 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |

### Return type

[**models::GetWhatsappBusinessEncryption200Response**](getWhatsappBusinessEncryption_200_response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_flows

> models::ListFlows200Response list_flows(token, waba_account_id)
List Flows

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**waba_account_id** | Option<**String**> |  |  |

### Return type

[**models::ListFlows200Response**](listFlows_200_response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## patch_flows_flow_id_assets

> models::PatchFlowsFlowIdAssets200Response patch_flows_flow_id_assets(flow_id, token, waba_account_id)
Update Flow Structure

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**flow_id** | **String** | Flow ID | [required] |
**token** | **String** | JWT token or API key for authorization | [required] |
**waba_account_id** | Option<**String**> |  |  |

### Return type

[**models::PatchFlowsFlowIdAssets200Response**](patchFlowsFlowIdAssets_200_response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## patch_flows_flow_id_metadata

> std::collections::HashMap<String, serde_json::Value> patch_flows_flow_id_metadata(flow_id, token, waba_account_id)
Update Flow Metadata

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**flow_id** | **String** | Flow ID | [required] |
**token** | **String** | JWT token or API key for authorization | [required] |
**waba_account_id** | Option<**String**> |  |  |

### Return type

[**std::collections::HashMap<String, serde_json::Value>**](serde_json::Value.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## set_whatsapp_business_encryption

> models::CreateCommerce200Response set_whatsapp_business_encryption(token, set_whatsapp_business_encryption_request)
Set business encryption public key

Upload and sign a 2048-bit RSA business public key (PEM) for this channel's phone number. Meta requires a signed key before Flow publish/send. Only one active key per number; a new upload replaces the previous key. 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**set_whatsapp_business_encryption_request** | [**SetWhatsappBusinessEncryptionRequest**](SetWhatsappBusinessEncryptionRequest.md) |  | [required] |

### Return type

[**models::CreateCommerce200Response**](createCommerce_200_response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

