import React from "react";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";

// Components
import StyledAuth from "../components/styles/Auth.styled";
// import image from "../assets/images/undraw-image.svg";
import { Logo, Alert, Input } from "../components";

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
    <StyledAuth>
      <form>
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
        <div className="form-bottom">
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
    </StyledAuth>
  );
};

export default Auth;
