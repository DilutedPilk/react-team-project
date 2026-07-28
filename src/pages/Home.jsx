import SearchBar from "../components/SearchBar.jsx";
import ItemList from "../components/ItemList.jsx";

export default function Home() {
  function handleSearch(searchText) {
    console.log(searchText);
  }

  return (
    <div>
      <h1>Cat Search Website</h1>
      <SearchBar onSearch={handleSearch} />
      <ItemList items={items} />
    </div>
  );
}
