

# CallingSettingsCalling

Calling feature configuration for the business phone number

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**status** | [**StatusEnum**](#StatusEnum) | Enable or disable Calling API on this number |  [optional] |
|**callIconVisibility** | [**CallIconVisibilityEnum**](#CallIconVisibilityEnum) | Controls call icon visibility in the WhatsApp client |  [optional] |
|**callbackPermissionStatus** | [**CallbackPermissionStatusEnum**](#CallbackPermissionStatusEnum) | When ENABLED, a user who calls your business automatically grants call permission for business-initiated callbacks (subject to Meta rules).  |  [optional] |
|**srtpKeyExchangeProtocol** | [**SrtpKeyExchangeProtocolEnum**](#SrtpKeyExchangeProtocolEnum) | SRTP key exchange. DTLS is default/recommended. SDES is only valid when SIP signaling is enabled.  |  [optional] |
|**callHours** | **CallingSettingsCallingCallHours** |  |  [optional] |
|**sip** | **CallingSettingsCallingSip** |  |  [optional] |
|**video** | **CallingSettingsCallingVideo** |  |  [optional] |
|**audio** | **CallingSettingsCallingAudio** |  |  [optional] |
|**restrictions** | **Map&lt;String, Object&gt;** | Calling restrictions (response-only) |  [optional] |
|**ipAddresses** | **Map&lt;String, Object&gt;** | Meta media IP ranges (response-only) |  [optional] |
|**callIcons** | **Map&lt;String, Object&gt;** | Call icon country restrictions (response-only) |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| ENABLED | &quot;ENABLED&quot; |
| DISABLED | &quot;DISABLED&quot; |



## Enum: CallIconVisibilityEnum

| Name | Value |
|---- | -----|
| DEFAULT | &quot;DEFAULT&quot; |
| DISABLE_ALL | &quot;DISABLE_ALL&quot; |



## Enum: CallbackPermissionStatusEnum

| Name | Value |
|---- | -----|
| ENABLED | &quot;ENABLED&quot; |
| DISABLED | &quot;DISABLED&quot; |



## Enum: SrtpKeyExchangeProtocolEnum

| Name | Value |
|---- | -----|
| DTLS | &quot;DTLS&quot; |
| SDES | &quot;SDES&quot; |



