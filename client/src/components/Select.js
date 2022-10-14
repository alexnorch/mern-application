import StyledSelect from "./styles/Select.styled";

const Select = ({ value, data, changeHandler, name }) => {
  return (
    <StyledSelect placeholder name={name} onChange={changeHandler} value={value}>
      {data.length === 0 && <option selected>Please create category on profile section</option>}
      {data.map((item) => (
        <option
          key={item._id} 
          value={item.title}>
          {item.title}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
