# SendFlowRequest1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **String** |  | 
**header** | Option<[**models::SendFlowRequest1Header**](SendFlowRequest1Header.md)> |  | [optional]
**footer** | Option<**String**> |  | [optional]
**flow_id** | **String** |  | 
**flow_token** | **String** |  | 
**flow_cta** | **String** |  | 
**flow_action** | Option<**FlowAction**> |  (enum: navigate, data_exchange) | [optional]
**flow_action_payload** | Option<**serde_json::Value**> |  | [optional]
**flow_message_version** | Option<**String**> |  | [optional]
**mode** | Option<**Mode**> |  (enum: draft, published) | [optional]
**flow_action_data** | Option<**serde_json::Value**> |  | [optional]
**flow_action_screen** | Option<**String**> |  | [optional]
**quoted_msg_id** | Option<**String**> |  | [optional]
**chat_id** | Option<**String**> |  | [optional]
**phone** | Option<**i32**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


