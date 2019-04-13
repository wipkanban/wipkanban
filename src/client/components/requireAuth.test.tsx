import * as React from "react";
import requireAuth from "./requireAuth";
import configureStore from "../configureStore";
import { loginSuccess } from "../actions/Login";
import { createShallow } from "@material-ui/core/test-utils";
import { ShallowWrapper } from "enzyme";

describe("<requireAuth /> Component", () => {
  let wrapper: ShallowWrapper;
  let store: any;
  let shallow: any;
  let ComponentClass: any;

  beforeEach(() => {
    shallow = createShallow();
    store = configureStore();
  });

  it("should render the exactly component passed when user is authenticated", () => {
    store.dispatch(loginSuccess(true, null, {}));
    let AuthenticatedComponent = () => <div>Hello</div>;

    ComponentClass = requireAuth(<AuthenticatedComponent />);

    wrapper = shallow(<ComponentClass />);
    expect((wrapper.props() as any).auth).toEqual(undefined);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the Login component when user is not authenticated", () => {
    let AuthenticatedComponent = () => <div>Hello</div>;

    ComponentClass = requireAuth(<AuthenticatedComponent />);
    wrapper = shallow(<ComponentClass />);

    expect((wrapper.props() as any).auth).toEqual(undefined);
    expect(wrapper).toMatchSnapshot();
  });
});
