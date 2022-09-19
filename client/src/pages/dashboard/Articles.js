import StyledCategories from "../../components/styles/Categories.styled";
import {
  Category,
  Articles as ArticleContainer,
  Search,
} from "../../components";
import { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";

// DUMMY DATA
import { categories } from "../../data";

const Articles = () => {
  const { getArticles, articles, isLoading } = useAppContext();

  useEffect(() => {
    getArticles();
  }, []);

  // Loading....
  return (
    <>
      <Search />
      <StyledCategories>
        {categories.map((item) => (
          <Category key={item.name} name={item.name} color={item.color} />
        ))}
      </StyledCategories>
      {isLoading && <p>Spiner</p>}
      {articles.length <= 0 && "There is no created articles"}
      {articles.length > 0 && <ArticleContainer data={articles} />}
    </>
  );
};

export default Articles;
