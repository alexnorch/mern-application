import StyledSelect from "./styles/Select.styled";

const Select = ({ value, data, changeHandler }) => {
  return (
    <StyledSelect onChange={changeHandler} value={value}>
      {data.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
