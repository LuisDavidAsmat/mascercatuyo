// Ensure this file is saved with UTF-8 encoding
import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ThemeProvider from '../lib/ThemeProvider.tsx';
import AppRouter from './routes/AppRouter.tsx';
import { useAuthStore } from '../stores/auth.store.ts';


// export const useAuthInitialized = () => {
//   const [initialized, setInitialized] = useState(false);
//   const initialize = useAuthStore(state => state.initialize);

//   useEffect(() => {
//     initialize().finally(() => setInitialized(true));
//   }, [initialize]);

//   return initialized;
// };

// const AuthInitializer = ({ children }: { children: React.ReactNode }) => 
// {
//   const initialized = useAuthInitialized();

//   if (!initialized) {
//     return <div>Loading authentication...</div>;
//   }
  
//   if (!initialized) {
//     return <div>Loading authentication...</div>;
//   }

//   return <>{children}</>
// }

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
        {/* <AuthInitializer> */}
          <AppRouter />
        {/* </AuthInitializer> */}
    </ThemeProvider>
  </StrictMode>
);
