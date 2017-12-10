import React from "react";
import FormLogin from "./FormLogin";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

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
  let formLogin;

  const testValues = {
    state: {
      success: false,
      message: ""
    },
    onLogin: jest.fn()
  };

  beforeEach(() => {
    formLogin = shallow(<FormLogin {...testValues} />);
  });

  it("should have 2 inputs", () => {
    expect(formLogin.find("input").length).toEqual(2);
  });

  it("should have 1 button for submit", () => {
    expect(formLogin.find("button").length).toEqual(1);
  });
});
