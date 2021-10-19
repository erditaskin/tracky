import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { checkAuth, setIsBusy } from "store/actions";

import firebase from "core/init/firebase";

import Loading from "core/hocs/loading";
import PrivateRoute from "core/hocs/private-route";
import AuthRoute from "core/hocs/auth-route";
import NotFound from "containers/error/NotFound";

import routes from "core/routes";

const App = ({ authStore, generalStore, checkAuth, setIsBusy }) => {
  useEffect(() => {
    setIsBusy(true);
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      checkAuth(user);
      setIsBusy(false);
    });
    return () => unsubscribe();
  }, [checkAuth, setIsBusy]);

  return (
    <>
      {(generalStore.loading || generalStore.isBusy) && <Loading />}
      {!generalStore.isBusy && (
        <Router>
          <Switch>
            {routes.map((value, idx) => {
              const { component, ...routeProps } = value;
              
              return value.protected ? (
                <PrivateRoute
                  {...routeProps}
                  component={component}
                  key={null}
                  isAuthenticated={authStore.isAuthenticated}
                />
              ) : (
                <AuthRoute
                  {...routeProps}
                  component={component}
                  key={null}
                  isAuthenticated={authStore.isAuthenticated}
                />
              );
            })}
            <Route component={NotFound} />
          </Switch>
        </Router>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    authStore: state.authStore,
    generalStore: state.generalStore,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    checkAuth: (user) => dispatch(checkAuth(user)),
    setIsBusy: (status) => dispatch(setIsBusy(status)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
