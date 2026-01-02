
# PostMetadata


## Properties

Name | Type
------------ | -------------
`postId` | [HashtagsFindTrendingWindowInHoursParameter](HashtagsFindTrendingWindowInHoursParameter.md)
`createdAt` | Date
`relationToUser` | number

## Example

```typescript
import type { PostMetadata } from 'solipsism-api-client'

// TODO: Update the object below with actual values
const example = {
  "postId": null,
  "createdAt": null,
  "relationToUser": null,
} satisfies PostMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


