import React from "react";
import FormLogin from "./index";
import { createShallow } from "@material-ui/core/test-utils";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Redirect } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import { ShallowWrapper } from "enzyme";

var localStorageMock: Object = (function() {
  let store: any = {};
  return {
    getItem: function(key: string) {
      return store[key];
    },
    setItem: function(key: string, value: any) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key: string) {
      delete store[key];
    }
  };
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("Login User", () => {
  const testValues: any = {
    state: {
      success: false,
      message: ""
    },
    onLogin: jest.fn()
  };

  let shallow: any;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });

  it("should render 2 inputs and a Button", () => {
    let wrapper = shallow(<FormLogin {...testValues} />);

    expect(wrapper.find(TextField).length).toEqual(2);
    expect(wrapper.find(Button).length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a Facebook login button", () => {
    let wrapper = shallow(<FormLogin {...testValues} />);

    expect(wrapper.find(FacebookLogin).length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("does not should call function onLogin when click button Login with empty fields", () => {
    let wrapper:ShallowWrapper = shallow(<FormLogin {...testValues} />);

    wrapper.find(Button).simulate("click");
    expect(testValues.onLogin.mock.calls.length).toEqual(0);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call function onLogin when click button Login with fields filled", () => {
    let wrapper:ShallowWrapper = shallow(<FormLogin {...testValues} />);
    let expectedState = {
      email: "email@example.com",
      password: "mypassword",
      emailFieldEmpty: false,
      passwordFieldEmpty: false
    };

    //password field
    wrapper
      .find(TextField)
      .at(0)
      .simulate("change", { target: { value: expectedState.email } });
    //confirm password field
    wrapper
      .find(TextField)
      .at(1)
      .simulate("change", { target: { value: expectedState.password } });
    wrapper.find(Button).simulate("click");
    expect(testValues.onLogin.mock.calls.length).toEqual(1);
    expect(wrapper.state()).toEqual(expectedState);
    expect(wrapper).toMatchSnapshot();
  });

  it("should return a redirect component, bacause jwt is defined", () => {
    localStorage.setItem("token", "ass987298qsh8sa");
    let wrapper:ShallowWrapper = shallow(<FormLogin {...testValues} />);

    expect(wrapper.type()).toEqual(Redirect);
    expect(wrapper).toMatchSnapshot();
  });
});
