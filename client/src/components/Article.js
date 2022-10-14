import moment from 'moment'
import StyledArticle from "./styles/Article.styled";
import { Category } from '../components'
import { useNavigate } from "react-router-dom";

const Article = ({ author, category, createdAt, image, title, _id, description }) => {
  const navigate = useNavigate()
  const parsedDescr = JSON.parse(description)

  const articleDescr = parsedDescr.blocks.map((item) => {
    const { text, type } = item
    if (!type.startsWith('header')) return text
  })

  return (
    <StyledArticle onClick={() => navigate(`/articles/${_id}`)}>
      <div className="top">
        <img src={image} alt={title} />
      </div>
      <div className="middle">
        <Category color={category.color} name={category.title} />
        <h3>{title}</h3>
        <p className="descr">{articleDescr.join('').substring(0,200)}</p>
      </div>
      <div className="bottom">
        <div className="creator">
          <p>{author.name}</p>
          <p>{moment(createdAt).fromNow()}</p>
        </div>
        <a className="link" href="/"> Read more</a>
      </div>
    </StyledArticle>
  );
};

export default Article;
