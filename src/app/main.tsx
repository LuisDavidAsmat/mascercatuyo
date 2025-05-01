// Ensure this file is saved with UTF-8 encoding
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ThemeProvider from '../lib/ThemeProvider.tsx';
import AppRouter from './routes/AppRouter.tsx';
import AuthInitializer from './AuthInitializer.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
        <AuthInitializer>
          <AppRouter />
        </AuthInitializer>
    </ThemeProvider>
  </StrictMode>
);
