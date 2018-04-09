// @flow
import * as React from "react";
import configureStore from "./configureStore";
import { loginSuccess } from "./actions/Login";
import UniversalProvider from "./UniversalProvider";
import { type Store } from "redux";

const store: Store = configureStore();
let stateLocalStorage: string = window.localStorage.getItem("state");

if (stateLocalStorage) {
  let state: Object = JSON.parse(stateLocalStorage);
  let user: Object = state.userReducer.user;

  if (user !== undefined && Object.keys(user).length) {
    store.dispatch(loginSuccess(true, null, user));
  }
}

store.subscribe(() => {
  window.localStorage.setItem("state", JSON.stringify(store.getState()));
});

const Root: Function = (): React.Element<typeof UniversalProvider> => (
  <UniversalProvider store={store} />
);

export default Root;
