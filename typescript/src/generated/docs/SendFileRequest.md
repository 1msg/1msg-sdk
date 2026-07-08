
# SendFileRequest

Request body for sending a file (image, video, document, audio)

## Properties

Name | Type
------------ | -------------
`body` | string
`filename` | string
`caption` | string
`quotedMsgId` | string
`chatId` | string
`phone` | number

## Example

```typescript
import type { SendFileRequest } from '@1msg/chat-api-generated'

// TODO: Update the object below with actual values
const example = {
  "body": https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf,
  "filename": document.pdf,
  "caption": Here is your document,
  "quotedMsgId": wamid.HBgNMTIwMjA3MjEzNjkVAgARGBI5RTBCNUY0QUE2RjZBQzhGNDkA,
  "chatId": 12020721369@c.us,
  "phone": 12020721369,
} satisfies SendFileRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SendFileRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


