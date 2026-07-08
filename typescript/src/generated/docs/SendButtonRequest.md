
# SendButtonRequest


## Properties

Name | Type
------------ | -------------
`phone` | string
`body` | string
`footer` | string
`sections` | [Array&lt;SendButtonRequestSectionsInner&gt;](SendButtonRequestSectionsInner.md)

## Example

```typescript
import type { SendButtonRequest } from '@1msg/chat-api-generated'

// TODO: Update the object below with actual values
const example = {
  "phone": null,
  "body": null,
  "footer": null,
  "sections": null,
} satisfies SendButtonRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SendButtonRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


