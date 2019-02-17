import React from "react";
import Navbar from "./index";
import { createShallow } from "@material-ui/core/test-utils";
import AppBar from "@material-ui/core/AppBar";
import { ShallowWrapper } from "enzyme";

describe("Navbar Component", () => {
  let shallow: any;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });

  it("should render a AppBar Component", () => {
    let wrapper: ShallowWrapper = shallow(<Navbar />);

    expect(wrapper.find(AppBar).type()).toEqual(AppBar);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render its children", () => {
    let wrapper: ShallowWrapper = shallow(
      <Navbar>
        <div>Hello</div>
      </Navbar>
    );

    expect(wrapper.find("div").type()).toEqual("div");
    expect(
      wrapper
        .find("div")
        .at(0)
        .text()
    ).toEqual("Hello");
    expect(wrapper).toMatchSnapshot();
  });
});
