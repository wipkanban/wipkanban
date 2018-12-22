import React from "react";
import toJson from "enzyme-to-json";
import "../../setupTest";
import WelcomePageContainer from "./WelcomePageContainer";
import shallowWithStore from "../../utils/shallowWithStore";
import { createMockStore } from "redux-test-utils";

describe("<WelcomePageContainer /> Component", () => {
  let wrapper;

  it("should to render correctly", () => {
    const testState = {
      userReducer: {
        user: { firstAccess: true }
      }
    };

    const store = createMockStore(testState);
    wrapper = shallowWithStore(<WelcomePageContainer />, store);
    expect(wrapper.props().user).toEqual(undefined);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
