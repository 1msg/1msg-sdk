

# CallingSettingsCallingSip

SIP trunk settings. When SIP is ENABLED, Graph call actions and calling webhooks are not used — Meta dials your SIP server directly. 

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**status** | [**StatusEnum**](#StatusEnum) |  |  [optional] |
|**servers** | **List&lt;CallingSettingsCallingSipServersInner&gt;** |  |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| ENABLED | &quot;ENABLED&quot; |
| DISABLED | &quot;DISABLED&quot; |



