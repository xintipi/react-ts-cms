import { matchRoutes, RouteObject, useLocation } from 'react-router-dom';

export const useCurrentPath = (props: { routes: RouteObject[] }) => {
  // routes has format: [{ path: "/xxx/:id" }]
  const location = useLocation();
  // @ts-ignore
  const [{ route }] = matchRoutes(props.routes, location);

  return route.path;
};
