import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb as AntBreadcrumb, BreadcrumbProps } from 'antd';

const ROUTES_NAME = {
  login: [{path: '/login'}],
  dashboard: [
    {
      path: '/',
      breadcrumbName: 'Dashboard',
    },
  ],
  'setting-profile': [
    {
      path: '/',
      breadcrumbName: 'Setting profile',
    },
  ],
  'user-profile': [
    {
      path: '/',
      breadcrumbName: 'User profile',
    },
  ],
  'monthly-report': [
    {
      path: '/attendance/monthly-report',
      breadcrumbName: 'Monthly report',
    },
  ],
  'yearly-report': [
    {
      path: '/attendance/yearly-report',
      breadcrumbName: 'Yearly report',
    },
  ],
};

type AntRoute = {
  path: string;
  breadcrumbName: string;
  children?: Omit<AntRoute, 'children'>[];
};

function Breadcrumb (props: JSX.IntrinsicAttributes & BreadcrumbProps) {
  const routesName = useMemo(() => {
    return { ...ROUTES_NAME };
  }, []);

  const routes: AntRoute[] = [
    {
      path: 'index',
      breadcrumbName: 'home',
    },
    {
      path: 'first',
      breadcrumbName: 'first',
      children: [
        {
          path: '/general',
          breadcrumbName: 'General',
        },
        {
          path: '/layout',
          breadcrumbName: 'Layout',
        },
        {
          path: '/navigation',
          breadcrumbName: 'Navigation',
        },
      ],
    },
    {
      path: 'second',
      breadcrumbName: 'second',
    },
  ];
  const location = useLocation();
  const [routing, setRouting] = useState<any[]>([]);

  useEffect(() => {
    getRoutesList();
  }, [location]);

  const getRoutesList = () => {
    // console.log(routesName);
    // const nameRoute = location?.pathname || '';
    // routing = routes[nameRoute] || [];
    // if (location?.search && routing.length > 0) {
    //   routing[routing.length - 1].query = Object.keys(location.search).length
    //     ? { ...location.search }
    //     : '';
    // }
  };

  const itemRender = (route: any, params: any, routes: string | any[], paths: any[]) => {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    );
  };

  return <AntBreadcrumb itemRender={itemRender} routes={routes} {...props}/>;
}

export default Breadcrumb;
