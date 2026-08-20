

# GetWhatsappBusinessEncryption200Response


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**businessPublicKey** | **String** | Stored 2048-bit RSA public key (PEM) |  [optional] |
|**businessPublicKeySignatureStatus** | [**BusinessPublicKeySignatureStatusEnum**](#BusinessPublicKeySignatureStatusEnum) |  |  [optional] |
|**data** | **List&lt;Map&lt;String, Object&gt;&gt;** |  |  [optional] |



## Enum: BusinessPublicKeySignatureStatusEnum

| Name | Value |
|---- | -----|
| VALID | &quot;VALID&quot; |
| MISMATCH | &quot;MISMATCH&quot; |



