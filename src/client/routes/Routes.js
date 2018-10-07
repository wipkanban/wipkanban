// @flow
import * as React from "react";
import {Route, Switch} from "react-router-dom";
import LoginContainer from "../components/Login/LoginContainer";
import SignupContainer from "../components/Signup/SignupContainer";
import AccountCreated from "../components/User/AccountCreated";
import HomeContainer from "../components/Home/index";
import requireAuth from "../components/requireAuth";
import Board from '../components/Board/index';
import Signup from '../components/Signup';
import Home from '../components/Home';

const Routes : () => React.Node = () : React.Node => (
  <Switch>
    <Route exact path="/" component={requireAuth(HomeContainer)}/>
    <Route path="/board" component={requireAuth(Board)}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/Home" component={Home}/>
    <Route path="/login" component={LoginContainer}/>
    <Route path="/create-account" component={SignupContainer}/>
    <Route path="/account-created" component={AccountCreated}/>
  </Switch>
);

export default Routes;
