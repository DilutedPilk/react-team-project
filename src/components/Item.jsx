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
    >
      <img src={item.thumbnail} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(item);
        }}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}