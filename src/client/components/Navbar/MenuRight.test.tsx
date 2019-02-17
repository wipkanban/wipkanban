import React from "react";
import MenuRight from "./MenuRight";
import { createShallow } from "@material-ui/core/test-utils";
import { ShallowWrapper } from "enzyme";

describe("MenuRight Component", () => {
  let shallow: any;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });

  it("should render a Tooltip", () => {
    let wrapper = shallow(<MenuRight />);
    expect(wrapper.type()).toEqual("div");
    expect(wrapper).toMatchSnapshot();
  });

  it("should render its children", () => {
    let wrapper: ShallowWrapper = shallow(
      <MenuRight>
        <div>Hello</div>
      </MenuRight>
    );
    expect(wrapper.childAt(0).text()).toEqual("Hello");
    expect(wrapper).toMatchSnapshot();
  });
});
