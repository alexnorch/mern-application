import Article from "./Article";
import StyledArticles from "./styles/Articles.styled";

const Articles = ({ data }) => {
  return (
    <StyledArticles>
      {data.map((item, index) => (
        <Article
          id={index}
          title={item.title}
          image={item.image}
          description={item.description}
        />
      ))}
    </StyledArticles>
  );
};

export default Articles;
