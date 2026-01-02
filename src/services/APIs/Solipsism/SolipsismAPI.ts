import {
    AuthApi,
    HashtagsApi,
    PostsApi,
    UserRegistrationApi,
    UsersApi,
    Configuration,
} from './client/src';

/**
 * Configuration options for the Solipsism API client
 */
export interface SolipsismAPIConfig {
    /** Base URL for the API (default: http://localhost:5001) */
    basePath?: string;
    /** Access token for authentication */
    accessToken?: string;
    /** Custom fetch implementation */
    fetchApi?: typeof fetch;
}

/**
 * Stable wrapper class for the auto-generated Solipsism API client.
 * This class provides a consistent interface even if the underlying generated client changes.
 */
export class SolipsismAPI {
    private config: Configuration;

    // API instances
    public readonly auth: AuthApi;
    public readonly hashtags: HashtagsApi;
    public readonly posts: PostsApi;
    public readonly userRegistration: UserRegistrationApi;
    public readonly users: UsersApi;

    constructor(config: SolipsismAPIConfig = {}) {
        // Create configuration for the generated client
        this.config = new Configuration({
            basePath: config.basePath || 'http://localhost:5001',
            accessToken: config.accessToken,
            fetchApi: config.fetchApi,
        });

        // Initialize all API instances
        this.auth = new AuthApi(this.config);
        this.hashtags = new HashtagsApi(this.config);
        this.posts = new PostsApi(this.config);
        this.userRegistration = new UserRegistrationApi(this.config);
        this.users = new UsersApi(this.config);
    }

    /**
     * Update the access token for authenticated requests
     */
    setAccessToken(token: string) {
        this.config = new Configuration({
            ...this.config,
            accessToken: token,
        });

        // Reinitialize API instances with new config
        Object.assign(this, {
            auth: new AuthApi(this.config),
            hashtags: new HashtagsApi(this.config),
            posts: new PostsApi(this.config),
            userRegistration: new UserRegistrationApi(this.config),
            users: new UsersApi(this.config),
        });
    }

    /**
     * Clear the access token
     */
    clearAccessToken() {
        this.setAccessToken('');
    }
}
