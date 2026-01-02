
# UserDTO


## Properties

Name | Type
------------ | -------------
`id` | [HashtagsFindTrendingWindowInHoursParameter](HashtagsFindTrendingWindowInHoursParameter.md)
`username` | string
`name` | string
`bio` | string
`avatarPictureURL` | string
`coverPictureURL` | string
`birthDate` | Date
`joinedAt` | Date
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { UserDTO } from 'solipsism-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "username": null,
  "name": null,
  "bio": null,
  "avatarPictureURL": null,
  "coverPictureURL": null,
  "birthDate": null,
  "joinedAt": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies UserDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


