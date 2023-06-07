import { AiOutlineUpload } from "react-icons/ai";

const FileUploader = ({ labelText, name, changeHandler, value }) => {
  return (
    <>
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
    </>
  );
};

export default FileUploader;
