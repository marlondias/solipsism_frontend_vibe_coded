const TOKEN_KEY = 'solipsism_auth_token';

/**
 * Stores the authentication token in local storage
 */
export const setAuthToken = (token: string): void => {
    localStorage.setItem(TOKEN_KEY, token);
};

/**
 * Retrieves the authentication token from local storage
 */
export const getAuthToken = (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
};

/**
 * Removes the authentication token from local storage
 */
export const removeAuthToken = (): void => {
    localStorage.removeItem(TOKEN_KEY);
};

/**
 * Checks if the user is currently authenticated (has a token)
 */
export const isAuthenticated = (): boolean => {
    return !!getAuthToken();
};
