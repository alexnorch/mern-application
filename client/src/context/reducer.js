import {
  AUTH_SUCCESS,
  HIDE_ALERT,
  LOGOUT_USER,
  UPDATE_USER_SUCCESS,
  LOADING,
  ERROR,
} from "./actions";
import { initialValues } from "./AppContext";

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ERROR:
      return {
        ...state,
        showAlert: true,
        isLoading: false,
        alertType: "danger",
        alertText: action.payload.message,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "success",
        alertText: "Successfully logged in!",
        authToken: action.payload.token,
        user: action.payload.user,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "success",
        alertText: "Successfully changed",
        user: action.payload.updatedUser,
      };
    case HIDE_ALERT:
      return {
        ...state,
        showAlert: false,
        isLoading: false,
        alertText: "",
        alertType: "",
      };
    case LOGOUT_USER:
      return {
        ...initialValues,
        user: null,
        authToken: ''
      }
    default:
      return state;
  }
};

export default reducer;
