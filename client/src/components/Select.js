import StyledSelect from "./styles/Select.styled";

const Select = ({ value, data, changeHandler, name }) => {
  return (
    <StyledSelect name={name} onChange={changeHandler} value={value}>
      {data.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
