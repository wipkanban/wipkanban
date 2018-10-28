import React from "react";
import toJson from "enzyme-to-json";
import "../setupTest";
import PreloaderContainer from "./PreloaderContainer";
import shallowWithStore from "../utils/shallowWithStore";
import { createMockStore } from "redux-test-utils";

describe("<PreloaderContainer /> Component", () => {
  let wrapper;

  it("should to render correctly", () => {
    const testState = {
      userReducer: {
        showPrealoder: true
      }
    };

    const store = createMockStore(testState);
    wrapper = shallowWithStore(<PreloaderContainer />, store);
    expect(wrapper).toEqual({});
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
