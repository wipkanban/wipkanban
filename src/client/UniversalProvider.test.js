import React from "react";
import toJson from "enzyme-to-json";
import "./setupTest";
import UniversalProvider from "./UniversalProvider";
import {shallow} from "enzyme";
import { Provider } from "react-redux";

describe("<UniversalProvider /> Component", () => {
  let wrapper;

  it("should to render a Provider component", () => {
    wrapper = shallow(<UniversalProvider />);
    expect(wrapper.type()).toEqual(Provider);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
