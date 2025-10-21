import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/articles/10/0")
      .then((res) => {
        setPosts(res.data || []);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setError("Gagal mengambil data artikel");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Artikel</h1>
      {posts.length === 0 ? (
        <p>Tidak ada artikel.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="p-4 border rounded">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.category}</p>
              <p className="mt-2 text-sm text-gray-800">
                {post.content.slice(0, 200)}...
              </p>
              <p className="text-xs text-gray-500">Created: {post.created_date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
