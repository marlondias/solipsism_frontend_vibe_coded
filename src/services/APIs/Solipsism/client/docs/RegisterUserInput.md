
# RegisterUserInput


## Properties

Name | Type
------------ | -------------
`email` | string
`password` | string
`username` | string
`name` | string
`birthDate` | Date

## Example

```typescript
import type { RegisterUserInput } from 'solipsism-api-client'

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "password": null,
  "username": null,
  "name": null,
  "birthDate": null,
} satisfies RegisterUserInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RegisterUserInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


