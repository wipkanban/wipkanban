import React from "react";
import toJson from "enzyme-to-json";
import "../../setupTest";
import SignupContainer from "./SignupContainer";
import shallowWithStore from "../../utils/shallowWithStore";
import { createMockStore } from "redux-test-utils";

describe("<SignupContainer /> Component", () => {
  let wrapper;

  it("should to render correctly", () => {
    const testState = {
      userReducer: {
        message: "",
        showPreloader: false,
        success: false,
        onCreateAccount: jest.fn()
      }
    };

    const store = createMockStore(testState);
    wrapper = shallowWithStore(<SignupContainer />, store);
    expect(wrapper.dive().props()).toHaveProperty("message");
    expect(wrapper.dive().props()).toHaveProperty("showPreloader");
    expect(wrapper.dive().props()).toHaveProperty("success");
    expect(wrapper.dive().props()).toHaveProperty("onCreateAccount");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
