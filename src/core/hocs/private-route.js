import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AUTH_LOGIN } from "core/constants/routes";
import BaseLayout from "containers/layout/base-layout/BaseLayout";

const GuardedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <BaseLayout>
            <Component {...props} />
          </BaseLayout>
        ) : (
          <Redirect to={AUTH_LOGIN} />
        )
      }
    />
  );
};

export default GuardedRoute;
