// @flow
import * as React from "react";
import { StaticRouter } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

type Props = {
  server: boolean,
  location: string
};

type Router =
  React.Element<typeof StaticRouter>
  | React.Element<typeof BrowserRouter>;

const RouterFactory = ({ server, location }: Props): Router => {
  if (server) {
    return (
      <StaticRouter location={location} context={{}}>
        <Routes />
      </StaticRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default RouterFactory;
