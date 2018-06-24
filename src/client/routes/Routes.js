// @flow
import * as React from "react";
import {Route, Switch} from "react-router-dom";
import FormLoginContainer from "../components/Login/FormLoginContainer";
import CreateAccountContainer from "../components/User/CreateAccountContainer";
import AccountCreated from "../components/User/AccountCreated";
import HomeContainer from "../components/home/HomeContainer";
import requireAuth from "../components/requireAuth";
import LayoutApp from './LayoutApp';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

const Routes : () => React.Node = () : React.Node => (
  <Switch>
    <Route exact path="/" component={requireAuth(HomeContainer)}/>
    <Route path="/myaccount" component={FormLoginContainer}/>
    <Route path="/board" component={LayoutApp}/>
    <Route path="/login-new" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/Home" component={Home}/>
    <Route path="/login" component={FormLoginContainer}/>
    <Route path="/create-account" component={CreateAccountContainer}/>
    <Route path="/account-created" component={AccountCreated}/>
  </Switch>
);

export default Routes;
