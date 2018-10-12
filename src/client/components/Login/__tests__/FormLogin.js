import React from "react";
import FormLogin from "../index";
import { createShallow, createMount } from "@material-ui/core/test-utils";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
    shallow = createShallow({ dive:true });
  });

  it("should have 2 inputs and a Button", () => {
    let wrapper = shallow(<FormLogin {...testValues} />);
    expect(wrapper.find(TextField).length).toEqual(2);
    expect(wrapper.find(Button).length).toEqual(1);
  });
});
