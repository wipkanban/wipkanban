import React from "react";
import Home from "../index";
import Navbar from "../../Navbar";
import { createShallow } from "@material-ui/core/test-utils";
import TabsHome from "../TabsHome";
import MenuRight from "../../Navbar/MenuRight";
import Search from "../../Navbar/Search";
import UserAccountSettings from "../../Navbar/Buttons/UserAccountSettings";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Home component", () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it("should render 1 div containing Navbar", () => {
    let wrapper = shallow(<Home />);
    expect(wrapper.type()).toEqual("div");
    expect(wrapper.find(Navbar).length).toEqual(1);
    expect(wrapper.find(Navbar).length).toEqual(1);
  });

  it("should render a RightMenu with two icons component", () => {
    let wrapper = shallow(<Home />);
    expect(wrapper.find(MenuRight).type()).toEqual(MenuRight);
    expect(
      wrapper
        .find(MenuRight)
        .childAt(0)
        .type()
    ).toEqual(Search);
    expect(
      wrapper
        .find(MenuRight)
        .childAt(1)
        .type()
    ).toEqual(UserAccountSettings);
  });

  it("should render a TabHome component", () => {
    let wrapper = shallow(<Home />);
    expect(wrapper.find(TabsHome).type()).toEqual(TabsHome);
  });
});
