import { useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import styled from "styled-components";

import Input from "../../../components/UI/Input/Input.tsx";
import Alert from "../../../components/UI/Alert/Alert";
import Categories from "../../../components/Categories/Categories.tsx";

const MyCategories = () => {
  const [userCategory, setUserCategory] = useState({ title: "", color: "" });
  const { addCategory, showAlert } = useAppContext();

  return (
    <>
      {showAlert && <Alert />}
      <h3>My categories</h3>
      <Categories />
      <h3>Create new category</h3>
      <StyledForm>
        <Input
          changeHandler={(e) =>
            setUserCategory((state) => ({
              ...state,
              [e.target.name]: e.target.value,
            }))
          }
          value={userCategory.title}
          name="title"
          labelText="Title"
          placeholder="Type the title of the category"
        />
        <Input
          changeHandler={(e) =>
            setUserCategory((state) => ({
              ...state,
              [e.target.name]: e.target.value,
            }))
          }
          value={userCategory.color}
          name="color"
          labelText="Color"
          placeholder="Type the color of the category"
        />
        <button
          onClick={() => addCategory(userCategory)}
          type="button"
          className="btn"
        >
          Create
        </button>
      </StyledForm>
    </>
  );
};

const StyledForm = styled.form`
  max-width: 600px;
  width: 100%;
`;

export default MyCategories;
