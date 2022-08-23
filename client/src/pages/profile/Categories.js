import styled from "styled-components";
import StyledCategories from "../../components/styles/Categories.styled";
import { categories } from "../../data";

import { Input, Category } from "../../components";

const Categories = () => {
  return (
    <>
      <h3>My categories</h3>
      <StyledCategories>
        {categories.map((item) => (
          <Category name={item.name} color={item.color} />
        ))}
      </StyledCategories>
      <h3>Create new category</h3>
      <StyledForm>
        <Input labelText="Title" placeholder="Type the title of the category" />
        <Input labelText="Color" placeholder="Type the color of the category" />
        <button type="submit" className="btn">
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

export default Categories;
