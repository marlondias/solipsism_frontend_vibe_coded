
# CreateUserInput


## Properties

Name | Type
------------ | -------------
`username` | string
`name` | string
`birthDate` | Date
`bio` | string

## Example

```typescript
import type { CreateUserInput } from 'solipsism-api-client'

// TODO: Update the object below with actual values
const example = {
  "username": null,
  "name": null,
  "birthDate": null,
  "bio": null,
} satisfies CreateUserInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateUserInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


