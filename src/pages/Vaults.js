import React from "react";

export default function Vaults() {
  return (
    <div>
      <h1>Smart Contracts & Vaults</h1>

      <section>
        <h2>MarketFactory</h2>
        <p>
          The MarketFactory contract allows users to create new BinaryMarket
          contracts with minimal gas usage. It integrates with the MinimalForwarder for meta-transactions.
        </p>
      </section>

      <section>
        <h2>BinaryMarket</h2>
        <p>
          Each BinaryMarket represents a single prediction market with YES/NO
          outcomes. It tracks liquidity, user positions, and market resolution.
        </p>
      </section>

      <section>
        <h2>MinimalForwarder</h2>
        <p>
          Enables gasless transactions so users can interact with markets without paying gas directly.
        </p>
      </section>

      <section>
        <h2>OracleManager</h2>
        <p>
          Provides external data feeds to resolve markets accurately and securely.
        </p>
      </section>

      <section>
        <h2>AggregatorVault & LiquidityVault</h2>
        <p>
          AggregatorVault collects trading fees and rewards, while LiquidityVault
          manages token reserves for each market.
        </p>
      </section>
    </div>
  );
}
