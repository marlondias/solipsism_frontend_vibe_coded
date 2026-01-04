# solipsism-api-client@1.0.0

A TypeScript SDK client for the localhost API.

## Usage

First, install the SDK from npm.

```bash
npm install solipsism-api-client --save
```

Next, try it out.


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


## Documentation

### API Endpoints

All URIs are relative to *http://localhost:5001*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AuthApi* | [**authLogin**](docs/AuthApi.md#authlogin) | **POST** /auth/login | 
*AuthApi* | [**authValidateToken**](docs/AuthApi.md#authvalidatetoken) | **GET** /auth/validate-token | 
*HashtagsApi* | [**hashtagsCreate**](docs/HashtagsApi.md#hashtagscreate) | **POST** /hashtags | 
*HashtagsApi* | [**hashtagsFindByIdOrTag**](docs/HashtagsApi.md#hashtagsfindbyidortag) | **GET** /hashtags/{id} | 
*HashtagsApi* | [**hashtagsFindTrending**](docs/HashtagsApi.md#hashtagsfindtrending) | **GET** /hashtags/trending | 
*PostsApi* | [**postsCreate**](docs/PostsApi.md#postscreate) | **POST** /posts | 
*PostsApi* | [**postsDelete**](docs/PostsApi.md#postsdelete) | **DELETE** /posts/{postId} | 
*PostsApi* | [**postsFindById**](docs/PostsApi.md#postsfindbyid) | **GET** /posts/{postId} | 
*PostsApi* | [**postsFindManyById**](docs/PostsApi.md#postsfindmanybyid) | **GET** /posts | 
*UserRegistrationApi* | [**userRegistrationConfirmEmail**](docs/UserRegistrationApi.md#userregistrationconfirmemail) | **POST** /user-registration/confirm-email | 
*UserRegistrationApi* | [**userRegistrationRegisterUser**](docs/UserRegistrationApi.md#userregistrationregisteruser) | **POST** /user-registration | 
*UserRegistrationApi* | [**userRegistrationSendEmail**](docs/UserRegistrationApi.md#userregistrationsendemail) | **POST** /user-registration/send-email | 
*UsersApi* | [**userFollowsGet**](docs/UsersApi.md#userfollowsget) | **GET** /users/{userId}/follows | 
*UsersApi* | [**userFollowsInclude**](docs/UsersApi.md#userfollowsinclude) | **PUT** /users/{userId}/follows/{targetUserId} | 
*UsersApi* | [**userFollowsRemove**](docs/UsersApi.md#userfollowsremove) | **DELETE** /users/{userId}/follows/{targetUserId} | 
*UsersApi* | [**userProfilePicturesDeleteAvatar**](docs/UsersApi.md#userprofilepicturesdeleteavatar) | **DELETE** /users/{userId}/profile-pictures/avatar | 
*UsersApi* | [**userProfilePicturesDeleteCover**](docs/UsersApi.md#userprofilepicturesdeletecover) | **DELETE** /users/{userId}/profile-pictures/cover | 
*UsersApi* | [**userProfilePicturesPutAvatar**](docs/UsersApi.md#userprofilepicturesputavatar) | **PUT** /users/{userId}/profile-pictures/avatar | 
*UsersApi* | [**userProfilePicturesPutCover**](docs/UsersApi.md#userprofilepicturesputcover) | **PUT** /users/{userId}/profile-pictures/cover | 
*UsersApi* | [**usersAddCredential**](docs/UsersApi.md#usersaddcredential) | **PUT** /users/{userId}/credential | 
*UsersApi* | [**usersCreate**](docs/UsersApi.md#userscreate) | **POST** /users | 
*UsersApi* | [**usersDelete**](docs/UsersApi.md#usersdelete) | **DELETE** /users/{userId} | 
*UsersApi* | [**usersFindByIdOrUsername**](docs/UsersApi.md#usersfindbyidorusername) | **GET** /users/{userId} | 
*UsersApi* | [**usersFindMany**](docs/UsersApi.md#usersfindmany) | **GET** /users | 
*UsersApi* | [**usersGetPostsMetadata**](docs/UsersApi.md#usersgetpostsmetadata) | **GET** /users/{userId}/posts-metadata | 
*UsersApi* | [**usersUpdate**](docs/UsersApi.md#usersupdate) | **PATCH** /users/{userId} | 
*UsersApi* | [**usersUpdateEmail**](docs/UsersApi.md#usersupdateemail) | **PUT** /users/{userId}/email | 
*UsersApi* | [**usersUpdatePassword**](docs/UsersApi.md#usersupdatepassword) | **PUT** /users/{userId}/password | 


### Models

- [AddUserCredentialRequestDTO](docs/AddUserCredentialRequestDTO.md)
- [ChangeUserEmailRequestDTO](docs/ChangeUserEmailRequestDTO.md)
- [ChangeUserPasswordRequestDTO](docs/ChangeUserPasswordRequestDTO.md)
- [ConfirmEmailInput](docs/ConfirmEmailInput.md)
- [CreateHashtagInput](docs/CreateHashtagInput.md)
- [CreatePostInput](docs/CreatePostInput.md)
- [CreatePostInputRepliedPostId](docs/CreatePostInputRepliedPostId.md)
- [CreateUserInput](docs/CreateUserInput.md)
- [CreatedResponseDTO](docs/CreatedResponseDTO.md)
- [FindManyPostsOutput](docs/FindManyPostsOutput.md)
- [FindTrendingHashtagsOutput](docs/FindTrendingHashtagsOutput.md)
- [GenerateTokenInput](docs/GenerateTokenInput.md)
- [GenerateTokenOutput](docs/GenerateTokenOutput.md)
- [GetPostsMetadataOutput](docs/GetPostsMetadataOutput.md)
- [Hashtag](docs/Hashtag.md)
- [HashtagsFindTrendingWindowInHoursParameter](docs/HashtagsFindTrendingWindowInHoursParameter.md)
- [Post](docs/Post.md)
- [PostMetadata](docs/PostMetadata.md)
- [ProblemDetails](docs/ProblemDetails.md)
- [RegisterUserInput](docs/RegisterUserInput.md)
- [SendEmailConfirmationInput](docs/SendEmailConfirmationInput.md)
- [TrendingHashtagMetadata](docs/TrendingHashtagMetadata.md)
- [TrendingHashtagMetadataScore](docs/TrendingHashtagMetadataScore.md)
- [UpdateUserRequestDTO](docs/UpdateUserRequestDTO.md)
- [UserDTO](docs/UserDTO.md)
- [UserFollow](docs/UserFollow.md)

### Authorization

Endpoints do not require authorization.


## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
- Package version: `1.0.0`
- Generator version: `7.18.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
