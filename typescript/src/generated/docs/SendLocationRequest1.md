
# SendLocationRequest1


## Properties

Name | Type
------------ | -------------
`lat` | string
`lng` | string
`address` | string
`name` | string
`quotedMsgId` | string
`chatId` | string
`phone` | number

## Example

```typescript
import type { SendLocationRequest1 } from '@1msg/chat-api-generated'

// TODO: Update the object below with actual values
const example = {
  "lat": null,
  "lng": null,
  "address": null,
  "name": null,
  "quotedMsgId": null,
  "chatId": null,
  "phone": null,
} satisfies SendLocationRequest1

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SendLocationRequest1
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


