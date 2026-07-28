import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import ItemList from "../components/ItemList.jsx";
import { ThemeContext } from "../context.js";

import { useContext, createContext } from "react";

export default function Home({ items, favoriteItems, toggleFavorite }) {

  const { theme, toggleTheme } = useContext(ThemeContext);

  function handleSearch(searchText) {
    console.log(searchText);
  }

  return (
    <div className={theme == 'light'? 'bg-white':'bg-mist-600 text-white'}>
      <h1 className="flex justify-center items-center m-5">Cat Search Website</h1>
      <SearchBar onSearch={handleSearch} />
      <ItemList items={items}
      favoriteItems={favoriteItems}
      toggleFavorite={toggleFavorite} />
    </div>
  );
}