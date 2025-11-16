import React from "react";
import "../../styles/DocContent.css";

export default function SmartAccount() {
  return (
    <div className="doc-page">
      <h2>Smart Account & Gas</h2>
      <p>
        Smart Intel uses <strong>Smart Accounts</strong> to simplify user interactions with the blockchain.
      </p>

      <ul>
        <li>Users do not need to manually hold BNB for gas fees.</li>
        <li>The Smart Account handles signing transactions on behalf of the user.</li>
        <li>Supports multiple operations in one transaction through a secure relayer.</li>
      </ul>

      <h3>Key Features</h3>
      <ul>
        <li>Seamless onboarding for new users.</li>
        <li>Integrated with MinimalForwarder for gasless transactions.</li>
        <li>Works with all prediction market operations like creating or trading markets.</li>
      </ul>

      <p>
        Beginner tip: When connected via Smart Account, you can focus on trading and predictions without worrying about transaction fees.
      </p>

      <div className="image-placeholder">
        [Insert Smart Account Connection Diagram]
      </div>
    </div>
  );
}
