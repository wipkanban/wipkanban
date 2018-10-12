import React from "react";
import FormLogin from "../index";
import { createShallow } from "@material-ui/core/test-utils";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { Redirect } from "react-router-dom";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

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
  });

  it("should render 2 inputs and a Button", () => {
    let wrapper = shallow(<FormLogin {...testValues} />);
    expect(wrapper.find(IconButton).length).toEqual(3);
  });

  it("should call function onLogin on click button Login", () => {
    let wrapper = shallow(<FormLogin {...testValues} />);

    wrapper.find(Button).simulate("click");
    expect(testValues.onLogin.mock.calls.length).toEqual(1);
  });

  it("should return a redirect component, bacause jwt is defined", () => {
    localStorage.setItem("token", "ass987298qsh8sa");
    let wrapper = shallow(<FormLogin {...testValues} />);

    expect(wrapper.type()).toEqual(Redirect);
  });
});
