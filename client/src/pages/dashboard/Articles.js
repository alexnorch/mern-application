import StyledCategories from "../../components/styles/Categories.styled";
import { Category, Articles as ArticleContainer, Search } from "../../components";

// DUMMY DATA
import { categories, articles } from "../../data";

const Articles = () => {
  return (
    <>
      <Search />
      <StyledCategories>
        {categories.map((item) => (
          <Category name={item.name} color={item.color} />
        ))}
      </StyledCategories>
      <ArticleContainer data={articles} />
    </>
  );
};

export default Articles;
