import React, { useEffect, useState } from 'react'
import { useAuthStore } from '../stores/auth.store';


const AuthInitializer = ({ children }: { children: React.ReactNode }) => 
{
    const [ready, setReady] = useState(false);
    const { validateToken, clearAuth } = useAuthStore();

    useEffect(() => 
    {
        const init = async () => 
        {
            try {
                const valid = await validateToken();
                if (!valid) clearAuth();
            } catch (error) {
                console.error('Auth initialization failed:', error);
                clearAuth();
            } finally {
                setReady(true);
            }
        }

        init();

    }, [validateToken, clearAuth]);

    if(!ready) return null;

  return (
    <div>{ children }</div>
  )
}

export default AuthInitializer