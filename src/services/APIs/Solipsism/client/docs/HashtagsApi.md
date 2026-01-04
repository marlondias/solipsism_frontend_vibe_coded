# HashtagsApi

All URIs are relative to *http://localhost:5001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**hashtagsCreate**](HashtagsApi.md#hashtagscreate) | **POST** /hashtags |  |
| [**hashtagsFindByIdOrTag**](HashtagsApi.md#hashtagsfindbyidortag) | **GET** /hashtags/{id} |  |
| [**hashtagsFindTrending**](HashtagsApi.md#hashtagsfindtrending) | **GET** /hashtags/trending |  |



## hashtagsCreate

> CreatedResponseDTO hashtagsCreate(createHashtagInput)



### Example

```ts
import {
  Configuration,
  HashtagsApi,
} from 'solipsism-api-client';
import type { HashtagsCreateRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new HashtagsApi();

  const body = {
    // CreateHashtagInput
    createHashtagInput: ...,
  } satisfies HashtagsCreateRequest;

  try {
    const data = await api.hashtagsCreate(body);
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
| **createHashtagInput** | [CreateHashtagInput](CreateHashtagInput.md) |  | |

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


## hashtagsFindByIdOrTag

> Hashtag hashtagsFindByIdOrTag(id)



### Example

```ts
import {
  Configuration,
  HashtagsApi,
} from 'solipsism-api-client';
import type { HashtagsFindByIdOrTagRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new HashtagsApi();

  const body = {
    // string
    id: id_example,
  } satisfies HashtagsFindByIdOrTagRequest;

  try {
    const data = await api.hashtagsFindByIdOrTag(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Hashtag**](Hashtag.md)

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


## hashtagsFindTrending

> FindTrendingHashtagsOutput hashtagsFindTrending(windowInHours)



### Example

```ts
import {
  Configuration,
  HashtagsApi,
} from 'solipsism-api-client';
import type { HashtagsFindTrendingRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new HashtagsApi();

  const body = {
    // HashtagsFindTrendingWindowInHoursParameter (optional)
    windowInHours: 56,
  } satisfies HashtagsFindTrendingRequest;

  try {
    const data = await api.hashtagsFindTrending(body);
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
| **windowInHours** | [](.md) |  | [Optional] [Defaults to `undefined`] |

### Return type

[**FindTrendingHashtagsOutput**](FindTrendingHashtagsOutput.md)

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

