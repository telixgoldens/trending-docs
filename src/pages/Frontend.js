import React from "react";

export default function Frontend() {
  return (
    <div className="doc-page">
      <h1>Frontend Guide</h1>

      <section>
        <h2>Overview</h2>
        <p>
          The frontend is built with React and interacts directly with smart
          contracts on BNB Chain. Key components:
        </p>
        <ul>
          <li><strong>Dashboard:</strong> Shows trending markets and overall stats</li>
          <li><strong>Market List:</strong> Filter and browse markets</li>
          <li><strong>Market Detail:</strong> Trade and view market analytics</li>
          <li><strong>Create Market:</strong> Launch a new prediction market</li>
        </ul>
      </section>

      <section>
        <h2>User Interaction</h2>
        <p>
          Users can connect wallets, trade YES/NO tokens, add markets to watchlist,
          and view trading history. Timeframe filters and volume stats are
          visible for each market.
        </p>
      </section>

      <section>
        <h2>Tips</h2>
        <ul>
          <li>Always verify your network is BNB Testnet/Mainnet</li>
          <li>Watch trending markets to catch early liquidity</li>
          <li>Use the dashboard for quick insights</li>
        </ul>
      </section>
    </div>
  );
}
