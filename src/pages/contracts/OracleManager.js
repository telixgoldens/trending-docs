import React from "react";
import oralcleMan from "../../assets/oraclemanager.png"
import "../../styles/DocContent.css";

export default function OracleManager() {
  return (
    <div className="doc-page">
      <h2>OracleManager</h2>
      <p>
        The <strong>OracleManager</strong> contract fetches real-world data to determine market outcomes.
      </p>
      <ul>
        <li>Integrates with external data sources (oracles) for reliable results.</li>
        <li>Ensures fair resolution of prediction markets.</li>
        <li>Supports multiple oracle providers for redundancy and accuracy.</li>
      </ul>
      <div className="image-placeholder"><img src={oralcleMan} alt="" className="img-logo"/></div>
    </div>
  );
}
