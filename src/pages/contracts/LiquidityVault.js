import React from "react";
import liquidityVault from "../../assets/liquidityvault.png"
import "../../styles/DocContent.css";

export default function LiquidityVault() {
  return (
    <div className="doc-page">
      <h2>LiquidityVault</h2>
      <p>
        The <strong>LiquidityVault</strong> is where market liquidity is held and managed.
      </p>
      <ul>
        <li>Provides liquidity for users buying and selling prediction tokens.</li>
        <li>Ensures stable prices and low slippage.</li>
        <li>Works with AggregatorVault for optimal fund management.</li>
      </ul>
      <div className="image-placeholder"><img src={liquidityVault} alt="" className="img-logo"/></div>
    </div>
  );
}
