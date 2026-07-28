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
      className="mx-auto flex w-full max-w-xl gap-3 rounded-2xl bg-white p-3 shadow-lg"
    >
      <input
        type="text"
        placeholder="Search a cat"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="flex-1 rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-purple-400 focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-xl bg-purple-500 px-6 py-3 font-medium text-white hover:bg-purple-600"
      >
        Search
      </button>
    </form>
  );
}
