
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Details() {
  const { id } = useParams();
  const book = useSelector((s) =>
    s.books.list.find((b) => b.id == id)
  );

  if (!book) return <h2>Not found</h2>;

  return (
    <div className="container">
      <div className="details">
        <h1>{book.title}</h1>
        <p><b>Author:</b> {book.author}</p>
        <p><b>Category:</b> {book.category}</p>
        <p>{book.desc}</p>
        <p>⭐ {book.rating}</p>

        <Link to="/books">⬅ Back</Link>
      </div>
    </div>
  );
} 