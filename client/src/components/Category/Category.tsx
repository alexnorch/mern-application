import React from "react";

interface CategoryProps {
  name: String;
  color: string;
}

const Category: React.FC<CategoryProps> = ({ name, color }) => {
  return <div>{name}</div>;
};

export default Category;
