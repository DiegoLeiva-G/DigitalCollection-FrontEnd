import type { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import {  GlobalRoutes } from '../features';
import type { routerType } from './routerTypes.tsx';

export const Router = () => {
  const renderRoutes = (routes: routerType[], basePath = ''): ReactNode => {
    return routes.map(({ path, element, children, title }) => {
      const fullPath = !basePath ? path : `${basePath}/${path}`;

      if (children) {
        return (
          <Route key={title} path={fullPath} element={element}>
            {renderRoutes(children, fullPath)}
          </Route>
        );
      }

      return <Route key={title} path={fullPath} element={element} />;
    });
  };

  const pagesData = [...GlobalRoutes];

  return <Routes>{renderRoutes(pagesData)}</Routes>;
};
