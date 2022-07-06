// 路由配置文件
import React, { lazy } from 'react';
import PrivateRoute from '@components/PrivateRoute/index';

const Dashboard = lazy(() => import(/* webpackChunkName: "Dashboard"*/ '@/pages/dashboard/index'));
const Bus = lazy(() => import(/* webpackChunkName: "Bus"*/ '@/pages/bus/index'));
const AddGoods = lazy(() => import(/* webpackChunkName: "AddGoods"*/ '@/pages/addGoods/index'));
const Login = lazy(() => import(/* webpackChunkName: "Login"*/ '@/pages/user/login'));
const Error = lazy(() => import(/* webpackChunkName: "Error"*/ '@/pages/user/error'));

const Index = lazy(() => import(/* webpackChunkName: "Index"*/ '@/pages/Index/index'));

const routes = [
  {
    path: '/user/login',
    component: Login
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/dashboard',
    component: Dashboard,
    routes: [
      {
        path: '/dashboard/bus',
        component: Bus
      }
    ]
  },
  {
    path: '/add/goods',
    component: AddGoods
  },
  {
    path: '/user/error',
    component: Error
  }
];

const RouteWithSubRoutes = (route) => (
  <PrivateRoute path={route.path} component={route.component} routes={route.routes} />
);

const routeConfig = routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />);
export default routeConfig;
