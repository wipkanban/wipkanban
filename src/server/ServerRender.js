import React from "react";
import { renderToString } from "react-dom/server";
import template from "./template";
import configureStore from "../client/configureStore";
import UniversalProvider from "../client/UniversalProvider";
import { loginSuccess } from "../client/actions/Login";

export default function render(req, res) {
  const store = configureStore(true);

  if (req.currentUser !== undefined && Object.keys(req.currentUser).length) {
    store.dispatch(loginSuccess(true, null, req.currentUser));
  }

  const html = renderToString(
    <UniversalProvider location={req.url} server={true} store={store} />
  );

  const status = 200;
  return res.status(status).end(template(html, store.getState()));
}
