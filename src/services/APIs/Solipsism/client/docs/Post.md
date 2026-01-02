
# Post


## Properties

Name | Type
------------ | -------------
`id` | [HashtagsFindTrendingWindowInHoursParameter](HashtagsFindTrendingWindowInHoursParameter.md)
`authorUserId` | [HashtagsFindTrendingWindowInHoursParameter](HashtagsFindTrendingWindowInHoursParameter.md)
`content` | string
`createdAt` | Date
`mentionedUsersIds` | [Array&lt;HashtagsFindTrendingWindowInHoursParameter&gt;](HashtagsFindTrendingWindowInHoursParameter.md)
`mentionedHashtagsIds` | [Array&lt;HashtagsFindTrendingWindowInHoursParameter&gt;](HashtagsFindTrendingWindowInHoursParameter.md)
`repliedPostId` | [CreatePostInputRepliedPostId](CreatePostInputRepliedPostId.md)
`replyingPostsIds` | [Array&lt;HashtagsFindTrendingWindowInHoursParameter&gt;](HashtagsFindTrendingWindowInHoursParameter.md)

## Example

```typescript
import type { Post } from 'solipsism-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "authorUserId": null,
  "content": null,
  "createdAt": null,
  "mentionedUsersIds": null,
  "mentionedHashtagsIds": null,
  "repliedPostId": null,
  "replyingPostsIds": null,
} satisfies Post

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Post
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


