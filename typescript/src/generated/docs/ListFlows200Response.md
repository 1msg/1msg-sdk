
# ListFlows200Response


## Properties

Name | Type
------------ | -------------
`items` | Array&lt;{ [key: string]: any; }&gt;
`paging` | { [key: string]: any; }
`count` | number
`total` | number
`error` | any

## Example

```typescript
import type { ListFlows200Response } from '@1msg/chat-api-generated'

// TODO: Update the object below with actual values
const example = {
  "items": null,
  "paging": null,
  "count": null,
  "total": null,
  "error": null,
} satisfies ListFlows200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListFlows200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


