
# SendContactRequestContactsInner


## Properties

Name | Type
------------ | -------------
`name` | [SendContactRequestContactsInnerName](SendContactRequestContactsInnerName.md)
`birthday` | string
`addresses` | Array&lt;any&gt;
`emails` | Array&lt;any&gt;
`org` | [SendContactRequestContactsInnerOrg](SendContactRequestContactsInnerOrg.md)
`phones` | [Array&lt;SendContactRequestContactsInnerPhonesInner&gt;](SendContactRequestContactsInnerPhonesInner.md)
`urls` | Array&lt;any&gt;

## Example

```typescript
import type { SendContactRequestContactsInner } from '@1msg/chat-api-generated'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "birthday": null,
  "addresses": null,
  "emails": null,
  "org": null,
  "phones": null,
  "urls": null,
} satisfies SendContactRequestContactsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SendContactRequestContactsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


