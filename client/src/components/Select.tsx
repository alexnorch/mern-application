import React from "react";
import StyledSelect from "./styles/Select.styled";

interface IProps {
  value: string;
  name: string;
  data: { title: string; _id: number }[];
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Select: React.FC<IProps> = ({ value, data, changeHandler, name }) => {
  return (
    <StyledSelect
      placeholder
      name={name}
      onChange={changeHandler}
      value={value}
    >
      {data.length === 0 && (
        <option selected>Please create category on profile section</option>
      )}
      {data.map((item) => (
        <option key={item._id} value={item.title}>
          {item.title}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
