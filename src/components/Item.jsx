import { useNavigate } from "react-router";

export default function Item({ item, favoriteItems, toggleFavorite }) {
  const navigate = useNavigate();
  const isFavorite = favoriteItems?.some((fav) => fav.id === item.id);

  return (
    <div
      className="item-card"
      onClick={() => navigate(`/items/${item.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/items/${item.id}`)}
      className="flex items-center text-center p-10"
    >
      <img className="w-3xl rounded-xl" src={item.thumbnail} alt={item.title} />
      <div className="flex-col p-10">
        <h3>{item.title}</h3>
        <br />
        <p>{item.description}</p>
        <br />
        <button
          className="bg-rose-300 p-5 rounded-xl hover:bg-rose-500 hover:text-white"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(item);
          }}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}