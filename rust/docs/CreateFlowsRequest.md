# CreateFlowsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Flow name | 
**categories** | **Vec<Categories>** | One or more Flow categories (enum: SIGN_UP, SIGN_IN, APPOINTMENT_BOOKING, LEAD_GENERATION, CONTACT_US, CUSTOMER_SUPPORT, SURVEY, OTHER) | 
**endpoint_uri** | Option<**String**> | HTTPS endpoint for the Flow data channel | [optional]
**publish** | Option<**bool**> | Publish immediately after create | [optional]
**flow_json** | Option<**std::collections::HashMap<String, serde_json::Value>**> | Optional Flow JSON document | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


