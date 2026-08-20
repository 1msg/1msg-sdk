# SendOrderDetailsRequestOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | Option<**String**> | Order status | [optional]
**items** | [**Vec<models::SendOrderDetailsRequestOrderItemsInner>**](SendOrderDetailsRequestOrderItemsInner.md) | Line items | 
**subtotal** | Option<[**models::SendOrderDetailsRequestOrderItemsInnerAmount**](SendOrderDetailsRequestOrderItemsInnerAmount.md)> |  | [optional]
**tax** | Option<**std::collections::HashMap<String, serde_json::Value>**> |  | [optional]
**shipping** | Option<**std::collections::HashMap<String, serde_json::Value>**> |  | [optional]
**discount** | Option<**std::collections::HashMap<String, serde_json::Value>**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


