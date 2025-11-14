import React from "react";
import "../styles/DocContent.css";

export default function MinimalForwarder() {
  return (
    <div className="doc-page">
      <h2>MinimalForwarder</h2>
      <p>
        <strong>MinimalForwarder</strong> allows for gasless transactions on Smart Intel.
      </p>
      <ul>
        <li>Users can interact with contracts without holding BNB.</li>
        <li>Relays signed messages to the blockchain through a trusted forwarder.</li>
        <li>Reduces friction for new users who may not yet have native tokens.</li>
      </ul>
      <div className="image-placeholder">[Insert MinimalForwarder Diagram]</div>
    </div>
  );
}
