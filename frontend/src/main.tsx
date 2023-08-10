import { Home } from '@/features/home';
import { Error } from '@/shared/routes/Error.tsx';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { queryClient } from './lib/react-query.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider
      theme={extendTheme({
        fonts: {
          heading: `'Poppins', sans-serif;`,
          body: `'Poppins', sans-serif;`,
        },
      })}
    >
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
