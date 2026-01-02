# PostsApi

All URIs are relative to *http://localhost:5001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**postsCreate**](PostsApi.md#postscreate) | **POST** /posts |  |
| [**postsDelete**](PostsApi.md#postsdelete) | **DELETE** /posts/{postId} |  |
| [**postsFindById**](PostsApi.md#postsfindbyid) | **GET** /posts/{postId} |  |
| [**postsFindManyById**](PostsApi.md#postsfindmanybyid) | **GET** /posts |  |



## postsCreate

> CreatedResponseDTO postsCreate(createPostInput)



### Example

```ts
import {
  Configuration,
  PostsApi,
} from 'solipsism-api-client';
import type { PostsCreateRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new PostsApi();

  const body = {
    // CreatePostInput
    createPostInput: ...,
  } satisfies PostsCreateRequest;

  try {
    const data = await api.postsCreate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createPostInput** | [CreatePostInput](CreatePostInput.md) |  | |

### Return type

[**CreatedResponseDTO**](CreatedResponseDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `application/*+json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postsDelete

> postsDelete(postId)



### Example

```ts
import {
  Configuration,
  PostsApi,
} from 'solipsism-api-client';
import type { PostsDeleteRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new PostsApi();

  const body = {
    // HashtagsFindTrendingWindowInHoursParameter
    postId: 56,
  } satisfies PostsDeleteRequest;

  try {
    const data = await api.postsDelete(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **postId** | [](.md) |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **404** | Not Found |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postsFindById

> Post postsFindById(postId)



### Example

```ts
import {
  Configuration,
  PostsApi,
} from 'solipsism-api-client';
import type { PostsFindByIdRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new PostsApi();

  const body = {
    // HashtagsFindTrendingWindowInHoursParameter
    postId: 56,
  } satisfies PostsFindByIdRequest;

  try {
    const data = await api.postsFindById(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **postId** | [](.md) |  | [Defaults to `undefined`] |

### Return type

[**Post**](Post.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **404** | Not Found |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postsFindManyById

> FindManyPostsOutput postsFindManyById(postIds)



### Example

```ts
import {
  Configuration,
  PostsApi,
} from 'solipsism-api-client';
import type { PostsFindManyByIdRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new PostsApi();

  const body = {
    // Array<HashtagsFindTrendingWindowInHoursParameter> (optional)
    postIds: ...,
  } satisfies PostsFindManyByIdRequest;

  try {
    const data = await api.postsFindManyById(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **postIds** | `Array<HashtagsFindTrendingWindowInHoursParameter>` |  | [Optional] |

### Return type

[**FindManyPostsOutput**](FindManyPostsOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

