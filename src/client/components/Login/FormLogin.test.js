import React from "react";
import FormLogin from "./index";
import { createShallow } from "@material-ui/core/test-utils";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { Redirect } from "react-router-dom";
import "../../setupTest";
import toJson from "enzyme-to-json";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

var localStorageMock = (function() {
  var store = {};
  return {
    getItem: function(key) {
      return store[key];
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key) {
      delete store[key];
    }
  };
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("Login User", () => {
  const testValues = {
    state: {
      success: false,
      message: ""
    },
    onLogin: jest.fn()
  };

  let shallow;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });

  it("should render 2 inputs and a Button", () => {
    let wrapper = shallow(<FormLogin {...testValues} />);

    expect(wrapper.find(TextField).length).toEqual(2);
    expect(wrapper.find(Button).length).toEqual(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render a Facebook login button", () => {
    let wrapper = shallow(<FormLogin {...testValues} />);

    expect(wrapper.find(FacebookLogin).length).toEqual(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("does not should call function onLogin when click button Login with empty fields", () => {
    let wrapper = shallow(<FormLogin {...testValues} />);

    wrapper.find(Button).simulate("click");
    expect(testValues.onLogin.mock.calls.length).toEqual(0);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should call function onLogin when click button Login with fields filled", () => {
    let wrapper = shallow(<FormLogin {...testValues} />);
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
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should return a redirect component, bacause jwt is defined", () => {
    localStorage.setItem("token", "ass987298qsh8sa");
    let wrapper = shallow(<FormLogin {...testValues} />);

    expect(wrapper.type()).toEqual(Redirect);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
