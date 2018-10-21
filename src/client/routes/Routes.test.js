import React from "react";
import Routes from "./Routes";
import { createShallow } from "@material-ui/core/test-utils";
import { Switch } from "react-router-dom";
import toJson from "enzyme-to-json";
import "../setupTest";

describe("<Routes /> Component", () => {
  let shallow;
  let wrapper;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Routes />);
  });

  it("should render an component correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render a Switch component", () => {
    expect(wrapper.type()).toEqual(Switch);
  });
});
