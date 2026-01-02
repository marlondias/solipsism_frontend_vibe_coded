
# TrendingHashtagMetadata


## Properties

Name | Type
------------ | -------------
`hashtagId` | [HashtagsFindTrendingWindowInHoursParameter](HashtagsFindTrendingWindowInHoursParameter.md)
`score` | [TrendingHashtagMetadataScore](TrendingHashtagMetadataScore.md)
`totalPosts` | [HashtagsFindTrendingWindowInHoursParameter](HashtagsFindTrendingWindowInHoursParameter.md)
`totalUsers` | [HashtagsFindTrendingWindowInHoursParameter](HashtagsFindTrendingWindowInHoursParameter.md)

## Example

```typescript
import type { TrendingHashtagMetadata } from 'solipsism-api-client'

// TODO: Update the object below with actual values
const example = {
  "hashtagId": null,
  "score": null,
  "totalPosts": null,
  "totalUsers": null,
} satisfies TrendingHashtagMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrendingHashtagMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


