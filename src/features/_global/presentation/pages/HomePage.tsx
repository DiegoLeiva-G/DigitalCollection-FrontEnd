import { useMemo } from 'react';
import { RiHome4Line } from '@remixicon/react';
import { BreadCrumb, Container, LinkCard } from '../components';
import { homeCardItems } from '../staticData';

export default function HomePage() {
  const navItems = useMemo(() => [{ title: 'Home', href: '/app/home', icon: RiHome4Line }], []);

  return (
    <>
      <BreadCrumb title="Presupuesto" navItems={navItems} />

      <Container>
        <div className="mx-auto lg:mx-0">
          <p className="text-lg text-gray-900 dark:text-gray-100 font-bold">Accesos directos</p>
        </div>
        <div className="mx-auto gap-x-8 gap-y-16 border-t border-gray-200 dark:border-gray-700 pt-5 mt-5 lg:mx-0 lg:max-w-none">
          <LinkCard items={homeCardItems} />
        </div>
      </Container>
    </>
  );
}