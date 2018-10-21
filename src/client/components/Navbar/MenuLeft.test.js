import React from "react";
import MenuLeft from "./MenuLeft";
import { createShallow } from "@material-ui/core/test-utils";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import toJson from "enzyme-to-json";
import "../../setupTest"

describe("MenuLeft Component", () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });

  it("should render a div", () => {
    let wrapper = shallow(<MenuLeft />);
    expect(wrapper.type()).toEqual("div");
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render a Button containing two icons", () => {
    let wrapper = shallow(<MenuLeft />);
    expect(wrapper.find(Button).type()).toEqual(Button);
    expect(wrapper.find(DeveloperBoardIcon).type()).toEqual(DeveloperBoardIcon);
    expect(wrapper.find(ArrowDropDownIcon).type()).toEqual(ArrowDropDownIcon);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
