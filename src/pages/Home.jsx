import SearchBar from "../components/SearchBar.jsx";
import ItemList from "../components/ItemList.jsx";

export default function Home({ items, favoriteItems, toggleFavorite }) {
  function handleSearch(searchText) {
    console.log(searchText);
  }

  return (
    <div>
      <h1 className="flex justify-center items-center m-5">Cat Search Website</h1>
      <SearchBar onSearch={handleSearch} />
      <ItemList items={items}
      favoriteItems={favoriteItems}
      toggleFavorite={toggleFavorite} />
    </div>
  );
}
