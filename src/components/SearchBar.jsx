import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  function handleClick() {
    onSearch(searchText);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search a cat"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
