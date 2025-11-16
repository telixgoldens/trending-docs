import React from "react";

export default function Home() {
  return (
    <div className="doc-page">
      <h1>Trending Markets Docs</h1>
      <p>Smart Intel is your way to financial freedom.</p>

      <section>
        <h2>Overview</h2>
        <p>
          Trending Markets is a decentralized prediction market platform on BNB Chain.
          Users can create and trade binary markets, track trending markets, and
          interact with vaults. This documentation guides you through all
          aspects of the platform—from contracts to frontend usage.
        </p>
      </section>

      <section>
        <h2>Key Features</h2>
        <ul>
          <li>Binary prediction markets with real-time trading</li>
          <li>Trending markets dashboard</li>
          <li>MarketFactory & BinaryMarket contracts</li>
          <li>Aggregator and Liquidity Vaults</li>
          <li>Easy-to-use frontend interface</li>
        </ul>
      </section>

      <section>
        <h2>Getting Started</h2>
        <p>
          Use the sidebar to navigate through Trending Markets, Vaults,
          Frontend guide, and learn about the smart contracts powering the
          platform.
        </p>
      </section>
    </div>
  );
}
