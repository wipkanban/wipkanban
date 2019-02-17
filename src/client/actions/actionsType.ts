const actionsType = {
  TOGGLE_INPUT_NEW_TASK: "TOGGLE_INPUT_NEW_TASK",
  CREATE_NEW_TASK: "CREATE_NEW_TASK",
  OPEN_MODAL_TASK: "OPEN_MODAL_TASK",
  CLOSE_MODAL: "CLOSE_MODAL",
  UPDATE_TASK_COLUMN: "UPDATE_TASK_COLUMN",
  UPDATE_TASK_POSITION: "UPDATE_TASK_POSITION",
  LOAD_COLUMNS_SUCCESS: "LOAD_COLUMNS_SUCCESS",
  LOADING_COLUMNS: "LOADING_COLUMNS",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOADING_LOGIN: "LOADING_LOGIN",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  CREATE_ACCOUNT_SEND: "CREATE_ACCOUNT_SEND",
  CREATE_ACCOUNT_SUCCESS: "CREATE_ACCOUNT_SUCCESS",
  CREATE_ACCOUNT_ERROR: "CREATE_ACCOUNT_ERROR",
  SET_FIRST_ACCESS: "SET_FIRST_ACCESS",
  UPDATE_ACCOUNT_USER: "UPDATE_ACCOUNT_USER",
  UPLOAD_IMAGE_USER_START: "UPLOAD_IMAGE_USER_START",
  UPLOAD_IMAGE_USER_SUCCESS: "UPLOAD_IMAGE_USER_SUCCESS",
  UPLOAD_IMAGE_USER_FAIL: "UPLOAD_IMAGE_USER_FAIL",
  BOARDS_LOADING: "LOADING_BOARDS",
  BOARDS_LOADED_SUCCESS: "BOARDS_LOADED_SUCCESS",
  BOARDS_LOADING_ERROR: "BOARDS_LOADING_ERROR"
};

export const ADD_BOARD_LOADING = "ADD_BOARD_LOADING";
export const ADD_BOARD_LOADED = "ADD_BOARD_LOADED";
export const ADD_BOARD_ERROR = "ADD_BOARD_ERROR";

export default actionsType;