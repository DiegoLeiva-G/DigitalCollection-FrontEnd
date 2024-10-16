import { Outlet, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { Layout } from '../components';
import { appsNavigate, sidebarItemsApp } from '../staticData';

export default function AppPage() {
  const { pathname } = useLocation();

  const sidebarItems = useMemo(
    () => sidebarItemsApp.map(item => ({ ...item, current: item.href === pathname })),
    [pathname],
  );

  return (
    <Layout sidebarItems={sidebarItems} apps={appsNavigate}>
      <Outlet />
    </Layout>
  );
}
