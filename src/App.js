import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePostPage from "./pages/CreatePostPage";
import EditPostPage from "./pages/EditPostPage";
import "./index.css";

export default function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-50 min-h-screen">
        {/* 🔸 Navbar */}
        <nav className="bg-white shadow-md fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              My Dashboard
            </Link>
            <ul className="flex space-x-8 text-gray-700 font-medium">
              <li className="hover:text-blue-600">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to="/create">Tambah Artikel</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* 🔹 Routing Section */}
        <main className="pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePostPage />} />
            <Route path="/edit/:id" element={<EditPostPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
