import React from "react";
import { Route, Redirect } from "react-router-dom";
import { HOME } from "core/constants/routes";
import AuthLayout from "containers/layout/auth-layout/AuthLayout";

const AuthRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <AuthLayout>
            <Component {...props} />
          </AuthLayout>
        ) : (
          <Redirect to={HOME} />
        )
      }
    />
  );
};

export default AuthRoute;
