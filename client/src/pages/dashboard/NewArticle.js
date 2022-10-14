import { useState } from "react";
import useRichEditor from "../../hooks/useRichEditor";
import { useAppContext } from "../../context/AppContext";
import { EditorState, ContentState } from 'draft-js'

// Components
import StyledNewArticle from "../../components/styles/NewArticle.styled";
import { Input, Select, Alert, MyEditor } from "../../components";

const initialValues = {
  title: "",
  image: "",
  category: "",
};

const NewArticle = () => {
  const [userValues, setUserValues] = useState(initialValues);
  const { addNewArticle, showAlert, user } = useAppContext();
  const {
    editorState,
    setEditorState,
    handleKeyCommand,
    mapKeyToEditorCommand,
    toggleBlockType,
    toggleInlineStyle,
    getBlockStyle,
    convertData,
    inlineStyles,
    blockTypes,
  } = useRichEditor();

  // Create function onChangeHandler in helpers folder
  // Create function onChangeHandler in helpers folder
  // Create function onChangeHandler in helpers folder
  // Create function onChangeHandler in helpers folder
  // Create function onChangeHandler in helpers folder

  const onChangeHandler = (e) => {
    setUserValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const editorData = editorState.getCurrentContent();
    const stringData = await convertData(editorData);
    const newState = EditorState.push(editorState, ContentState.createFromText(''));

    userValues.description = stringData;

    addNewArticle(userValues)
    setUserValues(initialValues)
    setEditorState(newState)
  };

  return (
    <StyledNewArticle>
      {showAlert && <Alert />}
      <form>
        <Input
          value={userValues.title}
          name="title"
          changeHandler={onChangeHandler}
          placeholder="Title"
        />
        <Input
          value={userValues.image}
          name="image"
          changeHandler={onChangeHandler}
          placeholder="Image"
        />
        <Select
          name="category"
          value={userValues.category}
          changeHandler={onChangeHandler}
          data={user.categories}
        />
        <MyEditor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          mapKeyToEditorCommand={mapKeyToEditorCommand}
          toggleBlockType={toggleBlockType}
          toggleInlineStyle={toggleInlineStyle}
          getBlockStyle={getBlockStyle}
          inlineStyles={inlineStyles}
          blockTypes={blockTypes}
          setEditorState={setEditorState}
        />
        <button onClick={onSubmit} className="btn">
          Submit
        </button>
      </form>
    </StyledNewArticle>
  );
};

export default NewArticle;
