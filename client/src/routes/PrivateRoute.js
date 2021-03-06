import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useStateValue } from "src/StateProvider";
import LoadingScreen from "src/components/LoadingScreen";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [{ loginStatus }] = useStateValue();

  if (loginStatus === null) {
    return <LoadingScreen />;
  }
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) => {
        return loginStatus ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;
