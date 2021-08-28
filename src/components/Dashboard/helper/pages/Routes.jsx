import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import AllServices from "../pages/AllServices";

const Routes = () => {
  return (
    <Switch>
      <Route path="/helper/dashboard" exact component={Dashboard} />
      <Route path="/helper/allservices" component={AllServices} />
    </Switch>
  );
};

export default Routes;
