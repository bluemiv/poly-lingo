import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import AntdProvider from '@/providers/AntdProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactQueryProvider>
      <AntdProvider>
        <RouterProvider router={router} />
      </AntdProvider>
    </ReactQueryProvider>
  </StrictMode>,
);
