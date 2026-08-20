

# SendFlowRequest1


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**body** | **String** |  |  |
|**header** | [**SendFlowRequest1Header**](SendFlowRequest1Header.md) |  |  [optional] |
|**footer** | **String** |  |  [optional] |
|**flowId** | **String** |  |  |
|**flowToken** | **String** |  |  |
|**flowCta** | **String** |  |  |
|**flowAction** | [**FlowActionEnum**](#FlowActionEnum) |  |  [optional] |
|**flowActionPayload** | **Object** |  |  [optional] |
|**flowMessageVersion** | **String** |  |  [optional] |
|**mode** | [**ModeEnum**](#ModeEnum) |  |  [optional] |
|**flowActionData** | **Object** |  |  [optional] |
|**flowActionScreen** | **String** |  |  [optional] |
|**quotedMsgId** | **String** |  |  [optional] |
|**chatId** | **String** |  |  [optional] |
|**phone** | **Integer** |  |  [optional] |



## Enum: FlowActionEnum

| Name | Value |
|---- | -----|
| NAVIGATE | &quot;navigate&quot; |
| DATA_EXCHANGE | &quot;data_exchange&quot; |



## Enum: ModeEnum

| Name | Value |
|---- | -----|
| DRAFT | &quot;draft&quot; |
| PUBLISHED | &quot;published&quot; |



