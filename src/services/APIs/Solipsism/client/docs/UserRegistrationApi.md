# UserRegistrationApi

All URIs are relative to *http://localhost:5001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**userRegistrationConfirmEmail**](UserRegistrationApi.md#userregistrationconfirmemail) | **POST** /user-registration/confirm-email |  |
| [**userRegistrationRegisterUser**](UserRegistrationApi.md#userregistrationregisteruser) | **POST** /user-registration |  |
| [**userRegistrationSendEmail**](UserRegistrationApi.md#userregistrationsendemail) | **POST** /user-registration/send-email |  |



## userRegistrationConfirmEmail

> userRegistrationConfirmEmail(confirmEmailInput)



### Example

```ts
import {
  Configuration,
  UserRegistrationApi,
} from 'solipsism-api-client';
import type { UserRegistrationConfirmEmailRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new UserRegistrationApi();

  const body = {
    // ConfirmEmailInput
    confirmEmailInput: ...,
  } satisfies UserRegistrationConfirmEmailRequest;

  try {
    const data = await api.userRegistrationConfirmEmail(body);
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
| **confirmEmailInput** | [ConfirmEmailInput](ConfirmEmailInput.md) |  | |

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## userRegistrationRegisterUser

> CreatedResponseDTO userRegistrationRegisterUser(registerUserInput)



### Example

```ts
import {
  Configuration,
  UserRegistrationApi,
} from 'solipsism-api-client';
import type { UserRegistrationRegisterUserRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new UserRegistrationApi();

  const body = {
    // RegisterUserInput
    registerUserInput: ...,
  } satisfies UserRegistrationRegisterUserRequest;

  try {
    const data = await api.userRegistrationRegisterUser(body);
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
| **registerUserInput** | [RegisterUserInput](RegisterUserInput.md) |  | |

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
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## userRegistrationSendEmail

> userRegistrationSendEmail(sendEmailConfirmationInput)



### Example

```ts
import {
  Configuration,
  UserRegistrationApi,
} from 'solipsism-api-client';
import type { UserRegistrationSendEmailRequest } from 'solipsism-api-client';

async function example() {
  console.log("🚀 Testing solipsism-api-client SDK...");
  const api = new UserRegistrationApi();

  const body = {
    // SendEmailConfirmationInput
    sendEmailConfirmationInput: ...,
  } satisfies UserRegistrationSendEmailRequest;

  try {
    const data = await api.userRegistrationSendEmail(body);
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
| **sendEmailConfirmationInput** | [SendEmailConfirmationInput](SendEmailConfirmationInput.md) |  | |

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
| **202** | Accepted |  -  |
| **404** | Not Found |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

