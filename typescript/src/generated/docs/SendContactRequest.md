
# SendContactRequest


## Properties

Name | Type
------------ | -------------
`phone` | string
`contacts` | [Array&lt;SendContactRequestContactsInner&gt;](SendContactRequestContactsInner.md)

## Example

```typescript
import type { SendContactRequest } from '@1msg/chat-api-generated'

// TODO: Update the object below with actual values
const example = {
  "phone": null,
  "contacts": null,
} satisfies SendContactRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SendContactRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


