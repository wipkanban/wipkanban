import { createStore, applyMiddleware, Store } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore: Function = (server = false): Store => {
  const store: Store = createStore(
    reducer,
    server ? undefined : (window as any).__PRELOADED_STATE__,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};

export default configureStore;
