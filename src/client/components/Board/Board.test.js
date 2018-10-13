import React from "react";
import Board from "./Board";
import columns from "./fakeData";
import { createShallow } from "@material-ui/core/test-utils";
import toJson from "enzyme-to-json";
import Grid from "@material-ui/core/Grid";
import Navbar from "../Navbar/index";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Board /> Component", () => {
  let shallow;
  let wrapper;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });

  it("should render correctly with Navbar and a Grid", () => {
    wrapper = shallow(<Board columns={columns} />);

    expect(wrapper.type()).toEqual('div');
    expect(wrapper.find(Navbar).type()).toEqual(Navbar);
    expect(wrapper.find(Grid).type()).toEqual(Grid);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render correctly with Navbar and a Grid, even withou columns", () => {
    wrapper = shallow(<Board columns={[]} />);

    expect(wrapper.type()).toEqual('div');
    expect(wrapper.find(Navbar).type()).toEqual(Navbar);
    expect(wrapper.find(Grid).type()).toEqual(Grid);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
