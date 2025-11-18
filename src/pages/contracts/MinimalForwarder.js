import React from "react";
import minimalForward from "../../assets/minimal.png"
import "../../styles/DocContent.css";

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
      <div className="image-placeholder"><img src={minimalForward} alt="" className="img-logo"/></div>
    </div>
  );
}
