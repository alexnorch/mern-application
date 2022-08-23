import StyledCategory from "./styles/Category.styled";

const Category = ({ name, color }) => {
  return <StyledCategory palette={color}>{name}</StyledCategory>;
};

export default Category;
