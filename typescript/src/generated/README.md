# @1msg/chat-api-generated@1.0.0

A TypeScript SDK client for the api.1msg.io API.

## Usage

First, install the SDK from npm.

```bash
npm install @1msg/chat-api-generated --save
```

Next, try it out.


```ts
import {
  Configuration,
  FlowsApi,
} from '@1msg/chat-api-generated';
import type { CreateFlowsRequest } from '@1msg/chat-api-generated';

async function example() {
  console.log("🚀 Testing @1msg/chat-api-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: tokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new FlowsApi(config);

  const body = {
    // string | JWT token or API key for authorization
    token: token_example,
    // string (optional)
    wabaAccountId: {{wabaAccountId}},
  } satisfies CreateFlowsRequest;

  try {
    const data = await api.createFlows(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://api.1msg.io*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*FlowsApi* | [**createFlows**](docs/FlowsApi.md#createflows) | **POST** /flows | Create Flow
*FlowsApi* | [**createFlowsFlowIdDeprecate**](docs/FlowsApi.md#createflowsflowiddeprecate) | **POST** /flows/{flowId}/deprecate | Deprecate Flow
*FlowsApi* | [**createFlowsFlowIdPublish**](docs/FlowsApi.md#createflowsflowidpublish) | **POST** /flows/{flowId}/publish | Publish Flow
*FlowsApi* | [**deleteFlowsFlowId**](docs/FlowsApi.md#deleteflowsflowid) | **DELETE** /flows/{flowId} | Delete Flow
*FlowsApi* | [**getFlowsFlowId**](docs/FlowsApi.md#getflowsflowid) | **GET** /flows/{flowId} | Get Flow Details
*FlowsApi* | [**getFlowsFlowIdPreview**](docs/FlowsApi.md#getflowsflowidpreview) | **GET** /flows/{flowId}/preview | Preview Flow
*FlowsApi* | [**listFlows**](docs/FlowsApi.md#listflows) | **GET** /flows | List Flows
*FlowsApi* | [**patchFlowsFlowIdAssets**](docs/FlowsApi.md#patchflowsflowidassets) | **PATCH** /flows/{flowId}/assets | Update Flow Structure
*FlowsApi* | [**patchFlowsFlowIdMetadata**](docs/FlowsApi.md#patchflowsflowidmetadata) | **PATCH** /flows/{flowId}/metadata | Update Flow Metadata
*GroupsApi* | [**createGroups**](docs/GroupsApi.md#creategroups) | **POST** /groups | Create Group
*GroupsApi* | [**createGroupsGroupId**](docs/GroupsApi.md#creategroupsgroupid) | **POST** /groups/{groupId} | Update Group Info
*GroupsApi* | [**createGroupsGroupIdInvitelink**](docs/GroupsApi.md#creategroupsgroupidinvitelink) | **POST** /groups/{groupId}/inviteLink | Reset Invite Link
*GroupsApi* | [**deleteGroupsGroupId**](docs/GroupsApi.md#deletegroupsgroupid) | **DELETE** /groups/{groupId} | Delete Group
*GroupsApi* | [**getGroupsGroupId**](docs/GroupsApi.md#getgroupsgroupid) | **GET** /groups/{groupId} | Get Group Info
*GroupsApi* | [**getGroupsGroupIdInvitelink**](docs/GroupsApi.md#getgroupsgroupidinvitelink) | **GET** /groups/{groupId}/inviteLink | Get Invite Link
*GroupsApi* | [**listGroups**](docs/GroupsApi.md#listgroups) | **GET** /groups | Get Groups List
*MessagingApi* | [**createReadMessage**](docs/MessagingApi.md#createreadmessage) | **POST** /readMessage | Mark message as read
*MessagingApi* | [**createUploadMedia**](docs/MessagingApi.md#createuploadmedia) | **POST** /uploadMedia | Upload media
*MessagingApi* | [**listMessages**](docs/MessagingApi.md#listmessages) | **GET** /messages | Get messages list
*MessagingApi* | [**sendButton**](docs/MessagingApi.md#sendbuttonoperation) | **POST** /sendButton | Send Reply Buttons Message
*MessagingApi* | [**sendCarousel**](docs/MessagingApi.md#sendcarousel) | **POST** /sendCarousel | Send Carousel
*MessagingApi* | [**sendContact**](docs/MessagingApi.md#sendcontactoperation) | **POST** /sendContact | Send a Contact
*MessagingApi* | [**sendFile**](docs/MessagingApi.md#sendfile) | **POST** /sendFile | Send a File
*MessagingApi* | [**sendFlow**](docs/MessagingApi.md#sendflow) | **POST** /sendFlow | Send WhatsApp Flow Message
*MessagingApi* | [**sendList**](docs/MessagingApi.md#sendlistoperation) | **POST** /sendList | Send List Message
*MessagingApi* | [**sendLocation**](docs/MessagingApi.md#sendlocation) | **POST** /sendLocation | Send a Location
*MessagingApi* | [**sendLocationRequest**](docs/MessagingApi.md#sendlocationrequestoperation) | **POST** /sendLocationRequest | Send Location Request Message
*MessagingApi* | [**sendMessage**](docs/MessagingApi.md#sendmessage) | **POST** /sendMessage | Send a Message
*MessagingApi* | [**sendProduct**](docs/MessagingApi.md#sendproduct) | **POST** /sendProduct | Send a Product
*MessagingApi* | [**sendReaction**](docs/MessagingApi.md#sendreactionoperation) | **POST** /sendReaction | Send Reaction
*ProfileApi* | [**getMe**](docs/ProfileApi.md#getme) | **GET** /me | Get Profile Info
*TemplatesApi* | [**listTemplates**](docs/TemplatesApi.md#listtemplates) | **GET** /templates | Get templates list
*TemplatesApi* | [**sendTemplate**](docs/TemplatesApi.md#sendtemplateoperation) | **POST** /sendTemplate | Send Template Message


### Models

- [CreateGroups200Response](docs/CreateGroups200Response.md)
- [CreateReadMessage200Response](docs/CreateReadMessage200Response.md)
- [CreateReadMessage401Response](docs/CreateReadMessage401Response.md)
- [CreateReadMessageRequest](docs/CreateReadMessageRequest.md)
- [DeleteFlowsFlowId200Response](docs/DeleteFlowsFlowId200Response.md)
- [DeleteGroupsGroupId200Response](docs/DeleteGroupsGroupId200Response.md)
- [ErrorResponse](docs/ErrorResponse.md)
- [ListFlows200Response](docs/ListFlows200Response.md)
- [ListMessages200Response](docs/ListMessages200Response.md)
- [ListTemplates200Response](docs/ListTemplates200Response.md)
- [MessageSentResponse](docs/MessageSentResponse.md)
- [PatchFlowsFlowIdAssets200Response](docs/PatchFlowsFlowIdAssets200Response.md)
- [ProfileInfo](docs/ProfileInfo.md)
- [SendButtonRequest](docs/SendButtonRequest.md)
- [SendButtonRequestSectionsInner](docs/SendButtonRequestSectionsInner.md)
- [SendButtonRequestSectionsInnerReply](docs/SendButtonRequestSectionsInnerReply.md)
- [SendCarouselRequest1](docs/SendCarouselRequest1.md)
- [SendContactRequest](docs/SendContactRequest.md)
- [SendContactRequestContactsInner](docs/SendContactRequestContactsInner.md)
- [SendContactRequestContactsInnerName](docs/SendContactRequestContactsInnerName.md)
- [SendContactRequestContactsInnerOrg](docs/SendContactRequestContactsInnerOrg.md)
- [SendContactRequestContactsInnerPhonesInner](docs/SendContactRequestContactsInnerPhonesInner.md)
- [SendFileRequest](docs/SendFileRequest.md)
- [SendFlowRequest1](docs/SendFlowRequest1.md)
- [SendFlowRequest1Header](docs/SendFlowRequest1Header.md)
- [SendFlowRequestHeader](docs/SendFlowRequestHeader.md)
- [SendListRequest](docs/SendListRequest.md)
- [SendListRequestSectionsInner](docs/SendListRequestSectionsInner.md)
- [SendListRequestSectionsInnerRowsInner](docs/SendListRequestSectionsInnerRowsInner.md)
- [SendLocationRequest1](docs/SendLocationRequest1.md)
- [SendLocationRequestRequest](docs/SendLocationRequestRequest.md)
- [SendMessageRequest](docs/SendMessageRequest.md)
- [SendReactionRequest](docs/SendReactionRequest.md)
- [SendTemplateRequest](docs/SendTemplateRequest.md)
- [SendTemplateRequestLanguage](docs/SendTemplateRequestLanguage.md)
- [SuccessResponse](docs/SuccessResponse.md)

### Authorization


Authentication schemes defined for the API:
<a id="tokenAuth"></a>
#### tokenAuth


- **Type**: API key
- **API key parameter name**: `token`
- **Location**: URL query string

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
- Package version: `1.0.0`
- Generator version: `7.22.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system

For more information, please visit [https://help.1msg.io](https://help.1msg.io)

## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
