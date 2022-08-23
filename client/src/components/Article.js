import StyledArticle from "./styles/Article.styled";
import { useNavigate } from "react-router-dom";

const Article = ({ title, description, image, id }) => {
  const navigate = useNavigate()
  return (
    <StyledArticle onClick={() => navigate(`/articles/${id}`)}>
      <div className="picture">
        <img src={image} alt={title} />
      </div>
      <div className="description">
        <h3>{title}</h3>
        <span className="divider"></span>
        <p className="text">{description}</p>
        <div className="bottom">
          <a className="link" href="/">
            Read more
          </a>
        </div>
      </div>
    </StyledArticle>
  );
};

export default Article;
