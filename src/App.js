import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import TrendingMarkets from "./pages/TrendingMarkets";
import Vaults from "./pages/Vaults";
import Frontend from "./pages/Frontend";
import NotFound from "./pages/NotFound";
import "./styles/App.css";

export default function App() {
  return (
    <Router>
      <div className="docs-app">
        <Sidebar />
        <main className="docs-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<TrendingMarkets />} />
            <Route path="/vaults" element={<Vaults />} />
            <Route path="/frontend" element={<Frontend />} />
            <Route path="/notfound" element={<NotFound/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}
