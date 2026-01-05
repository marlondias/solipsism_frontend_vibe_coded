import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { SolipsismAPI } from '@/services/APIs/Solipsism/SolipsismAPI';
import { setAuthToken, getAuthToken, removeAuthToken } from '@/utils/authStorage';
import type { GenerateTokenInput } from '@/services/APIs/Solipsism/client/src/models/GenerateTokenInput';

interface AuthContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    token: string | null;
    login: (credentials: GenerateTokenInput) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(getAuthToken());
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!getAuthToken());
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // No longer need to initialize in useEffect since we do it synchronously above
    useEffect(() => {
        // isLoading is already false, but we keep the effect if we need to verify token in the future
    }, []);

    const login = async (credentials: GenerateTokenInput) => {
        setIsLoading(true);
        try {
            // Create a temporary API instance for login
            const api = new SolipsismAPI();
            const response = await api.auth.authLogin({
                generateTokenInput: credentials
            });

            if (response && response.token) {
                const newToken = response.token;
                setAuthToken(newToken);
                setToken(newToken);
                setIsAuthenticated(true);
            } else {
                throw new Error('No token received from login API');
            }
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        removeAuthToken();
        setToken(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
