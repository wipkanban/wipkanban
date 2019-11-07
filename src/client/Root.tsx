import * as React from "react";
import configureStore from "./configureStore";
import { loginSuccess } from "./actions/Login";
import UniversalProvider from "./UniversalProvider";
import { Store } from "redux";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

const theme = createMuiTheme();

const store: Store = configureStore();
let stateLocalStorage: string = window.localStorage.getItem("state") as string;

if (stateLocalStorage) {
  let state: any = JSON.parse(stateLocalStorage);
  let user: Object = state.userReducer.user;

  if (user !== undefined && Object.keys(user).length) {
    store.dispatch(loginSuccess(true, null, user));
  }
}

store.subscribe(() => {
  window.localStorage.setItem("state", JSON.stringify(store.getState()));
});

type Props = {};

export default class Root extends React.Component<Props> {
  componentDidMount() {
    const jssStyles = document.getElementById("jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <UniversalProvider store={store} />
      </MuiThemeProvider>
    );
  }
}
