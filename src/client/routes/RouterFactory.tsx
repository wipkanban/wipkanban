// @flow
import * as React from "react";
import { StaticRouter } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

interface IRouterFactoryProps {
  server?: boolean;
  location?: string;
}

const RouterFactory = ({ server, location }: IRouterFactoryProps) => {
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
