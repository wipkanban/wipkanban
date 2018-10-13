import React from "react";
import Signup from "./index";
import { createShallow } from "@material-ui/core/test-utils";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import toJson from "enzyme-to-json";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Signup /> User", () => {
  let shallow;
  let wrapper;

  const testValues = {
    onCreateAccount: jest.fn()
  };

  beforeEach(() => {
    shallow = createShallow({ dive: true });
    wrapper = shallow(<Signup {...testValues} />);
  });

  it("should render a component correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render 3 TextField", () => {
    expect(wrapper.find(TextField).length).toEqual(3);
  });

  it("should render 1 Button", () => {
    expect(wrapper.find(Button).length).toEqual(1);
  });

  it("should call functino when click on button", () => {
    wrapper.find(Button).simulate("click");
    expect(testValues.onCreateAccount.mock.calls.length).toEqual(1);
  });

  it("should to change state qhen type in TextField", () => {
    let expectedState = {
      confirmPassword: null,
      email: "email@example.com",
      password: 'mypassword'
    };

    //email field
    wrapper
      .find(TextField)
      .at(0)
      .simulate("change", { target: { value: "email@example.com" } });
    //password field
    wrapper
      .find(TextField)
      .at(1)
      .simulate("change", { target: { value: "mypassword" } });
    expect(wrapper.state()).toEqual(expectedState);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should return a redirect component, bacause success prop is defined", () => {
    testValues.success = true;
    wrapper = shallow(<Signup {...testValues} />);
    expect(wrapper.type()).toEqual(Redirect);
    expect(wrapper.props().to).toEqual("/account-created");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
