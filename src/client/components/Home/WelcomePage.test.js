import React from "react";
import { createShallow } from "@material-ui/core/test-utils";
import WelcomePage from "./WelcomePage";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../../setupTest";
import toJson from "enzyme-to-json";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

describe("<WelcomePage /> component", () => {
  let shallow;
  let user = {
    firstName: "firstName",
    lastName: "firstName",
    email: "example@test.com",
    firstAccess:true
  };
  let onLogout = jest.fn();
  let onUpdateAccountUser = jest.fn();
  let wrapper;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
    wrapper = shallow(
      <WelcomePage
        onUpdateAccountUser={onUpdateAccountUser}
        onLogout={onLogout}
        user={user}
      />
    );
  });

  it("should render component correctly", () => {
    expect(wrapper.type()).toEqual(React.Fragment);
    expect(wrapper.find(Typography).length).toEqual(2);
    expect(wrapper.find(Grid).length).toEqual(7);
    expect(wrapper.find(TextField).length).toEqual(3);
    expect(wrapper.find(Button).length).toEqual(3);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should to call function logout when clicked at Button", () => {
    wrapper
      .find(Button)
      .at(1)
      .simulate("click");

      wrapper
      .find(Button)
      .at(2)
      .simulate("click");

    expect(onLogout.mock.calls.length).toEqual(1);
    expect(onUpdateAccountUser.mock.calls.length).toEqual(1);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
