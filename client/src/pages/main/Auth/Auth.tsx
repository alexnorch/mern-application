import React from "react";
import { useState } from "react";
import { useAppContext } from "../../../context/AppContext";

import styles from "./Auth.module.css";

// Components
import Input from "../../../components/UI/Input/Input.tsx";
import Alert from "../../../components/UI/Alert/Alert";

// import Logo from "../../../components/UI/Logo";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth: React.FC = () => {
  const [isMember, setIsMember] = useState(true);
  const [userValue, setUserValue] = useState(initialValues);
  const { authSubmit, isLoading, showAlert } = useAppContext();

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    const { email, password } = userValue;

    isMember
      ? authSubmit("login", { email, password })
      : authSubmit("register", userValue);
  };

  return (
    <div className={styles.auth}>
      <form className={styles.form}>
        {showAlert && <Alert />}
        <Input
          value={userValue.email}
          name="email"
          changeHandler={changeValue}
          placeholder="Email"
        />
        <Input
          placeholder="Password"
          name="password"
          value={userValue.password}
          type="password"
          changeHandler={changeValue}
        />

        {!isMember && (
          <>
            <Input
              placeholder="Confirm Password"
              name="confirmPassword"
              value={userValue.confirmPassword}
              type="password"
              changeHandler={changeValue}
            />
            <Input
              placeholder="Name"
              name="name"
              value={userValue.name}
              changeHandler={changeValue}
            />
          </>
        )}
        <div className={styles["form-bottom"]}>
          {isMember ? "Don't have an account?" : "Already have an account?"}
          <button
            className="btn-toggler"
            type="button"
            onClick={() => setIsMember((prevState) => !prevState)}
          >
            {isMember ? "Register" : "Login"}
          </button>
        </div>
        <button
          disabled={isLoading}
          onClick={submitForm}
          type="submit"
          className="btn"
        >
          Submit
        </button>
      </form>
      <div className="image">
        Image
        {/* <img src={image} alt="Girl reads books" /> */}
      </div>
    </div>
  );
};

export default Auth;
