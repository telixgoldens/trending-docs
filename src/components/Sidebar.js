import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle"
import "../styles/Sidebar.css";

export default function Sidebar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState({
    contracts: true, 
  });

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Trending Markets", path: "/trending" },

    {
      name: "Vaults & Contracts",
      id: "contracts",
      subItems: [
        { name: "MarketFactory", path: "/contracts/marketfactory" },
        { name: "BinaryMarket", path: "/contracts/binarymarket" },
        { name: "MinimalForwarder", path: "/contracts/minimalforwarder" },
        { name: "OracleManager", path: "/contracts/oraclemanager" },
        { name: "AggregatorVault", path: "/contracts/aggregatorvault" },
        { name: "LiquidityVault", path: "/contracts/liquidityvault" },
        { name: "Smart Account & Gas", path: "/contracts/smartaccount" },
      ],
    },

    { name: "Frontend Guide", path: "/frontend" },
    { name: "Installation", path: "/installation" },
  ];

  const toggle = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="docs-sidebar">
      <div className="logo-header">
        <img src="/logo.png" alt="Docs Logo" className="logo"/>
        <h2 className="logo-text">Trending Markets Docs</h2>
      </div>

      <nav>
        {menuItems.map((item) => {
          const isActive =
            location.pathname === item.path ||
            (item.subItems &&
              item.subItems.some((s) => s.path === location.pathname));

          return (
            <div key={item.name} className="sidebar-item">
              {item.subItems ? (
                <>
                  <div
                    className="sidebar-group"
                    onClick={() => toggle(item.id)}
                  >
                    {item.name} {expanded[item.id] ? "▾" : "▸"}
                  </div>

                  {expanded[item.id] && (
                    <div className="sidebar-subitems">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className={
                            location.pathname === sub.path ? "active" : ""
                          }
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link className={isActive ? "active" : ""} to={item.path}>
                  {item.name}
                </Link>
              )}
            </div>
          );
        })}
      </nav>

      <ThemeToggle />
    </div>
  );
}
