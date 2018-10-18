import React from "React";
import requireAuth from "./requireAuth";
import FormLoginContainer from "./Login/LoginContainer";
import toJson from "enzyme-to-json";
import configureStore from "../configureStore";
import { loginSuccess } from "../actions/Login";
import { createShallow } from "@material-ui/core/test-utils";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<requireAuth /> Component", () => {
  let wrapper;
  let store;
  let shallow;
  let AuthenticatedComponent;
  let ComponentClass;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
    store = configureStore();
    AuthenticatedComponent = () => <div>Hello</div>;
    ComponentClass = requireAuth(<AuthenticatedComponent />);
  });

  it("should render the exactly component passed when user is authenticated", () => {
    store.dispatch(loginSuccess(true, null, {}));

    wrapper = shallow(<ComponentClass store={store} />);
    expect(wrapper.type()).toEqual(<AuthenticatedComponent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render the Login component when user is not authenticated", () => {
    wrapper = shallow(<ComponentClass store={store} />);
    expect(wrapper.find(FormLoginContainer).name()).toEqual(
      "Connect(WithStyles(Login))"
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
