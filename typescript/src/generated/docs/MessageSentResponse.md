
# MessageSentResponse

Response for successfully sent message

## Properties

Name | Type
------------ | -------------
`sent` | boolean
`id` | string
`message` | string
`description` | string

## Example

```typescript
import type { MessageSentResponse } from '@1msg/chat-api-generated'

// TODO: Update the object below with actual values
const example = {
  "sent": null,
  "id": null,
  "message": null,
  "description": null,
} satisfies MessageSentResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MessageSentResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


