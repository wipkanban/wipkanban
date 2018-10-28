import React from "react";
import Card from "./Card";
import CardMaterialUi from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { createShallow } from "@material-ui/core/test-utils";
import toJson from "enzyme-to-json";
import "../../setupTest"

describe("<Card /> Component", () => {
  let shallow;
  let wrapper;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });

  it("should render correctly", () => {
    wrapper = shallow(<Card title="card title" />);

    expect(wrapper.type()).toEqual("div");
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should have a Card component", () => {
    wrapper = shallow(<Card title="card title" />);

    expect(wrapper.find(CardMaterialUi).type()).toEqual(CardMaterialUi);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should have a CardContent component", () => {
    wrapper = shallow(<Card title="card title" />);

    expect(wrapper.find(CardContent).type()).toEqual(CardContent);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
