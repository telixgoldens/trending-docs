import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import TrendingMarkets from "./pages/TrendingMarkets";
import Frontend from "./pages/Frontend";
import Vaults from "./pages/Vaults";
import Installation from "./pages/Installation";
import NotFound from "./pages/NotFound";
import MarketFactory from "./pages/contracts/MarketFactory";
import BinaryMarket from "./pages/contracts/BinaryMarket";
import MinimalForwarder from "./pages/contracts/MinimalForwarder";
import OracleManager from "./pages/contracts/OracleManager";
import AggregatorVault from "./pages/contracts/AggregatorVault";
import LiquidityVault from "./pages/contracts/LiquidityVault";
import SmartAccount from "./pages/contracts/SmartAccount";
import "./styles/App.css"

export default function App() {
  return (
    <Router>
      <div className="docs-app">
        <Sidebar />
        <main className="docs-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<TrendingMarkets />} />
            <Route path="/frontend" element={<Frontend />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/vaults" element={<Vaults />} />
            <Route path="/contracts/marketfactory" element={<MarketFactory />} />
            <Route path="/contracts/binarymarket" element={<BinaryMarket />} />
            <Route path="/contracts/minimalforwarder" element={<MinimalForwarder />} />
            <Route path="/contracts/oraclemanager" element={<OracleManager />} />
            <Route path="/contracts/aggregatorvault" element={<AggregatorVault />} />
            <Route path="/contracts/liquidityvault" element={<LiquidityVault />} />
            <Route path="/contracts/smartaccount" element={<SmartAccount />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
