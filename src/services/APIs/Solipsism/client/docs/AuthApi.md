# AuthApi

All URIs are relative to *http://localhost:5001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**authLogin**](AuthApi.md#authlogin) | **POST** /auth/login |  |
| [**authValidateToken**](AuthApi.md#authvalidatetoken) | **GET** /auth/validate-token |  |



## authLogin

> GenerateTokenOutput authLogin(generateTokenInput)



### Example

```ts
import {
  Configuration,
  AuthApi,
} from 'solipsism-api-client';
import type { AuthLoginRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new AuthApi();

  const body = {
    // GenerateTokenInput
    generateTokenInput: ...,
  } satisfies AuthLoginRequest;

  try {
    const data = await api.authLogin(body);
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
| **generateTokenInput** | [GenerateTokenInput](GenerateTokenInput.md) |  | |

### Return type

[**GenerateTokenOutput**](GenerateTokenOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `application/*+json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authValidateToken

> authValidateToken()



### Example

```ts
import {
  Configuration,
  AuthApi,
} from 'solipsism-api-client';
import type { AuthValidateTokenRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new AuthApi();

  try {
    const data = await api.authValidateToken();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

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
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

