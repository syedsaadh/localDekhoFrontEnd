import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "./Dashboard";
import AcceptedRequest from "./AcceptedRequest";

const Routes = () => {
  return (
    <Switch>
      <Route path="/user/dashboard" exact component={Dashboard} />
      <Route path="/user/accepted" component={AcceptedRequest} />
    </Switch>
  );
};

export default Routes;
