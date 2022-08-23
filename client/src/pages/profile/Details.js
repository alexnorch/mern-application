import styled from "styled-components";

import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { Alert, FileUploader, Input } from '../../components'

// const getFilename = (fullPath) => fullPath.replace(/^.*[\\\/]/, '');

const Details = () => {
  const { user, updateUser, showAlert } = useAppContext();
  const [userValues, setUserValues] = useState({
    name: user.name,
    email: user.email,
    location: user.location || "Your location",
    photo: null
  });

  const onChange = (e) => {
    const { name, value, files } = e.target;

    if (!files) {
      setUserValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setUserValues((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateUser(userValues);
  };

  return (
    <StyledForm>
      {/* <InputGroup labelText="Role" value={user.role} disabled />
      <InputGroup labelText="Your ID" value={user._id} disabled />
      <div className="divider"></div> */}
      {showAlert && <Alert />}
      <FileUploader
        changeHandler={onChange}
        labelText="Your Image"
        name="photo"
      />
      <Input
        changeHandler={onChange}
        name="name"
        labelText="Your name"
        value={userValues.name}
      />
      <Input
        changeHandler={onChange}
        name="email"
        labelText="Your email"
        type="email"
        value={userValues.email}
        placeholder="Please enter your email"
      />
      <Input
        changeHandler={onChange}
        name="location"
        labelText="Your location"
        value={userValues.location}
        placeholder="Please enter your location"
      />
      <button type="submit" onClick={onSubmit} className="btn">
        Change
      </button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  max-width: 600px;
  width: 100%;
`;

export default Details;
