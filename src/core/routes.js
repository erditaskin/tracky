import * as route from "core/constants/routes";

import Landing from "containers/landing/Landing";
import Dashboard from "containers/dashboard/Dashboard";
import Login from "containers/auth/login/Login";
import Register from "containers/auth/register/Register";

const routes = [
  {
    path: route.HOME,
    component: Landing,
    exact: true,
    protected: true
  },
  {
    path: route.DASHBOARD,
    component: Dashboard,
    exact: true,
    protected: true
  },
  {
    path: route.AUTH_LOGIN,
    component: Login,
    exact: true,
    protected: false
  },
  {
    path: route.AUTH_REGISTER,
    component: Register,
    exact: true,
    protected: false
  },
];

export default routes;
