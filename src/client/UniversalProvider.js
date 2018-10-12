// @flow
import * as React from "react";
import { Provider } from "react-redux";
import RouterFactory from "./routes/RouterFactory";

type Props = {
  server: boolean,
  location: string,
  store: Object
};

const UniversalProvider: Function = ({
  server = false,
  location,
  store
}: Props): React.Element<Provider> => {
  return (
    <Provider store={store}>
      <RouterFactory location={location} server={server} />
    </Provider>
  );
};

export default UniversalProvider;
