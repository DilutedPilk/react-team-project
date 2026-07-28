import ItemList from "../components/ItemList.jsx";

export default function Favorites({ favoriteItems, toggleFavorite }) {
  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-center text-3xl font-bold text-rose-400 mb-8">Your Favorites</h2>
      <ItemList
        items={favoriteItems}
        favoriteItems={favoriteItems}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}