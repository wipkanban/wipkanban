import React from "react";
import configureStore from "./configureStore";
import { loginSuccess } from "./actions/Login";
import UniversalProvider from "./UniversalProvider";

const store = configureStore();
let stateLocalStorage = window.localStorage.getItem("state");

if (stateLocalStorage) {
  let state = JSON.parse(stateLocalStorage);
  let user = state.userReducer.user;

  if (user !== null) {
    store.dispatch(loginSuccess(true, null, user));
  }
}

store.subscribe(() => {
  window.localStorage.setItem("state", JSON.stringify(store.getState()));
});

const Root = () => <UniversalProvider store={store} />;

export default Root;
