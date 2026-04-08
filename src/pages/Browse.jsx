import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import BookCard from "../components/BookCard";

export default function Browse() {
  const { category } = useParams();
  const books = useSelector((s) => s.books.list);
  const [search, setSearch] = useState("");

  const filtered = books.filter((b) =>
    (!category || b.category === category) &&
    (b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="container">
      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filtered.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
    </div>
  );
}