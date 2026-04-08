
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <h2>📚 Library</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/books">Browse</Link>
        <Link to="/add">Add Book</Link>
      </div>
    </div>
  );
}