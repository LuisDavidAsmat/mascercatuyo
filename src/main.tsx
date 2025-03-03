// Ensure this file is saved with UTF-8 encoding
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppRouter from './routes/AppRouter.tsx';
import ThemeProvider from './lib/ThemeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AppRouter />

    </ThemeProvider>
  </StrictMode>
);
