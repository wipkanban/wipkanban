import React from "react";
import Column from "./Column";
import { createShallow } from "@material-ui/core/test-utils";
import toJson from "enzyme-to-json";
import columns from "./fakeData";
import "../../setupTest"

describe("<Column /> Component", () => {
  let shallow;
  let wrapper;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });

  it("should render correctly", () => {
    wrapper = shallow(<Column {...columns[0]} />);

    expect(wrapper.name()).toEqual("Column");
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
