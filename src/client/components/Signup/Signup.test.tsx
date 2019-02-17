import React from "react";
import Signup from "./index";
import { createShallow } from "@material-ui/core/test-utils";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import { ShallowWrapper } from "enzyme";

describe("<Signup /> User", () => {
  let shallow: any;
  let wrapper: ShallowWrapper;

  const testValues: any = {
    onCreateAccount: jest.fn()
  };

  beforeEach(() => {
    shallow = createShallow({ dive: true });
    wrapper = shallow(<Signup {...testValues} />);
  });

  it("should render a component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render 3 TextField", () => {
    expect(wrapper.find(TextField).length).toEqual(3);
  });

  it("should render 1 Button", () => {
    expect(wrapper.find(Button).length).toEqual(1);
  });

  it("should not call function when click on button and fields are empty", () => {
    wrapper.find(Button).simulate("click");
    expect(testValues.onCreateAccount.mock.calls.length).toEqual(0);
    expect(wrapper).toMatchSnapshot();
  });

  it("should not call function when fields password and confirmPassword are different", () => {
    let expectedState: any = {
      confirmPassword: "mypassword2",
      email: "email@example.com",
      password: "mypassword",
      confirmPasswordError: true,
      requiredFields: false
    };

    let email: any = wrapper.find(TextField).at(0);
    email.simulate("change", { target: { value: "email@example.com" } });

    //password field
    wrapper
      .find(TextField)
      .at(1)
      .simulate("change", { target: { value: "mypassword" } });
    //confirm password field
    wrapper
      .find(TextField)
      .at(2)
      .simulate("change", { target: { value: "mypassword2" } });
    wrapper.find(Button).simulate("click");
    expect(testValues.onCreateAccount.mock.calls.length).toEqual(0);
    expect(wrapper.state()).toMatchObject(expectedState);
    expect(
      wrapper
        .find(TextField)
        .at(2)
        .props()
    ).toHaveProperty("error", true);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call function when click on button and fields are filled", () => {
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
    //confirm password field
    wrapper
      .find(TextField)
      .at(2)
      .simulate("change", { target: { value: "mypassword" } });

    wrapper.find(Button).simulate("click");
    expect(testValues.onCreateAccount.mock.calls.length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("should to change state when type in TextField", () => {
    let expectedState: any = {
      confirmPassword: "",
      email: "email@example.com",
      password: "mypassword",
      confirmPasswordError: false,
      requiredFields: false
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

    expect(wrapper).toMatchSnapshot();
  });

  it("should return a redirect component, bacause success prop is defined", () => {
    testValues.success = true;
    wrapper = shallow(<Signup {...testValues} />);
    expect(wrapper.type()).toEqual(Redirect);
    expect((wrapper.props() as any).to).toEqual("/account-created");
    expect(wrapper).toMatchSnapshot();
  });
});
