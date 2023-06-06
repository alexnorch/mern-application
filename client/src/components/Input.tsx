import React from "react";
import StyledInput from "./styles/Input.styled";

interface Props {
  value: string;
  name: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  labelText?: string;
}

const Input: React.FC<Props> = ({
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
