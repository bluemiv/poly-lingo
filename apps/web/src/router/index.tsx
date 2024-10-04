import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from '@/layout/BaseLayout';
import RootPage from '@/pages/RootPage';
import TranslationsPage from '@/pages/TranslationsPage';

export const ROUTE_PATH = {
  ROOT: '/',
  TRANSLATIONS: '/translations',
  TRANSLATION_DETAIL: '/translations/:translationId',
};

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: ROUTE_PATH.ROOT,
        element: <RootPage />,
      },
      {
        path: ROUTE_PATH.TRANSLATIONS,
        element: <TranslationsPage />,
      },
    ],
  },
]);
