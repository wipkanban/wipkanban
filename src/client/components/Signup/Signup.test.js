import React from "react";
import Signup from "./index";
import { createShallow } from "@material-ui/core/test-utils";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Signup User", () => {
  let shallow;
  const testValues = {
    onCreateAccount: jest.fn()
  };

  beforeEach(() => {
    shallow = createShallow({ dive: true });
  });

  it("should render 3 TextField", () => {
    let wrapper = shallow(<Signup {...testValues} />);
    expect(wrapper.find(TextField).length).toEqual(3);
  });

  it("should render 1 Button", () => {
    let wrapper = shallow(<Signup {...testValues} />);
    expect(wrapper.find(Button).length).toEqual(1);
  });

  it("should call functino when click on button", () => {
    let wrapper = shallow(<Signup {...testValues} />);

    wrapper.find(Button).simulate("click");
    expect(testValues.onCreateAccount.mock.calls.length).toEqual(1);
  });

  it("should return a redirect component, bacause success prop is defined", () => {
    testValues.success = true;
    let wrapper = shallow(<Signup {...testValues} />);

    expect(wrapper.type()).toEqual(Redirect);
    expect(wrapper.props().to).toEqual('/account-created');
  });
});
