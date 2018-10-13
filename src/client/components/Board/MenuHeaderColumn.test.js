import React from "react";
import MenuHeaderColumn from "./MenuHeaderColumn";
import { createShallow } from "@material-ui/core/test-utils";
import toJson from "enzyme-to-json";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<MenuHeaderColumn /> Component", () => {
  let shallow;
  let wrapper;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
    wrapper = shallow(<MenuHeaderColumn />);
  });

  it("should render correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render 1 div with Item Button and Menu component", () => {
    expect(wrapper.type()).toEqual("div");
    expect(wrapper.find(IconButton).type()).toEqual(IconButton);
    expect(wrapper.find(Menu).type()).toEqual(Menu);
    expect(wrapper.find(MenuItem).length).toEqual(2);
  });
});
