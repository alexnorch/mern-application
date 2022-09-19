import StyledArticle from "./styles/Article.styled";
import { useNavigate } from "react-router-dom";

// { title, image, id, author, createdAt }

const Article = ({ author, category, createdAt, description, image, title, _id }) => {
  const navigate = useNavigate()

  return (
    <StyledArticle 
    onClick={() => navigate(`/articles/${_id}`)}
    >
      <div className="picture">
        <img src={image} alt={title} />
      </div>
      <div className="description">
        <h3>{title}</h3>
        <span className="divider"></span>
        <p>Created by {author.name}</p>
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
