import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    desc: "",
    rating: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.author || !form.category) {
      alert("Please fill all fields");
      return;
    }

    dispatch(addBook({ ...form, id: Date.now() }));
    navigate("/books");
  };

  return (
    <div className="container">
      <h1>Add Book</h1>

      <form onSubmit={handleSubmit}>
        <input placeholder="Title" onChange={(e) => setForm({...form, title: e.target.value})}/>
        <input placeholder="Author" onChange={(e) => setForm({...form, author: e.target.value})}/>
        <input placeholder="Category" onChange={(e) => setForm({...form, category: e.target.value})}/>
        <input placeholder="Description" onChange={(e) => setForm({...form, desc: e.target.value})}/>
        <input placeholder="Rating" onChange={(e) => setForm({...form, rating: e.target.value})}/>

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}