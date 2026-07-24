

# SendOrderDetailsRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**phone** | **Integer** | Recipient phone (India E.164 digits, no +) |  [optional] |
|**chatId** | **String** | Recipient chatId (phone@c.us / bsuid@lid / …) |  [optional] |
|**template** | **String** | Approved template name with ORDER_DETAILS button |  |
|**namespace** | **String** | Template namespace |  |
|**language** | **Map&lt;String, Object&gt;** | Template language object, e.g. code \&quot;en\&quot; or policy \&quot;deterministic\&quot; with code \&quot;en\&quot;.  |  |
|**params** | **List&lt;Map&lt;String, Object&gt;&gt;** | Extra template components (header/body). An order_details button is appended automatically if missing.  |  [optional] |
|**order** | **Map&lt;String, Object&gt;** | Order object (items, subtotal, tax, shipping, discount, status) per Meta Payments India docs.  |  |
|**referenceId** | **String** | Unique order/payment reference id |  [optional] |
|**paymentSettings** | **Map&lt;String, Object&gt;** | Optional payment_settings (UPI / payment gateway / payment link).  |  [optional] |
|**currency** | **String** | Currency code (INR for India) |  [optional] |



