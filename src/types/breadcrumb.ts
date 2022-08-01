export interface RoutesInfo {
  name?: string;
  path: string;
  breadcrumbName?: string;
  search?: string;
  children?: Omit<RoutesInfo, 'children'>[];
}

export type KeyRoutes = 'login' | 'dashboard';

export type NameRoute = Pick<RoutesInfo, 'name' | 'path'>;
