import React from "react";
import { Route, Switch } from "react-router-dom";
import FormLoginContainer from "../components/Login/FormLoginContainer";
import CreateAccountContainer from "../components/User/CreateAccountContainer";
import AccountCreated from "../components/User/AccountCreated";
import Home from "../components/home/Home";
import requireAuth from "../components/requireAuth";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={requireAuth(Home)} />
    <Route path="/login" component={FormLoginContainer} />
    <Route path="/create-account" component={CreateAccountContainer} />
    <Route path="/account-created" component={AccountCreated} />
  </Switch>
);

export default Routes;
