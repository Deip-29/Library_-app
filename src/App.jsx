import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Details from "./pages/Details";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

function Layout({ children }) {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="main">{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/books" element={<Layout><Browse /></Layout>} />
        <Route path="/books/:category" element={<Layout><Browse /></Layout>} />
        <Route path="/details/:id" element={<Layout><Details /></Layout>} />
        <Route path="/add" element={<Layout><AddBook /></Layout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}