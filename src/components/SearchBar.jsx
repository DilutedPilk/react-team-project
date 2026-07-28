import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  function handleClick(e) {
    e.preventDefault();
    onSearch(searchText);
  }

  return (
    <form
      onSubmit={handleClick}
      className="flex items-center justify-center gap-4 p-6"
    >
      <input
        type="text"
        placeholder="Search a cat"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="rounded-xl border p-3 w-80"
      />
      <button
        type="submit"
        className="bg-rose-300 p-3 rounded-xl hover:bg-rose-500 hover:text-white"
      >
        Search
      </button>
    </form>
  );
}
