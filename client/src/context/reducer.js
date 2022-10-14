import actions from "./actions";
import { initialValues } from "./AppContext";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actions.ERROR:
      return {
        ...state,
        showAlert: true,
        isLoading: false,
        alertType: "danger",
        alertText: action.payload.message,
      };
    case actions.AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "success",
        alertText:
          action.payload.authType === "login"
            ? "Successfully logged in!"
            : "Successfully registated!",
        authToken: action.payload.token,
        user: action.payload.user,
      };
    case actions.UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "success",
        alertText: "Successfully changed",
        user: action.payload.updatedUser,
      };
    case actions.HIDE_ALERT:
      return {
        ...state,
        showAlert: false,
        isLoading: false,
        alertText: "",
        alertType: "",
      };
    case actions.LOGOUT_USER:
      return {
        ...initialValues,
        user: null,
        authToken: "",
      };
    case actions.CONFIRMATION_ERROR:
      return {
        ...state,
        isLoading: false,
        alertType: "danger",
        alertText: "Static text! Error!",
        isEmailConfirmation: false,
        showAlert: true,
      };
    case actions.CONFIRMATION_EXPIRED:
      return {
        ...state,
        isLoading: false,
        isEmailConfirmation: false
      }
    case actions.CONFIRMATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        alertType: "success",
        alertText: "Static text! Success!",
        isEmailConfirmation: true,
        showAlert: true,
      };
    case actions.ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        alertType: "success",
        alertText: "Static text! Success!",
        showAlert: true,
      };
    case actions.GET_ARTICLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        articles: action.payload.articles,
      };
    case actions.TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      };
    default:
      return state;
  }
};

export default reducer;
