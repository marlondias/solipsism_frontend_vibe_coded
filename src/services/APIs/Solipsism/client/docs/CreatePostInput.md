
# CreatePostInput


## Properties

Name | Type
------------ | -------------
`userId` | [HashtagsFindTrendingWindowInHoursParameter](HashtagsFindTrendingWindowInHoursParameter.md)
`content` | string
`repliedPostId` | [CreatePostInputRepliedPostId](CreatePostInputRepliedPostId.md)

## Example

```typescript
import type { CreatePostInput } from 'solipsism-api-client'

// TODO: Update the object below with actual values
const example = {
  "userId": null,
  "content": null,
  "repliedPostId": null,
} satisfies CreatePostInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatePostInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


