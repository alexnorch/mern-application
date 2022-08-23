import StyledSearch from "./styles/Search.styled";
import { GoSearch } from "react-icons/go";

const Search = () => {
  return (
    <StyledSearch>
      <input type="text" />
      <span>
        <GoSearch />
      </span>
    </StyledSearch>
  );
};

export default Search;
