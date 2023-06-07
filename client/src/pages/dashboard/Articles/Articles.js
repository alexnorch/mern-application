// Components
import Categories from "../../../components/Articles/Articles";
import Search from "../../../components/Search/Search.tsx";
import ArticlesList from "../../../components/Articles/Articles";

const Articles = () => {
  return (
    <>
      <Search />
      <Categories />
      <ArticlesList />
    </>
  );
};

export default Articles;
