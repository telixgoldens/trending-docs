import React from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./Themetoggle";
import "../styles/Sidebar.css";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Trending Markets", path: "/trending" },
    { name: "Vaults & Contracts", path: "/vaults" },
    { name: "Frontend Guide", path: "/frontend" },
  ];

  return (
    <div className="docs-sidebar">
      <div className="logo">
        <img src="/logo.png" alt="Smart Intel Logo" />
        <h2>Smart Intel Docs</h2>
      </div>

      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? "active" : ""}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <ThemeToggle />
    </div>
  );
}
