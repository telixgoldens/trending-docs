import React from "react";
import "../styles/DocContent.css";

export default function BinaryMarket() {
  return (
    <div className="doc-page">
      <h2>BinaryMarket</h2>
      <p>
        Each <strong>BinaryMarket</strong> represents an individual prediction market with two possible outcomes: YES or NO.
      </p>
      <ul>
        <li>Users can buy YES or NO tokens based on their prediction.</li>
        <li>The market tracks total volume and token distribution.</li>
        <li>Market resolution happens at the predefined timestamp using an oracle.</li>
      </ul>
      <p>
        Beginner tip: Check volume and probability percentages to make informed predictions.
      </p>
      <div className="image-placeholder">[Insert BinaryMarket Example]</div>
    </div>
  );
}
