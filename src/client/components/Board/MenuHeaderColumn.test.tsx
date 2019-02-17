import React from "react";
import MenuHeaderColumn from "./MenuHeaderColumn";
import { createShallow } from "@material-ui/core/test-utils";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { ShallowWrapper } from "enzyme";

describe("<MenuHeaderColumn /> Component", () => {
  let shallow: any;
  let wrapper:ShallowWrapper;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
    wrapper = shallow(<MenuHeaderColumn />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render 1 div with Item Button and Menu component", () => {
    expect(wrapper.type()).toEqual("div");
    expect(wrapper.find(IconButton).type()).toEqual(IconButton);
    expect(wrapper.find(Menu).type()).toEqual(Menu);
    expect(wrapper.find(MenuItem).length).toEqual(2);
  });
});
