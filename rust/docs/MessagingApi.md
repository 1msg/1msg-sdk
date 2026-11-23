# \MessagingApi

All URIs are relative to *https://api.1msg.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_read_message**](MessagingApi.md#create_read_message) | **POST** /readMessage | Mark message as read
[**create_upload_media**](MessagingApi.md#create_upload_media) | **POST** /uploadMedia | Upload media
[**delete_media**](MessagingApi.md#delete_media) | **DELETE** /media/{mediaId} | Delete media from WABA storage
[**delete_media_legacy**](MessagingApi.md#delete_media_legacy) | **POST** /deleteMedia | Delete media from WABA storage (deprecated alias)
[**get_mm_lite_status**](MessagingApi.md#get_mm_lite_status) | **GET** /mmLiteStatus | Get MM Lite availability and status
[**list_messages**](MessagingApi.md#list_messages) | **GET** /messages | Get messages list
[**retrieve_media**](MessagingApi.md#retrieve_media) | **GET** /retrieveMedia | Retrieve uploaded media metadata
[**send_address_message**](MessagingApi.md#send_address_message) | **POST** /sendAddressMessage | Send address request message
[**send_button**](MessagingApi.md#send_button) | **POST** /sendButton | Send Reply Buttons Message
[**send_carousel**](MessagingApi.md#send_carousel) | **POST** /sendCarousel | Send Carousel
[**send_contact**](MessagingApi.md#send_contact) | **POST** /sendContact | Send a Contact
[**send_contact_info**](MessagingApi.md#send_contact_info) | **POST** /sendContactInfo | Request the user's phone number
[**send_cta_url**](MessagingApi.md#send_cta_url) | **POST** /sendCtaUrl | Send CTA URL interactive message
[**send_file**](MessagingApi.md#send_file) | **POST** /sendFile | Send a File
[**send_flow**](MessagingApi.md#send_flow) | **POST** /sendFlow | Send WhatsApp Flow Message
[**send_list**](MessagingApi.md#send_list) | **POST** /sendList | Send List Message
[**send_location**](MessagingApi.md#send_location) | **POST** /sendLocation | Send a Location
[**send_location_request**](MessagingApi.md#send_location_request) | **POST** /sendLocationRequest | Send Location Request Message
[**send_message**](MessagingApi.md#send_message) | **POST** /sendMessage | Send a Message
[**send_order_details**](MessagingApi.md#send_order_details) | **POST** /sendOrderDetails | Send order details (India payments template)
[**send_payment_request**](MessagingApi.md#send_payment_request) | **POST** /sendPaymentRequest | Send payment request (regional)
[**send_product**](MessagingApi.md#send_product) | **POST** /sendProduct | Send a Product
[**send_reaction**](MessagingApi.md#send_reaction) | **POST** /sendReaction | Send Reaction
[**send_sticker**](MessagingApi.md#send_sticker) | **POST** /sendSticker | Send sticker message



## create_read_message

> models::CreateReadMessage200Response create_read_message(token, message_id, msg_id, typing_indicator)
Mark message as read

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**message_id** | Option<**String**> |  |  |
**msg_id** | Option<**String**> |  |  |
**typing_indicator** | Option<**bool**> | Show WhatsApp typing indicator (max 25s or until reply) |  |[default to false]

### Return type

[**models::CreateReadMessage200Response**](createReadMessage_200_response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_upload_media

> models::CreateUploadMedia200Response create_upload_media(token, create_upload_media_request)
Upload media

Upload a file to WhatsApp media storage and get a numeric `mediaId` for later use with `send_file` / `send_sticker` (`mediaId` field, not `body`).  Pass the file as `body` **or** `url` — an HTTP(S) URL or a base64 data URI. The `mediaId` in the response is a numeric string (keep it as a string). 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**create_upload_media_request** | [**CreateUploadMediaRequest**](CreateUploadMediaRequest.md) |  | [required] |

### Return type

[**models::CreateUploadMedia200Response**](createUploadMedia_200_response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_media

> models::SuccessResponse delete_media(token, media_id)
Delete media from WABA storage

Delete previously uploaded media by numeric `mediaId` (from `/uploadMedia`).  This is the canonical deletion endpoint and uses the REST `DELETE` verb on the media resource path. The older `POST /deleteMedia` is a deprecated alias. 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**media_id** | **String** | Numeric WABA media id | [required] |

### Return type

[**models::SuccessResponse**](SuccessResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_media_legacy

> models::SuccessResponse delete_media_legacy(token, delete_media_legacy_request)
Delete media from WABA storage (deprecated alias)

**Deprecated.** Use `DELETE /media/{mediaId}` instead.  This POST alias is kept for backward compatibility with earlier integrations. New integrations should call `DELETE /media/{mediaId}`: 1msg follows REST conventions for resource deletion going forward (delete a resource with the `DELETE` verb on its resource path). 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**delete_media_legacy_request** | [**DeleteMediaLegacyRequest**](DeleteMediaLegacyRequest.md) |  | [required] |

### Return type

[**models::SuccessResponse**](SuccessResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_mm_lite_status

> models::GetMmLiteStatus200Response get_mm_lite_status(token)
Get MM Lite availability and status

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |

### Return type

[**models::GetMmLiteStatus200Response**](getMmLiteStatus_200_response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_messages

> models::ListMessages200Response list_messages(token, chat_id, limit, last, last_message_number, first_message_number, min_time, max_time, msg_id)
Get messages list

List stored chat history for this channel (requires history storage). Filter with `chatId`, `limit`, `last`, message numbers, or time bounds. 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**chat_id** | Option<**String**> | Filter messages for one chat (`phone@c.us`, group `@g.us`, or BSUID `@lid`) |  |
**limit** | Option<**i32**> | Max rows to return (default 100) |  |
**last** | Option<**bool**> | If true, return the latest messages (DESC). Default false. |  |
**last_message_number** | Option<**i32**> |  |  |
**first_message_number** | Option<**i32**> |  |  |
**min_time** | Option<**i32**> | Unix timestamp lower bound |  |
**max_time** | Option<**i32**> | Unix timestamp upper bound |  |
**msg_id** | Option<**String**> | Filter by stored message id |  |

### Return type

[**models::ListMessages200Response**](listMessages_200_response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## retrieve_media

> models::RetrieveMedia200Response retrieve_media(token, media_id)
Retrieve uploaded media metadata

Get WABA media URL and metadata by mediaId (from uploadMedia). The returned `url` is temporary and typically expires within ~5 minutes. 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**media_id** | **String** |  | [required] |

### Return type

[**models::RetrieveMedia200Response**](retrieveMedia_200_response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_address_message

> models::MessageSentResponse send_address_message(token, send_address_message_request)
Send address request message

Request shipping address from the user (WhatsApp interactive `address_message`).  **India and Singapore only.** Requires: - Business WhatsApp number registered in that country - Recipient phone matching the country (`+91` ↔ `IN`, `+65` ↔ `SG`)  Pass `country: \"IN\"` or `country: \"SG\"`. Eligibility is validated upstream; mismatches (e.g. Singapore phone with `country: \"IN\"`) return errors such as `Unsupported Interactive Message type` (HTTP 200 with `sent: false`).  Optional action parameters: `values`, `saved_addresses`, `validation_errors`. 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**send_address_message_request** | [**SendAddressMessageRequest**](SendAddressMessageRequest.md) |  | [required] |

### Return type

[**models::MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_button

> models::MessageSentResponse send_button(token, send_button_request)
Send Reply Buttons Message

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**send_button_request** | Option<[**SendButtonRequest**](SendButtonRequest.md)> |  |  |

### Return type

[**models::MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_carousel

> models::MessageSentResponse send_carousel(token, body, cards, params, quoted_msg_id, chat_id, phone)
Send Carousel

You can send product cards via Carousel in two ways:  Template messages: do not require a 24-hour customer service window between you and the recipient. Use sendTemplate.  Free-form messages: can be sent only when a customer service window is open between you and the recipient. Use sendCarousel.  The message structure in /sendCarousel is largely similar to sending a template. However, in this case you must  explicitly specify all elements that are created in advance when working with templates. This is because the message  is sent without using a template.  In /sendCarousel, for a Catalog Carousel there can be either 1 URL button or one or more quick reply buttons.  Prefer the simple `cards` array (2–10 cards). Each card needs a header media/product plus a CTA URL or quick-reply buttons. Example:  ```json {   \"phone\": \"79001234567\",   \"body\": \"Pick a product\",   \"cards\": [     {       \"header\": { \"type\": \"image\", \"image\": { \"link\": \"https://example.com/1.jpg\" } },       \"body\": { \"text\": \"Card one\" },       \"type\": \"cta_url\",       \"action\": { \"name\": \"cta_url\", \"parameters\": { \"url\": \"https://example.com/p1\", \"display_text\": \"Open\" } }     },     {       \"header\": { \"type\": \"image\", \"image\": { \"link\": \"https://example.com/2.jpg\" } },       \"body\": { \"text\": \"Card two\" },       \"type\": \"cta_url\",       \"action\": { \"name\": \"cta_url\", \"parameters\": { \"url\": \"https://example.com/p2\", \"display_text\": \"Open\" } }     }   ] } ```  `params` with a `CAROUSEL` component is the template-like alternative. 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**body** | Option<**String**> | Text shown above the carousel. Optional. If omitted and params include a body component, the body will be taken from params. |  |
**cards** | Option<[**Vec<std::collections::HashMap<String, serde_json::Value>>**](Std__collections__HashMapStringSerdeJson__Value.md)> | Preferred. 2–10 carousel cards (header + body + CTA or quick replies). |  |
**params** | Option<[**Vec<serde_json::Value>**](SerdeJson__Value.md)> | Required. Template-like structure (same as sendTemplate params). Must include a CAROUSEL component and its cards.  Structure: - params[] item with type CAROUSEL and cards (2..10) - cards[] item:   - components[] items:     - header: parameters[0] with type image/video/product       - image: {\\\"image\\\": {\\\"link\\\": \\\"https://...\\\"}}       - video: {\\\"video\\\": {\\\"link\\\": \\\"https://...\\\"}}       - product: {\\\"product\\\": {\\\"catalog_id\\\": \\\"...\\\", \\\"product_retailer_id\\\": \\\"...\\\"}}     - button: sub_type url or quick_reply       - url: parameters {\\\"text\\\": \\\"Button\\\", \\\"url\\\": \\\"https://...\\\"}       - quick_reply: parameters[] of {\\\"id\\\": \\\"...\\\", \\\"text\\\": \\\"...\\\"}  |  |
**quoted_msg_id** | Option<**String**> | Quoted message ID (Cloud API) |  |
**chat_id** | Option<**String**> | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) |  |
**phone** | Option<**i32**> | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. |  |

### Return type

[**models::MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_contact

> models::MessageSentResponse send_contact(token, send_contact_request)
Send a Contact

Send a WhatsApp contact card.  Preferred simple body (legacy-compatible):  ```json {   \"phone\": \"79001234567\",   \"contact\": { \"name\": \"Lida\", \"phone\": \"+79181976551\" } } ```  Cloud API shape also works: `contacts` is an array of objects with `name.formatted_name` and `phones[].phone` (E.164 string, **not** a timestamp). 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**send_contact_request** | Option<[**SendContactRequest**](SendContactRequest.md)> |  |  |

### Return type

[**models::MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_contact_info

> models::MessageSentResponse send_contact_info(token, send_contact_info_request)
Request the user's phone number

Send a service-window interactive message that asks the WhatsApp user to share their phone number (`request_contact_info`).  Use this when you only know the user by BSUID (WhatsApp username) and the 24-hour customer service window is open. Outside that window, create a UTILITY or MARKETING template with a `REQUEST_CONTACT_INFO` button (`POST /addTemplate`) and send it with `POST /sendTemplate`.  `body` is the text shown above the button (1–1024 characters). WhatsApp chooses the button label. This method has no button-text field — do not send one.  ```json {   \"bsuid\": \"US.13491208655302741918\",   \"body\": \"Please share your phone number so we can reach you.\" } ```  `phone`, `chatId` (`…@c.us`, `…@lid`, `…@username`), or `bsuid` identifies the recipient. One of them is enough.  After Meta accepts the send, the outgoing webhook and stored history message use this same text as `messages[].body` (`type: interactive`).  When the user taps the button, Meta sends an inbound `contacts` message. The sender stays the BSUID. The shared number is on the card with `origin: contact_request`. We write that phone onto the existing BSUID contact automatically — there is no separate “link phone” call.  ```json {   \"contacts\": [     {       \"profile\": { \"name\": \"Ada\", \"username\": \"ada\" },       \"user_id\": \"US.13491208655302741918\"     }   ],   \"messages\": [     {       \"from_user_id\": \"US.13491208655302741918\",       \"type\": \"contacts\",       \"contacts\": [         {           \"origin\": \"contact_request\",           \"phones\": [{ \"phone\": \"+1 202-555-0123\", \"wa_id\": \"12025550123\" }]         }       ]     }   ] } ```  The stored inbound message body is the digits (`12025550123`).  If Meta later includes a phone on an ordinary message or status for that same BSUID (`wa_id`, `from`, or `recipient_id`, together with `user_id` / `recipient_user_id`), that phone is merged onto the same contact. A contact card the user forwards (`origin` other than `contact_request`) is someone else's number and is not stored as this sender's phone. 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**send_contact_info_request** | Option<[**SendContactInfoRequest**](SendContactInfoRequest.md)> |  |  |

### Return type

[**models::MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_cta_url

> models::MessageSentResponse send_cta_url(token, send_cta_url_request)
Send CTA URL interactive message

Send an interactive message with a single call-to-action URL button.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**send_cta_url_request** | [**SendCtaUrlRequest**](SendCtaUrlRequest.md) |  | [required] |

### Return type

[**models::MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_file

> models::MessageSentResponse send_file(token, body, filename, media_id, media_type, voice, caption, quoted_msg_id, chat_id, phone)
Send a File

Send a file to an existing chat. (Only if the dialogue has an Open Session).  Only one of two parameters is needed to determine the destination - chatId or phone. 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**body** | Option<**String**> | File source (required unless mediaId is set): - HTTP/HTTPS URL - Base64 data URI  |  |
**filename** | Option<**String**> | File name with extension (required with body, not with mediaId) |  |
**media_id** | Option<**String**> | WABA media id from uploadMedia (alternative to body) |  |
**media_type** | Option<**String**> | Required when using mediaId |  |
**voice** | Option<**bool**> | Native WhatsApp voice note (audio/ogg only) |  |
**caption** | Option<**String**> |  |  |
**quoted_msg_id** | Option<**String**> |  |  |
**chat_id** | Option<**String**> |  |  |
**phone** | Option<**i32**> |  |  |

### Return type

[**models::MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_flow

> models::MessageSentResponse send_flow(token, body, flow_id, flow_token, flow_cta, header, footer, flow_action, flow_action_payload, flow_message_version, mode, flow_action_data, flow_action_screen, quoted_msg_id, chat_id, phone)
Send WhatsApp Flow Message

Send Interactive WhatsApp Flow message to an existing chat. (Only if the dialogue has an Open Session).  Only one of two parameters is needed to determine the destination - chatId or phone.  Use this method to send a published WhatsApp Flow as a service (interactive) message.  If the 24-hour window is closed, send a template with a FLOW button via /sendTemplate. 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**body** | **String** | Flow message body text | [required] |
**flow_id** | **String** | Published Flow ID | [required] |
**flow_token** | **String** | Flow token generated by the business | [required] |
**flow_cta** | **String** | CTA button text | [required] |
**header** | Option<[**models::SendFlowRequestHeader**](SendFlowRequestHeader.md)> |  |  |
**footer** | Option<**String**> | Footer text |  |
**flow_action** | Option<**String**> | Flow action type |  |
**flow_action_payload** | Option<[**serde_json::Value**](SerdeJson__Value.md)> | Required for flowAction=navigate (screen is required). Ignored for data_exchange. If data is provided, it must be a non-empty object. |  |
**flow_message_version** | Option<**String**> | Flow message version (default \\\"3\\\") |  |
**mode** | Option<**String**> | Flow mode (draft or published). If omitted, provider default applies |  |
**flow_action_data** | Option<[**serde_json::Value**](SerdeJson__Value.md)> | Shortcut for flowActionPayload.data (optional) |  |
**flow_action_screen** | Option<**String**> | Shortcut for flowActionPayload.screen (optional) |  |
**quoted_msg_id** | Option<**String**> | Quoted message ID (Cloud API) |  |
**chat_id** | Option<**String**> | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) |  |
**phone** | Option<**i32**> | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. |  |

### Return type

[**models::MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_list

> models::MessageSentResponse send_list(token, send_list_request)
Send List Message

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**send_list_request** | Option<[**SendListRequest**](SendListRequest.md)> |  |  |

### Return type

[**models::MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_location

> models::MessageSentResponse send_location(token, lat, lng, address, name, quoted_msg_id, chat_id, phone)
Send a Location

Send a location to an existing chat. (Only if the dialogue has an Open Session).  Only one of two parameters is needed to determine the destination - chatId or phone. 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**lat** | **String** | Latitude of the location. Example: 45.018337 | [required] |
**lng** | **String** | Longitude of the location. Example: -73.968285 | [required] |
**address** | Option<**String**> | Address of the location. Only displayed if name is present. Example: 9766 Valley View St., New York, NY 10024 |  |
**name** | Option<**String**> | Name of the location. Example: Facebook HQ |  |
**quoted_msg_id** | Option<**String**> | Quoted message ID (Cloud API) |  |
**chat_id** | Option<**String**> | Required if phone is not set. Chat ID from the message list. Examples: 12020721369@c.us or 120363046942338209@g.us(group) |  |
**phone** | Option<**i32**> | Required if chatId is not set. A phone number starting with the country code. USA example: 12020721369. |  |

### Return type

[**models::MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_location_request

> models::MessageSentResponse send_location_request(token, send_location_request_request)
Send Location Request Message

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**send_location_request_request** | Option<[**SendLocationRequestRequest**](SendLocationRequestRequest.md)> |  |  |

### Return type

[**models::MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_message

> models::MessageSentResponse send_message(token, body, quoted_msg_id, chat_id, phone, category, direct_send)
Send a Message

Send a message to an existing chat. (Only if the dialogue has an Open Session).  The message will be added to the queue for sending and delivered even if the phone  is disconnected from the Internet or authorization is not passed.  Only one of two parameters is needed to determine the destination - chatId or phone.  Direct Send is in beta. Meta has not enabled it on every business portfolio, so `category` and `directSend` are a beta option: watch delivery errors before relying on them.  Set `category` to `utility` or `authentication` to send outside the 24-hour window as a Meta Direct Send template instead of the 1MSG marketing auto-template. `authentication` is part of that beta and is not recommended. `directSend.serviceFirst: true` tries a free service message first and uses Direct Send only when Meta rejects it because the window is closed (131047). `directSend.templateName` is only valid with `utility` (`^[a-z0-9_]+$`, max 512). Direct Send text is limited to 1024 characters. Without `templateName`, the first unseen phrase may be delivered as Meta's onboarding template. A named template does not guarantee delivery — wait for webhook errors 131000 or 132021. An open 24-hour window is still billed as utility when `category` is set and `serviceFirst` is not true. 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**body** | **String** | Message text, UTF-8 or UTF-16 string with emoji | [required] |
**quoted_msg_id** | Option<**String**> | Message ID to quote/reply to (Cloud API wamid) |  |
**chat_id** | Option<**String**> | Recipient chat ID: phone@c.us, group@g.us, or BSUID@lid |  |
**phone** | Option<**i32**> | Phone number starting with country code (alternative to chatId) |  |
**category** | Option<**String**> | Optional Direct Send category. Direct Send is in beta: Meta has not enabled it on every business portfolio. `utility` or `authentication` enables it. `authentication` is part of that beta and is not recommended. Omit or `service` keeps a normal service message (and the marketing auto-template outside the 24-hour window). `marketing` is rejected.  |  |
**direct_send** | Option<[**models::SendMessageRequestDirectSend**](SendMessageRequestDirectSend.md)> |  |  |

### Return type

[**models::MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_order_details

> models::MessageSentResponse send_order_details(token, send_order_details_request)
Send order details (India payments template)

Send a WhatsApp **order details** payment / invoice message using a pre-approved **Utility** template that has an `ORDER_DETAILS` button.  **India only** (WhatsApp Payments India). Requires: - India WhatsApp Business number - Commerce enabled on the channel (`GET`/`POST /commerce`) - Approved template with an `ORDER_DETAILS` button  Use this method when you need structured fields (`order`, `referenceId`, `currency`, `paymentSettings`). The API appends a template button `sub_type: order_details` and sends via the same path as `POST /sendTemplate`.  Works **outside the 24-hour session window** (template message).  You can also send the same payload yourself with `POST /sendTemplate` by including a button component in `params`:  ```json {   \"type\": \"button\",   \"sub_type\": \"order_details\",   \"index\": 0,   \"parameters\": [{     \"type\": \"action\",     \"action\": {       \"order_details\": {         \"reference_id\": \"order-123\",         \"currency\": \"INR\",         \"order\": { \"status\": \"pending\", \"items\": [], \"subtotal\": { \"offset\": 100, \"value\": 50000 } }       }     }   }] } ``` 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**send_order_details_request** | [**SendOrderDetailsRequest**](SendOrderDetailsRequest.md) |  | [required] |

### Return type

[**models::MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_payment_request

> models::MessageSentResponse send_payment_request(token, send_payment_request_request)
Send payment request (regional)

Send a regional payment request interactive message (beta scaffold). `region` must be IN, SG, or BR. Payload shape follows Meta regional payments docs; verify on stage before production use. Full regional builders are not implemented yet. 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**send_payment_request_request** | [**SendPaymentRequestRequest**](SendPaymentRequestRequest.md) |  | [required] |

### Return type

[**models::MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_product

> models::MessageSentResponse send_product(token, send_product_request)
Send a Product

Send a single catalog product or a product list. Destination is `chatId` or `phone`. `action` is required: - single product: `{ \"catalog_id\": \"...\", \"product_retailer_id\": \"...\" }` - product list: `{ \"catalog_id\": \"...\", \"sections\": [{ \"title\": \"...\", \"product_items\": [{ \"product_retailer_id\": \"...\" }] }] }` 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**send_product_request** | [**SendProductRequest**](SendProductRequest.md) |  | [required] |

### Return type

[**models::MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_reaction

> models::MessageSentResponse send_reaction(token, send_reaction_request)
Send Reaction

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**send_reaction_request** | Option<[**SendReactionRequest**](SendReactionRequest.md)> |  |  |

### Return type

[**models::MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_sticker

> models::MessageSentResponse send_sticker(token, send_sticker_request)
Send sticker message

Send a WhatsApp sticker by mediaId or link URL.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**send_sticker_request** | [**SendStickerRequest**](SendStickerRequest.md) |  | [required] |

### Return type

[**models::MessageSentResponse**](MessageSentResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

