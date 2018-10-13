import React from "react";
import MiniBoard from "./MiniBoard";
import { createShallow } from "@material-ui/core/test-utils";
import toJson from "enzyme-to-json";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<MiniBoard /> Component", () => {
  let shallow;
  let wrapper;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
    wrapper = shallow(<MiniBoard />);
  });

  it("should render correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render a Card and CardContent component", () => {
    expect(wrapper.type()).toEqual(Card);
    expect(wrapper.find(CardContent).type()).toEqual(CardContent);
  });
});
