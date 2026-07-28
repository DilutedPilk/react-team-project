import Item from "./Item.jsx";

export default function ItemList({ items, favoriteItems, toggleFavorite }) {
  if (!items || items.length === 0) {
    return <p className="empty-message">No items found.</p>;
  }

  return (
    <div className="item-list">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          favoriteItems={favoriteItems}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
