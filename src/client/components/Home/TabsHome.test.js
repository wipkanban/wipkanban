import React from "react";
import { createShallow } from "@material-ui/core/test-utils";
import TabsHome from "./TabsHome";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import KanbanHome from "../KanbanHome";
import "../../setupTest"
import toJson from "enzyme-to-json";

describe("TabsHome component", () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it("should render 1 div and 1 Paper Component", () => {
    let wrapper = shallow(<TabsHome />);
    expect(wrapper.childAt(0).type()).toEqual(Paper);
    expect(wrapper.childAt(1).type()).toEqual("div");
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render 1 Tabs and 2 tabs Component", () => {
    let wrapper = shallow(<TabsHome />);
    expect(wrapper.find(Tabs).type()).toEqual(Tabs);
    expect(wrapper.find(Tab).length).toEqual(2);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render KanbanHome component", () => {
    let wrapper = shallow(<TabsHome />);
    expect(wrapper.find(KanbanHome).type()).toEqual(KanbanHome);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
