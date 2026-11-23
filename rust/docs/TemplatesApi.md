# \TemplatesApi

All URIs are relative to *https://api.1msg.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_template**](TemplatesApi.md#add_template) | **POST** /addTemplate | Create message template
[**list_templates**](TemplatesApi.md#list_templates) | **GET** /templates | Get templates list
[**remove_template**](TemplatesApi.md#remove_template) | **POST** /removeTemplate | Remove message template
[**send_template**](TemplatesApi.md#send_template) | **POST** /sendTemplate | Send Template Message



## add_template

> models::AddTemplate200Response add_template(token, add_template_request)
Create message template

Create a WABA message template (`name`, `category`, `language`, `components`). After create, Meta reviews the template; list it with `GET /templates`.  Authentication OTP templates (`category: AUTHENTICATION`, copy-code / OTP button) can later be sent only to a phone number. Meta does not accept a BSUID recipient for them (error 131062). If the recipient is known only by BSUID — for example they use a username and their phone number is not in your Business Portfolio — that template cannot be sent.  To ask a BSUID user for their phone number, add a `REQUEST_CONTACT_INFO` button on a `UTILITY` or `MARKETING` template. Do not send `text` on that button — WhatsApp sets the label (and rejects a custom one). The button also has no send-time parameters: `POST /sendTemplate` does not take a button component for it. Inside an open 24-hour window, call `POST /sendContactInfo` instead of a template.  When the user shares the number, the inbound webhook is a `contacts` message with `origin: contact_request`. The phone is stored on that BSUID automatically. See `POST /sendContactInfo`.  ```json {   \"name\": \"request_phone\",   \"category\": \"UTILITY\",   \"language\": \"en_US\",   \"components\": [     {       \"type\": \"BODY\",       \"text\": \"Please share your phone number so we can continue.\"     },     {       \"type\": \"BUTTONS\",       \"buttons\": [{ \"type\": \"REQUEST_CONTACT_INFO\" }]     }   ] } ``` 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**add_template_request** | Option<[**AddTemplateRequest**](AddTemplateRequest.md)> |  |  |

### Return type

[**models::AddTemplate200Response**](addTemplate_200_response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_templates

> models::ListTemplates200Response list_templates(token, limit, offset, sort)
Get templates list

List message templates. Paginate with `limit` / `offset`; sort by `id`, `name`, or `status`.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**limit** | Option<**i32**> |  |  |
**offset** | Option<**i32**> |  |  |
**sort** | Option<**String**> | Sort field (`id`, `name`, or `status`) |  |

### Return type

[**models::ListTemplates200Response**](listTemplates_200_response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## remove_template

> std::collections::HashMap<String, serde_json::Value> remove_template(token, remove_template_request)
Remove message template

Delete a message template by `name` (all language versions of that name).

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**remove_template_request** | [**RemoveTemplateRequest**](RemoveTemplateRequest.md) |  | [required] |

### Return type

[**std::collections::HashMap<String, serde_json::Value>**](serde_json::Value.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_template

> std::collections::HashMap<String, serde_json::Value> send_template(token, send_template_request)
Send Template Message

Send a WhatsApp **template** message (works outside the 24-hour session window).  Use this tool — not `send_message` — when the 24h session is closed.  `params` MUST be Cloud API **component objects**, never a flat list of strings and never the old On-Prem `hsm` / `localizable_params` format.  Example body variable `{{1}}`:  ```json {   \"type\": \"body\",   \"parameters\": [{ \"type\": \"text\", \"text\": \"Ivan\" }] } ```  Do not send `\"type\": \"hsm\"` and do not send `params: [\"Ivan\", \"123\"]`.  Supported `params` button `sub_type` values include: `url`, `quick_reply`, `copy_code` / `coupon_code`, `catalog`, `flow`, `limited_time_offer`, and **`order_details`** (WhatsApp Payments **India only** — requires an approved Utility template with an ORDER_DETAILS button).  Convenience wrapper with structured fields: `POST /sendOrderDetails`.  Authentication OTP templates (category `AUTHENTICATION`, or a template with an OTP / copy-code button) can only be sent to a phone number (`phone` or a phone `chatId`). Meta rejects a BSUID `recipient` for these templates with error 131062. If the recipient is known only by BSUID — for example they use a username and their phone number is not in your Business Portfolio — the template cannot be sent.  A `REQUEST_CONTACT_INFO` button (UTILITY or MARKETING only) has no send-time parameters. Do not add a button component for it in `params`, and do not send button text — WhatsApp sets that label on the template. Create the button with `POST /addTemplate` as `{ \"type\": \"REQUEST_CONTACT_INFO\" }` with no `text`. Inside an open 24-hour window, `POST /sendContactInfo` asks for the number without a template. 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**send_template_request** | Option<[**SendTemplateRequest**](SendTemplateRequest.md)> |  |  |

### Return type

[**std::collections::HashMap<String, serde_json::Value>**](serde_json::Value.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

