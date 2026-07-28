import { useParams, Link } from "react-router";

export default function ItemDetails() {
  const { id } = useParams();

  return (
    <div className="item-details">
      <h2>Item Details</h2>
      <p>Viewing item with ID: {id}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
