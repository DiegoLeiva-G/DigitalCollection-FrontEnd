import { NotFoundPage, RootPage } from '../pages';
import AppPage from '../pages/AppPage.tsx';
import { type routerType } from '../../../../routes';
import { HomeRoutes } from './HomeRoutes.tsx';

export const GlobalRoutes: routerType[] = [
  {
    path: '',
    element: <RootPage />,
    title: 'Root',
    children: [
      {
        path: '/app',
        element: <AppPage />,
        title: 'App',
        children: [...HomeRoutes],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
    title: '404 | Not found',
  },
];
