

# SendAddressMessageRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**phone** | **Integer** | Recipient phone (E.164 digits, no +). Must match country. |  [optional] |
|**chatId** | **String** |  |  [optional] |
|**body** | **String** | Body text shown with the address request |  |
|**country** | [**CountryEnum**](#CountryEnum) | Address form country. Defaults to IN if omitted. |  [optional] |
|**values** | **Map&lt;String, Object&gt;** | Optional prefilled address fields |  [optional] |
|**savedAddresses** | **List&lt;Map&lt;String, Object&gt;&gt;** | Optional previously saved addresses for the user |  [optional] |
|**validationErrors** | **Map&lt;String, Object&gt;** | Optional field validation errors when re-prompting |  [optional] |
|**quotedMsgId** | **String** |  |  [optional] |



## Enum: CountryEnum

| Name | Value |
|---- | -----|
| IN | &quot;IN&quot; |
| SG | &quot;SG&quot; |



