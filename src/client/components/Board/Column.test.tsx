import React from "react";
import Column from "./Column";
import { createShallow } from "@material-ui/core/test-utils";
import columns from "./fakeData";
import { ShallowWrapper } from "enzyme";

describe("<Column /> Component", () => {
  let shallow: any;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });

  it("should render correctly", () => {
    wrapper = shallow(<Column {...columns[0]} />);

    expect(wrapper.name()).toEqual("Column");
    expect(wrapper).toMatchSnapshot();
  });

});
