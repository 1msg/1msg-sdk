
# SendMessageRequest

Request body for sending a text message

## Properties

Name | Type
------------ | -------------
`body` | string
`quotedMsgId` | string
`chatId` | string
`phone` | number

## Example

```typescript
import type { SendMessageRequest } from '@1msg/chat-api-generated'

// TODO: Update the object below with actual values
const example = {
  "body": Hello World 🌍,
  "quotedMsgId": wamid.HBgNMTIwMjA3MjEzNjkVAgARGBI5RTBCNUY0QUE2RjZBQzhGNDkA,
  "chatId": 12020721369@c.us,
  "phone": 12020721369,
} satisfies SendMessageRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SendMessageRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


