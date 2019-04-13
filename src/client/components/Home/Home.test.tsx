import * as React from "react";
import Home from "./index";
import Navbar from "../Navbar";
import { createShallow } from "@material-ui/core/test-utils";
import TabsHome from "./TabsHome";
import MenuRight from "../Navbar/MenuRight";
import Search from "../Navbar/Search";
import UserAccountSettings from "../Navbar/Buttons/UserAccountSettingsContainer";

describe("<Home /> component", () => {
  let shallow: any;
  let user: { firstAccess: boolean };

  beforeEach(() => {
    shallow = createShallow();
    user = {
      firstAccess: false
    };
  });

  it("should render 1 div containing Navbar", () => {
    let wrapper = shallow(<Home user={user} />);
    expect(wrapper.type()).toEqual("div");
    expect(wrapper.find(Navbar).length).toEqual(1);
    expect(wrapper.find(Navbar).length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a RightMenu with two icons component", () => {
    let wrapper = shallow(<Home user={user} />);

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

    expect(wrapper).toMatchSnapshot();
  });

  it("should render a TabHome component", () => {
    let wrapper = shallow(<Home user={user} />);

    expect(wrapper.find(TabsHome).type()).toEqual(TabsHome);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a WelcomePage component when user firstAccess is true", () => {
    user.firstAccess = true;
    let wrapper = shallow(<Home user={user} />);

    expect(wrapper.type().Naked).toEqual("[Function WelcomePage]");
    expect(wrapper).toMatchSnapshot();
  });
});
