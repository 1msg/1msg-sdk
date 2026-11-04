# OneMsg.Sdk.Api.TemplatesApi

All URIs are relative to *https://api.1msg.io*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**AddTemplate**](TemplatesApi.md#addtemplate) | **POST** /addTemplate | Create message template |
| [**ListTemplates**](TemplatesApi.md#listtemplates) | **GET** /templates | Get templates list |
| [**RemoveTemplate**](TemplatesApi.md#removetemplate) | **POST** /removeTemplate | Remove message template |
| [**SendTemplate**](TemplatesApi.md#sendtemplate) | **POST** /sendTemplate | Send Template Message |

<a id="addtemplate"></a>
# **AddTemplate**
> AddTemplate200Response AddTemplate (string token, AddTemplateRequest addTemplateRequest = null)

Create message template

Create a WABA message template (`name`, `category`, `language`, `components`). After create, Meta reviews the template; list it with `GET /templates`.  Authentication OTP templates (`category: AUTHENTICATION`, copy-code / OTP button) can later be sent only to a phone number. Meta does not accept a BSUID recipient for them (error 131062). If the recipient is known only by BSUID — for example they use a username and their phone number is not in your Business Portfolio — that template cannot be sent.  To ask a BSUID user for their phone number, add a `REQUEST_CONTACT_INFO` button on a `UTILITY` or `MARKETING` template. Do not send `text` on that button — WhatsApp sets the label (and rejects a custom one). The button also has no send-time parameters: `POST /sendTemplate` does not take a button component for it. Inside an open 24-hour window, call `POST /sendContactInfo` instead of a template.  When the user shares the number, the inbound webhook is a `contacts` message with `origin: contact_request`. The phone is stored on that BSUID automatically. See `POST /sendContactInfo`.  ```json {   \"name\": \"request_phone\",   \"category\": \"UTILITY\",   \"language\": \"en_US\",   \"components\": [     {       \"type\": \"BODY\",       \"text\": \"Please share your phone number so we can continue.\"     },     {       \"type\": \"BUTTONS\",       \"buttons\": [{ \"type\": \"REQUEST_CONTACT_INFO\" }]     }   ] } ``` 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class AddTemplateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new TemplatesApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var addTemplateRequest = new AddTemplateRequest(); // AddTemplateRequest |  (optional) 

            try
            {
                // Create message template
                AddTemplate200Response result = apiInstance.AddTemplate(token, addTemplateRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TemplatesApi.AddTemplate: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddTemplateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create message template
    ApiResponse<AddTemplate200Response> response = apiInstance.AddTemplateWithHttpInfo(token, addTemplateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TemplatesApi.AddTemplateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **addTemplateRequest** | [**AddTemplateRequest**](AddTemplateRequest.md) |  | [optional]  |

### Return type

[**AddTemplate200Response**](AddTemplate200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Template created. Provider payload is wrapped in &#x60;response&#x60;. |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listtemplates"></a>
# **ListTemplates**
> ListTemplates200Response ListTemplates (string token, int? limit = null, int? offset = null, string sort = null)

Get templates list

List message templates. Paginate with `limit` / `offset`; sort by `id`, `name`, or `status`.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class ListTemplatesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new TemplatesApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var limit = 56;  // int? |  (optional) 
            var offset = 56;  // int? |  (optional) 
            var sort = "id";  // string | Sort field (`id`, `name`, or `status`) (optional) 

            try
            {
                // Get templates list
                ListTemplates200Response result = apiInstance.ListTemplates(token, limit, offset, sort);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TemplatesApi.ListTemplates: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListTemplatesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get templates list
    ApiResponse<ListTemplates200Response> response = apiInstance.ListTemplatesWithHttpInfo(token, limit, offset, sort);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TemplatesApi.ListTemplatesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **limit** | **int?** |  | [optional]  |
| **offset** | **int?** |  | [optional]  |
| **sort** | **string** | Sort field (&#x60;id&#x60;, &#x60;name&#x60;, or &#x60;status&#x60;) | [optional]  |

### Return type

[**ListTemplates200Response**](ListTemplates200Response.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="removetemplate"></a>
# **RemoveTemplate**
> Dictionary&lt;string, Object&gt; RemoveTemplate (string token, RemoveTemplateRequest removeTemplateRequest)

Remove message template

Delete a message template by `name` (all language versions of that name).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class RemoveTemplateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new TemplatesApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var removeTemplateRequest = new RemoveTemplateRequest(); // RemoveTemplateRequest | 

            try
            {
                // Remove message template
                Dictionary<string, Object> result = apiInstance.RemoveTemplate(token, removeTemplateRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TemplatesApi.RemoveTemplate: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RemoveTemplateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove message template
    ApiResponse<Dictionary<string, Object>> response = apiInstance.RemoveTemplateWithHttpInfo(token, removeTemplateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TemplatesApi.RemoveTemplateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **removeTemplateRequest** | [**RemoveTemplateRequest**](RemoveTemplateRequest.md) |  |  |

### Return type

**Dictionary<string, Object>**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Template removed |  -  |
| **401** | Invalid or missing authentication token |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="sendtemplate"></a>
# **SendTemplate**
> Dictionary&lt;string, Object&gt; SendTemplate (string token, SendTemplateRequest sendTemplateRequest = null)

Send Template Message

Send a WhatsApp **template** message (works outside the 24-hour session window).  Use this tool — not `send_message` — when the 24h session is closed.  `params` MUST be Cloud API **component objects**, never a flat list of strings and never the old On-Prem `hsm` / `localizable_params` format.  Example body variable `{{1}}`:  ```json {   \"type\": \"body\",   \"parameters\": [{ \"type\": \"text\", \"text\": \"Ivan\" }] } ```  Do not send `\"type\": \"hsm\"` and do not send `params: [\"Ivan\", \"123\"]`.  Supported `params` button `sub_type` values include: `url`, `quick_reply`, `copy_code` / `coupon_code`, `catalog`, `flow`, `limited_time_offer`, and **`order_details`** (WhatsApp Payments **India only** — requires an approved Utility template with an ORDER_DETAILS button).  Convenience wrapper with structured fields: `POST /sendOrderDetails`.  Authentication OTP templates (category `AUTHENTICATION`, or a template with an OTP / copy-code button) can only be sent to a phone number (`phone` or a phone `chatId`). Meta rejects a BSUID `recipient` for these templates with error 131062. If the recipient is known only by BSUID — for example they use a username and their phone number is not in your Business Portfolio — the template cannot be sent.  A `REQUEST_CONTACT_INFO` button (UTILITY or MARKETING only) has no send-time parameters. Do not add a button component for it in `params`, and do not send button text — WhatsApp sets that label on the template. Create the button with `POST /addTemplate` as `{ \"type\": \"REQUEST_CONTACT_INFO\" }` with no `text`. Inside an open 24-hour window, `POST /sendContactInfo` asks for the number without a template. 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using OneMsg.Sdk.Api;
using OneMsg.Sdk.Client;
using OneMsg.Sdk.Model;

namespace Example
{
    public class SendTemplateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.1msg.io";
            // Configure API key authorization: tokenAuth
            config.AddApiKey("token", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // config.AddApiKeyPrefix("token", "Bearer");

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new TemplatesApi(httpClient, config, httpClientHandler);
            var token = "token_example";  // string | JWT token or API key for authorization
            var sendTemplateRequest = new SendTemplateRequest(); // SendTemplateRequest |  (optional) 

            try
            {
                // Send Template Message
                Dictionary<string, Object> result = apiInstance.SendTemplate(token, sendTemplateRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TemplatesApi.SendTemplate: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SendTemplateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send Template Message
    ApiResponse<Dictionary<string, Object>> response = apiInstance.SendTemplateWithHttpInfo(token, sendTemplateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TemplatesApi.SendTemplateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | JWT token or API key for authorization |  |
| **sendTemplateRequest** | [**SendTemplateRequest**](SendTemplateRequest.md) |  | [optional]  |

### Return type

**Dictionary<string, Object>**

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

