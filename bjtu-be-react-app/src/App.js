import ErrorPage from "@/components/ErrorPage";
import MainLayout from "@/components/MainLayout";
import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              component={route.component}
              path={route.path}
              exact={route.exact}
            />
          ))}
          <ErrorPage />
        </Switch>
      </MainLayout>
    );
  }
}

export default App;
