import React from "react";
import StyledCategories from "./styles/Categories.styled";
import Category from "./Category";
import { useAppContext } from "../context/AppContext";

const Categories = () => {
  const { user } = useAppContext();

  return (
    <StyledCategories>
      {!user.categories &&
        "There is no available categories. Please create one on the profile section"}
      {user.categories?.map((item) => (
        <Category key={item._id} name={item.title} color={item.color} />
      ))}
    </StyledCategories>
  );
};

export default Categories;
