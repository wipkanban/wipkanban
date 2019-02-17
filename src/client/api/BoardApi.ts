// @flow
import axios from "axios";

class BoardApi {
  static listAllByUser(idUser: Number) {
    return axios
      .get(`/api/v1/boards/${idUser}`)
      .then(response => {
        return response;
      })
      .catch(({ response }) => {
        return response;
      });
  }

  static addBoard(name: String) {
    return axios
      .post(`/api/v1/board`, { name: name })
      .then(response => {
        return response;
      })
      .catch(({ response }) => {
        return response;
      });
  }
}

export default BoardApi;
