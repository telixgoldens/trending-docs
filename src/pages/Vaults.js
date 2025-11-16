import React from "react";
import { Link } from "react-router-dom";
import "../styles/DocContent.css";

export default function Vaults() {
  return (
    <div className="doc-page">
      <h1>Smart Contracts & Vaults</h1>
      <p>
        This section covers all smart contracts powering the Trending Markets protocol.
        Click on any contract to learn how it works and how to integrate it.
      </p>

      <div className="contracts-grid">
        <Link to="/contracts/marketfactory">MarketFactory</Link>
        <Link to="/contracts/binarymarket">BinaryMarket</Link>
        <Link to="/contracts/minimalforwarder">MinimalForwarder</Link>
        <Link to="/contracts/oraclemanager">OracleManager</Link>
        <Link to="/contracts/aggregatorvault">AggregatorVault</Link>
        <Link to="/contracts/liquidityvault">LiquidityVault</Link>
        <Link to="/contracts/smartaccount">Smart Account & Gas</Link>
      </div>
    </div>
  );
}
