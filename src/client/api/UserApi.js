// @flow
import axios, { type AxiosStatic } from "axios";

class UserApi {
  static login(email: string, password: string): AxiosStatic {
    return axios
      .post("/api/v1/login", { email, password })
      .then(response => {
        return response;
      })
      .catch(({ response }) => {
        return response;
      });
  }

  static logout(): AxiosStatic {
    return axios
      .post("/api/v1/logout")
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  }

  static createAccount(email: string, password: string): AxiosStatic {
    return axios
      .post("/api/v1/user", {
        email,
        password
      })
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  }

  static updateAccountUser(user: Object): AxiosStatic {
    let data = new FormData();
    data.append("user", JSON.stringify(user));
    data.append("image", user.image);

    let config = {
      onUploadProgress: function(progressEvent) {
        return Math.round((progressEvent.loaded * 100) / progressEvent.total);
      },
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };

    return axios
      .put(`/api/v1/user/${user._id}`, data, config)
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  }
}

export default UserApi;
