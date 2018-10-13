import React from "react";
import MenuRight from "../MenuRight";
import { createShallow } from "@material-ui/core/test-utils";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("MenuRight Component", () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });

  it("should render a Tooltip", () => {
    let wrapper = shallow(<MenuRight />);
    expect(wrapper.type()).toEqual("div");
  });

  it("should render its children", () => {
    let wrapper = shallow(
      <MenuRight>
        <div>Hello</div>
      </MenuRight>
    );
    expect(wrapper.childAt(0).text()).toEqual("Hello");
  });
});
