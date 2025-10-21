import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = () => {
    fetch("http://localhost:8080/articles/10/0")
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(err => console.error(err));
  };

  const deleteArticle = (id) => {
    if (!window.confirm("Are you sure to delete?")) return;
    fetch(`http://localhost:8080/article/${id}`, { method: "DELETE" })
      .then(() => fetchArticles())
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <strong>{article.title}</strong>{" "}
            <Link to={`/edit/${article.id}`}>Edit</Link>{" "}
            <button onClick={() => deleteArticle(article.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
