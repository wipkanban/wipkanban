import React from "react";
import TeamList from "../TeamList";
import { createShallow } from "@material-ui/core/test-utils";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("TeamList Component", () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it("should render a div", () => {
    let wrapper = shallow(<TeamList />);
    expect(wrapper.type()).toEqual("div");
  });

  it("should render 3 Typogragh and 1 Tooltip", () => {
    let wrapper = shallow(<TeamList />);
    expect(wrapper.find(Typography).length).toEqual(2);
    expect(wrapper.find(Tooltip).length).toEqual(1);
  });
});
