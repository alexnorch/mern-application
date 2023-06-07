import React from "react";

interface IProps {
  placeholder?: string;
  value: string;
  name: string;
  data: { title: string; _id: number }[];
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Select: React.FC<IProps> = ({
  value,
  data,
  changeHandler,
  name,
  placeholder,
}) => {
  return (
    <div placeholder name={name} onChange={changeHandler} value={value}>
      {data.length === 0 && (
        <option selected>Please create category on profile section</option>
      )}
      {data.map((item) => (
        <option key={item._id} value={item.title}>
          {item.title}
        </option>
      ))}
    </div>
  );
};

export default Select;
