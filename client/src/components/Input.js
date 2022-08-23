import StyledInput from "./styles/Input.styled";

const Input = ({
  value,
  changeHandler,
  name,
  type,
  disabled,
  placeholder,
  labelText,
}) => {
  return (
    <StyledInput>
      {labelText && <label htmlFor={name}>{labelText}</label>}
      <input
        disabled={disabled}
        value={value}
        name={name}
        onChange={changeHandler}
        type={type || "text"}
        placeholder={placeholder}
      />
    </StyledInput>
  );
};

export default Input;
