import React from "react";
import AccountCreated from "./AccountCreated";
import { createShallow } from "@material-ui/core/test-utils";
import { Link } from "react-router-dom";
import toJson from "enzyme-to-json";
import "../../setupTest";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

describe("<AccountCreated /> Component", () => {
  let shallow;
  let wrapper;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
    wrapper = shallow(<AccountCreated />);
  });

  it("should render correctly ", () => {
    expect(wrapper.find(Grid).length).toEqual(5);
    expect(wrapper.find(Typography).length).toEqual(5);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should have a Link to /login", () => {
    expect(wrapper.find(Link).props().to).toEqual("/login");
  });
});
