import React from "react";
import Search from "./Search";
import { createShallow } from "@material-ui/core/test-utils";
import Tooltip from "@material-ui/core/Tooltip";
import toJson from "enzyme-to-json";
import "../../setupTest"

describe("Search Component", () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it("should render a Tooltip", () => {
    let wrapper = shallow(<Search />);
    expect(wrapper.type()).toEqual(Tooltip);
  });

  it("should have a prop title", () => {
    let wrapper = shallow(<Search />);
    expect(wrapper.props().title).toEqual("Search cards");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
