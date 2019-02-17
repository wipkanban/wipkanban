import React from "react";
import SignupContainer from "./SignupContainer";
import shallowWithStore from "../../utils/shallowWithStore";
import { createMockStore } from "redux-test-utils";
import { ShallowWrapper } from "enzyme";

describe("<SignupContainer /> Component", () => {
  let wrapper: ShallowWrapper;

  it("should to render correctly", () => {
    const testState: Object = {
      userReducer: {
        message: "",
        showPreloader: false,
        success: false,
        onCreateAccount: jest.fn()
      }
    };

    const store = createMockStore(testState);
    wrapper = shallowWithStore(<SignupContainer />, store);
    let wrapperProps: any = wrapper.props();
    expect(wrapperProps.message).toEqual(undefined);
    expect(wrapperProps.showPreloader).toEqual(undefined);
    expect(wrapperProps.success).toEqual(undefined);
    expect(wrapperProps.onCreateAccount).toEqual(undefined);
    expect(wrapper).toMatchSnapshot();
  });
});
