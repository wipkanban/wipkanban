import React from "react";
import ColumnHeader from "./ColumnHeader";
import { createShallow } from "@material-ui/core/test-utils";
import toJson from "enzyme-to-json";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<ColumnHeader /> Component", () => {
  let shallow;
  let wrapper;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
    wrapper = shallow(<ColumnHeader />);
  });

  it("should render correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render 3 items components", () => {
    expect(wrapper.find(ListItemText).type()).toEqual(ListItemText);
    expect(wrapper.find(ListItemIcon).type()).toEqual(ListItemIcon);
    expect(wrapper.find(ListItemSecondaryAction).type()).toEqual(ListItemSecondaryAction);
  });
});
