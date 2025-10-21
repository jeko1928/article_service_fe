import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    status: "draft",
  });

  useEffect(() => {
    fetch(`http://localhost:8080/article/${id}`)
      .then((res) => res.json())
      .then((data) => setForm(data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/article/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Edit Artikel</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="publish">Publish</option>
          <option value="draft">Draft</option>
          <option value="thrash">Thrash</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default EditPostPage;
