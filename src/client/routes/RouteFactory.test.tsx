import React from "react";
import RouterFactory from "./RouterFactory";
import { createShallow } from "@material-ui/core/test-utils";
import { StaticRouter } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ShallowWrapper } from "enzyme";

describe("<RouterFactory /> Component", () => {
  let shallow: any;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    shallow = createShallow();
  });

  it("should render a StaticRouter component when server param is defined", () => {
    wrapper = shallow(<RouterFactory server={true} location={""} />);
    expect(wrapper.type()).toEqual(StaticRouter);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a BrowserRouter component when server param is not defined", () => {
    wrapper = shallow(<RouterFactory />);
    expect(wrapper.type()).toEqual(BrowserRouter);
    expect(wrapper).toMatchSnapshot();
  });
});
