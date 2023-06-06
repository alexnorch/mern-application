import styled from "styled-components";
import { useState } from "react";
import { Input } from "../../components";

const initialValues = { oldPassword: "", newPassword: "", confirmPassword: "" };

const Password = () => {
  const [values, setValues] = useState(initialValues);

  const onChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setValues(initialValues);
  };
  return (
    <StyledForm>
      <Input
        value={values.oldPassword}
        changeHandler={onChange}
        name="oldPassword"
        type="password"
        labelText="Old password"
        placeholder="Please enter your old password"
      />
      <Input
        value={values.newPassword}
        changeHandler={onChange}
        name="newPassword"
        labelText="New password"
        placeholder="Please enter your new password"
      />
      <Input
        value={values.confirmPassword}
        changeHandler={onChange}
        name="confirmPassword"
        labelText="Confirm password"
        placeholder="Please confirm new password"
      />
      <button onClick={onSubmit} type="submit" className="btn">
        Change
      </button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  max-width: 600px;
  width: 100%;
`;

export default Password;
