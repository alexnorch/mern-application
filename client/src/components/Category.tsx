import React from "react";
import StyledCategory from "./styles/Category.styled";

interface CategoryProps {
  name: String;
  color: string;
}

const Category: React.FC<CategoryProps> = ({ name, color }) => {
  return <StyledCategory palette={color}>{name}</StyledCategory>;
};

export default Category;
