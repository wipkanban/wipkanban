import React from "react";
import BoardList from "./BoardList";
import { createShallow } from "@material-ui/core/test-utils";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { boards } from "../../fakeData";

describe("BoardList Component", () => {
  let shallow: any;

  beforeEach(() => {
    shallow = createShallow();
  });

  it("should render a div", () => {
    let wrapper = shallow(<BoardList boards={boards} />);
    expect(wrapper.type()).toEqual("div");
    expect(wrapper).toMatchSnapshot();
  });

  it("should render 1 Typogragh and 2 Grid", () => {
    let wrapper = shallow(<BoardList boards={boards} />);
    expect(wrapper.find(Typography).length).toEqual(1);
    expect(wrapper.find(Grid).length).toEqual(2);
    expect(wrapper).toMatchSnapshot();
  });
});
