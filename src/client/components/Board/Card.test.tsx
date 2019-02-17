import React from "react";
import Card from "./Card";
import CardMaterialUi from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { createShallow } from "@material-ui/core/test-utils";
import { ShallowWrapper } from "enzyme";

describe("<Card /> Component", () => {
  let shallow: any;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });

  it("should render correctly", () => {
    wrapper = shallow(<Card title="card title" />);

    expect(wrapper.type()).toEqual("div");
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a Card component", () => {
    wrapper = shallow(<Card title="card title" />);

    expect(wrapper.find(CardMaterialUi).type()).toEqual(CardMaterialUi);
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a CardContent component", () => {
    wrapper = shallow(<Card title="card title" />);

    expect(wrapper.find(CardContent).type()).toEqual(CardContent);
    expect(wrapper).toMatchSnapshot();
  });
});
