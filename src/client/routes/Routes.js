// @flow
import * as React from "react";
import {Route, Switch} from "react-router-dom";
import FormLoginContainer from "../components/Login/FormLoginContainer";
import CreateAccountContainer from "../components/User/CreateAccountContainer";
import AccountCreated from "../components/User/AccountCreated";
import HomeContainer from "../components/home/HomeContainer";
import requireAuth from "../components/requireAuth";
import teste from './teste';


const Routes : () => React.Node = () : React.Node => (
  <Switch>
    <Route exact path="/" component={requireAuth(HomeContainer)}/>
    <Route path="/myaccount" component={FormLoginContainer}/>
    <Route path="/teste" component={teste}/>
    <Route path="/login" component={FormLoginContainer}/>
    <Route path="/create-account" component={CreateAccountContainer}/>
    <Route path="/account-created" component={AccountCreated}/>
  </Switch>
);

export default Routes;
