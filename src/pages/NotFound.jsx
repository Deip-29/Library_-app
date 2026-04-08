import { useLocation, Link } from "react-router-dom";

export default function NotFound() {
  const loc = useLocation();
  return (
    <div className="container">
      <h1>404</h1>
      <p>{loc.pathname}</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}