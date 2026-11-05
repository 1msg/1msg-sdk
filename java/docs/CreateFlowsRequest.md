

# CreateFlowsRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**name** | **String** | Flow name |  |
|**categories** | [**List&lt;CategoriesEnum&gt;**](#List&lt;CategoriesEnum&gt;) | One or more Flow categories |  |
|**endpointUri** | **String** | HTTPS endpoint for the Flow data channel |  [optional] |
|**publish** | **Boolean** | Publish immediately after create |  [optional] |
|**flowJson** | **Map&lt;String, Object&gt;** | Optional Flow JSON document |  [optional] |



## Enum: List&lt;CategoriesEnum&gt;

| Name | Value |
|---- | -----|
| SIGN_UP | &quot;SIGN_UP&quot; |
| SIGN_IN | &quot;SIGN_IN&quot; |
| APPOINTMENT_BOOKING | &quot;APPOINTMENT_BOOKING&quot; |
| LEAD_GENERATION | &quot;LEAD_GENERATION&quot; |
| CONTACT_US | &quot;CONTACT_US&quot; |
| CUSTOMER_SUPPORT | &quot;CUSTOMER_SUPPORT&quot; |
| SURVEY | &quot;SURVEY&quot; |
| OTHER | &quot;OTHER&quot; |



