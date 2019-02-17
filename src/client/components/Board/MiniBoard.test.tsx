import React from "react";
import MiniBoard from "./MiniBoard";
import { createShallow } from "@material-ui/core/test-utils";
import Card from "@material-ui/core/Card";
import { ShallowWrapper } from "enzyme";

describe("<MiniBoard /> Component", () => {
  let shallow:any;
  let wrapper:ShallowWrapper;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
    wrapper = shallow(<MiniBoard _id={1} name="testsName" />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a Card and CardContent component", () => {
    expect(wrapper.type()).toEqual(Card);
  });
});
