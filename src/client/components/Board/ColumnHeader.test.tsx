import React from "react";
import ColumnHeader from "./ColumnHeader";
import { createShallow } from "@material-ui/core/test-utils";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { ShallowWrapper } from "enzyme";

describe("<ColumnHeader /> Component", () => {
  let shallow: any;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
    wrapper = shallow(<ColumnHeader title="title" />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render 3 items components", () => {
    expect(wrapper.find(ListItemText).type()).toEqual(ListItemText);
    expect(wrapper.find(ListItemIcon).type()).toEqual(ListItemIcon);
    expect(wrapper.find(ListItemSecondaryAction).type()).toEqual(
      ListItemSecondaryAction
    );
  });
});
