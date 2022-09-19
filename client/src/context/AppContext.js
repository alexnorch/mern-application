import { createContext, useReducer, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import reducer from "./reducer";
import actions from "./actions";

const MyContext = createContext();

const initialValues = {
  articles: [],
  isLoading: false,
  showAlert: false,
  user: JSON.parse(localStorage.getItem("user")) || null,
  authToken: JSON.parse(localStorage.getItem("authToken")) || "",
  alertType: "",
  alertText: "",
  isEmailConfirmation:
    JSON.parse(localStorage.getItem("isEmailConfirmation")) || false,
};

const AppContext = ({ children }) => {
  const [values, dispatch] = useReducer(reducer, initialValues);
  const navigate = useNavigate();
  const authAxios = axios.create();

  // Interceptors
  authAxios.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${values.authToken}`;
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  authAxios.interceptors.response.use(
    (config) => {
      return config;
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const hideAlert = () => {
    setTimeout(() => {
      dispatch({ type: actions.HIDE_ALERT });
    }, 3000);
  };

  const authSubmit = async (authType, userValues) => {
    dispatch({ type: actions.LOADING });

    try {
      const { data } = await axios.post(`/api/user/${authType}`, userValues);
      const { user, token } = data;

      dispatch({
        type: actions.AUTH_SUCCESS,
        payload: { user, token, authType },
      });

      addToLocalStorage(data);
      navigate("/");
    } catch (error) {
      const message = error.response.data.message;
      dispatch({ type: actions.ERROR, payload: { message } });
    }

    hideAlert();
  };

  const updateUser = async (updatedValues) => {
    dispatch({ type: actions.LOADING });

    try {
      const fd = new FormData();

      Object.keys(updatedValues).forEach((name, i) => {
        fd.append(`${name}`, Object.values(updatedValues)[i]);
      });

      const { data } = await authAxios.patch(
        `/api/user/${values.user._id}`,
        fd
      );
      const { updatedUser } = data;

      dispatch({
        type: actions.UPDATE_USER_SUCCESS,
        payload: { updatedUser },
      });

      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (error) {
      console.log(error);
      const message = error.response.data.message;
      dispatch({ type: actions.ERROR, payload: { message } });
    }
    hideAlert();
  };

  const confirmEmail = async () => {
    const { _id } = values.user;
    dispatch({ type: actions.LOADING });

    try {
      await authAxios.post(`/api/user/${_id}/confirm`);
      dispatch({ type: actions.CONFIRMATION_SUCCESS });
      localStorage.setItem("isEmailConfirmation", JSON.stringify(true));
    } catch (error) {
      console.log(error);
      dispatch({ type: actions.CONFIRMATION_ERROR });
    }

    hideAlert();
  };

  const logoutUser = () => {
    dispatch({ type: actions.LOGOUT_USER });
    removeFromLocalStorage();
  };

  const addNewArticle = async (data) => {
    dispatch({ type: actions.LOADING });

    try {
      await authAxios.post("/api/article", data);
      dispatch({ type: actions.ADD_ARTICLE_SUCCESS });
    } catch (error) {
      console.log(error);
      dispatch({ type: actions.ERROR, payload: { message: error.response.data.msg } });
    }

    hideAlert();
  };

  const getArticles = async () => {
    dispatch({ type: actions.LOADING });

    try {
      const { data } = await authAxios("/api/article");

      dispatch({
        type: actions.GET_ARTICLES_SUCCESS,
        payload: { articles: data.articles },
      });

    } catch (error) {
      console.log(error);
      dispatch({ type: actions.ERROR });
    }
  };

  const addToLocalStorage = (data) => {
    localStorage.setItem("authToken", JSON.stringify(data.token));
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  const removeFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
  };

  return (
    <MyContext.Provider
      value={{
        ...values,
        authSubmit,
        logoutUser,
        updateUser,
        confirmEmail,
        addNewArticle,
        getArticles,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(MyContext);
};

export { useAppContext, AppContext, initialValues };
