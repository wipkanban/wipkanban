import React from "react";
import Search from "./Search";
import { createShallow } from "@material-ui/core/test-utils";
import Tooltip from "@material-ui/core/Tooltip";
import { ShallowWrapper } from "enzyme";

describe("Search Component", () => {
  let shallow: any;

  beforeEach(() => {
    shallow = createShallow();
  });

  it("should render a Tooltip", () => {
    let wrapper:ShallowWrapper = shallow(<Search />);
    expect(wrapper.type()).toEqual(Tooltip);
  });

  it("should have a prop title", () => {
    let wrapper:ShallowWrapper = shallow(<Search />);
    expect((wrapper.props() as any).title).toEqual("Search cards");
    expect(wrapper).toMatchSnapshot();
  });
});
