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
     
        <Link to="/books">⬅ Back</Link>
      </div>
    </div>
  );
} 