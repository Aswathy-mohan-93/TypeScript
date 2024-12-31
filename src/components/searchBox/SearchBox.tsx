import React, { useState } from "react";
import "./SearchBox.css";

interface SearchBoxprps {
  didStartSearch: (searchText: String) => void;
}

const SearchBox: React.FC<SearchBoxprps> = ({ didStartSearch }) => {
  const [searchText, setSearchText] = useState("");

  const searchTextChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    didStartSearch(searchText);
  };

  const searchButtonClicked = () => { didStartSearch(searchText); };

  return (
    <div className="search-box">
      <input
        type="text"
        value={searchText}
        onChange={searchTextChanged}
        placeholder="Search by title, author, or genre..."
      />
      <button onClick={searchButtonClicked}>Search</button>
    </div>
  );
};

export default SearchBox;
