
# Hashtag


## Properties

Name | Type
------------ | -------------
`id` | [HashtagsFindTrendingWindowInHoursParameter](HashtagsFindTrendingWindowInHoursParameter.md)
`createdAt` | Date
`tag` | string
`postsCount` | [HashtagsFindTrendingWindowInHoursParameter](HashtagsFindTrendingWindowInHoursParameter.md)

## Example

```typescript
import type { Hashtag } from 'solipsism-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "createdAt": null,
  "tag": null,
  "postsCount": null,
} satisfies Hashtag

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Hashtag
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


