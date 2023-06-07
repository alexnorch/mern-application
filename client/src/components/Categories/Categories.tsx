import React from "react";
import Category from "../Category/Category.tsx";
import { useAppContext } from "../../context/AppContext";

const Categories = () => {
  const { user } = useAppContext();

  return (
    <>
      {!user.categories &&
        "There is no available categories. Please create one on the profile section"}
      {user.categories?.map((item) => (
        <Category key={item._id} name={item.title} color={item.color} />
      ))}
    </>
  );
};

export default Categories;
