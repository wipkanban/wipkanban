import { shallow } from "enzyme";

export default (component:any, store:any) => {
  const context = {
    store
  };
  return shallow(component, { context });
};
