const API_BASE_URL = "http://localhost:8000"; // ganti sesuai backend kamu

export async function getArticles(limit = 10, offset = 0) {
  const res = await fetch(`${API_BASE_URL}/article/${limit}/${offset}`);
  return await res.json();
}

export async function getArticleById(id) {
  const res = await fetch(`${API_BASE_URL}/article/${id}`);
  return await res.json();
}

export async function createArticle(article) {
  const res = await fetch(`${API_BASE_URL}/article/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(article),
  });
  return await res.json();
}

export async function updateArticle(id, article) {
  const res = await fetch(`${API_BASE_URL}/article/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(article),
  });
  return await res.json();
}

export async function deleteArticle(id) {
  const res = await fetch(`${API_BASE_URL}/article/${id}`, { method: "DELETE" });
  return await res.json();
}
