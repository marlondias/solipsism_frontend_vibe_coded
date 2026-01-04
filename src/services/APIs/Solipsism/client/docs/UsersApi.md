# UsersApi

All URIs are relative to *http://localhost:5001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**userFollowsGet**](UsersApi.md#userfollowsget) | **GET** /users/{userId}/follows |  |
| [**userFollowsInclude**](UsersApi.md#userfollowsinclude) | **PUT** /users/{userId}/follows/{targetUserId} |  |
| [**userFollowsRemove**](UsersApi.md#userfollowsremove) | **DELETE** /users/{userId}/follows/{targetUserId} |  |
| [**userProfilePicturesDeleteAvatar**](UsersApi.md#userprofilepicturesdeleteavatar) | **DELETE** /users/{userId}/profile-pictures/avatar |  |
| [**userProfilePicturesDeleteCover**](UsersApi.md#userprofilepicturesdeletecover) | **DELETE** /users/{userId}/profile-pictures/cover |  |
| [**userProfilePicturesPutAvatar**](UsersApi.md#userprofilepicturesputavatar) | **PUT** /users/{userId}/profile-pictures/avatar |  |
| [**userProfilePicturesPutCover**](UsersApi.md#userprofilepicturesputcover) | **PUT** /users/{userId}/profile-pictures/cover |  |
| [**usersAddCredential**](UsersApi.md#usersaddcredential) | **PUT** /users/{userId}/credential |  |
| [**usersCreate**](UsersApi.md#userscreate) | **POST** /users |  |
| [**usersDelete**](UsersApi.md#usersdelete) | **DELETE** /users/{userId} |  |
| [**usersFindByIdOrUsername**](UsersApi.md#usersfindbyidorusername) | **GET** /users/{userId} |  |
| [**usersFindMany**](UsersApi.md#usersfindmany) | **GET** /users |  |
| [**usersGetPostsMetadata**](UsersApi.md#usersgetpostsmetadata) | **GET** /users/{userId}/posts-metadata |  |
| [**usersUpdate**](UsersApi.md#usersupdate) | **PATCH** /users/{userId} |  |
| [**usersUpdateEmail**](UsersApi.md#usersupdateemail) | **PUT** /users/{userId}/email |  |
| [**usersUpdatePassword**](UsersApi.md#usersupdatepassword) | **PUT** /users/{userId}/password |  |



## userFollowsGet

> Array&lt;UserFollow&gt; userFollowsGet(userId)



### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'solipsism-api-client';
import type { UserFollowsGetRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new UsersApi();

  const body = {
    // HashtagsFindTrendingWindowInHoursParameter
    userId: 56,
  } satisfies UserFollowsGetRequest;

  try {
    const data = await api.userFollowsGet(body);
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
| **userId** | [](.md) |  | [Defaults to `undefined`] |

### Return type

[**Array&lt;UserFollow&gt;**](UserFollow.md)

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


## userFollowsInclude

> userFollowsInclude(userId, targetUserId)



### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'solipsism-api-client';
import type { UserFollowsIncludeRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new UsersApi();

  const body = {
    // HashtagsFindTrendingWindowInHoursParameter
    userId: 56,
    // HashtagsFindTrendingWindowInHoursParameter
    targetUserId: 56,
  } satisfies UserFollowsIncludeRequest;

  try {
    const data = await api.userFollowsInclude(body);
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
| **userId** | [](.md) |  | [Defaults to `undefined`] |
| **targetUserId** | [](.md) |  | [Defaults to `undefined`] |

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
| **409** | Conflict |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## userFollowsRemove

> userFollowsRemove(userId, targetUserId)



### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'solipsism-api-client';
import type { UserFollowsRemoveRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new UsersApi();

  const body = {
    // HashtagsFindTrendingWindowInHoursParameter
    userId: 56,
    // HashtagsFindTrendingWindowInHoursParameter
    targetUserId: 56,
  } satisfies UserFollowsRemoveRequest;

  try {
    const data = await api.userFollowsRemove(body);
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
| **userId** | [](.md) |  | [Defaults to `undefined`] |
| **targetUserId** | [](.md) |  | [Defaults to `undefined`] |

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
| **409** | Conflict |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## userProfilePicturesDeleteAvatar

> userProfilePicturesDeleteAvatar(userId)



### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'solipsism-api-client';
import type { UserProfilePicturesDeleteAvatarRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new UsersApi();

  const body = {
    // HashtagsFindTrendingWindowInHoursParameter
    userId: 56,
  } satisfies UserProfilePicturesDeleteAvatarRequest;

  try {
    const data = await api.userProfilePicturesDeleteAvatar(body);
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
| **userId** | [](.md) |  | [Defaults to `undefined`] |

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


## userProfilePicturesDeleteCover

> userProfilePicturesDeleteCover(userId)



### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'solipsism-api-client';
import type { UserProfilePicturesDeleteCoverRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new UsersApi();

  const body = {
    // HashtagsFindTrendingWindowInHoursParameter
    userId: 56,
  } satisfies UserProfilePicturesDeleteCoverRequest;

  try {
    const data = await api.userProfilePicturesDeleteCover(body);
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
| **userId** | [](.md) |  | [Defaults to `undefined`] |

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


## userProfilePicturesPutAvatar

> userProfilePicturesPutAvatar(userId, picture)



### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'solipsism-api-client';
import type { UserProfilePicturesPutAvatarRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new UsersApi();

  const body = {
    // HashtagsFindTrendingWindowInHoursParameter
    userId: 56,
    // Blob (optional)
    picture: BINARY_DATA_HERE,
  } satisfies UserProfilePicturesPutAvatarRequest;

  try {
    const data = await api.userProfilePicturesPutAvatar(body);
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
| **userId** | [](.md) |  | [Defaults to `undefined`] |
| **picture** | `Blob` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **404** | Not Found |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## userProfilePicturesPutCover

> userProfilePicturesPutCover(userId, picture)



### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'solipsism-api-client';
import type { UserProfilePicturesPutCoverRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new UsersApi();

  const body = {
    // HashtagsFindTrendingWindowInHoursParameter
    userId: 56,
    // Blob (optional)
    picture: BINARY_DATA_HERE,
  } satisfies UserProfilePicturesPutCoverRequest;

  try {
    const data = await api.userProfilePicturesPutCover(body);
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
| **userId** | [](.md) |  | [Defaults to `undefined`] |
| **picture** | `Blob` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **404** | Not Found |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersAddCredential

> usersAddCredential(userId, addUserCredentialRequestDTO)



### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'solipsism-api-client';
import type { UsersAddCredentialRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new UsersApi();

  const body = {
    // HashtagsFindTrendingWindowInHoursParameter
    userId: 56,
    // AddUserCredentialRequestDTO
    addUserCredentialRequestDTO: ...,
  } satisfies UsersAddCredentialRequest;

  try {
    const data = await api.usersAddCredential(body);
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
| **userId** | [](.md) |  | [Defaults to `undefined`] |
| **addUserCredentialRequestDTO** | [AddUserCredentialRequestDTO](AddUserCredentialRequestDTO.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `application/*+json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **409** | Conflict |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersCreate

> CreatedResponseDTO usersCreate(createUserInput)



### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'solipsism-api-client';
import type { UsersCreateRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new UsersApi();

  const body = {
    // CreateUserInput
    createUserInput: ...,
  } satisfies UsersCreateRequest;

  try {
    const data = await api.usersCreate(body);
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
| **createUserInput** | [CreateUserInput](CreateUserInput.md) |  | |

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


## usersDelete

> usersDelete(userId)



### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'solipsism-api-client';
import type { UsersDeleteRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new UsersApi();

  const body = {
    // HashtagsFindTrendingWindowInHoursParameter
    userId: 56,
  } satisfies UsersDeleteRequest;

  try {
    const data = await api.usersDelete(body);
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
| **userId** | [](.md) |  | [Defaults to `undefined`] |

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


## usersFindByIdOrUsername

> UserDTO usersFindByIdOrUsername(userId)



### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'solipsism-api-client';
import type { UsersFindByIdOrUsernameRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new UsersApi();

  const body = {
    // string
    userId: userId_example,
  } satisfies UsersFindByIdOrUsernameRequest;

  try {
    const data = await api.usersFindByIdOrUsername(body);
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
| **userId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**UserDTO**](UserDTO.md)

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


## usersFindMany

> Array&lt;UserDTO&gt; usersFindMany(userIds)



### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'solipsism-api-client';
import type { UsersFindManyRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new UsersApi();

  const body = {
    // Array<HashtagsFindTrendingWindowInHoursParameter> (optional)
    userIds: ...,
  } satisfies UsersFindManyRequest;

  try {
    const data = await api.usersFindMany(body);
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
| **userIds** | `Array<HashtagsFindTrendingWindowInHoursParameter>` |  | [Optional] |

### Return type

[**Array&lt;UserDTO&gt;**](UserDTO.md)

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


## usersGetPostsMetadata

> GetPostsMetadataOutput usersGetPostsMetadata(userId)



### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'solipsism-api-client';
import type { UsersGetPostsMetadataRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new UsersApi();

  const body = {
    // HashtagsFindTrendingWindowInHoursParameter
    userId: 56,
  } satisfies UsersGetPostsMetadataRequest;

  try {
    const data = await api.usersGetPostsMetadata(body);
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
| **userId** | [](.md) |  | [Defaults to `undefined`] |

### Return type

[**GetPostsMetadataOutput**](GetPostsMetadataOutput.md)

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


## usersUpdate

> usersUpdate(userId, updateUserRequestDTO)



### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'solipsism-api-client';
import type { UsersUpdateRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new UsersApi();

  const body = {
    // HashtagsFindTrendingWindowInHoursParameter
    userId: 56,
    // UpdateUserRequestDTO
    updateUserRequestDTO: ...,
  } satisfies UsersUpdateRequest;

  try {
    const data = await api.usersUpdate(body);
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
| **userId** | [](.md) |  | [Defaults to `undefined`] |
| **updateUserRequestDTO** | [UpdateUserRequestDTO](UpdateUserRequestDTO.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `application/*+json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **404** | Not Found |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersUpdateEmail

> usersUpdateEmail(userId, changeUserEmailRequestDTO)



### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'solipsism-api-client';
import type { UsersUpdateEmailRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new UsersApi();

  const body = {
    // HashtagsFindTrendingWindowInHoursParameter
    userId: 56,
    // ChangeUserEmailRequestDTO
    changeUserEmailRequestDTO: ...,
  } satisfies UsersUpdateEmailRequest;

  try {
    const data = await api.usersUpdateEmail(body);
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
| **userId** | [](.md) |  | [Defaults to `undefined`] |
| **changeUserEmailRequestDTO** | [ChangeUserEmailRequestDTO](ChangeUserEmailRequestDTO.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `application/*+json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **409** | Conflict |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersUpdatePassword

> usersUpdatePassword(userId, changeUserPasswordRequestDTO)



### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'solipsism-api-client';
import type { UsersUpdatePasswordRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new UsersApi();

  const body = {
    // HashtagsFindTrendingWindowInHoursParameter
    userId: 56,
    // ChangeUserPasswordRequestDTO
    changeUserPasswordRequestDTO: ...,
  } satisfies UsersUpdatePasswordRequest;

  try {
    const data = await api.usersUpdatePassword(body);
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
| **userId** | [](.md) |  | [Defaults to `undefined`] |
| **changeUserPasswordRequestDTO** | [ChangeUserPasswordRequestDTO](ChangeUserPasswordRequestDTO.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `application/*+json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **409** | Conflict |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

