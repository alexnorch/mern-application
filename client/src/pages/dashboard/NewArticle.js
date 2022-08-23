import { useState } from "react";

// Components
import StyledNewArticle from "../../components/styles/NewArticle.styled";
import { Input, Select, Editor } from "../../components";

const categories = ["Sport", "Programming", "Education"];

const NewArticle = () => {
  const [category, setCategory] = useState("");
  return (
    <StyledNewArticle>
      <form>
        <Input type="text" placeholder="Title" />
        <Input type="text" placeholder="Image" />
        <Select
          value={category}
          changeHandler={(e) => setCategory(e.target.value)}
          data={categories}
        />
        <Editor />
        <button className="btn">Create</button>
      </form>
    </StyledNewArticle>
  );
};

export default NewArticle;
