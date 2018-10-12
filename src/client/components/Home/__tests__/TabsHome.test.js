import React from "react";
import { createShallow } from "@material-ui/core/test-utils";
import TabsHome from "../TabsHome";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import KanbanHome from "../../KanbanHome";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("TabsHome component", () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it("should render 1 div and 1 Paper Component", () => {
    let wrapper = shallow(<TabsHome />);
    expect(wrapper.childAt(0).type()).toEqual(Paper);
    expect(wrapper.childAt(1).type()).toEqual("div");
  });

  it("should render 1 Tabs and 2 tabs Component", () => {
    let wrapper = shallow(<TabsHome />);
    expect(wrapper.find(Tabs).type()).toEqual(Tabs);
    expect(wrapper.find(Tab).length).toEqual(2);
  });

  it("should render KanbanHome component", () => {
    let wrapper = shallow(<TabsHome />);
    expect(wrapper.find(KanbanHome).type()).toEqual(KanbanHome);
  });
});
