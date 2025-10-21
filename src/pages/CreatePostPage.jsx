import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("draft");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/article", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, category, status }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Gagal menyimpan artikel");
        return res.json();
      })
      .then(() => {
        alert("Artikel berhasil disimpan!");
        navigate("/");
      })
      .catch((err) => alert("Error: " + err.message));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tambah Artikel</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Judul:</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block">Konten:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block">Kategori:</label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block">Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="publish">Publish</option>
            <option value="draft">Draft</option>
            <option value="thrash">Thrash</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}

export default CreatePostPage;
