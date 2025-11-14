import React from "react";
import "../styles/DocContent.css";

export default function BNB() {
  return (
    <div className="doc-page">
      <h2>BNB</h2>
      <p>
        BNB (Binance Coin) is the native cryptocurrency of the Binance ecosystem. On Smart Intel, BNB is used for:
      </p>
      <ul>
        <li>Paying transaction fees for creating or trading markets.</li>
        <li>Providing liquidity to certain prediction markets.</li>
        <li>Facilitating fast and low-cost on-chain interactions.</li>
      </ul>
      <p>
        Always make sure your wallet is connected to the correct network (Binance Testnet for testing or mainnet for production).
      </p>
      <div className="image-placeholder">[Insert BNB Logo or Diagram]</div>
    </div>
  );
}
