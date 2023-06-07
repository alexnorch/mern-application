import React from "react";
import { GoSearch } from "react-icons/go";

const Search: React.FC = () => {
  return (
    <div>
      <input type="text" />
      <span>
        <GoSearch />
      </span>
    </div>
  );
};

export default Search;
