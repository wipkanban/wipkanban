import React from "react";
import RouterFactory from "./RouterFactory";
import { createShallow } from "@material-ui/core/test-utils";
import { StaticRouter } from "react-router";
import { BrowserRouter } from "react-router-dom";
import toJson from "enzyme-to-json";
import "../setupTest";

describe("<RouterFactory /> Component", () => {
  let shallow;
  let wrapper;

  beforeEach(() => {
    shallow = createShallow();
  });

  it("should render a StaticRouter component when server param is defined", () => {
    wrapper = shallow(<RouterFactory server={true} location={{}} />);
    expect(wrapper.type()).toEqual(StaticRouter);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render a BrowserRouter component when server param is not defined", () => {
    wrapper = shallow(<RouterFactory />);
    expect(wrapper.type()).toEqual(BrowserRouter);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
