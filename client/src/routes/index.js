import React, { Suspense, lazy, useEffect } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { useStateValue } from "src/StateProvider";
import PrivateRoute from "./PrivateRoute";
import LoadingScreen from "src/components/LoadingScreen";
import { getUser, setLoading } from "src/UserAction";
import { getPhotos } from "src/PhotosAction";

import HomeView from "src/pages/HomeView";
import AboutView from "src/pages/AboutView";
import BookView from "src/pages/BookView";
import StoreView from "src/pages/StoreView";
import ContactView from "src/pages/ContactView";
import CheckoutView from "src/pages/CheckoutView";
import Error404View from "src/pages/Error404View";
import SignInPage from "src/registrations/SignInPage";

import MainLayout from "src/layouts/MainLayout";
// import CustomerLayout from "src/layouts/CustomerLayout";
import DashboardLayout from "src/layouts/DashboardLayout";

export default function Routes() {
  const [{ user, photos, loginStatus }, dispatch] = useStateValue();

  useEffect(() => {
    getUser(dispatch);
  }, [dispatch]);

  useEffect(() => {
    getPhotos(dispatch);
    console.log("getphotos effect");
  }, [JSON.stringify(photos), dispatch]);

  if (loginStatus === null) {
    return <LoadingScreen />;
  }

  return (
    <div style={{ height: "100%" }}>
      <Switch>
        <Route exact path="/404" component={Error404View} />
        <PrivateRoute
          path="/app"
          component={(props) => (
            <DashboardLayout {...props}>
              <Suspense fallback="">
                <Switch>
                  <Redirect exact from="/app" to="/app/calendar" />
                  <Route
                    exact
                    path="/app/calendar"
                    component={lazy(() =>
                      import("src/managementView/CalendarView")
                    )}
                  />
                  <Route
                    exact
                    path="/app/photos"
                    component={lazy(() =>
                      import("src/managementView/PhotosListView")
                    )}
                  />
                  <Route
                    exact
                    path="/app/events"
                    component={lazy(() =>
                      import("src/managementView/EventsListView")
                    )}
                  />
                </Switch>
              </Suspense>
            </DashboardLayout>
          )}
        />
        <Route
          path="/"
          render={(props) => (
            <MainLayout {...props}>
              <Suspense fallback="">
                <Switch>
                  {user ? (
                    <Redirect from="/login" to="/" />
                  ) : (
                    <Route exact path="/login" component={SignInPage} />
                  )}
                  <Route exact path="/book" component={BookView} />
                  <Route exact path="/about" component={AboutView} />
                  <Route exact path="/contact" component={ContactView} />
                  <Route exact path="/store" component={StoreView} />
                  <Route exact path="/checkout" component={CheckoutView} />
                  <Route exact path="/" component={HomeView} />
                  <Redirect to="/404" />
                </Switch>
              </Suspense>
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}
