import React, { useEffect, useState } from "react";

function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/articles/10/0")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch articles");
        return res.json();
      })
      .then(data => {
        console.log("Data dari backend:", data);
        setArticles(data);
      })
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Artikel</h1>
      {articles.length === 0 ? (
        <p>Tidak ada artikel ditemukan.</p>
      ) : (
        <ul className="space-y-3">
          {articles.map(article => (
            <li key={article.id} className="border p-3 rounded shadow-sm">
              <h2 className="font-bold text-lg">{article.title}</h2>
              <p className="text-gray-600">{article.category}</p>
              <p className="text-sm text-gray-500">{article.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
