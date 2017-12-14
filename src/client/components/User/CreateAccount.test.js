import React from "react";
import CreateAccount from "./CreateAccount";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

configure({ adapter: new Adapter() });

describe("Create Account User", () => {
  let createAccount;

  const testValues = {
    state: {
      success: false,
      showPreloader: false
    },
    onCreateAccount: jest.fn()
  };

  beforeEach(() => {
    createAccount = shallow(<CreateAccount {...testValues} />);
  });

  it("should have 5 inputs", () => {
    expect(createAccount.find("input").length).toEqual(3);
  });

  it("should have 1 button for submit", () => {
    expect(createAccount.find("button").length).toEqual(1);
  });
});
