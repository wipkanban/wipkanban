import * as React from "react";
import { Provider } from "react-redux";
import RouterFactory from "./routes/RouterFactory";

interface IUniversalProvider {
  server: boolean;
  location: string;
  store: any;
}

const UniversalProvider: React.StatelessComponent<any> = ({
  server = false,
  location,
  store
}: IUniversalProvider) => {
  return (
    <Provider store={store}>
      <RouterFactory location={location} server={server} />
    </Provider>
  );
};

export default UniversalProvider;
