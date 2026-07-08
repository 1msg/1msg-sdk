
# SendListRequest


## Properties

Name | Type
------------ | -------------
`phone` | string
`body` | string
`buttonText` | string
`action` | string
`sections` | [Array&lt;SendListRequestSectionsInner&gt;](SendListRequestSectionsInner.md)

## Example

```typescript
import type { SendListRequest } from '@1msg/chat-api-generated'

// TODO: Update the object below with actual values
const example = {
  "phone": null,
  "body": null,
  "buttonText": null,
  "action": null,
  "sections": null,
} satisfies SendListRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SendListRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


