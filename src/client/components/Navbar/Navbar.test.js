import React from "react";
import Navbar from "./index";
import { createShallow } from "@material-ui/core/test-utils";
import AppBar from '@material-ui/core/AppBar';
import "../../setupTest"
import toJson from "enzyme-to-json";

describe("Navbar Component", () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow({dive:true});
  });

  it("should render a AppBar Component", () => {
    let wrapper = shallow(<Navbar />);

    expect(wrapper.find(AppBar).type()).toEqual(AppBar);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render its children", () => {
    let wrapper = shallow(<Navbar><div>Hello</div></Navbar>);

    expect(wrapper.find('div').type()).toEqual('div');
    expect(wrapper.find('div').at(0).text()).toEqual('Hello');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
