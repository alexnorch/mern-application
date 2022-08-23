import { createContext, useReducer, useContext } from "react";
import {
  AUTH_SUCCESS,
  HIDE_ALERT,
  LOGOUT_USER,
  UPDATE_USER_SUCCESS,
  ERROR,
  LOADING,
} from "./actions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import reducer from "./reducer";

const MyContext = createContext();

const initialValues = {
  posts: [],
  isLoading: false,
  showAlert: false,
  user: JSON.parse(localStorage.getItem("user")) || null,
  authToken: JSON.parse(localStorage.getItem("authToken")) || "",
  alertType: "",
  alertText: "",
};

const AppContext = ({ children }) => {
  const [values, dispatch] = useReducer(reducer, initialValues);
  const navigate = useNavigate();
  const authAxios = axios.create();

  // Interceptors
  authAxios.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${values.authToken}`
      return config
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  authAxios.interceptors.response.use((config) => {
    return config
  }, 
  (error) => {
    if (error.response.status === 401) {
      logoutUser()
    }
    return Promise.reject(error)
  })

  const hideAlert = () => {
    setTimeout(() => {
      dispatch({ type: HIDE_ALERT });
    }, 3000);
  };

  const authSubmit = async (authType, userValues) => {
    dispatch({ type: LOADING });

    try {
      const { data } = await axios.post(`/api/user/${authType}`, userValues);
      const { user, token } = data;

      dispatch({
        type: AUTH_SUCCESS,
        payload: { user, token },
      });

      addToLocalStorage(data);
      navigate("/");
    } catch (error) {
      const message = error.response.data.message;
      dispatch({ type: ERROR, payload: { message } });
    }

    hideAlert();
  };

  const updateUser = async (updatedValues) => {
    dispatch({ type: LOADING });

    try {
      const fd = new FormData();

      Object.keys(updatedValues).forEach((name, i) => {
        fd.append(`${name}`, Object.values(updatedValues)[i]);
      });

      const { data } = await authAxios.patch(`/api/user/${values.user._id}`, fd);
      const { updatedUser } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { updatedUser },
      });

      localStorage.setItem("user", JSON.stringify(updatedUser));

    } catch (error) {
      console.log(error);
      const message = error.response.data.message;
      dispatch({ type: ERROR, payload: { message } });
    }
    hideAlert();
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeFromLocalStorage();
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
