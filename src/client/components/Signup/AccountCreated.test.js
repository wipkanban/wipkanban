import React from "react";
import AccountCreated from "./AccountCreated";
import { createShallow } from "@material-ui/core/test-utils";
import { Link } from "react-router-dom";
import toJson from "enzyme-to-json";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<AccountCreated /> Component", () => {
  let shallow;
  let wrapper;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<AccountCreated />);
  });

  it("should render component correctly", () => {
    expect(wrapper.type()).toEqual('div');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should have a h1 and a Link to /login", () => {
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find(Link).props().to).toEqual('/login')
  });
});
