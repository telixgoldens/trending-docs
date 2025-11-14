import React from "react";
import "../styles/DocContent.css";

export default function AggregatorVault() {
  return (
    <div className="doc-page">
      <h2>AggregatorVault</h2>
      <p>
        <strong>AggregatorVault</strong> manages user funds across multiple markets for streamlined liquidity.
      </p>
      <ul>
        <li>Aggregates user deposits.</li>
        <li>Distributes tokens to relevant BinaryMarkets.</li>
        <li>Ensures security and proper accounting.</li>
      </ul>
      <div className="image-placeholder">[Insert AggregatorVault Diagram]</div>
    </div>
  );
}
