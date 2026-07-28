import SearchBar from "../components/SearchBar.jsx";
import ItemList from "../components/ItemList.jsx";

export default function Home({ items, favoriteItems, toggleFavorite }) {
  function handleSearch(searchText) {
    console.log(searchText);
  }

  return (
    <div className="p-6">
      <h1 className="text-center text-4xl mb-2">Cat Search Website</h1>
      <SearchBar onSearch={handleSearch} />
        <ItemList
          items={items}
          favoriteItems={favoriteItems}
          toggleFavorite={toggleFavorite}
        />
    </div>
  );
}
