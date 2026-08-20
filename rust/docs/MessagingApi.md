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
[**send_cta_url**](MessagingApi.md#send_cta_url) | **POST** /sendCtaUrl | Send CTA URL interactive message
[**send_file**](MessagingApi.md#send_file) | **POST** /sendFile | Send a File
[**send_flow**](MessagingApi.md#send_flow) | **POST** /sendFlow | Send WhatsApp Flow Message
[**send_list**](MessagingApi.md#send_list) | **POST** /sendList | Send List Message
[**send_location**](MessagingApi.md#send_location) | **POST** /sendLocation | Send a Location
[**send_location_request**](MessagingApi.md#send_location_request) | **POST** /sendLocationRequest | Send Location Request Message
[**send_message**](MessagingApi.md#send_message) | **POST** /sendMessage | Send a Message
[**send_order_details**](MessagingApi.md#send_order_details) | **POST** /sendOrderDetails | Send order details template message
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

> create_upload_media(token, request_body)
Upload media

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**request_body** | Option<[**std::collections::HashMap<String, serde_json::Value>**](SerdeJson__Value.md)> |  |  |

### Return type

 (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

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

> models::ListMessages200Response list_messages(token)
Get messages list

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |

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

Request shipping address from user (India only).

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

> models::MessageSentResponse send_carousel(token, params, body, quoted_msg_id, chat_id, phone)
Send Carousel

You can send product cards via Carousel in two ways:  Template messages: do not require a 24-hour customer service window between you and the recipient. Use sendTemplate.  Free-form messages: can be sent only when a customer service window is open between you and the recipient. Use sendCarousel.  The message structure in /sendCarousel is largely similar to sending a template. However, in this case you must  explicitly specify all elements that are created in advance when working with templates. This is because the message  is sent without using a template.  In /sendCarousel, for sending a Catalog Carousel there can be either 1 URL button or one or more quick reply buttons. 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**params** | [**Vec<serde_json::Value>**](SerdeJson__Value.md) | Required. Template-like structure (same as sendTemplate params). Must include a CAROUSEL component and its cards.  Structure: - params[] item with type CAROUSEL and cards (2..10) - cards[] item:   - components[] items:     - header: parameters[0] with type image/video/product       - image: {\\\"image\\\": {\\\"link\\\": \\\"https://...\\\"}}       - video: {\\\"video\\\": {\\\"link\\\": \\\"https://...\\\"}}       - product: {\\\"product\\\": {\\\"catalog_id\\\": \\\"...\\\", \\\"product_retailer_id\\\": \\\"...\\\"}}     - button: sub_type url or quick_reply       - url: parameters {\\\"text\\\": \\\"Button\\\", \\\"url\\\": \\\"https://...\\\"}       - quick_reply: parameters[] of {\\\"id\\\": \\\"...\\\", \\\"text\\\": \\\"...\\\"}  | [required] |
**body** | Option<**String**> | Text shown above the carousel. Optional. If omitted and params include a body component, the body will be taken from params. |  |
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

> models::MessageSentResponse send_message(token, body, quoted_msg_id, chat_id, phone)
Send a Message

Send a message to an existing chat. (Only if the dialogue has an Open Session).  The message will be added to the queue for sending and delivered even if the phone  is disconnected from the Internet or authorization is not passed.  Only one of two parameters is needed to determine the destination - chatId or phone. 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**body** | **String** | Message text, UTF-8 or UTF-16 string with emoji | [required] |
**quoted_msg_id** | Option<**String**> | Message ID to quote/reply to (Cloud API wamid) |  |
**chat_id** | Option<**String**> | Chat ID in format: phone@c.us (individual) or phone@g.us (group) |  |
**phone** | Option<**i32**> | Phone number starting with country code (alternative to chatId) |  |

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
Send order details template message

Send a WhatsApp order_details template (payments flow). Requires commerce-enabled channel and a pre-approved order_details template. Region/product gates apply. 

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

> models::MessageSentResponse send_product(token, request_body)
Send a Product

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token** | **String** | JWT token or API key for authorization | [required] |
**request_body** | Option<[**std::collections::HashMap<String, serde_json::Value>**](SerdeJson__Value.md)> |  |  |

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

