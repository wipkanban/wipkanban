// @flow
import * as React from "react";
import {Route, Switch} from "react-router-dom";
import LoginContainer from "./Login/LoginContainer";
import CreateAccountContainer from "../components/User/CreateAccountContainer";
import AccountCreated from "../components/User/AccountCreated";
import HomeContainer from "./Home/index";
import requireAuth from "../components/requireAuth";
import Board from './Board/index';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

const Routes : () => React.Node = () : React.Node => (
  <Switch>
    <Route exact path="/" component={requireAuth(HomeContainer)}/>
    <Route path="/myaccount" component={LoginContainer}/>
    <Route path="/board" component={Board}/>
    <Route path="/login-new" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/Home" component={Home}/>
    <Route path="/login" component={LoginContainer}/>
    <Route path="/create-account" component={CreateAccountContainer}/>
    <Route path="/account-created" component={AccountCreated}/>
  </Switch>
);

export default Routes;
