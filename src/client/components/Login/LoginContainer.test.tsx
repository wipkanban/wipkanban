import React from "react";
import LoginContainer from "./LoginContainer";
import shallowWithStore from "../../utils/shallowWithStore";
import { createMockStore } from "redux-test-utils";
import { ShallowWrapper } from "enzyme";

describe("<LoginContainer /> Component", () => {
  let wrapper:ShallowWrapper;

  it("should to render correctly", () => {
    const testState = {
      userReducer: {
        user: { firstAccess: true }
      }
    };

    const store = createMockStore(testState);
    wrapper = shallowWithStore(<LoginContainer />, store);
    expect((wrapper.props() as any).state).toEqual(undefined);
    expect(wrapper).toMatchSnapshot();
  });
});
