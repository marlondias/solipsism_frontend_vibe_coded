
# UserFollow


## Properties

Name | Type
------------ | -------------
`userId` | [HashtagsFindTrendingWindowInHoursParameter](HashtagsFindTrendingWindowInHoursParameter.md)
`beingFollowedSince` | Date
`followerSince` | Date
`isFollowed` | boolean
`isFollower` | boolean
`isMutual` | boolean

## Example

```typescript
import type { UserFollow } from 'solipsism-api-client'

// TODO: Update the object below with actual values
const example = {
  "userId": null,
  "beingFollowedSince": null,
  "followerSince": null,
  "isFollowed": null,
  "isFollower": null,
  "isMutual": null,
} satisfies UserFollow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserFollow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


