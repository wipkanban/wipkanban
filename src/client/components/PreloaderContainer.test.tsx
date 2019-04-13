import * as React from "react";
import PreloaderContainer from "./PreloaderContainer";
//import { createMockStore } from "redux-test-utils";
import { shallow,ShallowWrapper } from "enzyme";

describe("<PreloaderContainer /> Component", () => {
  let wrapper: ShallowWrapper;

  it("should to render correctly", () => {


    //const store: any = createMockStore(testState);
    wrapper = shallow(<PreloaderContainer />);
    expect(wrapper).toEqual({});
    expect(wrapper).toMatchSnapshot();
  });
});
