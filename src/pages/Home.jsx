import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import ItemList from "../components/ItemList.jsx";

export default function Home({ items, favoriteItems, toggleFavorite }) {
  const [searchText, setSearchText] = useState("");

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="p-6">
      <SearchBar onSearch={setSearchText} />
      <ItemList
        items={filteredItems}
        favoriteItems={favoriteItems}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}