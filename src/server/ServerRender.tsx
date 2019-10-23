import React from "react";
import { renderToString } from "react-dom/server";
import template from "./template";
import configureStore from "../client/configureStore";
import UniversalProvider from "../client/UniversalProvider";
import { loginSuccess } from "../client/actions/Login";
import { ServerStyleSheets } from '@material-ui/styles';
import {
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import {Response} from "express"

const theme = createMuiTheme();

export default function render(req: any, res:Response) {
  const store = configureStore(true);

  if (req.currentUser !== undefined && Object.keys(req.currentUser).length) {
    store.dispatch(loginSuccess(true, null, req.currentUser));
  }

  const sheets = new ServerStyleSheets();

  const html = renderToString(
    sheets.collect(
      <MuiThemeProvider theme={theme}>
        <UniversalProvider location={req.url} server={true} store={store} />
      </MuiThemeProvider>
    )
  );

  const css = sheets.toString();

  const status = 200;
  return res.status(status).end(template(html, store.getState(), css));
}
