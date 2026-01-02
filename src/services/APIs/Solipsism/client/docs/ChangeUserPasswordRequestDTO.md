
# ChangeUserPasswordRequestDTO


## Properties

Name | Type
------------ | -------------
`currentPassword` | string
`newPassword` | string

## Example

```typescript
import type { ChangeUserPasswordRequestDTO } from 'solipsism-api-client'

// TODO: Update the object below with actual values
const example = {
  "currentPassword": null,
  "newPassword": null,
} satisfies ChangeUserPasswordRequestDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChangeUserPasswordRequestDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


