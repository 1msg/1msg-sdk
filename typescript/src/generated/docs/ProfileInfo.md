
# ProfileInfo

WhatsApp Business profile information

## Properties

Name | Type
------------ | -------------
`about` | string
`address` | string
`description` | string
`email` | string
`phone` | string
`vertical` | string
`photo` | string
`websites` | Array&lt;string&gt;

## Example

```typescript
import type { ProfileInfo } from '@1msg/chat-api-generated'

// TODO: Update the object below with actual values
const example = {
  "about": null,
  "address": null,
  "description": null,
  "email": null,
  "phone": null,
  "vertical": null,
  "photo": null,
  "websites": null,
} satisfies ProfileInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProfileInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


