import React from "react";
import GridContainer from "./GridContainer";
import { createShallow } from "@material-ui/core/test-utils";
import toJson from "enzyme-to-json";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("TeamList Component", () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });

  it("should render its children", () => {
    let wrapper = shallow(
      <GridContainer>
        <div>Hello</div>
      </GridContainer>
    );
    expect(wrapper.find("div").text()).toEqual("Hello");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
