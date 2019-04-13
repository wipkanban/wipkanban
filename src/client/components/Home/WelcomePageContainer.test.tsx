import * as React from "react";
import WelcomePageContainer from "./WelcomePageContainer";
import shallowWithStore from "../../utils/shallowWithStore";
import { createMockStore } from "redux-test-utils";

describe("<WelcomePageContainer /> Component", () => {
  let wrapper: any;

  it("should to render correctly", () => {
    const testState: Object = {
      userReducer: {
        user: { firstAccess: true }
      }
    };

    const store = createMockStore(testState);
    wrapper = shallowWithStore(<WelcomePageContainer />, store);
    expect(wrapper.props().user).toEqual(undefined);
    expect(wrapper).toMatchSnapshot();
  });
});
