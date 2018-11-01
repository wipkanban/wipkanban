import React from "react";
import toJson from "enzyme-to-json";
import "../../setupTest";
import LoginContainer from "./LoginContainer";
import shallowWithStore from "../../utils/shallowWithStore";
import { createMockStore } from "redux-test-utils";

describe("<LoginContainer /> Component", () => {
  let wrapper;

  it("should to render correctly", () => {
    const testState = {
      userReducer: {
        user: { firstAccess: true }
      }
    };

    const store = createMockStore(testState);
    wrapper = shallowWithStore(<LoginContainer />, store);
    expect(wrapper.dive().props().state).toEqual(testState.userReducer);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
