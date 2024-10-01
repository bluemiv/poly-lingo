import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from '@/layout/BaseLayout.tsx';
import RootPage from '@/pages/RootPage.tsx';
import TranslationsPage from '@/pages/TranslatiojnsPage.tsx';

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
