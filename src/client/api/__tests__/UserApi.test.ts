import { login, logout } from "../../actions/Login";
import { updateAccountUser, createAccount } from "../../actions/User";
import configureStore from "../../configureStore";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import "jest-localstorage-mock";

describe("User API", () => {
  let store = configureStore();
  let mock: MockAdapter;

  store.subscribe(() => {
    localStorage.setItem("state", JSON.stringify(store.getState()));
  });

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
    mock.reset();
  });

  it("Shoud to create user account", () => {
    let response = {
      success: true,
      message: "User account created with successfull!"
    };

    let expectedState = {
      success: true,
      message: "User account created with successfull!",
      showPreloader: false,
      user: {}
    };

    mock.onPost(`/api/v1/user`).reply(200, response);

    store
      .dispatch(createAccount("email@examaple.com", "mypassword"))
      .then(() => {
        let currentState = store.getState().userReducer;

        expect(currentState).toEqual(expectedState);
      });
  });

  it("Shoud to authenticate a user and set token localstorage", () => {
    let response = {
      success: true,
      message: "Login User successfull!",
      token: "asijaosijas1109281029812",
      user: {
        name: "Name example",
        email: "email@example.com",
        firstAccess: true
      },
      showPreloader: false
    };

    mock.onPost("/api/v1/login").reply(200, response);

    const expectedState = [
      {
        success: response.success,
        message: response.message,
        user: response.user,
        showPreloader: response.showPreloader
      }
    ];

    store.dispatch(login(response.user.email, "12345")).then(() => {
      expect([store.getState().userReducer]).toEqual(expectedState);
      expect(response.token).toEqual(JSON.parse(localStorage.getItem("token") as string));
      expect(response.user).toEqual(JSON.parse(localStorage.getItem("user") as string));
    });
  });

  it("Shoud to update user account", () => {
    let response = {
      success: true
    };

    let user = {
      name: "nameExample",
      email: "email@example.com",
      lastname: "lastname example",
      phone: "1111-1111",
      firstAccess: false
    };
    let _id = "12121212";

    mock.onPut(`/api/v1/user/${_id}`).reply(200, response);

    store.dispatch(updateAccountUser(user)).then(() => {
      let expectedUserState = store.getState().userReducer.user;

      expect(expectedUserState).toEqual(user);
    });
  });

  it("Shoud logout a user and clean token and user in the localstorage", () => {
    let response = {
      success: true,
      message: "Logout succesfull!"
    };

    mock.onPut(`/api/v1/logout`).reply(200, response);

    store.dispatch(logout()).then(() => {
      expect(localStorage.getItem("token")).toEqual(null);
      expect(localStorage.getItem("user")).toEqual(null);
    });
  });
});
