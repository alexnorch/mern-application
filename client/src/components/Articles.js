import Article from "./Article";
import StyledArticles from "./styles/Articles.styled";

const Articles = ({ data }) => {
  return (
    <StyledArticles>
      {data.map((item) => <Article key={item._id} {...item}/> )}
    </StyledArticles>
  );
};

export default Articles;
