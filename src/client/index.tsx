import * as React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import Root from "./Root";

ReactDOM.hydrate(<Root />, document.getElementById("root"));

registerServiceWorker();
