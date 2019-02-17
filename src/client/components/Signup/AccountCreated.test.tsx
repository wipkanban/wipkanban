import React from "react";
import AccountCreated from "./AccountCreated";
import { createShallow } from "@material-ui/core/test-utils";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { ShallowWrapper } from "enzyme";

describe("<AccountCreated /> Component", () => {
  let shallow: any;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
    wrapper = shallow(<AccountCreated />);
  });

  it("should render correctly ", () => {
    expect(wrapper.find(Grid).length).toEqual(5);
    expect(wrapper.find(Typography).length).toEqual(5);
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a Link to /login", () => {
    expect(wrapper.find(Link).props().to).toEqual("/login");
  });
});
