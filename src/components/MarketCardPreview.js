import React from "react";
import "../styles/MarketCardPreview.css";

export default function MarketCardPreview({ question = "Sample Market", volume = 1200 }) {
  return (
    <div className="market-card-preview">
      <h3>{question}</h3>
      <p>Volume: {volume}</p>
      <div className="gauge-placeholder">YES 60% / NO 40%</div>
    </div>
  );
}
