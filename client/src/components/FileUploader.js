import { AiOutlineUpload } from "react-icons/ai";
import StyledUploader from "./styles/FileUploader.styled";

const FileUploader = ({ labelText, name, changeHandler, value }) => {
  return (
    <StyledUploader>
      <p>{labelText}</p>
      <label htmlFor={name}>
        <AiOutlineUpload />
        Choose image
      </label>
      <input
        onChange={changeHandler}
        value={value}
        id={name}
        name={name}
        type="file"
      />
    </StyledUploader>
  );
};

export default FileUploader;
