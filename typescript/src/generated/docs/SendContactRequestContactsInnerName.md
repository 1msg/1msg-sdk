
# SendContactRequestContactsInnerName


## Properties

Name | Type
------------ | -------------
`formattedName` | string
`firstName` | string
`lastName` | string
`middleName` | string
`suffix` | string
`prefix` | string

## Example

```typescript
import type { SendContactRequestContactsInnerName } from '@1msg/chat-api-generated'

// TODO: Update the object below with actual values
const example = {
  "formattedName": null,
  "firstName": null,
  "lastName": null,
  "middleName": null,
  "suffix": null,
  "prefix": null,
} satisfies SendContactRequestContactsInnerName

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SendContactRequestContactsInnerName
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


