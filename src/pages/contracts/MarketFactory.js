import React from "react";
import marketFactory from "../../assets/marketfactory.png"
import "../../styles/DocContent.css";

export default function MarketFactory() {
  return (
    <div className="doc-page">
      <h2>MarketFactory</h2>
      <p>
        The <strong>MarketFactory</strong> contract is responsible for creating new markets on Smart Intel. 
        Each market is deployed as a separate <strong>BinaryMarket</strong> contract.
      </p>
      <ul>
        <li>Deploys markets with specified question, options, and resolution timestamp.</li>
        <li>Ensures all markets follow a standard template and logic.</li>
        <li>Works with the <strong>MinimalForwarder</strong> for gasless transactions.</li>
      </ul>
      <p>
        Beginner tip: You interact with MarketFactory mostly via the frontend when creating new prediction markets.
      </p>
      <div className="image-placeholder"><img src={marketFactory} alt="" className="img-logo"/></div>
    </div>
  );
}
