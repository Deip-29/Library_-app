import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

export default function Home() {
  const books = useSelector((state) => state.books.list);

  const categories = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Fantasy",
    "Self-Help",
    "Programming",
    "Finance",
    "History"
  ];

  // Show top 6 books as popular
  const popularBooks = books.slice(0, 6);

  return (
    <div className="container">
      
      {/* TITLE */}
      <h1>📚 Welcome to Your Library</h1>

      {/* CATEGORIES */}
      <div className="categories">
        {categories.map((cat) => (
          <Link key={cat} to={`/books/${cat}`} className="cat">
            {cat}
          </Link>
        ))}
      </div>

      {/* POPULAR BOOKS */}
      <h2 style={{ marginBottom: "15px" }}>🔥 Popular Books</h2>

      <div className="grid">
        {popularBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

    </div>
  );
}
