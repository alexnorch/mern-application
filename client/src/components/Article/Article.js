import moment from "moment";
import { Category } from "..";
import { useNavigate } from "react-router-dom";

import styles from "./Article.module.css";

const Article = ({
  author,
  category,
  createdAt,
  image,
  title,
  _id,
  description,
}) => {
  const navigate = useNavigate();
  const parsedDescr = JSON.parse(description);

  const articleDescr = parsedDescr.blocks.map((item) => {
    const { text, type } = item;
    if (!type.startsWith("header")) return text;
  });

  return (
    <div
      className={styles.article}
      onClick={() => navigate(`/articles/${_id}`)}
    >
      <div className={styles["article-top"]}>
        <img src={image} alt={title} />
      </div>
      <div className={styles["article-body"]}>
        <Category color={category.color} name={category.title} />
        <h3>{title}</h3>
        <p className="descr">{articleDescr.join("").substring(0, 200)}</p>
      </div>
      <div className="bottom">
        <div className="creator">
          <p>{author.name}</p>
          <p>{moment(createdAt).fromNow()}</p>
        </div>
        <a className="link" href="/">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Article;
