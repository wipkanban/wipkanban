import React from "react";
import GridContainer from "./GridContainer";
import { createShallow } from "@material-ui/core/test-utils";
import { ShallowWrapper } from "enzyme";

describe("TeamList Component", () => {
  let shallow: any;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });

  it("should render its children", () => {
    let wrapper: ShallowWrapper = shallow(
      <GridContainer>
        <div>Hello</div>
      </GridContainer>
    );
    expect(wrapper.find("div").text()).toEqual("Hello");
    expect(wrapper).toMatchSnapshot();
  });
});
