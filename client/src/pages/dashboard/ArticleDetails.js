import { useParams } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { Editor, EditorState, convertFromRaw } from "draft-js";
import ArticleDetailsStyled from "../../components/styles/ArticleDetails.styled";

const ArticleDetails = () => {
  const { id } = useParams();
  const { articles } = useAppContext();
  const articleDetails = articles.filter((item) => item._id === id);

  return articleDetails.map((item) => {
    const contentState = convertFromRaw(JSON.parse(item.description));
    const editorState = EditorState.createWithContent(contentState);

    return (
      <ArticleDetailsStyled key={item.title}>
        <div className="content">
          <h1 className="title">{item.title}</h1>
          <figure>
            <img src={item.image} alt="" />
          </figure>
          <Editor editorState={editorState} readOnly={true} />
        </div>

        <aside>
          <h3>Oleksandr Harashenko</h3>
          <p>3 min ago</p>
        </aside>
      </ArticleDetailsStyled>
    );
  });
};

export default ArticleDetails;
