import React from "react";
import UserAccountSettings from "./UserAccountSettings";
import { createShallow } from "@material-ui/core/test-utils";
import toJson from "enzyme-to-json";
import "../../../setupTest";
import configureStore from "../../../configureStore";
import { loginSuccess } from "../../../actions/Login";

describe("<UserAccountSettings /> Component", () => {
  let shallow;
  let wrapper;
  let store;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
    store = configureStore();
    store.dispatch(loginSuccess(true, null, {}));
  });

  it("should render correctly", () => {
    let user={ name: "name", lastname: "lastname" };

    wrapper = shallow(
      <UserAccountSettings
        store={store}
        user={user}
        logout={jest.fn()}
      />
    );

    expect(wrapper.props().user).toEqual(user);
    expect(wrapper.type()).toEqual(user);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
