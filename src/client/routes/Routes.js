// @flow
import * as React from "react";
import {Route, Switch} from "react-router-dom";
import LoginContainer from "../components/Login/LoginContainer";
import SignupContainer from "../components/Signup/SignupContainer";
import AccountCreated from "../components/Signup/AccountCreated";
import HomeContainer from "../components/Home";
import requireAuth from "../components/requireAuth";
import BoardContainer from '../components/Board/BoardContainer';
import Signup from '../components/Signup';
import Home from '../components/Home';

const Routes : () => React.Node = () : React.Node => (
  <Switch>
    <Route exact path="/" component={requireAuth(HomeContainer)}/>
    <Route path="/board" component={requireAuth(BoardContainer)}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/Home" component={Home}/>
    <Route path="/login" component={LoginContainer}/>
    <Route path="/create-account" component={SignupContainer}/>
    <Route path="/account-created" component={AccountCreated}/>
  </Switch>
);

export default Routes;
