import React from "react";
import styles from "./Input.module.css";

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
    <div className={styles.wrapper}>
      {labelText && (
        <label className={styles.label} htmlFor={name}>
          {labelText}
        </label>
      )}
      <input
        className={styles.input}
        disabled={disabled}
        value={value}
        name={name}
        onChange={changeHandler}
        type={type || "text"}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
