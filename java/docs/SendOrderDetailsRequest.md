

# SendOrderDetailsRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**phone** | **Integer** | Recipient phone (India E.164 digits, no +). Use phone or chatId. |  [optional] |
|**chatId** | **String** | Recipient chatId (e.g. phone@c.us). Use phone or chatId. |  [optional] |
|**template** | **String** | Approved Utility template name that includes an ORDER_DETAILS button |  |
|**namespace** | **String** | Template namespace from the channel / template list |  |
|**language** | **SendOrderDetailsRequestLanguage** |  |  |
|**params** | **List&lt;Map&lt;String, Object&gt;&gt;** | Extra template components (HEADER / BODY / etc.). If an order_details button is missing, the API appends one from order / referenceId / currency / paymentSettings.  |  [optional] |
|**referenceId** | **String** | Unique order / payment reference id (maps to reference_id) |  [optional] |
|**currency** | **String** | Currency code for India payments |  [optional] |
|**paymentSettings** | **Map&lt;String, Object&gt;** | Optional payment settings (UPI / payment gateway / payment link). Forwarded as payment_settings on the order_details action.  |  [optional] |
|**order** | **SendOrderDetailsRequestOrder** |  |  |



