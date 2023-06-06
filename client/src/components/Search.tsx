import React from "react";
import StyledSearch from "./styles/Search.styled";
import { GoSearch } from "react-icons/go";

const Search: React.FC = () => {
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
