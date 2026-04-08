import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="card" data-cat={book.category}>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>⭐ {book.rating}</p>

      <Link to={`/details/${book.id}`}>View Details →</Link>
    </div>
  );
}