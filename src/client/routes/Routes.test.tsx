import React from "react";
import Routes from "./Routes";
import { createShallow } from "@material-ui/core/test-utils";
import { Switch } from "react-router-dom";
import { ShallowWrapper } from "enzyme";

describe("<Routes /> Component", () => {
  let shallow: any;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Routes />);
  });

  it("should render an component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a Switch component", () => {
    expect(wrapper.type()).toEqual(Switch);
  });
});
