import React from "react";
import MenuRight from "./MenuRight";
import { createShallow } from "@material-ui/core/test-utils";
import toJson from "enzyme-to-json";

import "../../setupTest"

describe("MenuRight Component", () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });

  it("should render a Tooltip", () => {
    let wrapper = shallow(<MenuRight />);
    expect(wrapper.type()).toEqual("div");
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render its children", () => {
    let wrapper = shallow(
      <MenuRight>
        <div>Hello</div>
      </MenuRight>
    );
    expect(wrapper.childAt(0).text()).toEqual("Hello");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
