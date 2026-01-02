
# GetPostsMetadataOutput


## Properties

Name | Type
------------ | -------------
`ownPosts` | [Array&lt;PostMetadata&gt;](PostMetadata.md)
`mentionPosts` | [Array&lt;PostMetadata&gt;](PostMetadata.md)

## Example

```typescript
import type { GetPostsMetadataOutput } from 'solipsism-api-client'

// TODO: Update the object below with actual values
const example = {
  "ownPosts": null,
  "mentionPosts": null,
} satisfies GetPostsMetadataOutput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetPostsMetadataOutput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


