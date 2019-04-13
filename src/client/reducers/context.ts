import  { createContext } from "react";

const Context = createContext({
  success: false,
  message: null,
  showPreloader: false,
  user: {}
});

export default Context;
