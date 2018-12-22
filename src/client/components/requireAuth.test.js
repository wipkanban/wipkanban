import React from "react";
import requireAuth from "./requireAuth";
import FormLoginContainer from "./Login/LoginContainer";
import toJson from "enzyme-to-json";
import configureStore from "../configureStore";
import { loginSuccess } from "../actions/Login";
import { createShallow } from "@material-ui/core/test-utils";
import "../setupTest";

describe("<requireAuth /> Component", () => {
  let wrapper;
  let store;
  let shallow;
  let ComponentClass;

  beforeEach(() => {
    shallow = createShallow();
    store = configureStore();
  });

  it("should render the exactly component passed when user is authenticated", () => {
    store.dispatch(loginSuccess(true, null, {}));
    let AuthenticatedComponent = () => <div>Hello</div>;

    ComponentClass = requireAuth(<AuthenticatedComponent />);

    wrapper = shallow(<ComponentClass  />);
    expect(wrapper.props().auth).toEqual(undefined);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render the Login component when user is not authenticated", () => {
    let AuthenticatedComponent = () => <div>Hello</div>;

    ComponentClass = requireAuth(<AuthenticatedComponent />);
    wrapper = shallow(<ComponentClass />);

    expect(wrapper.props().auth).toEqual(undefined);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
