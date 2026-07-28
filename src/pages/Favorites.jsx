import ItemList from "../components/ItemList.jsx";

export default function Favorites({ favoriteItems, toggleFavorite }) {
  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      <ItemList
        items={favoriteItems}
        favoriteItems={favoriteItems}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}