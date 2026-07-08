
# SendFlowRequest1


## Properties

Name | Type
------------ | -------------
`body` | string
`header` | [SendFlowRequest1Header](SendFlowRequest1Header.md)
`footer` | string
`flowId` | string
`flowToken` | string
`flowCta` | string
`flowAction` | string
`flowActionPayload` | object
`flowMessageVersion` | string
`mode` | string
`flowActionData` | object
`flowActionScreen` | string
`quotedMsgId` | string
`chatId` | string
`phone` | number

## Example

```typescript
import type { SendFlowRequest1 } from '@1msg/chat-api-generated'

// TODO: Update the object below with actual values
const example = {
  "body": null,
  "header": null,
  "footer": null,
  "flowId": null,
  "flowToken": null,
  "flowCta": null,
  "flowAction": null,
  "flowActionPayload": null,
  "flowMessageVersion": null,
  "mode": null,
  "flowActionData": null,
  "flowActionScreen": null,
  "quotedMsgId": null,
  "chatId": null,
  "phone": null,
} satisfies SendFlowRequest1

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SendFlowRequest1
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


