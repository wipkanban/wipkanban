import React from "react";
import PreloaderContainer from "./PreloaderContainer";
import shallowWithStore from "../utils/shallowWithStore";
import { createMockStore } from "redux-test-utils";
import { ShallowWrapper } from "enzyme";

describe("<PreloaderContainer /> Component", () => {
  let wrapper: ShallowWrapper;

  it("should to render correctly", () => {
    const testState = {
      userReducer: {
        showPrealoder: true
      }
    };

    const store: Object = createMockStore(testState);
    wrapper = shallowWithStore(<PreloaderContainer />, store);
    expect(wrapper).toEqual({});
    expect(wrapper).toMatchSnapshot();
  });
});
