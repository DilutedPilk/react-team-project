import ItemList from "../components/ItemList.jsx";

export default function Home({ items, favoriteItems, toggleFavorite }) {
  return (
    <div className="home">
      <ItemList
        items={items}
        favoriteItems={favoriteItems}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}
