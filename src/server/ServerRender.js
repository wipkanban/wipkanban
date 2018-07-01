import React from "react";
import { renderToString } from "react-dom/server";
import template from "./template";
import configureStore from "../client/configureStore";
import UniversalProvider from "../client/UniversalProvider";
import { loginSuccess } from "../client/actions/Login";
import { SheetsRegistry } from "react-jss/lib/jss";
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName } from "@material-ui/core/styles";

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
      <UniversalProvider location={req.url} server={true} store={store} />
    </JssProvider>
  );
  const css = sheetsRegistry.toString();

  const status = 200;
  return res.status(status).end(template(html, store.getState(), css));
}
