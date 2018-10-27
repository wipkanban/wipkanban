import React from "react";
import { renderToString } from "react-dom/server";
import template from "./template";
import configureStore from "../client/configureStore";
import UniversalProvider from "../client/UniversalProvider";
import { loginSuccess } from "../client/actions/Login";
import { SheetsRegistry } from "react-jss/lib/jss";
import JssProvider from "react-jss/lib/JssProvider";
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

export default function render(req, res) {
  const store = configureStore(true);

  if (req.currentUser !== undefined && Object.keys(req.currentUser).length) {
    store.dispatch(loginSuccess(true, null, req.currentUser));
  }
  const sheetsRegistry = new SheetsRegistry();

  const generateClassName = createGenerateClassName();

  const html = renderToString(
    <JssProvider
      registry={sheetsRegistry}
      generateClassName={generateClassName}
    >
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        <UniversalProvider location={req.url} server={true} store={store} />
      </MuiThemeProvider>
    </JssProvider>
  );
  const css = sheetsRegistry.toString();

  const status = 200;
  return res.status(status).end(template(html, store.getState(), css));
}
