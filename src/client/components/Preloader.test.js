import React from "react";
import toJson from "enzyme-to-json";
import { createShallow } from "@material-ui/core/test-utils";
import "../setupTest";
import Preloader from "./Preloader";
import CircularProgress from "@material-ui/core/CircularProgress";

describe("<Preloader /> Component", () => {
  let wrapper;
  let shallow;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });

  it("should return empty content when showPrealoder is not defined", () => {
    wrapper = shallow(<Preloader />);
    expect(wrapper.type()).toBeNull;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should to render <CircularProgress /> when showPreloader is true", () => {
    wrapper = shallow(<Preloader showPreloader={true} />);
    expect(wrapper.find(CircularProgress).type()).toEqual(CircularProgress);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
