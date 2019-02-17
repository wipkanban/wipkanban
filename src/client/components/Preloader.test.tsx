import * as React from "react";
import { createShallow } from "@material-ui/core/test-utils";
import Preloader from "./Preloader";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ShallowWrapper } from "enzyme";

describe("<Preloader /> Component", () => {
  let wrapper: ShallowWrapper;
  let shallow: any;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });

  it("should return empty content when showPrealoder is not defined", () => {
    wrapper = shallow(<Preloader />);
    expect(wrapper.type()).toBeNull;
    expect(wrapper).toMatchSnapshot();
  });

  it("should to render <CircularProgress /> when showPreloader is true", () => {
    wrapper = shallow(<Preloader showPreloader={true} />);
    expect(wrapper.find(CircularProgress).type()).toEqual(CircularProgress);
    expect(wrapper).toMatchSnapshot();
  });
});
