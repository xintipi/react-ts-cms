import { Breadcrumb as AntBreadcrumb, BreadcrumbProps } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { KeyRoutes, NameRoute, RoutesInfo } from '@/types/breadcrumb';

const nameRoutes: NameRoute[] = [
  { name: 'login', path: '/login' },
  { name: 'dashboard', path: '/dashboard' },
];

const routes: Record<KeyRoutes, RoutesInfo[]> = {
  login: [{ path: '/login' }],
  dashboard: [{ path: '/dashboard', breadcrumbName: 'dashboard' }],
};

function Breadcrumb(props: BreadcrumbProps) {
  const { pathname, search } = useLocation();
  const [routing, setRouting] = useState<RoutesInfo[]>([]);

  useEffect(() => {
    getRoutesList();
  }, [location]);

  const getRoutesList = () => {
    const route = nameRoutes.find((r: NameRoute) => r.path === pathname);
    const routePick = route?.name ? routes[route?.name as keyof typeof routes] : '';

    setRouting(() => {
      return typeof routePick !== 'string' ? routePick?.map((item) => item) : [];
    });

    if (search && routing.length) {
      setRouting((prevState: RoutesInfo[]): RoutesInfo[] => {
        const nextState = [...prevState];
        nextState[prevState.length - 1].search = Object.keys(search).length ? search : '';
        return nextState;
      });
    }
  };

  const itemRender = (route: any, params: any, routes: string | any[]) => {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={{ pathname: route.path, search: route.search }}>
        {route.breadcrumbName}
      </Link>
    );
  };

  // @ts-ignore
  return <AntBreadcrumb itemRender={itemRender} routes={routing} {...props} />;
}

export default Breadcrumb;
