import { useMemo } from 'react';
import { SolipsismAPI } from '@/services/APIs/Solipsism/SolipsismAPI';
import { useAuth } from '@/contexts/AuthContext';

export const useAPI = () => {
    const { token } = useAuth();

    const api = useMemo(() => {
        const instance = new SolipsismAPI({
            accessToken: token || undefined
        });
        return instance;
    }, [token]);

    return api;
};
