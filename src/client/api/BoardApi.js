import axios from "axios";

class boardApi {
  static getAllCats() {
    return fetch("/data.json")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }

  static login(email, password) {
    return axios
      .post("/api/v1/login", { email, password })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  }

  static createAccount(email, password) {
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

  static setFirstAccess(userId, firstAccess) {
    return axios
      .post("/api/v1/user/setFirstAccess", {
        userId,
        firstAccess
      })
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  }

  static updateAccountUser(user) {
    let data = new FormData();
    data.append("user", JSON.stringify(user));
    data.append("image", user.image);

    let config = {
      onUploadProgress: function(progressEvent) {
        let percentCompleted = Math.round(
          progressEvent.loaded * 100 / progressEvent.total
        );
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

export default boardApi;
